const {Client}=require('pg');

const client =new Client({
    user:'postgres',
    host:'localhost',
    database:'coursesProject',
    password:'dandan2205',
    port:5432,
                                                    //מגביל ללהתחבר לשרת של המונגו 
})
    client.connect()
    module.exports=client;

   



