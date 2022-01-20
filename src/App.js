
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
// import Navbar5 from './components/Navbar5';
import Carousel from './components/Carousel';
import Founders from './components/Founders';
import Whiskey from './components/whisky';

function App() {
  return (
    <div className="App container-fluid">
      <Navbar />
      {/* <Navbar5 /> */}
      <Carousel />
      <Whiskey />
      <Founders />
    </div>
  );
}

export default App;
