
const { sites } = require("../models/index");
const db = require("../models/index");
const dbName = db.siteCategory

async function GetcategorySitesbyidcategory(id) {
  const siteCategory = await dbName.findAll({ 
 
  where: { idsite: id }})
return siteCategory;
 }
 
 


async function AddcategorySites(category) {
  
 const{ idcategory ,idsite }=category
 
  const siteCategory = await dbName.create({idcategory ,idsite})
  console.log(siteCategory)
  return siteCategory;
}




async function deletecategorySites(id) {
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


async function update(site) {
  const { id, idcategory, idsite} = site

  const note = await dbName.update({ idtrip, idcategory, idsite }, { where: { id: id } })

  if (!note) {
    return res.status(400).json({ message: 'note not found' })
  }


  return note;
}


module.exports = {
  
  update,
  deletecategorySites,
  AddcategorySites,
  GetcategorySitesbyidcategory

  
  }
  