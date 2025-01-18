import React from 'react';
import ship from "./../images/space_ships/space_ship_1.png";

export default function SpaceShipObject({scale, launch}) {
  let animation = launch;
  return (
    <>
      <img 
        src={ship}
        alt="space ship"
        style={{ position: "absolute", bottom: 160 , zIndex: 1, width: scale }}
        className={animation}
      />
    </>
  )
}
