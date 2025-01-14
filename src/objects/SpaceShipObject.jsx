import React from 'react';
import ship from "./../images/space_ship_5.png";

export default function SpaceShipObject( scale, start ) {
  let animation = start;
  return (
    <>
      <img 
        src={ship}
        className={animation}
        alt="Space ship"
        style={{ position: "absolute", bottom: 50, zIndex: 1, width: 100 }}
      />
    </>
  )
}
