import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";
import Header from "./components/Header";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <>
    <ClerkProvider {...pageProps}>
      <Head>
        <title>La Filosofia in un Disegno</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-[#e9e58a] to-[#eaec95]">
        <Header />
        <Component {...pageProps} />
      </main>
    </ClerkProvider>
  </>
};

export default api.withTRPC(MyApp);
