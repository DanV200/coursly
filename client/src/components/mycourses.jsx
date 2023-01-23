import { useContext } from 'react';
import { AllContext } from './context';
import  axios  from 'axios';


const Mycourses = () => {
   const {user,subjects,token}=useContext(AllContext)
   async function DeleteCourses(subject_id){
    console.log(typeof(subject_id) );
    console.log( typeof(user.user_id));
    let result= await axios.delete('http://localhost:4000/courses',{data:{subject_id,user_id:user.user_id}})
   
   }

    return ( 
        <div>
        <table class="table table-hover">
     <tr>
      <th>name</th>
      <th>rating</th>
      <th>level</th>
     </tr>
     {user.courses.map((course) => (
          <tr>
            <td>{course.subject} </td>
            <td>{course.rating} </td>
            <td>{course.level} </td>
            <td><button onClick={()=>DeleteCourses(course.subject_id)}>delete course</button></td>
          </tr>
  
        ))}
  
  
        </table>
  
      </div>
     );
}
 
export default Mycourses;