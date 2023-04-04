import { BlurFilter } from "pixi.js";
import { Stage, Container, Sprite, Text } from "@pixi/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Header } from "@/components/dom/Header";

export default function Page(props) {
  const [windowSize, setWindowSize] = useState([
    typeof window !== "undefined" ? window.innerWidth : null,
    typeof window !== "undefined" ? window.innerHeight : null,
  ]);
  const width = windowSize[0];
  const height = windowSize[1];

  const blurFilter = useMemo(() => new BlurFilter(4), []);

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
      <Stage width={width} height={height}>
        <Sprite
          image="https://pixijs.io/pixi-react/img/bunny.png"
          x={width / 2}
          y={height / 2}
          anchor={{ x: 0.5, y: 0.5 }}
        />
      </Stage>
    </>
  );
}

export async function getStaticProps() {
  return { props: { title: "SEJIN OH" } };
}
