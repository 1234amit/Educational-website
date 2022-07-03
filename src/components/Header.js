import React from 'react'

const Header = () => {

  return (

    <div>
        <header>
            <div id="menu" className="fas fa-bars"></div>
            
            <a href="#" className="logo"><i className="fas fa-user-graduate"></i>LOGO</a>

            <nav className="navbar">
                <ul>
                    <li><a href="#home">home</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#course">courses</a></li>
                    <li><a href="#teacher">teacher</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
            </nav>

        </header>

        
    </div>
  )
}

export default Header