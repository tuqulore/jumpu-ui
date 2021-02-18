import type { AppProps } from "next/app";
import "styles/globals.scss";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
