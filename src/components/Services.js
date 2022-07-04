import React from 'react'
import img1 from '../img/services/1.jfif'
import img2 from '../img/services/digital_marketing.jfif'
import img3 from '../img/services/mobile_app.jpg'
import img4 from '../img/services/Responsive_Website_Design.jpg'
import img5 from '../img/services/seo.jfif'

const Services = () => {

  return (
    
    <div>
      <section className="service" id="service">
        <h1 className="heading">Services</h1>

        <div className="container">
          <div className="box">
            <img src={img1} />
              <div className="content">
                  <a href="#" className="title">Web Development</a>
                  <p>Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.</p>
               </div>
          </div>

          <div className="box">
            <img src={img2} />
              <div className="content">
                  <a href="#" className="title">Digital Marketing</a>
                  <p>Digital marketing is the component of marketing that uses the Internet and online based digital technologies such as desktop computers, mobile phones and other digital media and platforms to promote products and services.</p>
               </div>
          </div>

          <div className="box">
            <img src={img3} />
              <div className="content">
                  <a href="#" className="title">Mobile App Development</a>
                  <p>Mobile application development is the process of creating software applications that run on a mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources.</p>
               </div>
          </div>

          <div className="box">
            <img src={img4} />
              <div className="content">
                  <a href="#" className="title">Responsive Web Design</a>
                  <p>Responsive web design (RWD) is a web development approach that creates dynamic changes to the appearance of a website, depending on the screen size and orientation of the device being used to view it.</p>
               </div>
          </div>

          <div className="box">
            <img src={img5} />
              <div className="content">
                  <a href="#" className="title">SEO</a>
                  <p>Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. SEO targets unpaid traffic rather than direct traffic or paid traffic.</p>
               </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services