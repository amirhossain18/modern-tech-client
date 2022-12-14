import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCade from '../CourseCade';
import CourseDetails from '../CourseDetails/CourseDetails';

const Course = () => {
    const courses= useLoaderData()
    console.log(courses)
    return (
        <div>
            <h1>Our Total Course {courses.length}</h1>
            <h2>THsi is cours</h2>

            {
                courses.map(course =><CourseCade
                key={course.id}
                course={course}
                ></CourseCade>)

              
            }
                {
                courses.map(course =><CourseDetails
                key={course.id}
                course={course}
                ></CourseDetails>)

              
            }
        </div>
    );
};

export default Course;