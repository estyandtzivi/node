const db = require("../models/index");
const dbName = db.sites;
const Image = db.images;
const tripsite = db.tripSite;
const image = require('./fImages')
const constrains=db.constrains;
const opinion=require('./fOpinion')

async function getall() {
  console.log("we are here")

  const books = await dbName.findAll({
    attributes: ['idsites', 'idimage', 'num_of_turist', 'ages', 'children', 'discription', 'time_it_takes', 'truffic', 'place1', 'place2', 'address','name','area','payment'],
    include: [
      { model: constrains, as: 'images' },
    ],

  })
  return books
}
async function getsitesbyconstrains(constrains) {
   console.log(constrains.area)
  const books = await dbName.findAll({
    attributes: ['name','idsites', 'idimage', 'num_of_turist', 'ages', 'children', 'discription', 'time_it_takes', 'truffic', 'place1', 'place2', 'address','area','payment'],
   
    where: [{num_of_turist:constrains.num_of_turist}]
      // , ages: constrains.ages,children: constrains.children,time_it_takes: constrains.time_it_takes,payment: constrains.payment,area: constrains.area }]
  })
  console.log(books)
  if(!books?.length)
       return "ho no there is no a matcn site!!"
  return books

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
    attributes: ['idsites', 'idimage', 'num_of_turist', 'ages', 'children', 'discription', 'time_it_takes', 'truffic', 'place1', 'place2', 'address','name','area','payment'],
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
  const { name,idsites, num_of_turist, ages, children, discription, time_it_takes, truffic, place1, place2, address,payment,area } = site
  const newImage = image.AddImages(site)
  const sites = await dbName.create(name,idsites, num_of_turist, ages, children, discription, time_it_takes, truffic, place1, place2, address,payment,area)

  site_image = {
    trip_sites: sites,
    newImage: newImage
  }
  return site_image;
}


async function deletesite(id) {
  if (!id) {
    return res.status(400).json({ message: 'note ID required' })
  }
  const site = await getsitebyid(id)
  await image.deleteimages(site[0].idimage)
  await dbName.destroy({
    where: {
      idsites: id
    }
  })
}
async function update(sites) {
  const { name,idsites, idimage,num_of_turist, ages, children, discription, time_it_takes, truffic, place1, place2, address} = sites
  const note = await dbName.update({name,idimage, num_of_turist, ages, children, discription, time_it_takes, truffic, place1, place2, address }, { where: { idsites: idsites } })

  if (!note) {
    return res.status(400).json({ message: 'note not found' })
  }


  return note;
  
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
    