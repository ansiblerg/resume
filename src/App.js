import React from 'react';
import logo from './logo.svg';
import './App.css';
import Experience from './components/Experience/experience'
import Header from './components/header/header'
import Education from './components/Education/education'
import CardComp from './components/cardComp/CardComp'
import Achievments from './components/Achievment'
function App() {
  return (
    <div className="container">
      <div className="row mt-6">
        <div className="col-sm-8 order-2">
          <Header />
          <Experience />
          <Education />
          <Achievments />
        </div>
        <div className="col-sm-4 order-1">
          <CardComp />
        </div>
      </div> 
    </div>
  );
}

export default App;
