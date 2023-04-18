import { AuthUserProvider } from "@/firebase/auth";
import "@/styles/globals.css";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
      <link rel="icon" href="/icon.png"/>
        <title>Todo App</title>
      </Head>
      <AuthUserProvider>
      <Toaster />
        <Component {...pageProps} />
      </AuthUserProvider>
    </>
  );
}
