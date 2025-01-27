import React from 'react';

export default function SpaceShipObject({ changeShip, scale, launch}) {
  let animation = launch;
  return (
    <>
      <img 
        src={changeShip}
        alt="space ship"
        style={{ width: scale }}
        className={`spaceShip ${animation}`}
      />
    </>
  )
}
