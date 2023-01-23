const jwt = require("jsonwebtoken");


function generateJWT(user) {
  const token = jwt.sign(
    { user_id: user.user_id, name: user.name },
    "dan and yali"
  );
  return token;
}
module.exports=generateJWT;