import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Steps from "./Components/Steps/Steps";
import Services from "./Components/ServicesComponent/Services";
import Video from "./Components/VideoComponent/Video";
import Skills from "./Components/Skills/Skills";

import Hdao from "./Components/Hdao/Hdao";
import ContactForm from "./ContactForm/ContactForm";
import "./style.css";

const App = () => {
  return (
    <Router>
      <div className="desktop">
        <Navbar />
        <Routes>
          <Route
            path="/htf-landing-page"
            element={
              <>
                <Header />
                <Steps />
                <Services />
                <Video />
                <Skills />
                {/* <FAQ /> */}
                <Hdao />
              </>
            }
          />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
