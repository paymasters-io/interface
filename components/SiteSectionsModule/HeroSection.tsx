import Image from "next/image";
import Link from "next/link";
import heroIllustration from "public/assets/pm-images/paymaster-hero-illustration.svg";
import EmailForm from "../EmailForm";

const HeroSection = () => {
  const handleUpdateWaitlist = (data: object) => {
    console.log(data);
  };

  return (
    <section className="hero-section site-section" role="region">
      <div className="wrapper w-image">
        <div className="hero-content section-content">
          <h1 className="font-semibold text-5xl">
            The only paymasters access infrastructure you will need
          </h1>
          <p>
            Using paymasters to simplify zk transactions and provide superior UX
            to dapps.
          </p>
          {/* <Link href="/">
            <button className="cta">Launch App</button>
          </Link> */}
          <EmailForm className="max-w-md" reason="waitlist" updateSubmit={handleUpdateWaitlist} />
        </div>
        <div className="hero-img-cont section-img-cont">
          <Image src={heroIllustration} alt="Paymaster Hero Illustration" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
