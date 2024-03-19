import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Configurator from './components/Configurator';
import Video from './components/Video';

function App() {
  return (
    <div>
      <div
        style={{
          backgroundImage: 'url("src/assets/asset 1.jpeg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
          position: "relative",
        }}
      >
        <Navbar />
        <Hero />
      </div>
      <div id="content-container">
        <Configurator />
      </div>
      <Video/>
    </div>
  );
}

export default App;
