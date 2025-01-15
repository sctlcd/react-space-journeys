import './App.css';
import Button from './components/Button';
import SpaceShipObject from './objects/SpaceShipObject';
import EarthObject from './objects/EarthObject';
import MoonObject from './objects/MoonObject';
// import Ship from './images/space_ship_3.png';
import Earth from './images/earth.png';
import Moon from './images/moon.png';
import PortalGun from './images/portal_gun.png';
import Portal from './images/portal.png';
import Title from './images/title.png';
import SpaceShip6 from './images/space_ship_6.png';
import SpaceShip4 from './images/space_ship_4.png';

function App() {
  return (
    <div className="App">
      <div className="space">
        <button className={"portal-gun"}>
          <img src={PortalGun} alt="Portal gun"/>
          <div>
            <text>Launch</text>
          </div>
        </button>
        {/* <Button 
          text="Launch" 
          btnClass={"btn-danger"}
        /> */}

        <section className="env">
          <SpaceShipObject scale={10} />
          <EarthObject earth={Earth} />
          <MoonObject moon={Moon} />
        </section>

        <button className={"portal"}>
          <img src={Portal} alt="Portal gun"/>
          <div>
            <text>Land</text>
          </div>
        </button>
        {/* <Button 
          text="Land" 
          btnClass={"btn-info"} 
        /> */}

        <img src={Title} alt="title" className="title"/>
        <img src={SpaceShip6} alt="space ship 6" className="spaceShip6"/>
        <img src={SpaceShip4} alt="space ship 4" className="spaceShip4"/>
      </div>
    </div>
  );
}

export default App;
