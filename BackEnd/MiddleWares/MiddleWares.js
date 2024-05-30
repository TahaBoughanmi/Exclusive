const crypto = require('crypto');
const db = require('./config');


const protect = async (req, res) => {
    console.log(req);
    //1- check if the token already exist , if it is storeit
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
      return res.status(401).json({ error: error.message });
    }
    //2- verification
    const decoded = jwt.verify(token, 'your-jwt-secrets');
    console.log(decoded);
    //3- user checkings
    try {
      const currUser = await db.User.findByPk(decoded.id);
      if (!currUser) {
        return res.status(401).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };
  
  
  const forgotPassWord = async()=>{
  //1- getting the user email based on the post 
  const user = await db.User.findOne({email:req.body.email})
  if (!user) {
    return res.status(404).json({ error: 'User not found with given email ' });
  }
  //2- generate a randow new reset token 
  const generateRandomToken = (length) => {
    return crypto.randomBytes(length).toString('hex');
  };
  // generate a 25 character token
  const resetToken = generateRandomToken(25); 
  console.log('Reset token:', resetToken);
  //3- send back that token to el user 
  }
  


  module.exports = {protect,forgotPassWord}