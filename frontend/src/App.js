import './App.css';
import HomeBody from './components/home/HomeBody';
import Navbar from './components/Navbar';
// import { TailSpin } from 'react-loader-spinner';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from './components/loader/Loader';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventPage from './components/events/EventPage';
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import SponsorsBody from './components/sponsors/SponsorsBody';
import { useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import EditAdmins from './components/AdminPanelPages/EditAdmins';
import EditEvents from './components/AdminPanelPages/EditEvents';
import EditSponsorsPartners from './components/AdminPanelPages/EditSponsors_Partners';

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export const authContext = React.createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [auth, setAuth] = useState(false);
  const [authHeader, setAuthHeader] = useState(false);

  const protectedRoutes = [
    <Route key={1} path="/editEvents" element={<EditEvents data={data.events} />} />,
    <Route key={2} path="/editSponsors" element={<EditSponsorsPartners type={"Sponsor"} data={data.sponsors} />} />,
    <Route key={3} path="/editPartners" element={<EditSponsorsPartners type={"Partner"} data={data.partners} />} />,
    <Route key={4} path="/editAdmins" element={<EditAdmins />} />
  ]


  const updateAuth = (auth, authHeader) => {
    setAuth(auth);
    setAuthHeader(authHeader);
  }

  useEffect(() => {
    axios.get('/api/home')
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
      <ScrollToTop />
      <authContext.Provider value={updateAuth}>
        <Navbar auth={auth} />
      </authContext.Provider>
      <div className="bodyDiv">
        {isLoading && <Loader />}
        {!isLoading &&
          <authContext.Provider value={authHeader}>
            <Routes>
              <Route index path="/" element={<HomeBody data={data} />} />
              <Route path="/events/:eventId" element={<EventPage data={data.events} />} />
              <Route path="/sponsors" element={<SponsorsBody type="Sponsor" data={data.sponsors} />} />
              <Route path="/partners" element={<SponsorsBody type="Partner" data={data.partners} />} />
              <Route path="*" element={<Navigate to="/" />} />
              {
                auth ?
                  protectedRoutes.map(route => route)
                  : null
              }
            </Routes>
          </authContext.Provider>
        }
      </div>
      {/* <TailSpin color="#00BFFF" height={80} width={80} /> */}
      <Footer />
    </div>
  );
}

export default App;
