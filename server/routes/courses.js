const express = require("express");
const router = express.Router();
const db=require('../models/db')



// get all
router.get("/", async (req, res) => {
  const query = `
  SELECT * FROM courses
  `;
  try {
    const { rows } = await db.query(query);
    res.status(200).send(rows);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//signup
router.post('/', async(req, res) =>{
  const{user_id,subject}=req.body
  
  try {
    //getting subject_id based on the subject name i got from the front 
const subjectIdQuery=`SELECT subject_id FROM subjects WHERE subject='${subject}'`
const subjectIdRows= await db.query(subjectIdQuery)// הערך יהיה השם של הנושא כגון:פייתון\ג'אווה וכו
const subjectID=subjectIdRows.rows[0].subject_id; // 1--הערך כאן יהיה הסאבג'קט_איידי של קורס ספציפי כמו: פייתון
console.log(subjectID)
//checking if there are any courses with the same subject_id
const checkCourseQuery=`SELECT * FROM courses WHERE subject_id=${subjectID}`
const checkCourseRows= await db.query(checkCourseQuery)
const courseArray=checkCourseRows.rows
let looplength1=courseArray.length;
let loopLength= Math.ceil(looplength1/22);
let course_NUM=1;
for(i=1 ;i<=loopLength;i++){
const checkCourseNumQuery=`SELECT * FROM courses WHERE course_number='${course_NUM}'`
let checkCourseNumRows=await db.query(checkCourseNumQuery)
if(checkCourseNumRows.rowCount<22||checkCourseNumRows.rowCount === undefined){
course_NUM=i
break
}
else{
  course_NUM++;
  } 
 }

//create row in the table
const course_number=course_NUM;
console.log(subjectID)
const subject_name=`${subject}`
const new_course_query=`INSERT INTO courses (name,user_id,subject_id,course_number) VALUES ($1,$2,$3,$4)`
const values=[subject_name,user_id,subjectID,course_number]
await db.query(new_course_query,values)
res.status(200).send('added succesfuly to the course')
}
  catch (error) {
    res.status(400).send(error+'line59')
  }
});
 





//delete
router.delete("/", async (req, res) => {
  const body = req.body;
  let { user_id, subject_id } = body;
  let query = `
 DELETE from courses
 WHERE user_id = ${user_id} AND subject_id = ${subject_id} RETURNING *
 `;
  try {
    let { rows } = await db.query(query);

    //בדיקה האם הסטודנט רשום לקורס או לא
    if (rows.length === 0)
      return res
        .status(400)
        .send("this student did not signed for this course");

    res.status(201).send(`${rows[0].user_id} removed from the course`);   
  } catch (error) {
    res.status(400).send(error.message);
  }
});
module.exports = router;