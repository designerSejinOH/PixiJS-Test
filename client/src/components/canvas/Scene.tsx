import { Stage, Container, Sprite, Text, useTick } from "@pixi/react";
import React, { useState } from "react";

export const Scene = ({ width, height }) => {
  let i = 0;

  const Bunny = () => {
    // states
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [rotation, setRotation] = useState(0);

    // custom ticker
    useTick((delta) => {
      i += 0.05 * delta;

      setX(Math.sin(i) * 100);
      setY(Math.sin(i / 1.5) * 100);
      setRotation(-10 + Math.sin(i / 10 + Math.PI * 2) * 10);
    });

    return (
      <Sprite
        image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
        anchor={0.5}
        x={x}
        y={y}
        rotation={rotation}
      />
    );
  };

  return (
    <Stage
      width={width}
      height={height}
      options={{ autoDensity: true, backgroundColor: 0x01262a }}
    >
      <Container x={width / 2} y={height / 2}>
        <Bunny />
      </Container>
    </Stage>
  );
};
