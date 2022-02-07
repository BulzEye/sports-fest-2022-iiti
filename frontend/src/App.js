import './App.css';
import HomeBody from './components/home/HomeBody';
import Navbar from './components/Navbar';
// import { TailSpin } from 'react-loader-spinner';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from './components/loader/Loader';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/home')
      .then(res => {
        setData(res.data)
        setIsLoading(false)
      })
      .catch(err=>{
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
      <Navbar />
      {isLoading && <Loader />}
      {!isLoading &&
        <Routes>
          <Route path='/' element={<HomeBody data={data} />} />
          {/* More Routes */}
          {/* More Routes */}
          {/* More Routes */}
        </Routes>}
      {/* <SponsorsBody /> */}
      {/* <TailSpin color="#00BFFF" height={80} width={80} /> */}
    </div>
  );
}

export default App;
