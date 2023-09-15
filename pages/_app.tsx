import type { AppProps } from "next/app";
import "../styles/globals.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { CeloAlfajoresTestnet } from "@thirdweb-dev/chains";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "CeloAlfajoresTestnet";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
    activeChain={CeloAlfajoresTestnet}
    clientId="your-client-id"
  >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
