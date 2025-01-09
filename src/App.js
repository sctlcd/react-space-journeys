import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <div className="space">
        <Button 
          text="Launch" 
          btnClass={"btn-danger"} 
          onClick={""}

        />
        <section className="env">
          {/* <EarthObject /> */}
          {/* <MoonObject /> */}
          {/* <SpaceShipObject /> */}
        </section>
        <Button 
          text="Land" 
          btnClass={"btn-info"} 
          onClick={""}
        />
      </div>
    </div>
  );
}

export default App;
