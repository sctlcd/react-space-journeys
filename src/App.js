import React, {useState, useEffect} from 'react';
import './App.css';
// import Button from './components/Button';
import SpaceShipObject from './objects/SpaceShipObject';
import PlanetObject from './objects/PlanetObject';
import MoonObject from './objects/MoonObject';
import SpaceShip from './images/space_ships/space_ship_1.png';
import Planet5 from './images/planets/planet_5.png';
import Moon from './images/planets/planet_3.png';
import PortalGun from './images/portal_gun.png';
import Portal from './images/portal.png';
import Title from './images/title.png';
import SpaceShip6 from './images/space_ships/space_ship_6.png';
import SpaceShip4 from './images/space_ships/space_ship_4.png';
import SpaceShip3 from './images/space_ships/space_ship_3.png';
import Alien1 from './images/aliens/alien_1.png';
import Alien2 from './images/aliens/alien_2.png';
import Alien3 from './images/aliens/alien_3.png';
import Rick from './images/rick.png';

function App() {
  // const [shipAction, setShipAction] = useState();
  // const [transformScale, setTransformScale] = useState(175);
  const [shipProps, setShipProps] = useState({
    action: "",
    scale: "150px",
  });
  
  const launchShip = () => {
    // setShipAction("launch");
    // setTransformScale(75);
    setShipProps({ action: "launch", scale: 75 });
  };

  const [shipType, setShipType] = useState(SpaceShip);
  const landShip = () => {
    // setShipAction("land");
    // setTransformScale(175);
    setShipProps({ action: "land", scale: 150 });
  };

  useEffect(() => {
    if (shipProps.action === "land") {
      setShipType(Rick);
      setTimeout(() => {
        setShipType(SpaceShip);
      }, 4500);
    }
    if (shipProps.action === "launch") {
      setShipType(SpaceShip);
    }
  }, [shipProps.action]);

  return (
    <div className="App">
      <div className="space">
        <button className={"portalGun"} type="button" onClick={launchShip}>
          <img src={PortalGun} alt="Portal gun" />
          <div>
            <label>Launch</label>
          </div>
        </button>
        {/* <Button
          text="Launch" 
          btnClass={"portalGun"}
          icon={}
          onClick={launchShip}
        /> */}

        <section className="env">
          {/* <SpaceShipObject scale={transformScale} launch={shipAction} /> */}
          <SpaceShipObject 
            changeShip={shipType} 
            scale={shipProps.scale} 
            launch={shipProps.action} 
            className={"spaceShip"} 
          />
          <PlanetObject planet={Planet5} />
          <MoonObject moon={Moon} />
        </section>

        <button className={"portal"} type="button" onClick={landShip}>
          <img src={Portal} alt="Portal gun" />
          <div>
            <label>Land</label>
          </div>
        </button>
        {/* <Button
          text="Land"
          btnClass={"portal"}
          icon={}
          onClick={landShip}
        /> */}

        <img src={Title} alt="title" className="title" />
        <img src={SpaceShip6} alt="space ship 6" className="spaceShip6" />
        <img src={SpaceShip4} alt="space ship 4" className="spaceShip4" />
        <img src={SpaceShip3} alt="space ship 3" className="spaceShip3" />
        <img src={Alien1} alt="alien 1" className="alien1" />
        <img src={Alien2} alt="alien 2" className="alien2" />
        <img src={Alien3} alt="alien 3" className="alien3" />
      </div>
    </div>
  );
}

export default App;
