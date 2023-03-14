import searchIcon from "public/assets/pm-icons/search.svg";
import clickIcon from "public/assets/pm-icons/ads_click.svg";
import exchangeIcon from "public/assets/pm-icons/component_exchange.svg";
import abstractSphere from "public/assets/pm-images/abstract-sphere.png";
import circles from "public/assets/pm-images/elipses.svg";

import Image from "next/image";

const FeaturesSection = () => {
  return (
    <section
      className="features-section site-section"
      role="region"
      aria-label="features-section"
    >
      <div className="wrapper">
        <div className="features-grid">
          <article className="feature-item" aria-label="feature item">
            <Image src={searchIcon} alt="Search Icon" />
            <h3 className="font-semibold text-xl">More visible than macro</h3>
            <p className="text-sm">
              Explore a wide range of Paymasters, find protocols with Paymaster
              support . Get more value when using dapps.
            </p>
          </article>
          <article className="feature-item" aria-label="feature item">
            <Image src={exchangeIcon} alt="Search Icon" />
            <h3 className="font-semibold text-xl">
              Much more than transactions{" "}
            </h3>
            <p className="text-sm">
              An aggregation of paymasters for users to have access to Ethereum
              protocols without incurring gas costs or unnecessary onboarding
              cost.
            </p>
          </article>
          <article className="feature-item" aria-label="feature item">
            <Image src={clickIcon} alt="Search Icon" />
            <h3 className="font-semibold text-xl">
              UX more superior than superior
            </h3>
            <p className="text-sm">
              Create custom paymasters that does what you want or targets a
              group or community without complexity. Craft innovative
              transaction flows for your users.
            </p>
          </article>
        </div>
        <div className="features-img-cont">
          <Image
            src={abstractSphere}
            width={300}
            height={300}
            alt="Abstract Sphere"
          />
          <div className="circles">
            <Image src={circles} width={300} height={300} alt="Circles" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
