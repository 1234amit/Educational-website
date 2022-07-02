import React from 'react'

const CourseComponent = ({ course }) => {

  return (

    <div className="box">
        <img src={course.img} />
        <div className="content">
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half"></i>
            </div>

            <a href="#" className="title">{course.title}</a>

            <p>{course.desc}</p>

            <div className="info">
                <h3> <i className="far fa-clock"></i> 2 hours </h3>
                <h3> <i className="far fa-calendar-alt"></i> {course.provider} </h3>
                <h3> <i className="fas fa-book"></i> 12 modules </h3>
            </div>
            <h3 className="price">Price:<span>${course.price}</span></h3>
        </div>
    </div>
  )
}

export default CourseComponent