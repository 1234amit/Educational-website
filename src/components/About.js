import React from 'react'
import img1 from '../img/about.jpg'

const About = () => {

  return (

    <div>
        <section className="aboutus" id="about">
          <h1 className="heading">About Us</h1>
            <div className="about">
              <div className="image">
                  <img src={img1} alt="" />
              </div>

              <div className="content">
                  <h3>why choose us?</h3>
                  <p>Academic Earth is a collection of free online college courses from some of the world’s leading universities and colleges. On its site you’ll be able to find specific courses in many subjects as well as search by university. It collects playlists and video groups to help you learn from many different services, too.</p>
                  <p>Academic Earth is a smart search tool and a good place to start your journey. It collects many free courses from around the world, so you may click on a lesson plan and be taken to another partner on our list, such as MIT OpenCourseWare.</p>

                  <a href="#"><button className="btn">learn more</button></a>
              </div>
            </div>

        </section>
    </div>
  )
}

export default About