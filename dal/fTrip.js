const db = require("../models/index");
const trip = require("../models/trip");
const dbName = db.trip
const tripsite = require("./fTripSite")
const consatrains = require('./fConstrains')
const tripsute = db.tripSite
const site = db.sites
const constrain = db.constrains
// const constrain = require('./fConstrains')
// const tripRouter = require("../routes/tripRouter");
const constrains = require('./fConstrains')
// const { type } = require("os");

async function posttrip(trip) {

  const { payment, area, userId, begin_point1, begin_point2, end_point1, end_point2, date, listofsites, constrainsoftrip } = trip



  console.log(payment, area, userId, begin_point1, begin_point2, end_point1, end_point2, date, listofsites, constrainsoftrip)
  console.log(area, userId, begin_point1, begin_point2, end_point1, end_point2, date)
  const tripcreated = await dbName.create({ payment, area, userId, begin_point1, begin_point2, end_point1, end_point2, date })

  const createdsites = await addeverysite(tripcreated.idtrips, listofsites)
  // const addconsrains = await consatrains.postconstrains(constrainsoftrip, tripcreated.idtrips)
  const pefect = {

    tripcreated: tripcreated,
    createdsites: createdsites
  }
  return pefect;
}
async function addeverysite(id, sites) {


  arr = []
  for (let i = 0; i < sites.length; i++) {

    const site1 = { idtrip: id, idsite: sites[i], number_in_trip: i + 1 }
    const site = await tripsite.AddtripSites(site1)

    arr.push(site)

  }

  return arr
}


async function GetTripByuserId(id) {

  const trip = await dbName.findAll({

    attributes: ['idtrips', 'userId', 'userId', 'begin_point2', 'end_point1', 'end_point2', 'date', 'payment'],

    include: [
      {
        model: site, as: 'sites'
      },
      { model: constrain, as: 'constrains', }

    ],
    // include: [
    //   {
    //    
    //   }
    // ],
    where: [{ userId: id }]
  })
  console.log(trip)
  //  const co=await consatrains.getconstrainsbytripid(trip.idtrips)
  //  const tripobject={
  //   trip:trip,
  //   co:co
  //  }
  return trip;
}




async function GetTripById(id) {

  console.log("Kh")
  const trip = await dbName.findAll({

    attributes: ['idtrips', 'userId', 'userId', 'begin_point2', 'end_point1', 'end_point2', 'date'],

    include: [
      {
        model: site, as: 'sites'
      },
      { model: constrain, as: 'constrains' }

    ],

    where: [{ idtrips: id }]
  })
  return trip;

}

async function deletetrip(id) {
  if (!id) {
    return res.status(400).json({ message: 'note ID required' })
  }
  const sites = await tripsite.Gettripsitesbytipid(id)
  console.log(id)
  const de = await deletetripsitet(sites.length,sites)

  await dbName.destroy({
    where: {
      userId: id
    }
  })
  const co = await consatrains.de
  return de;

}

// async function deletallsites(sites) {
//   for (let i = 0; i < sites.length; i++) {
//     await tripsite.deletetripsite(sites[i])
//   }
// }
async function deletetripsitet(len,tripsites) { 
  // let arr = []
  for (let i = 0; i < len; i++) {
    await tripsite.deletetripsite(tripsites[i].dataValues.idsite)
  }
}


async function update(user, id) {
  const {  userId, begin_point1, begin_point2, end_point1, end_point2, date, listofsites, constrainsoftrip } = user

  // Confirm data

  const note = await dbName.update({ userId, begin_point1, begin_point2, end_point1, end_point2, date }, { where: { idtrips: id } })
  const tripsites = await tripsite.Gettripsitesbytipid(id)
  deletetripsitet(tripsites.length,tripsites)
 
  
  // JSON.parse(tripsites).foreach(async (e) => { arr.push(await tripsite.deletetripsite(e.idsite)) })
  // const note1 = await consatrains.update(constrainsoftrip,constrainsoftrip[0].idconstrains)
  
  const createdsites = await addeverysite(id, listofsites)
  if (!note) {
    return res.status(400).json({ message: 'note not found' })
  }


  const tripsiteo = {
    note: note,
    createdsites: createdsites,
   

  }
  return tripsiteo;
}


module.exports = {
  posttrip,
  GetTripById,
  deletetrip,
  update,
  GetTripByuserId

}