const express = require("express");
const router = express.Router();
const db=require('../models/db')
const bcrypt = require('bcrypt');

const generateJWT= require('../models/generateJWT');

// get all
router.get("/", async (req, res) => {
  const query = `
  SELECT * FROM users
  `;
  try {
    const { rows } = await db.query(query);
    res.status(200).send(rows);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// signup -
router.post('/', async (req, res)=> {
  const body=req.body
  let {name,password,email}=body
//checks if the email is already exists
try { 
  let query=`select * from users where email= '${email}'`
let {rows}=await db.query(query)
if(rows.length>0){
   return res.status(400).send("email is already exists")
}

} catch (error) {
  res.send(error.message)
}
//changing the password to hash before we post it to the DB 
const salt =await  bcrypt.genSalt(10)
console.log(password)
password=await bcrypt.hash(password,salt)
console.log(password)
   query=`INSERT INTO USERS (name,password,email)
  VALUES ($1,$2,$3) returning * `
  const VALUES=[name,password,email]
  // add new user with name email pass
  try {
    let {rows}= await db.query(query,VALUES)
    res.status(201).send(rows[0])
  } catch (error) {
    res.status(400).send(error.message)
  }
})

//login 
router.post('/login',  async (req, res)=> {
  const body=req.body
const{email,password}=body
  try {
  //checks if the email exists
  let query=`select * from users where email= '${email}'`
  let result=await db.query(query)
  if(result.rowCount==0)
     return res.status(400).send("invalid email or password")
  else 
    user=result.rows[0]// defines user with all of his attributes
  } catch (error) {
    return res.status(400).send(error.message);
  }
  let token;
  const valiedpassword= await bcrypt.compare(password,user.password)//return true if the password is correct
  if(valiedpassword) token=generateJWT(user);
  token?res.send(token):res.status(400).send("Invalid email or password.");
  
});

//get by email
router.get('/getbyEmail/:email',async (req, res) => {
   let email=req.params.email
   try { 
    let query=`select * from users where email= '${email}'`
  let {rows}=await db.query(query)
  if(rows.length===0){
     return res.status(400).send("email does not  exists")
  }else res.status(200).send(rows[0])
  
  } catch (error) {
    res.send(error.message)
  }
})
//get by id
router.get('/getbyId/:id',async (req, res) => {
   let id=req.params.id
   try { 
    let query=`select * from users where user_id= ${id}`
  let {rows}=await db.query(query)
  if(rows.length===0){
     return res.status(400).send("Id does not  exists")
  }else res.status(200).send(rows[0])
  
  } catch (error) {
    res.send(error.message)
  }
})



module.exports = router;