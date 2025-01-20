import React from 'react';

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
