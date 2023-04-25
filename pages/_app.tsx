import "@/styles/global.css";
import type { AppProps } from "next/app";

import DefaultLayout from "layouts/Default";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import PolybaseReactProvider from "./providers/Polybase";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  // Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <PolybaseReactProvider>
      {getLayout(<Component {...pageProps} />)}
    </PolybaseReactProvider>
  );
}
