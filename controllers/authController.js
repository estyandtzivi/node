const bcrypt= require('bcrypt')
const db = require('../models/index')
const jwt= require('jsonwebtoken')
const User = db.users

const register = async (req, res) => {
    console.log("k")
    const { username, email, password} = req.body
    if ( !username || !password) {// Confirm data
        return res.status(400).json({ message: 'All fields are required' })
        }
        const duplicate = await User.findOne({where:{username:username}})
if(duplicate){
return res.status(409).json({message:"Duplicate username"})
}

 console.log("hashedPwd")
    const hashedPwd = await bcrypt.hash(password, 10)
    console.log(hashedPwd)
    const userObject = {username:username,password:hashedPwd,mail:email}
        //:hashedPwd}
    const user = await User.create(userObject)
    if (user) { // Created
    return res.status(201).json({message:`New user ${user.username} created`
    })
    } else {
    return res.status(400).json({ message: 'Invalid user data received' })
    }
}
const login = async (req, res) =>  {
    console.log("username")
    const { username, password } = req.body;
    console.log(username)
    // if (!username || !password)
    // {
    //     username="df"
    //     password="123"
    // }
        
    if (!username || !password) {
    return res.status(400).json({ message: 'All fields are required'
    })
    }
    const foundUser = await User.findOne({where:{username:username}})
    
    if (!foundUser ) {
    return res.status(401).json({ message: 'Unauthorizedtf' })
    }
    console.log(password)
    
    const match = await bcrypt.compare(password, foundUser.password)
   
    if (!match) return res.status(401).json({ message: 'Unauthorized' })
    //res.send("Logged In")

   console.log( match)//.idusers)
   
    const userInfo= {id:foundUser.id,name:foundUser.name,
    roles:foundUser.roles, username:foundUser.username}
    const accessToken= jwt.sign(userInfo,process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken:accessToken})
    }
    


module.exports = {register,login}
//"name":7,  "username":"ester","email":"null" ,"password":"12345678"