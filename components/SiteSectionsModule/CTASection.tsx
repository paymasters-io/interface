import Image from "next/image";
import Link from "next/link";

import paymasterLogo from "public/assets/pm-logos/paymaster-logo.svg";

const CTASection = () => {
  return (
    <section
      className="cta-section site-section"
      role="region"
      aria-label="cta section"
    >
      <div className="wrapper">
        <header className="section-header py-32 w-image inverse">
          <div className="section-content">
            <h2 className="font-semibold text-4xl">
              Get started, explore and create Paymasters
            </h2>
            <Link href="/dev">
              <button className="cta dark">Launch App</button>
            </Link>
          </div>
          <div className="section-img-cont">
            <Image
              src={paymasterLogo}
              width={300}
              height={300}
              className="p-16"
              alt="paymaster logo"
            />
          </div>
        </header>
      </div>
    </section>
  );
};

export default CTASection;
