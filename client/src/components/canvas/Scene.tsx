//@ts-nocheck
import { Stage, Container, Sprite, Text } from "@pixi/react";
import React from "react";

interface Draggable extends PIXI.DisplayObject {
  data: PIXI.InteractionData | null;
  dragging: boolean;
}

export const Scene = ({ width, height }) => {
  const onDragStart = (event: PIXI.InteractionEvent) => {
    const sprite = event.currentTarget as Draggable;
    sprite.alpha = 0.5;
    sprite.data = event.data;
    sprite.dragging = true;
  };

  const onDragEnd = (event: PIXI.InteractionEvent) => {
    const sprite = event.currentTarget as Draggable;
    sprite.alpha = 1;
    sprite.dragging = false;
    sprite.data = null;
  };

  const onDragMove = (event: PIXI.InteractionEvent) => {
    const sprite = event.currentTarget as Draggable;
    if (sprite.dragging) {
      const newPosition = sprite.data!.getLocalPosition(sprite.parent);
      sprite.x = newPosition.x;
      sprite.y = newPosition.y;
    }
  };

  return (
    <Stage width={width} height={height}>
      <Sprite
        image="./img/nike.png"
        scale={0.15}
        x={width / 2}
        y={height / 2}
        anchor={0.5}
        interactive
        buttonMode
        pointerdown={onDragStart}
        pointerup={onDragEnd}
        pointerupoutside={onDragEnd}
        pointermove={onDragMove}
      />
      {/* <Sprite
        image="./img/nike.png"
        scale={0.2}
        x={width / 2}
        y={height / 2}
        anchor={{ x: 0.5, y: 0.5 }}
      /> */}
    </Stage>
  );
};
