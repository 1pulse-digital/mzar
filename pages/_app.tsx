import "../styles/globals.css";
import type {AppProps} from "next/app";
import {useRouter} from "next/router";
import {useEffect} from "react";
import * as gtag from "../lib/gtag";

function MyApp({Component, pageProps}: AppProps) {
  // tracking gtag start
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  // tracking gtag end

  return <Component {...pageProps} />;
}

export default MyApp;
