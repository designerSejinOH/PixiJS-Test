import { Container, Stage, Sprite, Text, withFilters } from "@pixi/react";
import { EventSystem } from "@pixi/events";
import { OutlineFilter } from "@pixi/filter-outline";
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

  const Filters = withFilters(Container, {
    outline: OutlineFilter,
  });

  return (
    <Stage
      width={width}
      height={height}
      options={{ autoDensity: true, backgroundColor: 0xffffff }}
      onMount={(app) => {
        app.renderer.addSystem(EventSystem, "events2");
      }}
    >
      <Filters
        outline={{
          color: 0x000000,
          thickness: 2,
          // quality: 1,
          alpha: 1,
          resolution: 1,
        }}
      >
        <Sprite
          image="./img/nike.png"
          x={(width / 3) * 2}
          y={height / 2}
          scale={0.1}
          anchor={0.5}
          interactive={true}
          pointerdown={onDragStart}
          pointerup={onDragEnd}
          pointerupoutside={onDragEnd}
          pointermove={onDragMove}
        />
      </Filters>
      <Sprite
        image="./img/tv.png"
        x={width / 3}
        y={(height / 3) * 2}
        scale={0.09}
        anchor={0.5}
        interactive={true}
        pointerdown={onDragStart}
        pointerup={onDragEnd}
        pointerupoutside={onDragEnd}
        pointermove={onDragMove}
      />
      <Sprite
        image="./img/smile.png"
        x={width / 3}
        y={height / 3}
        scale={0.08}
        anchor={0.5}
        interactive={true}
        pointerdown={onDragStart}
        pointerup={onDragEnd}
        pointerupoutside={onDragEnd}
        pointermove={onDragMove}
      />
      <Text
        text="Hello World"
        anchor={0.5}
        x={width / 2}
        y={height / 2}
        interactive={true}
        pointerdown={onDragStart}
        pointerup={onDragEnd}
        pointerupoutside={onDragEnd}
        pointermove={onDragMove}
        style={
          new PIXI.TextStyle({
            align: "center",
            fontFamily: "Helvetica, sans-serif",
            fontSize: 50,
            fill: ["#ffffff", "#00ff99"], // gradient
            stroke: "#000000",
            strokeThickness: 1,
            letterSpacing: 20,
            wordWrap: true,
            wordWrapWidth: 440,
          })
        }
      />
    </Stage>
  );
};
