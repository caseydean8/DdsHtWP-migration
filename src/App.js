
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
// import Navbar5 from './components/Navbar5';
import Carousel from './components/Carousel';
import Founders from './components/Founders';
import Whiskey from './components/whisky';

function App() {
  return (
    // fixed full bleed issue with px-0, also may need "no-gutters" added to row class 
    //https://stackoverflow.com/questions/59100707/make-a-bootstrap-4-container-fluid-go-full-bleed-to-edge-of-browser-window
    <div className="App container-fluid px-0">
      <Navbar />
      {/* <Navbar5 /> */}
      <Carousel />
      <Whiskey />
      <Founders />
    </div>
  );
}

export default App;
