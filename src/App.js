import React, {useState} from 'react';
import './App.css';
import Button from './components/Button';
import SpaceShipObject from './objects/SpaceShipObject';
import PlanetObject from './objects/PlanetObject';
import MoonObject from './objects/MoonObject';
// import Ship from './images/space_ship_3.png';
import Planet5 from './images/planets/planet_5.png';
import Moon from './images/planets/planet_3.png';
import PortalGun from './images/portal_gun.png';
import Portal from './images/portal.png';
import Title from './images/title.png';
import SpaceShip6 from './images/space_ships/space_ship_6.png';
import SpaceShip4 from './images/space_ships/space_ship_4.png';

function App() {
  const [shipAction, setShipAction] = useState();
  
  const launchShip = () => {
    setShipAction("launch");
    console.log("launch click");
  };

  const landShip = () => {
    setShipAction("land");
    console.log("land click");
  };

  return (
    <div className="App">
      <div className="space">
        <button className={"portal-gun"} onClick={launchShip}>
          <img src={PortalGun} alt="Portal gun" />
          <div>
            <label>Launch</label>
          </div>
        </button>
        {/* <Button 
          text="Launch" 
          btnClass={"btn-danger"}
        /> */}

        <section className="env">
          <SpaceShipObject scale={10} launch={shipAction} />
          <PlanetObject planet={Planet5} />
          <MoonObject moon={Moon} />
        </section>

        <button className={"portal"} onClick={landShip}>
          <img src={Portal} alt="Portal gun" />
          <div>
            <label>Land</label>
          </div>
        </button>
        {/* <Button 
          text="Land" 
          btnClass={"btn-info"} 
        /> */}

        <img src={Title} alt="title" className="title" />
        <img src={SpaceShip6} alt="space ship 6" className="spaceShip6" />
        <img src={SpaceShip4} alt="space ship 4" className="spaceShip4" />
      </div>
    </div>
  );
}

export default App;
