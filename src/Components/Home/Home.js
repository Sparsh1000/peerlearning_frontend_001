import React from 'react'
import CourseCard from '../CourseCard/CourseCard';
import AssignmentCard from '../AssignmentCard/AssignmentCard';

const Home = () => {
  return (
    <div style={{paddingTop:'70px'}}>
      <CourseCard/>
      <AssignmentCard/>
    </div>
  )
}

export default Home



// mport React from 'react';
// import CourseCard from '../CourseCard/CourseCard';
// import AssignmentCard from '../AssignmentCard/AssignmentCard';

// export default function Home() {
//   return (
//     <div>
//       <CourseCard/>
//       <AssignmentCard/>
//     </div>
//   )
// }
