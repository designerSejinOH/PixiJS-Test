import { useRef } from "react";
import dynamic from "next/dynamic";
import Header from "@/config";
import "@/styles/index.css";
import Layout from "@/components/dom/Layout";

export default function App({ Component, pageProps = { title: "SEJIN OH" } }) {
  const ref = useRef();
  return (
    <>
      <Header title={pageProps.title} />
      <Layout ref={ref}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
