// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import CoursesSection from "./Components/CoursesSection";
import SposerShipPage from "./Components/SponserShipPage";
import Footer from "./Components/Footer";
import ContactUs from "./Components/Contactus";
import WhatsAppIcon from "./Components/Whatsapp";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home/>
              <Profile/>
              <CoursesSection/>
              <SposerShipPage />
              <ContactUs/>
              <WhatsAppIcon/>
              <Footer/>
             
            </>
          }
        />
        


      </Routes>
    </Router>
  );
}

export default App;
