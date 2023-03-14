import Head from "next/head";
import { ReactElement, useEffect, useState } from "react";
import DefaultLayout from "layouts/Default";
import HeroSection from "@/components/SiteSectionsModule/HeroSection";
import RebatesMiddleWareSection from "@/components/SiteSectionsModule/RebatesMiddleWareSection";
import FeaturesSection from "@/components/SiteSectionsModule/FeaturesSection";
import BuildSection from "@/components/SiteSectionsModule/BuildSection";
import PartnersSection from "@/components/SiteSectionsModule/PartnersSection";
import CTASection from "@/components/SiteSectionsModule/CTASection";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [showSections, setShowSections] = useState(false);

  useEffect(() => {
    // show sections if the route query is set to true
    if (router.query.showSections === "true") {
      setShowSections(true);
    }
  }, [router.query.showSections]);

  return (
    <>
      <Head>
        <title>Paymaster</title>
        <meta
          name="description"
          content="Paymaster is a possile new approach 
        to handling paymasters for wallets implementing Account Abstraction."
        />
        <meta
          name="og:description"
          content="Paymaster enables users to choose any paymaster 
         they are eligible to use without handling complex interactions. "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <main className="site-main">
        <HeroSection />
        {showSections && (
          <>
            <RebatesMiddleWareSection />
            <FeaturesSection />
            <div className="section-group">
              <BuildSection />
            </div>
            <PartnersSection />
            <CTASection />
          </>
        )}
      </main>
    </>
  );
}

Home.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};
