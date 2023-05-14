import Header from "@/components/common/Header";
import "@/styles/globals.css";
import { height } from "@mui/system";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
