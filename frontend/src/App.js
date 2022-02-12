import './App.css';
import HomeBody from './components/home/HomeBody';
import Navbar from './components/Navbar';
// import { TailSpin } from 'react-loader-spinner';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from './components/loader/Loader';
import { useEffect, useState } from 'react';
import axios from 'axios';
import EventPage from './components/events/EventPage';
import { Route, Routes } from "react-router-dom";
import SponsorsBody from './components/sponsors/SponsorsBody';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/home')
      .then(res => {
        setData(res.data)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <Navbar />
      {isLoading && <Loader />}
      {/* {!isLoading && <HomeBody data={data} />} */}
      {!isLoading &&
        <Routes>
          <Route path="/" element={<HomeBody data={data} />} />
          <Route path="/events/:eventname" element={<EventPage data={data.events} />} />
          <Route path="/sponsors" element={<SponsorsBody type="Sponsor" data={data.sponsors} />} />
          <Route path="/partners" element={<SponsorsBody type="Partner" data={data.partners} />} />
        </Routes>
      }
      {/* <Loader /> */}
      {/* <HomeBody /> */}
      {/* <SponsorsBody /> */}
      {/* <TailSpin color="#00BFFF" height={80} width={80} /> */}
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
