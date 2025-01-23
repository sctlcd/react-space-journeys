import React from 'react';

export default function SpaceShipObject({ changeShip, scale, launch}) {
  let animation = launch;
  return (
    <>
      <img 
        src={changeShip}
        alt="space ship"
        // style={{ position: "absolute", bottom: 0 , zIndex: 1, width: scale }}
        style={{ width: scale }}
        className={`spaceShip ${animation}`}
      />
    </>
  )
}
