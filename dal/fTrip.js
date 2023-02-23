const db = require("../models/index");
const trip = require("../models/trip");
const dbName = db.trip
const tripsite=require("./fTripSite")
const fsites=require("./fSites");
const tripRouter = require("../routes/tripRouter");
const constrains=require('./fConstrains')
// const { type } = require("os");
   
 async  function  postTrip(trip1,sites1,id){
  
      console.log(trip1)
      const trip=await dbName.create(trip1)
const sites=await func1(trip[0].idtrips,sites1)
    //  await constrains.postconstrains(trip) add constrains
      return sites

    }
    async function func1(id,sites){
      arr=[]
      console.log(sites)
      for (let i=0; i< sites.length; i++){
        const site1=id + sites[i].idsite + i
        const {idtrip,idsite,number_in_trip}=site1
        const site= await tripsite.AddSites(site1)
          console.log(site)
          arr.push(site)
       }
       return arr
      }

    async function  GetTripByuserId(id){
        
      const trip=await dbName.findAll({
      
        attributes:['userId','area','userId','begin_point2','end_point1','end_point2','date'],
        include : [
          { model: tripsite, as: 'trip_site'},
          ],
       where:[{userId:id}]
      })
      return trip;
//     const trip=await dbName.findAll({where:{userId:id}})
      
      
   
//       // const trip_site = await dbName.findAll({
//       //   attributes:['idtrip','area','userId','begin_point1','begin_point2','end_point1','end_point2','date'],
//       //   include: 'trip_site',
//       //   where:{idtrips:id}
//       //   })
       
//       //   return trip_site
//       //לשלוף את האתרים של הטיול ואת התמונות שלהם
   
// const tripsites=await tripsite.GetSitesByTripId(id)
//   console.log(tripsites)
 
//  const arr=await func(tripsites)
// // tripsites.foreac(e=>{
// //  
// //  console.log(site)
// //  arr.push(site)
// // })

// // const site=await fsites.getsitebyid(sites[0].idsites)
// //         if(!site?.length)
// //               return "not exist"
// // const constrain=await constrains.getconstrainsbytripid(id)
// const ret = {
//   user:trip,
//   trips:arr
// }
//   return ret
//   }

// async function func(tripsites){
// arr=[]
// console.log(tripsites)
// for (let i=0; i< tripsites.length; i++){
//   if(tripsites[i]){
//   const site= await fsites.getsitebyid(tripsites[i].idsite)
//     console.log(site)
//     arr.push(site)}
//  }
//  return arr
}
async function  deletetrip(id){
      if (!id) {
        return res.status(400).json({ message: 'note ID required' })
    }
    await dbName.destroy({
        where: {
          idtrips: id
        }
    })


    }
   async function  GetTripById(id){
        

    const trip=await dbName.findAll({where:{idtrips:id}})
    if (!trip) {
      return res.status(400).json({ message: 'note not found' })
  }


  
   
        // const trip_site = await dbName.findAll({
        //   attributes:['idtrip','area','userId','begin_point1','begin_point2','end_point1','end_point2','date'],
        //   include: 'trip_site',
        //   where:{idtrips:id}
        //   })
         
        //   return trip_site
        //לשלוף את האתרים של הטיול ואת התמונות שלהם
  console.log(trip)   
  const tripsites=await tripsite.GetSitesByTripId(trip[0].idtrips)
  if (!tripsites) {
    return res.status(400).json({ message: 'note not found' })
}
   
   const arr=func(tripsites)
   if (!arr) {
    return res.status(400).json({ message: 'note not found' })
}
  // tripsites.foreac(e=>{
  //  
  //  console.log(site)
  //  arr.push(site)
  // })

// const site=await fsites.getsitebyid(sites[0].idsites)
//         if(!site?.length)
//               return "not exist"
     return arr
    }

async function func(tripsites){
  arr=[]
  console.log(tripsites)
  for (let i=0; i< tripsites.length; i++){
    const site= await fsites.getsitebyid(tripsites[i].idsite)
      console.log(site)
      arr.push(site)
   }
   return arr
}
  async function  deletetrip(id){
        if (!id) {
          return res.status(400).json({ message: 'note ID required' })
      }
      await dbName.destroy({
          where: {
            idtrips: id
          }
      })

  }
  async function update(user){
    const {   idtrips,area,userId,begin_point1,begin_point2,end_point1,end_point2,date } = user

    // Confirm data
    
    const note = await dbName.update({area,userId,begin_point1,begin_point2,end_point1,end_point2,date },{where:{idtrips:idtrips}})

    if (!note) {
        return res.status(400).json({ message: 'note not found' })
    }


    return note;
  }

module.exports={
  postTrip,
  GetTripById,
  deletetrip,
  update
  ,GetTripByuserId,
  func1
}