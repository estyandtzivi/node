const db = require("../models/index");
const dbName = db.users;

const trip=require('./fTrip');

  

   
   async  function  GetUserById(id){
        const users=await dbName.findAll({where:{idusers:id}})
        
        const trips=await trip.GetTripByuserId(id)
        console.log(trips)
        if(!users?.length)
           return "not exist"
            const ret = {
        user:users,
        trips:trips
      }
        return ret

    }
  //  async function GetDataByPassword_name(id,password){
  //       const users=await dbName.findAll({where:{idusers:id } })
  //       await trip.GetTripById()
  //       if(!users?.length)
  //          return "not exist"
  //       return users
  //   }
  
   async function deleteuser(id){
       // Confirm data
      if (!id) {
          return res.status(400).json({ message: 'note ID required' })
      }
      await dbName.destroy({
          where: {
            idusers: id
          }
      })
    }
    
      async function update(user){
        const { idusers, username, password,mail } = user

        // Confirm data
       
        const note = await dbName.update({username, password,mail},{where:{idusers:idusers}})
    
        if (!note) {
            return res.status(400).json({ message: 'note not found' })
        }
    
    
        return note;
      }
     
  
    
    
module.exports={
        
        GetUserById,
        // GetDataByPassword_name,
        
        deleteuser,
        update,
        
      }
   