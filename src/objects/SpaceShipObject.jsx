import React from 'react';
import ship from "./../images/space_ships/space_ship_2.png";

export default function SpaceShipObject( scale, start ) {
  let animation = start;

  return (
    <>
      <img 
        src={ship}
        className={"spaceship"}
        alt="space ship"
      />
    </>
  )
}
