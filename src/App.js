import React from 'react'
import './App.css';
import About from './components/About';
import ContactComponent from './components/ContactComponent';
import Course from './components/Course';
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home';
import Teacher from './components/Teacher';
import './script.js';

const App = () => {

  return (

    <div>
      <Header />
          <main>
            <Home />
            <About />
            <Course />
            <Teacher />
            <ContactComponent />
          </main>
      <Footer />
    </div>
  )
}

export default App