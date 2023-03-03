const db = require("../models/index");
const dbName = db.images;


async function GetAllImages() {
  const images = await dbName.findAll({
    attributes: ['idimages', 'url', 'siteid'],
    include: 'site'
  })

  if (!images?.length)
    return "not exist"
  return images
}

async function AddImages(image) {
  const { url } = image
  console.log(url)
  const trip_sites = await dbName.create(url)
  console.log(trip_sites)
  return trip_sites;
}
async function GetImagesById(id) {

  const images = await dbName.findAll({ where: { idimages: id } })

  if (!images?.length)
    return "not exist"
  return images
}
async function deleteimages(id) {
  if (!id) {
    return res.status(400).json({ message: 'note ID required' })
  }
  await dbName.destroy({
    where: {
      idimages: id
    }
  })
}
async function update(user) {
  const { idimages, url, siteid } = user

  // Confirm data

  const note = await dbName.update({ url, siteid }, { where: { idimages: idimages } })

  if (!note) {
    return res.status(400).json({ message: 'note not found' })
  }


  return note;
}


module.exports = {
  GetAllImages,
  AddImages,
  GetImagesById,
  deleteimages,
  update
}