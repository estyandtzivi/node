const db = require("../models/index");
const dbName = db.sites;
const Image = db.images;
const opinions=db.opinion;
const siteCategories=db.siteCategory;
const category=db.category;
const tripsite = db.tripSite;
const image = require('./fImages')
const constrains=db.constrains;
const opinion=require('./fOpinion')
const { Op } = require("sequelize");
const siteCategory=require('./fsitecategory')
const fcategory=require('./fcategories')
async function getall() {
  console.log("we are here")

  const books = await dbName.findAll({
    attributes: ['idsites','idimage','for','acces','bicycles','tripstype','description','truffic','area','tripid','payment','level','duration','place1','place2','address','name'],
    include: [
      { model: constrains, as: 'images' },
    ],

  })
  return books
}
async function getsitesbyconstrains(constrains) {
   console.log(constrains)
  const matchessites = await dbName.findAll({
    attributes: ['idsites','idimage','acces','bicycles','tripstype','description','truffic','area','tripid','payment','level','duration','place1','place2','address','name'],
    include: [
      { model: Image, as: 'images' },
    ],
    include: [
      {
        model: category, as: 'category',
        where:{type:{[Op.in]: constrains.categories}}
      }],
    where: [{acces: { [Op.in]:[ true, constrains.acces]},bicycles: { [Op.in]:[ true, constrains.bicycles]},truffic: { [Op.in]:[ true, constrains.truffic]},  
      payment: { [Op.lte]:  constrains.payment},//duration: { [Op.lte]:  constrains.duration},
      tripstype: { [Op.in]: [constrains.tripstype] },area: { [Op.in]: [constrains.area] },level: { [Op.in]: [constrains.level] },}]
    //  category:{ [Op.in]: [constrains.categories] } 
      // , ages: constrains.ages,children: constrains.children,time_it_takes: constrains.time_it_takes,payment: constrains.payment,area: constrains.area }]
      //payment,duration->
      //tripstype,area,level-[]  tripstype: { [Op.in]: [constrains.tripstype] }, Op.or//at least one
      //for
  })
  

  // console.log(matchessites.category.type)
  if(!matchessites?.length)
       return "ho no there is any matcn site!!"
  return matchessites

}



async function GetMostVisitedSietes() {
  const { QueryTypes } = require('sequelize')
  const siteid = await db.sequelize.query(`SELECT idsite FROM trip_sites GROUP BY idsite ORDER BY COUNT(*) DESC LIMIT 10`,
    {
      type: QueryTypes.SELECT,
    }


  )
 const site= await func(siteid)
  // siteid.forEach (async(e)=>{
  //   opinions.push(await opinion.GetOpinionBysiteId(e.idsite)) } )
  // // const site=await getsitebyid(siteid[0].idsite)idsite num_of_turist ages children discription time_it_takes accible place1 place2 address
  // console.log(opinions)
  return site;
}


async function getsitebyid(id) {
  console.log(id)
  const sites = await dbName.findAll({
    attributes: ['idsites','idimage','for','acces','bicycles','tripstype','description','truffic','area','tripid','payment','level','duration','place1','place2','address','name'],
    include: [
      {
        model: category, as: 'sites',
      }],

    include: [
      { model: opinions, as: 'site' },
    ],
    
    include: [
      { model: Image, as: 'images' },
    ],
    where: { idsites: id }
  })
  console.log(sites)
  if (!sites?.length)
    return "not exist"
  return sites;
}


async function postSite(site) {
 
  const { url,acces,bicycles,tripstype,description,truffic,area,tripid,payment,level,duration,place1,place2,address,name,categories} = site
  const newImage = await image.AddImages(url)
  
  console.log("_--------------")
  console.log(newImage.idimages)
  const sites = await dbName.create(newImage.idimages,acces,bicycles,tripstype,description,truffic,area,tripid,payment,level,duration,place1,place2,address,name)
  const createdsites = await addeverycategory(sites.idsites, categories)
  
  site_image = {
    createdsites:createdsites,
    sites: sites,
    newImage: newImage
  }
  return site_image;
}
async function addeverycategory(id, categories) {

  
  arr = []
  for (let i = 0; i < categories.length; i++) {
    console.log(categories[i])
    if(categories[i].length){
     categoriesid=await fcategory.Getcategoryidbytype(categories[i] )
     console.log(categoriesid[0].idcategory)
    const allcategories = { idsite: id, idcategory: categoriesid[0].idcategory }
    
    const category = await siteCategory.AddcategorySites(allcategories)
  
    arr.push(category)
}
    
  }
  
  return arr
}
async function deletesite(id) {
  if (!id) {
    return res.status(400).json({ message: 'note ID required' })
  }
  const site = await getsitebyid(id)
  await image.deleteimages(site[0].idimage)
  await deletallcategories(site)
  await dbName.destroy({
    where: {
      idsites: id
    }
  })
}
async function deletallcategories(sites) {
  for (let i = 0; i < sites.length; i++) {
    await siteCategory.deletecategorySites(sites[i].idsites)
  }
}
async function update(sites) {
  const {categories, idsites,idimage,acces,bicycles,tripstype,description,truffic,area,tripid,payment,level,duration,place1,place2,address,name} = sites
  const note = await dbName.update({idimage,acces,bicycles,tripstype,description,truffic,area,tripid,payment,level,duration,place1,place2,address,name}, { where: { idsites: idsites } })
  const site_Category=await siteCategory.GetcategorySitesbyidcategory(idsites)
  let arr=[]
  site_Category.foreach (async(e)=>{arr.push(await siteCategory.deletecategorySites(e.idsite))}) 
  
  const createdCategory = await addeverycategory(idsites, categories)
  if (!note) {
    return res.status(400).json({ message: 'note not found' })
  }


  return createdCategory;
  
}
async function func(sites) {
  let site=[]
   
  
 for(let i=0;i<sites.length;i++){
   site.push(await getsitebyid(sites[i].idsite))
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
    