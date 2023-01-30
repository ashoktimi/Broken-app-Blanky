const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");


/** return signed JWT for payload {username, admin}. */

function createToken(username, admin) {
  let payload = {username, admin};
  return jwt.sign(payload, SECRET_KEY);
}
module.exports = createToken;



// Solution key = 488c6846