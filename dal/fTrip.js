const db = require("../models/index");
const trip = require("../models/trip");
const dbName = db.trip
const tripsite = require("./fTripSite")
const consatrains=require('./fConstrains')
const tripsute = db.tripSite
const site = db.sites
const constrain = db.constrains
// const constrain = require('./fConstrains')
// const tripRouter = require("../routes/tripRouter");
const constrains = require('./fConstrains')
// const { type } = require("os");

async function posttrip(trip) {

  const { idtrips,area, userId, begin_point1, begin_point2, end_point1, end_point2, date, listofsites, constrainsoftrip } = trip


  console.log(constrainsoftrip)
  console.log(listofsites)
  console.log(area, userId, begin_point1, begin_point2, end_point1, end_point2, date)
  const tripcreated = await dbName.create({idtrips, area, userId, begin_point1, begin_point2, end_point1, end_point2, date })
  const createdsites = await addeverysite(1, listofsites)
  const addconsrains = await constrain.postconstrains(constrainsoftrip, 1)
  const pefect = {
    addconsrains: addconsrains,
    tripcreated: tripcreated,
    createdsites: createdsites
  }
  return pefect;

}
async function addeverysite(id, sites) {

  arr = []
  console.log(sites)
  for (let i = 0; i < sites.length; i++) {
console.log(sites[i])
    const site1 = { idtrip: 1, idsite: sites[i], number_in_trip: i+1 }
    console.log(site1)
    const site = await tripsite.AddtripSites(site1)
    console.log(site)

    arr.push(site)
    
  }

  
  return arr
}

async function GetTripByuserId(id) {

  const trip = await dbName.findAll({

    attributes: ['idtrips', 'userId', 'area', 'userId', 'begin_point2', 'end_point1', 'end_point2', 'date'],

   
    include: [
      {
        model: site, as: 'sites',
      }
    ],
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


  const trip = await dbName.findAll({

    attributes: ['idtrips', 'userId', 'area', 'userId', 'begin_point2', 'end_point1', 'end_point2', 'date'],

    include: [
      {
        model: site, as: 'sites',
      }
    ],
    where: [{ idtrips: id }]
  })
  return trip;

}


async function deletetrip(id) {
  if (!id) {
    return res.status(400).json({ message: 'note ID required' })
  }
  const sites = await tripsite.GetSitesByTripId(id)
  const de = await deletallsites(sites)

  await dbName.destroy({
    where: {
      userId : id
    }
  })
  return de;

}

async function deletallsites(sites) {
  for (let i = 0; i < sites.length; i++) {
    await tripsite.deletetripsite(sites[i].idsites)
  }
}


async function update(user,id) {
  const { area, userId, begin_point1, begin_point2, end_point1, end_point2, date, listofsites, constrainsoftrip} = user

  // Confirm data
console.log( area, userId, begin_point1, begin_point2, end_point1, end_point2, date, listofsites, constrainsoftrip)
  const note = await dbName.update({ area, userId, begin_point1, begin_point2, end_point1, end_point2, date }, { where: { idtrips: id } })
  const tripsites=await tripsite.Gettripsitesbytipid(id)
  tripsites.foreach (async(e)=>{arr.push(await tripsite.deletetripsite(e))}) 
  let arr=[]
  const createdsites = await addeverysite(id, listofsites)
  if (!note) {
    return res.status(400).json({ message: 'note not found' })
  }

const tripsite={
  note:note,
  createdsites:createdsites
}
  return tripsite;
}


module.exports = {
  posttrip,
  GetTripById,
  deletetrip,
  update
  , GetTripByuserId

}