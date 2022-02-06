import logo from './logo.svg';
import './App.css';
import HomeBody from './components/home/HomeBody';
import Navbar from './components/Navbar';
import SponsorsBody from './components/sponsors/SponsorsBody';
// import { TailSpin } from 'react-loader-spinner';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from './components/loader/Loader';
import { useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 4000);

  return (
    <div className="App">
      <Navbar />
      {isLoading && <Loader />}
      {!isLoading && <HomeBody />}
      {/* <Loader /> */}
      {/* <HomeBody /> */}
      {/* <SponsorsBody /> */}
      {/* <TailSpin color="#00BFFF" height={80} width={80} /> */}
    </div>
  );
}

export default App;
