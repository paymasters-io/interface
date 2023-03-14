import Image from "next/image";
import rebatesIllustration from "public/assets/pm-images/rebates-middleware.svg";

const RebatesMiddleWareSection = () => {
  return (
    <section
      className="rebates-middleware-section site-section"
      role="region"
      aria-label="Rebates Middleware"
    >
      <div className="wrapper w-image">
        <div className="section-content">
          <h2 className="font-semibold text-5xl">Rebates Middleware</h2>
          <p>
            Loyalty programs are a way we know to give back to our most loyal
            users and with account abstraction, it is possible to create a
            standalone incentive system.
          </p>
          <p>
            Your users can earn a fraction of their transaction value each time
            they make a transaction.
          </p>
          <p>
            However building this system distinctively may incur additional
            miscellaneous. With paymasters, you can integrate chargebacks as a
            middleware.
          </p>
        </div>
        <div className="section-img-cont">
          <Image src={rebatesIllustration} alt="Rebates Illustration" />
        </div>
      </div>
    </section>
  );
};

export default RebatesMiddleWareSection;
