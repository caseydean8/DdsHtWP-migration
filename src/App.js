
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Founders from './components/Founders';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Founders />
    </div>
  );
}

export default App;
