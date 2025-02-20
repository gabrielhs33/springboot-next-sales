import type { AppProps } from "next/app";
import 'bulma/css/bulma.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}


