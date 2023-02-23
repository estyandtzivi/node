const userDal = require("../dal/fUsers");
class Users{
    
    GetDataByPassword_name=(async(req,res)=>{
       const {password,name} = req.body//
       const db= await userDal.GetDataByPassword_name(password,name)//הופכים את זה לpost ואז מקבלים 
        res.send(db)  
    })
   
    GetUserById=(async(req,res)=>{
        const{userId}=req.params
        console.log(userId);
       const db= await userDal.GetUserById(userId)
       res.send(db)
    }) 
    AddTripToUser=(req,res)=>{
        
        res.send("AddTripToUser")
    }   
    deleteuser=(async(req,res)=>{
        const { userId } = req.params
        console.log(":")
        await userDal.deleteuser(userId)
       res.send("deleteuser")
    }) 
    
    update=(async(req,res)=>{
        
        const user=await userDal.update(req.body)
       res.send(user)
    }) 
   
    
    
}
const UserClass=new Users();
module.exports = UserClass;