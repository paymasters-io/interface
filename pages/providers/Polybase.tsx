import { PolybaseProvider, AuthProvider } from "@polybase/react";
import { Polybase } from "@polybase/client";
import { FC, PropsWithChildren } from "react";

const PolybaseReactProvider: FC<PropsWithChildren<any>> = ({ children }) => {
  const polybase = new Polybase({
    defaultNamespace: "pk/0xfba5b3ed147d9295a081d189b2ade667b547effa0610b31dc55469b17a8c77617658497aedfdf30cd8139d4604df06978622e887bd2d86bc30469feef1664e72/pmt-waitlist",
  });

  return <PolybaseProvider polybase={polybase}>{children}</PolybaseProvider>;
};

export default PolybaseReactProvider;
