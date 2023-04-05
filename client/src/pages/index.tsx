import { useEffect, useState } from "react";
import { Header } from "@/components/dom/Header";
import dynamic from "next/dynamic";
const Scene = dynamic(() =>
  import("@/components/canvas/Scene").then((mod) => mod.Scene)
);

export default function Page(props) {
  const [windowSize, setWindowSize] = useState([
    typeof window !== "undefined" ? window.innerWidth : null,
    typeof window !== "undefined" ? window.innerHeight : null,
  ]);
  const width = windowSize[0];
  const height = windowSize[1];

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  console.log(width, height);
  return (
    <>
      <Header title="PIXI.JS" info="IT'S DEMO" />
      <Scene width={width} height={height} />
    </>
  );
}

export async function getStaticProps() {
  return { props: { title: "SEJIN OH" } };
}
