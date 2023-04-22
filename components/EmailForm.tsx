import { useEffect, useState } from "react";
import { usePolybase } from "@polybase/react";

const EmailForm = ({
  reason,
  updateSubmit,
  className,
  name,
}: {
  reason: string;
  updateSubmit: (value: object) => void;
  className?: string;
  name?: string;
}) => {
  const [email, setEmail] = useState("");
  const [visitorName, setVisitorName] = useState("");
  const [nameStepActive, setNameStepActive] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const polybase = usePolybase();

  const resetForm = () => {
    setEmail("");
    setVisitorName("");
    setNameStepActive(false);
    setSubmitted(false);
    setLoading(false);
    setError("");
  };

  const handleAddToWaitlist = async (data: { name: string; email: string }) => {
    const res = await polybase
      .collection<{ name: string; email: string }>("WaitList")
      .create([data.name, data.email]);
    return res.data;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (reason === "waitlist") {
      if (!nameStepActive) {
        setNameStepActive(true);
        return;
      } else {
        try {
          setLoading(true);

          const submitData = await handleAddToWaitlist({
            name: visitorName,
            email,
          });

          updateSubmit(submitData);
          setLoading(false);
          setSubmitted(true);
        } catch (error: unknown) {
          console.log({ error });
          (error as Error).message == "record id already exists in collection"
            ? setError("User already joined the waitlist.")
            : setError("Something went wrong, please try again later");
          setLoading(false);
          setTimeout(() => {
            resetForm();
          }, 3000);

          return;
        }
        return;
      }
    }

    updateSubmit({ email });
    setSubmitted(true);
  };

  useEffect(() => {
    if (reason === "subscribe") {
      if (submitted) {
        setEmail("");
        const timer = setTimeout(() => {
          setSubmitted(false);
        }, 3000);

        return () => clearTimeout(timer);
      }
    }
  }, [submitted]);

  return (
    <form
      onSubmit={handleSubmit}
      className={`newsletter-form ${className}`}
      role="form"
      aria-label={name || "newsletter form"}
    >
      <div className="form-header text-left">
        {reason === "subscribe"
          ? "Subscribe to our news letter"
          : nameStepActive && !submitted
          ? "Enter your Name"
          : "Enter your email to join the waitlist"}
      </div>
      <div className="form-group">
        {!submitted ? (
          <div className="m-auto space-y-4">
            <div className=" inline-flex gap-4">
              <div className="form-control">
                {!nameStepActive ? (
                  <input
                    id="email"
                    data-testid="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                    type="email"
                    placeholder="Enter your Email"
                    required
                  />
                ) : (
                  <input
                    id="name"
                    data-testid="name"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    className="form-input"
                    type="text"
                    placeholder="Enter your Name"
                    required
                  />
                )}
              </div>
              <button
                type="submit"
                disabled={loading || submitted}
                className={`cta ${nameStepActive ? "main" : "alt"}`}
              >
                {!submitted
                  ? !loading
                    ? reason === "subscribe"
                      ? "Subscribe"
                      : nameStepActive
                      ? "Join Waitlist"
                      : "Next"
                    : "..."
                  : "Submitted"}
              </button>
            </div>
            <div>{error && <span className="text-red">{error}</span>}</div>
          </div>
        ) : (
          <span className="text-green-400">Success!</span>
        )}
      </div>
    </form>
  );
};

export default EmailForm;
