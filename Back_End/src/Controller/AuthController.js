const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const register = async(req,res) => {
    try{
    const {email,password,name} = req.body;

    const existingUser = await prisma.user.findUnique({
        where:{email:email}
    })

    if (existingUser){
        return res.status(400).json({message:"The User Is already exist"})
    }

    const salt =10;
    const hashedpassword = await bcrypt.hash(password , salt)

    const user = await prisma.user.create({
        data:{
            email:email,
            name:name,
            password:hashedpassword,
            isSubscribed:false
        }
    });
    res.status(200).json({message:`User Created Successfully. Welcome ${name} to RoadMap`})
} catch(error) {
    console.log(error); 
    res.status(500).json({message: error.message}); 
}
};

const login = async(req,res) => {
    const{email,password} = req.body;
    const user = await prisma.user.findUnique({where:{email}})
    if (!user) return res.status(404).json({message:"User Not Found"})
    const isMatch = await bcrypt.compare(password , user.password)
    if(!isMatch) return res.status(404).json({message:"Password is invalied"})
    const token = jwt.sign(
{userId:user.id},
process.env.SECRET_KEY,
{expiresIn:"1h"}
)
res.cookie('token', token, {
  httpOnly: true, 
  secure: false,   
  sameSite: 'Strict'
})
return res.status(200).json({
  message: "Login Successful",
  user: {
    id: user.id,
    name: user.name,
    email: user.email,
    isSubscribed: user.isSubscribed,
  },
});
};

const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false,
    sameSite: "Strict",
  });

  return res.status(200).json({ message: "Logged out successfully" });
};

const getMe = async (req, res) => {
  return res.status(200).json({ user: req.user });
};

module.exports = { register, login, logout, getMe };