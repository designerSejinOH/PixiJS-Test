import { BlurFilter } from "pixi.js";
import { Stage, Container, Sprite, Text } from "@pixi/react";

export const Scene = ({ width, height }) => {
  return (
    <Stage width={width} height={height}>
      <Sprite
        image="https://pixijs.io/pixi-react/img/bunny.png"
        x={width / 2}
        y={height / 2}
        anchor={{ x: 0.5, y: 0.5 }}
      />
    </Stage>
  );
};
