const express = require("express");
const router = express.Router();
const db=require('../models/db')



// get all
router.get("/", async (req, res) => {
  const query = `
  SELECT * FROM subjects
  `;
  try {
    const { rows } = await db.query(query);
    res.status(200).send(rows);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// post
router.post('/', async (req, res)=> {
 
})
module.exports = router;