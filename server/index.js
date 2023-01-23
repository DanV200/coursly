const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 4000; 
const user=require('./routes/user')
const subject=require('./routes/subject')
const courses=require('./routes/courses')
const userCourses=require('./routes/userCourses')

app.use(cors())
app.use(express.json())
app.use('/user',user)
app.use('/courses',courses)
app.use('/subject',subject)
app.use('/usercourses',userCourses)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))