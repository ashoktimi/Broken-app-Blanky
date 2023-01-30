/** Auth-related routes. */
const jsonschema = require("jsonschema");
const User = require('../models/user');
const express = require('express');
const { BadRequestError } = require("../helpers/expressError");
const router = express.Router();
const createTokenForUser = require('../helpers/createToken');
const registerUserSchema = require("../schemas/userRegister");
const AuthUserSchema = require("../schemas/userAuth");


/** Register user; return token.
 *
 *  Accepts {username, first_name, last_name, email, phone, password}.
 *
 *  Returns {token: jwt-token-string}.
 *
 */


// "username":"jack123",
// "password":"nodemonjack12",
// "first_name":"jack",
// "last_name":"kane",
// "email":"jack.kane@gmail.com",
// "phone":837393902

router.post('/register', async function(req, res, next) {
 
  try {
    const validator = jsonschema.validate(req.body, registerUserSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }
      const { username, password, first_name, last_name, email, phone, isAdmin } = req.body;
      let user = await User.register({username, password, first_name, last_name, email, phone, isAdmin});  
      const token = createTokenForUser(username, user.isAdmin);
      return res.status(201).json({ token });
    
  } catch (err) {
    return next(err);
  }
}); // end

/** Log in user; return token.
 *
 *  Accepts {username, password}.
 *
 *  Returns {token: jwt-token-string}.
 *
 *  If incorrect username/password given, should raise 401.
 *
 */

router.post('/login', async function(req, res, next) {
 
  try {
    const validator = jsonschema.validate(req.body, AuthUserSchema);
    console.log(validator.errors)
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }
    const { username, password } = req.body;
    let user = await User.authenticate(username, password);
    const token = createTokenForUser(username, user.isAdmin);
    return res.json({ token });
  } catch (err) {
    return next(err);
  }
}); // end

module.exports = router;



// token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImphY2sxMjMiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjc0NDkwOTk0fQ.6VkBxzjutGX5qD2lfJ3dLzOdck_rZmbLj7V9zzqO2pI