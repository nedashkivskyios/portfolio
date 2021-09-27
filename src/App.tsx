import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Greeting} from "./components/Greeting/Greeting";
import {Skills} from "./components/Skills/Skills";
import {Projects} from "./components/Projects/Projects";
import {Remote} from "./components/Remote/Remote";
import {Footer} from "./components/Footer/Footer";
import {Contact} from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header/>
      <Greeting/>
      <Skills/>
      <Projects/>
      <Remote/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
