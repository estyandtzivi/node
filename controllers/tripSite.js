const TripSightDal = require("../dal/fTripSite");
class TripSight{
    
    GetAllTripSight=(async(req,res)=>{
      
      const db=await TripSightDal.GetAllTripSight()
        res.send(db)  
    })
    
    GetSitesById=(async(req,res)=>{
        const{tripsiteId}=req.params
       const db=await TripSightDal.GetSitesById(tripsiteId)
         res.send(db)
    })
    AddSites=(async(req,res)=>{
        
       const tripsite= await TripSightDal.AddtripSites(req.body)
        res.send(tripsite)
    })
    
    deletetripsite=(async(req,res)=>{
        const { tripsiteId } = req.params
        console.log(":")
        await TripSightDal.deletetripsite(tripsiteId)
        res.send("delete")
    })
    update=(async(req,res)=>{
        
        const user=await TripSightDal.update(req.body)
       res.send(user)
    }) 
    
}
const TripSightclass=new TripSight();
module.exports = TripSightclass;
