import './App.css';
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
      
      <Weather defaultCity="Tokyo"/>
      <footer>
        This project was coded by <a href="https://www.instagram.com/digidolli/" target="_blank" rel="noreferrer">digidolli</a> and is <a href="https://github.com/digidolli/react-weather-app" target="_blank" rel="noreferrer"> open-sourced on Github </a> 
      </footer>
    </div>
    </div>
  );
}

export default App;
