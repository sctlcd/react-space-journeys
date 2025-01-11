import React from 'react'

export default function SpaceShipObject( changeShip, scale, start ) {
  let animation = start;
  return (
    <>
      <img 
        src={changeShip}
        className={animation}
        alt="Space ship"
        style={{ position: "absolute", bottom: 50, zIndex: 1, width: scale }}
      />
    </>
  )
}
