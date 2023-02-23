const db = require("../models/index");
const dbName = db.opinion;


 
   async function  AddOpinion(opinoin){

    const trip_sites=await dbName.create(opinoin)
   return trip_sites;
   }
  async  function GetOpinionById(id){
    const opinion=await dbName.findAll({where:{idopinion:id}})
          if(!opinion?.length)
              return "not exist"
          return opinion
   }  
   async function deleteopinion(id){
    if (!id) {
      return res.status(400).json({ message: 'note ID required' })
  }
  await dbName.destroy({
      where: {
        idopinion: id
      }
  })
  }
  async function update(user){
    const {   idopinion,user_opinion,userid,siteid } = user

    // Confirm data
   
    const note = await dbName.update({user_opinion,userid,siteid},{where:{idopinion:idopinion}})

    if (!note) {
        return res.status(400).json({ message: 'note not found' })
    }


    return note;
  }
   module.exports={
    
    AddOpinion,
    GetOpinionById,
    deleteopinion,
    update
  }

