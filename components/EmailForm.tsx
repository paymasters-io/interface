import { useEffect, useState } from "react";

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

  const resetForm = () => {
    setEmail("");
    setVisitorName("");
    setNameStepActive(false);
    setSubmitted(false);
    setLoading(false);
    setError("");
  };

  const handleAddToWaitlist = async (data: { name: string; email: string }) => {
    try {
      const res = await fetch("/api/addToWaitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) throw Error(json.message);

      console.log(json);

      return json;
    } catch (error: any) {
      console.log({
        error,
      });

      throw Error(error.message);
    }
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
        } catch (error: any) {
          console.log({ error });

          setError("Something went wrong, please try again later");
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
      <div className="form-header">
        {reason === "subscribe"
          ? "Subscribe to our news letter"
          : "Enter your email to get join the waitlist"}
      </div>
      <div className="form-group">
        {!submitted ? (
          <>
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
              {error && <span className="text-red">{error}</span>}
            </div>
            <button
              disabled={loading || submitted}
              className={`cta ${nameStepActive ? "" : "alt"}`}
            >
              {!submitted
                ? !loading
                  ? reason === "subscribe"
                    ? "Subscribe"
                    : "Join Waitlist"
                  : "..."
                : "Submitted"}
            </button>
          </>
        ) : (
          <span className="text-green-400">Success!</span>
        )}
      </div>
    </form>
  );
};

export default EmailForm;
