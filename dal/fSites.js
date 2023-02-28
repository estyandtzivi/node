const db = require("../models/index");
const dbName = db.sites;
const Image = db.images;
const tripsite=db.tripSite;
const image=require('./fImages')
 async function  getall(){
  console.log("we are here")
  
  const books = await dbName.findAll({
    attributes:['idsites','idimage','num_of_turist','ages','children','discription','time_it_takes','accible','place1','place2','address'],
    include : [
      { model: Image, as: 'images'},
      ],
     
    })
    return books
}
async function  getsitesbytripid(constrains){
  


}

async  function GetMostVisitedSietes(){
  const { QueryTypes } = require('sequelize')
const siteid = await db.sequelize.query(`SELECT idsite FROM trip_sites GROUP BY idsite ORDER BY COUNT(*) DESC LIMIT 1`, 
  { type:QueryTypes.SELECT,
    //replacements: { dbName: dbName }
   }
)
return siteid;
  }
async  function getsitebyid(id){
  console.log(id)
    const sites=await dbName.findAll({
      // attributes:['idsites','num_of_turist','ages','children','discription','time_it_takes','accible','place1','place2','address','idimage'],
      // include: 'sites',
      where:{idsites:id}})
      console.log(sites)
       if(!sites?.length)
        return "not exist"
  const image1=await image.GetImagesById(sites[0].idimage)
  console.log(image1)
  const ret = {
    user:sites,
    trips:image1
  }
    return ret
   }  
   async function postSite(site,image1){
    // const image=await image.AddImages(image1)///   add image
    // site[0].idimage=image[0].idimages
    console.log("k")
    const trip_sites=await dbName.create(site)
    return trip_sites;
   }
  async function deletesite(id){
    if (!id) {
      return res.status(400).json({ message: 'note ID required' })
  }
 const site= await getsitebyid(id)
  await image.deleteimages(site[0].idimage)
  await dbName.destroy({
      where: {
        idsites: id
      }
  })
  }
  async function update(user){
    const {   idsites,num_of_turist,ages,children,discription,time_it_takes,accible,place1,place2,address
    } = user

    // const image=await image.update(image1)///   update image
   
    
    const note = await dbName.update({num_of_turist,ages,children,discription,time_it_takes,accible,place1,place2,address},{where:{idsites:idsites}})

    if (!note) {
        return res.status(400).json({ message: 'note not found' })
    }


    return note;
  }

module.exports={
  GetMostVisitedSietes,
  getsitebyid,
  postSite,
  deletesite,
getall,
update,
getsitesbytripid
  
}