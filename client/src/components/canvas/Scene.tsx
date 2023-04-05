import { Stage, Sprite } from "@pixi/react";
import { EventSystem } from "@pixi/events";
import React, { useState } from "react";
import * as PIXI from "pixi.js";

interface Draggable extends PIXI.DisplayObject {
  //@ts-ignore
  data: PIXI.InteractionData | null;
  dragging: boolean;
}

export const Scene = ({ width, height }) => {
  const onDragStart = (event) => {
    const sprite = event.currentTarget as Draggable;
    sprite.alpha = 0.5;
    sprite.data = event.data;
    sprite.dragging = true;
  };

  //@ts-ignore
  const onDragEnd = (event: PIXI.InteractionEvent) => {
    const sprite = event.currentTarget as Draggable;
    sprite.alpha = 1;
    sprite.dragging = false;
    sprite.data = null;
  };

  //@ts-ignore
  const onDragMove = (event: PIXI.InteractionEvent) => {
    const sprite = event.currentTarget as Draggable;
    if (sprite.dragging) {
      const newPosition = sprite.data!.getLocalPosition(sprite.parent);
      sprite.x = newPosition.x;
      sprite.y = newPosition.y;
    }
  };

  return (
    <Stage
      width={width}
      height={height}
      options={{ autoDensity: true, backgroundColor: 0xffffff }}
      onMount={(app) => {
        app.renderer.addSystem(EventSystem, "events2");
      }}
    >
      <Sprite
        image="./img/nike.png"
        x={width / 2}
        y={height / 2}
        scale={0.1}
        anchor={0.5}
        interactive={true}
        pointerdown={onDragStart}
        pointerup={onDragEnd}
        pointerupoutside={onDragEnd}
        pointermove={onDragMove}
      />
    </Stage>
  );
};
