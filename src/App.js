import './App.css';
import Button from './components/Button';
import SpaceShipObject from './objects/SpaceShipObject';
// import SpaceShip from "./images/space_ship_8.svg";

function App() {
  return (
    <div className="App">
      <div className="space">
        <Button 
          text="Launch" 
          btnClass={"btn-danger"} 
        />
        <section className="env">
          {/* <EarthObject /> */}
          {/* <MoonObject /> */}
          <SpaceShipObject scale={10}/>
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
