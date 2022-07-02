import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer">

          <div className="box-container">

              <div className="box">
                  <h3>branch locations</h3>
                  <a href="#">Bangladesh</a>
                  <a href="#">india</a>
                  <a href="#">france</a>
                  <a href="#">USA</a>
              </div>

              <div className="box">
                  <h3>quick links</h3>
                  <a href="#">home</a>
                  <a href="#">about</a>
                  <a href="#">course</a>
                  <a href="#">teachers</a>
                  <a href="#">contact</a>
              </div>

              <div className="box">
                  <h3>contact info</h3>
                  <p> <i className="fas fa-map-marker-alt"></i> Charkumplapur, Faridpur, Bangladesh </p>
                  <p> <i className="fas fa-envelope"></i> 15203023amitgoswami@gmail.com </p>
                  <p> <i className="fas fa-phone"></i> +8801644043487 </p>
              </div>

          </div>

          <h1 className="credit">created by <a href="#">Amit Kumar Goswami</a> all rights reserved. </h1>

        </div>
      </footer>
    </div>
  )
}

export default Footer