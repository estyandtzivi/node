const db = require("../models/index");
const dbName = db.opinion;
const site=require('./fSites')


async function AddOpinion(opinoin) {
  
  const{user_opinion,userid,siteid,level}=opinoin
  console.log(siteid)
  const trip_sites = await dbName.create({ user_opinion,userid,siteid,level})
  return trip_sites;
}
async function GetOpinionBysiteId(id) {
  console.log("Ko;io")
  console.log(id)
  const opinion = await dbName.findAll({ where: { siteid: id } })
 
  if (!opinion?.length)
    return "not exist"
  return opinion
}
async function GetTheTenMostLevel() {
  const { QueryTypes } = require('sequelize')
  const opinion = await db.sequelize.query(`SELECT * FROM opinions ORDER BY level DESC LIMIT 2`,
    {
      type: QueryTypes.SELECT,
      //replacements: { dbName: dbName }
    }
  )
  const sites= opinion.forEach(async(e)=>{await site.getsitebyid(e.siteid) })
  const opinions={
    opinion:opinion,
    sites:sites
  }
  return opinions;
}

async function deleteopinion(id) {
  if (!id) {
    return res.status(400).json({ message: 'note ID required' })
  }
  await dbName.destroy({
    where: {
      idopinion: id
    }
  })
}
async function update(user) {
  const { idopinion, user_opinion, userid, siteid } = user

  // Confirm data

  const note = await dbName.update({ user_opinion, userid, siteid }, { where: { idopinion: idopinion } })

  if (!note) {
    return res.status(400).json({ message: 'note not found' })
  }


  return note;
}
module.exports = {

  AddOpinion,
  GetOpinionBysiteId,
  deleteopinion,
  update,
  GetTheTenMostLevel
}

