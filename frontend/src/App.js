import './App.css';
import HomeBody from './components/home/HomeBody';
import Navbar from './components/Navbar';
// import { TailSpin } from 'react-loader-spinner';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from './components/loader/Loader';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventPage from './components/events/EventPage';
import { Route, Routes, Navigate } from "react-router-dom";
import SponsorsBody from './components/sponsors/SponsorsBody';
import { useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import EditAdmins from './components/AdminPanelPages/EditAdmins';
import EditEvents from './components/AdminPanelPages/EditEvents';
import EditSponsorsPartners from './components/AdminPanelPages/EditSponsors_Partners';
import LoginButton from './components/AdminPanel/LoginButton';

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
    <Route key={1} path="/editEvents" element={
      <authContext.Provider value={authHeader}>
        <EditEvents data={data.events} />
      </authContext.Provider>
    } />,
    <Route key={2} path="/editSponsors" element={
      <authContext.Provider value={authHeader}>
        <EditSponsorsPartners type={"Sponsor"} data={data.sponsors} />
      </authContext.Provider>
    } />,
    <Route key={3} path="/editPartners" element={
      <authContext.Provider value={authHeader}>
        <EditSponsorsPartners type={"Partner"} data={data.partners} />
      </authContext.Provider>
    } />,
    <Route key={4} path="/editAdmins" element={
      <authContext.Provider value={authHeader}>
        <EditAdmins />
      </authContext.Provider>
    } />
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
        <Navbar auth={auth} events={!isLoading && data.events.map((event) => ({_id: event._id, title: event.title}))} />
      </authContext.Provider>
      <div className="bodyDiv">
        {isLoading && <Loader />}
        {!isLoading &&
          <Routes>
            <Route index path="/" element={<HomeBody data={data} />} />
            <Route path="/events/:eventId" element={<EventPage data={data.events} />} />
            <Route path="/sponsors" element={<SponsorsBody type="Sponsor" data={data.sponsors} />} />
            <Route path="/partners" element={<SponsorsBody type="Partner" data={data.partners} />} />
            {
              auth ?
                protectedRoutes.map(route => route)
                : null
            }
            <Route path="/login" element={
              <authContext.Provider value={updateAuth}>
                <h1 className='pb-5' style={{"paddingTop": "5%"}}>Admin Panel</h1>
                <LoginButton />
              </authContext.Provider>
            } />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        }
      </div>
      {/* <TailSpin color="#00BFFF" height={80} width={80} /> */}
      <Footer />
    </div>
  );
}

export default App;
