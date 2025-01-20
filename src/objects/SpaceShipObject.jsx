import React from 'react';
// import ship from "./../images/space_ships/space_ship_1.png";

export default function SpaceShipObject({ changeShip, scale, launch}) {
  let animation = launch;
  return (
    <>
      <img 
        src={changeShip}
        alt="space ship"
        style={{ position: "absolute", bottom: 160 , zIndex: 1, width: scale }}
        className={animation}
      />
    </>
  )
}
