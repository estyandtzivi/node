const db = require("../models/index");
const dbName = db.images;


async function GetAllImages() {
  const images = await dbName.findAll({
    
  })

  if (!images?.length)
    return "not exist"
  return images
}

async function AddImages(img) {
  
  const image = await dbName.create({url : img})
  console.log(image)
  return image;
}
async function GetImagesById(id) {

  const images = await dbName.findAll({ where: { idimages: id } })

  if (!images?.length)
    return "not exist"
  return images
}
async function deleteimages(id) {
  // if (!id) {
  //   return res.status(400).json({ message: 'note ID required' })
  // }
  await dbName.destroy({
    where: {
      idimages: id
    }
  })
}
async function update(id,url) {
  

  // Confirm data

  const note = await dbName.update({ url}, { where: { idimages: id } })

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