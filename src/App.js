import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import BottleWrapper from "./components/BottleWrapper";
// import Founders from './components/Founders';
// import Whiskey from './components/whisky';

function App() {
  return (
    // fixed full bleed issue with px-0, also may need "no-gutters" added to row class
    //https://stackoverflow.com/questions/59100707/make-a-bootstrap-4-container-fluid-go-full-bleed-to-edge-of-browser-window
    <div className="App container-fluid p-0">
      <Navbar />
      {/* <Navbar5 /> */}
      <Carousel />
      <BottleWrapper />
      {/* <Whiskey /> */}
      {/* <Founders /> */}
    </div>
  );
}

export default App;
