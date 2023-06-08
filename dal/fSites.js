const db = require("../models/index");
const dbName = db.sites;
const Image = db.images;
const opinions=db.opinion;
const category=db.category;
const image = require('./fImages')
const o=require('./fOpinion')
const { Op } = require("sequelize");
const siteCategory=require('./fsitecategory')
const tripsitef=require('./fTripSite')
async function getall() {
  console.log("we are here")

  const books = await dbName.findAll({
    attributes: ['idsites','idimage','acces','bicycles','tripstype','description','truffic','area','tripid','payment','level','duration','place1','place2','address','name'],
    include: [
      {
        model: Image, as: 'images' },
   ]})
  return books
}
async function getsitesbyconstrains(constrain) {
   console.log("constrain",constrain)
  const matchessites = await dbName.findAll({
    attributes: ['idsites','idimage','acces','bicycles','tripstype','description','truffic','area','tripid','payment','level','duration','place1','place2','address','name'],
    include: [
      {
        model: Image, as: 'images' },
      {model: opinions, as: 'opinion'},]
    //   { model: category, as: 'category',
    //     where:{type:{[Op.in]: constrain.categories}}} 
    // ],
   
    // where: [
    //   {
    //    acces: { [Op.in]:[ true, constrain.acces]},
    //   bicycles: { [Op.in]:[ true, constrain.bicycles]},
    //  truffic: { [Op.in]:[ true, constrain.truffic]},  
    // payment: { [Op.lte]:  constrain.payment},
    //  tripstype: { [Op.in]: [constrain.tripstype] },
    //    area: { [Op.in]: [constrain.area] },
    //     level: { [Op.in]: [constrain.level] },
    // }]
  })
   console.log(matchessites)
  if(!matchessites)
       return "ho no there is any matcn site!!"
  return matchessites

}



async function GetMostVisitedSietes() {
  const { QueryTypes } = require('sequelize')
  const siteid = await db.sequelize.query(`SELECT idsite FROM trip_sites GROUP BY idsite ORDER BY COUNT(*) DESC LIMIT 15`,
    {
      type: QueryTypes.SELECT,
    }


  )
  console.log("-----",siteid)
 
 const site= await func(siteid)
  console.log(site)
  // siteid.forEach (async(e)=>{
  //   opinions.push(await opinion.GetOpinionBysiteId(e.idsite)) } )
  // // const site=await getsitebyid(siteid[0].idsite)idsite num_of_turist ages children discription time_it_takes accible place1 place2 address
  // console.log(opinions)
  return site;
}


async function getsitebyid(id) {
  console.log(id)
  const sites = await dbName.findAll({
    attributes: ['idsites','idimage','acces','bicycles','tripstype','description','truffic','area','tripid','payment','level','duration','place1','place2','address','name'],
    include: [
      {
        model: category, as: 'category'},{model: opinions, as: 'opinion'}, {model: Image, as: 'images'}
      ],

   

    
   
    where: { idsites: id }
  })
  
  if (!sites?.length)
    return "not exist"
  return sites;
}

async function postSite(site) {
 


  const { url,acces,bicycles,tripstype,description,truffic,area,tripid,payment,level,duration,place1,place2,address,name,categories} = site
  console.log(url)
  const newImage = await image.AddImages(url)
  
  console.log(categories)
  const idimage=newImage.idimages;
  const sites = await dbName.create({idimage,acces,bicycles,tripstype,description,truffic,area,tripid,payment,level,duration,place1,place2,address,name})
  const createdsites = await addeverycategory(sites.idsites, categories)
  console.log(sites)
  site_image = {
    createdsites:createdsites,
    sites: sites,
    newImage:newImage
  }
  return site_image;
}
async function addeverycategory(id, categories) {

  
  arr = []
  for (let i = 0; i < categories.length; i++) {
    
   
    const allcategories = { idsite: id, idcategory: categories[i] }
    
    const category = await siteCategory.AddcategorySites(allcategories)
    console.log(category)
 
    arr.push(category)
     

   
  }
   console.log("ljlj",arr)
  return arr
}
async function deletesite(id) {
  if (!id) {
    return res.status(400).json({ message: 'note ID required' })
  }
  const site = await getsitebyid(id)
 
  
  console.log(site)
  // await image.deleteimages(site[0].idimage)
  await o.deleteopinionbysiteid(id)
  await tripsitef.deletetripsite(id)
  await deletallcategories(site)
  console.log("joij")
  await dbName.destroy({
    where: {
      idsites: id
    }

  }) 
//  await opinion.deleteopinionbysiteid(id)
 
}
async function deletallcategories(sites) {
  for (let i = 0; i < sites.length; i++) {
    await siteCategory.deletecategorySites(sites[i].idsites)
  }
}
async function update(sites,id) {
  const {images,acces,bicycles,tripstype,description,truffic,area,tripid,payment,level,duration,place1,place2,address,name,categories} = sites
const  idimage=await image.AddImages(images.url).idimages
  // idimage=await image.update(idimage,url).idimages
  console.log( id)
 
  const note = await dbName.update({idimage,acces,bicycles,tripstype,description,truffic,area,tripid,payment,level,duration,place1,place2,address,name}, { where: { idsites: id } })
  console.log(note)
  const site_Category=await siteCategory.GetcategorySitesbyidcategory(id)
  let arr=[]
  // console.log(site_Category[0].idsites)
 
 const r= f(arr,site_Category)
  

  const createdCategory = await addeverycategory(id, categories)
  if (!note) {
    return res.status(400).json({ message: 'note not found' })
  }
updateSite={
  createdCategory:createdCategory,
  note:note,
  idimage:idimage
}

  return updateSite;
  
}
async function f(arr,s){
 for(let i=0;i<s.length;i++){
    arr.push(await siteCategory.deletecategorySites(s[i].idsite))
  }
  return arr
}
async function func(sites) {
  let site=[]
   
  
 for(let i=0;i<sites.length;i++){
  let v=await getsitebyid(sites[i].idsite)
  console.log(v)
   site.push(v)
 }
 console.log(site)
 return site;
}
module.exports = {
  GetMostVisitedSietes,
  getsitebyid,
  postSite,
  deletesite,
  getall,
  update,
  getsitesbyconstrains

}
// { 
//   "area": null,
//     "userId":1,
//     "begin_point1": null,
//     "begin_point2": null,
//     "end_point1": null,
//     "end_point2": null,
//     "date": null,
//     "listofsites":[1,2,4],
//     "constrainsoftrip":{
//          "num_of_turist":1,
//           "ages":2,
//           "bicycles":null,
//           "childern":null,
//           "tripsKind":null,
//           "description":null,
//           "trufic":null,
//           "area":null
//         }
//     }
    