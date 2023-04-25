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
    setSubmitted(false);
    setLoading(false);
    setError("");
  };

  const handleAddToWaitlist = async (email: string) => {
    const res = await polybase
      .collection<{ email: string }>("WaitList")
      .create([email]);
    return res.data;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (reason === "waitlist") {
      try {
        setLoading(true);

        const submitData = await handleAddToWaitlist(email);

        updateSubmit(submitData);
        setLoading(false);
        setSubmitted(true);
      } catch (error: unknown) {
        console.log({ error });
        if (
          (error as Error).message !== "record id already exists in collection"
        ) {
          setError("Something went wrong, please try again later");
          return;
        }
        setLoading(false);
        setTimeout(() => {
          resetForm();
        }, 3000);
      }
      window.open(
        "https://app.deform.cc/form/4c204027-c44b-4cce-bb5c-5b108e8e5318",
        "_blank"
      );
    }
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
          : "Enter your email to join the waitlist"}
      </div>
      <div className="form-group">
        {!submitted ? (
          <div className="m-auto space-y-4">
            <div className=" inline-flex gap-4">
              <div className="form-control">
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
              </div>
              <button
                type="submit"
                disabled={loading || submitted}
                className="cta alt"
              >
                {!submitted
                  ? !loading
                    ? reason === "subscribe"
                      ? "Subscribe"
                      : "Join Waitlist"
                    : "..."
                  : "Submitted"}
              </button>
            </div>
            <div>{error && <span className="text-red-400">{error}</span>}</div>
          </div>
        ) : (
          <span className="text-green-400">Success!</span>
        )}
      </div>
    </form>
  );
};

export default EmailForm;
