const db = require("../models/index");
const dbName = db.tripSite




async function AddtripSites(site) {

  const trip_sites = await dbName.create(site)
  return trip_sites;
}




async function deletetripsite(id) {
  if (!id) {
    return res.status(400).json({ message: 'note ID required' })
  }
  await dbName.destroy({
    where: {
      idsite: id
    }
  })

}
async function update(user) {
  const { idtrip_site, idtrip, idsite, number_in_trip } = user

  const note = await dbName.update({ idtrip, idsite, number_in_trip }, { where: { idtrip_sites: idtrip_site } })

  if (!note) {
    return res.status(400).json({ message: 'note not found' })
  }


  return note;
}


module.exports = {
  AddtripSites,
  deletetripsite,
  update
  }
  