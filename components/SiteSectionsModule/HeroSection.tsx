import Image from "next/image";
import Link from "next/link";
import heroIllustration from "public/assets/pm-images/paymaster-hero-illustration.svg";
import EmailForm from "../EmailForm";
import dash1 from "public/assets/pm-images/dash (1).png";
import dash2 from "public/assets/pm-images/dash (2).png";

const HeroSection = () => {
  const handleUpdateWaitlist = (data: object) => {
    console.log(data);
  };

  return (
    <section
      className="hero-section site-section !pb-0 border-b border-paymasters-dark-700"
      role="region"
      aria-label="hero section"
    >
      <div className="wrapper w-image">
        <div className="hero-content section-content">
          <h1 className="font-semibold text-5xl">
            EiIP4337 Paymaster Management Solution
          </h1>
          <p>Enabling a web3 economy powered by gasless applications.</p>
          {/* <Link href="/">
            <button className="cta">Launch App</button>
          </Link> */}
          <EmailForm
            className="waitlist-form max-w-md"
            reason="waitlist"
            updateSubmit={handleUpdateWaitlist}
            name="waitlist form"
          />
        </div>
        <div className="hero-img-cont section-img-cont">
          <Image src={heroIllustration} alt="Paymaster Hero Illustration" />
        </div>
      </div>
      <div className="mockup-cont img-cont relative pt-24 w-full h-[32rem] overflow-hidden">
        <Image
          src={dash1}
          width={600}
          height={600}
          className="img1 absolute left-1/2 transform -translate-x-3/4 object-cover rounded-2xl shadow-2xl shadow-black/80"
          alt="dash image 1"
        />
        <Image
          src={dash2}
          width={600}
          height={600}
          className="img2 absolute left-1/2 transform -translate-x-1/3 translate-y-[calc((1/6)*100%)] object-cover shadow-2xl rounded-2xl shadow-black/80"
          alt="dash image 2"
        />
      </div>
    </section>
  );
};

export default HeroSection;
