import React from 'react';

const CourseDetails = (props) => {
    const course=props.course
    const {img , time, category}= course;
 console.log(img , time, category);
    return (
        <div>
                <h2>Course Details</h2>
        </div>
    );
};

export default CourseDetails;