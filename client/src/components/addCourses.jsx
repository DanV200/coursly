import React from "react";
import { AllContext } from "./context";
import { useContext } from "react";
import  axios  from 'axios';

const AddCourses = () => {
  const { user, subjects } = useContext(AllContext);



  
  async function AddCourse(subject){
   let result= await axios.post('http://localhost:4000/courses',{user_id:user.user_id,subject:subject})
   console.log(result);
  }
  console.log(user, subjects);
  return (
    <div>
      <table class="table table-hover">
   <tr>
    <th>name</th>
    <th>rating</th>
    <th>level</th>
   </tr>
   {subjects.map((subject) => (
        <tr>
          <td>{subject.subject} </td>
          <td>{subject.rating} </td>
          <td>{subject.level} </td>
          <td><button onClick={()=>AddCourse(subject.subject)}>add course</button></td>
        </tr>

      ))}


      </table>

    </div>
  );
};

export default AddCourses;
