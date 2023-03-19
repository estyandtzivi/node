const { sites } = require("../models/index");
const db = require("../models/index");
const dbName = db.tripSite

async function Gettripsitesbytipid(id) {
  const tripsite = await dbName.findAll({  attributes: ['idtrip_site'],
 
  where: { idsite: id }})
return tripsite;
 }
 
 


async function AddtripSites(site) {
  
 const{ idtrip ,idsite ,number_in_trip}=site
 console.log("idsite" )
    console.log(idtrip,idsite )
  const trip_sites = await dbName.create({idtrip ,idsite ,number_in_trip})
  console.log(trip_sites)
  return trip_sites;
}




async function deletetripsite(id) {
  if (!id) {
    return;
    // return res.status(400).json({ message: 'note ID required' })
  }
  await dbName.destroy({
    where: {
      idsite: id
    }
  })

}


async function update(site,id) {
  const { idtrip_site, idtrip, idsite, number_in_trip } = site

  const note = await dbName.update({ idtrip, idsite, number_in_trip }, { where: { idtrip_sites: idtrip_site } })

  if (!note) {
    return res.status(400).json({ message: 'note not found' })
  }


  return note;
}


module.exports = {
  AddtripSites,
  deletetripsite,
  update,
  Gettripsitesbytipid
  }
  