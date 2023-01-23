const express = require("express");
const router = express.Router();
const db=require('../models/db')
// get user courses
router.get("/:id", async (req, res) => {
    const id=parseInt(req.params.id)
    console.log(id)
    
    const query = `
    select subject,rating,level,subjects.subject_id from courses 
    inner join subjects on subjects.subject_id=courses.subject_id
    where  user_id=${id}`;
    try {
      const { rows } = await db.query(query);
      res.status(200).send(rows);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });
  module.exports = router;