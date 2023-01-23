import React, { createContext, useEffect } from 'react';
import jwt_decode from "jwt-decode";
import { useState } from 'react';
import  axios  from 'axios';

export const AllContext=createContext();
 

const Context = (props) => {
    const {children}=props
    const [user,setUser]=useState()// id have an user_id ,name and array of subjects that the user is registered
    const[subjects,setSubjects]=useState([])//array of subjects
    let token;

  
    async function  getUser(){
       token=localStorage.getItem('token')
        //  setToken(localStorage.getItem('token')) 
         console.log(token)
        if (token) {let decoded=jwt_decode(token)//decoded is an object with  value of user id and name 
        
        console.log(decoded)
        let result=await axios.get('http://localhost:4000/userCourses/17')// בקשת גט לבק שמחזירה לי מערך של אוביקטים שהם הקורסים שהיוזר רשום אליהם
        console.log(result.data)
        setUser({...decoded,courses:result.data})// דוף לתוך היוזר אובייקט שמכיל ערכים של אובייקט וקיי חדש עם מערך של אובייקטים
    }
  }

async function getSubjects(){
  let result=await axios.get('http://localhost:4000/subject')
  console.log(result)
  setSubjects(result.data)

}
    useEffect(() => {
      getUser()
      getSubjects()
      },[]);
    return (
       <AllContext.Provider value={{user,token,subjects}}>
        {children}
       </AllContext.Provider>
    );

}
export default Context;

