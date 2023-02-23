const db = require("../models/index");
const dbName = db.tripSite



  async function GetAllTripSight(){
    console.log(dbName)
       const TripSight=await dbName.findAll({})
          if(!TripSight?.length)
            return "not exist"
         return TripSight
          }

   async function AddtripSites(site){  
        
        const trip_sites=await dbName.create(site)
       return trip_sites;
    }
 async function GetSitesByTripId(id){
 
        const TripSight=await dbName.findAll({where:{idtrip:id}})
          if(!TripSight?.length)
            return "not exist"
          return TripSight
    }
    async function GetSitesById(id){
      //   dbName.findOne({
      //     where: {
      //         id : id
      //     }
      // })
            const TripSight=await dbName.findAll({where:{idtrip_site:id}})
              if(!TripSight?.length)
                return "now exist"
              return TripSight
        }
   
      
    
    async function deletetripsite(id){
      if (!id) {
        return res.status(400).json({ message: 'note ID required' })
    }
    await dbName.destroy({
        where: {
          idtrip_sites: id
        }
    })
   
    }
    async function update(user){
      const {   idtrip_site,idtrip,idsite,number_in_trip } = user

      // Confirm data
     
      const note = await dbName.update({idtrip,idsite,number_in_trip},{where:{idtrip_sites:idtrip_site}})
  
      if (!note) {
          return res.status(400).json({ message: 'note not found' })
      }
  
  
      return note;
    }


module.exports={
  GetAllTripSight,
  AddtripSites,
  GetSitesByTripId,
  
  deletetripsite,
  update,
  GetSitesById
}