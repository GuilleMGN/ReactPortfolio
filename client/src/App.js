import React from 'react';
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

function App() {
  return (
      <div className="App">
        <Navbar />
        <Wrapper>
          <About />
          <Portfolio />
          <Contact />
        </Wrapper>
        <Footer />
      </div>
  );
}

export default App;
