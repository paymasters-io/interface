import { PolybaseProvider, AuthProvider } from "@polybase/react";
import { Polybase } from "@polybase/client";
import { FC, PropsWithChildren } from "react";

const PolybaseReactProvider: FC<PropsWithChildren<any>> = ({ children }) => {
  const polybase = new Polybase({
    defaultNamespace: "paymasters-io",
  });

  return <PolybaseProvider polybase={polybase}>{children}</PolybaseProvider>;
};

export default PolybaseReactProvider;
