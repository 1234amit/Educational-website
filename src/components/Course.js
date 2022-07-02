import React from 'react'
import courses from '../courses';
import CourseComponent from './CourseComponent';

const Course = () => {

  return (

    <div>
        <section className="course" id="course">
            <h1 className="heading">Our Popular Courses</h1>

            <div className="box-container">
                {
                courses.map(course=>(
        
                    <CourseComponent key={course._id} course={course} />
                        
                ))
                }
            </div>

        </section>
    </div>
  )
}

export default Course