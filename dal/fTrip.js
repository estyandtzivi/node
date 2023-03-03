const db = require("../models/index");
const trip = require("../models/trip");
const dbName = db.trip
const tripsite = require("./fTripSite")
const fsites = require("./fSites");
const tripsute = db.tripSite
const site = db.sites
const user = db.users
const constrain = require('./fConstrains')
// const tripRouter = require("../routes/tripRouter");
const constrains = require('./fConstrains')
// const { type } = require("os");

async function posttrip(trip) {

  const { area, userId, begin_point1, begin_point2, end_point1, end_point2, date, listofsites, constrainsoftrip } = trip


  console.log(constrainsoftrip)
  const tripcreated = await dbName.create({ area, userId, begin_point1, begin_point2, end_point1, end_point2, date })
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

    const site1 = { idtrip: id, idsite: sites[i], number_in_trip: i }
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
  return trip;
}


async function deletetrip(id) {
  if (!id) {
    return res.status(400).json({ message: 'note ID required' })
  }

  await dbName.destroy({
    where: {
      idtrips: id
    }
  })
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


async function update(user) {
  const { idtrips, area, userId, begin_point1, begin_point2, end_point1, end_point2, date } = user

  // Confirm data

  const note = await dbName.update({ area, userId, begin_point1, begin_point2, end_point1, end_point2, date }, { where: { idtrips: idtrips } })

  if (!note) {
    return res.status(400).json({ message: 'note not found' })
  }


  return note;
}

module.exports = {
  posttrip,
  GetTripById,
  deletetrip,
  update
  , GetTripByuserId

}