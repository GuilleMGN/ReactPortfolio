import React from 'react';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
      </Wrapper>
    </div>
  );
}

export default App;
