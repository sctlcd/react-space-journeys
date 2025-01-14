import './App.css';
import Button from './components/Button';
import SpaceShipObject from './objects/SpaceShipObject';
import EarthObject from './objects/EarthObject';
import MoonObject from './objects/MoonObject';
// import Ship from './images/space_ship_3.png';
import Earth from './images/earth.png';
import Moon from './images/moon.png';

function App() {
  return (
    <div className="App">
      <div className="space">
        <Button 
          text="Launch" 
          btnClass={"btn-danger"} 
        />
        <section className="env">
          <SpaceShipObject scale={10} />
          <EarthObject earth={Earth} />
          <MoonObject moon={Moon} />
          
        </section>
        <Button 
          text="Land" 
          btnClass={"btn-info"} 
        />
      </div>
    </div>
  );
}

export default App;
