const TripDal = require("../dal/fTrip");
class Trip{
   
    postTrip=(async(req,res)=>{
    console.log(req.body)
       const trip= await TripDal.postTrip(req.body)
         res.send(trip)
    })
    GetTripById=(async(req,res)=>{
       //GetSighsById 
       const{tripid}=req.params
       
      
     const db= await TripDal.GetTripByuserId(req.params)
      res.send(db)
    })
    deletetrip=(async(req,res)=>{
      const { tripid } = req.params
    
      await TripDal.deletetrip(tripid)
      res.send("delete")
        
    }) 
    update=(async(req,res)=>{
        
      const user=await TripDal.update(req.body)
     res.send(user)
  }) 
  
}
const Tripclass=new Trip();
module.exports = Tripclass;