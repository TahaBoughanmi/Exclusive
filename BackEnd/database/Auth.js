const jwt = require('jsonwebtoken');
const db = require('./config');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const signUp = async (req, res) => {
  const { userName, email, password, role } = req.body;
  try {
    // hash the password using bcrypt with a salt rounds value of 12
    const hashedPw = await bcrypt.hash(password, 12);
    // create a new user in the database with the hashed password and default role of user
    const newUser = await db.User.create({
      userName: userName,
      email: email,
      password: hashedPw,
      role: role,
    });
    // GEnerate Token
    const token = jwt.sign(
      { id: newUser.id, role: newUser.role },
      'your-jwt-secrets'
    );
    const obj = { data: newUser, token };
    res.status(201).json(obj);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const logIn = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    // find a user in the database with the provided userName and role
    const user = await db.User.findOne({ where: { email } });
    // if the user is not found we respond with a 404 error
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    // now we compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    // if the password is wrong we return 401 error
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }
    // create a JWT token with the user's id, userName, and role, and sign it with a secret key
    const token = jwt.sign(
      { id: user.id, role: user.role },
      'your-jwt-secrets'
    );
    const obj2 = { data: user, token };
    return res.status(200).json(obj2);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
//authMiddlewares
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







 


module.exports = { signUp, logIn, protect };
