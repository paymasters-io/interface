import zkSynk from "public/assets/partners/zkSynk.png";
import StrakNet from "public/assets/partners/StrakNet.png";
import Braavos from "public/assets/partners/Braavos.png";
import Argrent from "public/assets/partners/Argrent.png";
import Chainlink from "public/assets/partners/Chainlink.png";
import OutlierVC from "public/assets/partners/Outlier VC.png";
import DeveloperDao from "public/assets/partners/Developer Dao.png";
import Image from "next/image";

const PartnersSection = () => {
  const partners = [
    {
      name: "zkSynk",
      logo: zkSynk,
    },
    {
      name: "StrakNet",
      logo: StrakNet,
    },
    {
      name: "Braavos",
      logo: Braavos,
    },
    {
      name: "Argrent",
      logo: Argrent,
    },
    {
      name: "Chainlink",
      logo: Chainlink,
    },
    {
      name: "Outlier VC",
      logo: OutlierVC,
    },
    {
      name: "Developer Dao",
      logo: DeveloperDao,
    },
  ];

  return (
    <section className="site-section partners-section" role="region" aria-label="partners section">
      <div className="wrapper">
        <header className="section-header">
          <h2 className="font-semibold text-5xl text-center">Our Partners</h2>
        </header>
        <ul className="partners-list" aria-label="partner list">
          {partners.map((partner, i) => (
            <li key={i} className="partner-item">
              <div className="img-cont flex items-center justify-center w-12 h-w-12">
                <Image
                  src={partner.logo}
                  width={64}
                  height={64}
                  alt={partner.name}
                />
              </div>
              <h3 className="font-medium text-lg">{partner.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PartnersSection;
