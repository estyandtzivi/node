const db = require("../models/index");
const dbName = db.generalopinions;



async function AddOpinion(generalopinion) {
  const{idopinion, opinion,level}=generalopinion
  const s=1
  console.log(opinion,level)
  const generalopinions = await dbName.create({idopinion, opinion,level})
  console.log(generalopinions)
  return generalopinions;
}
async function GetOpinionById(id) {
  const opinion = await dbName.findAll({ where: { idopinion: id } })
  if (!opinion?.length)
    return "not exist"
  return opinion
}
async function GetTheTenMostLevel() {
  const { QueryTypes } = require('sequelize')
  const opinion = await db.sequelize.query(`SELECT * FROM generalopinions ORDER BY level DESC LIMIT 2`,
    {
      type: QueryTypes.SELECT,
      //replacements: { dbName: dbName }
    }
  )
  return opinion;
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

module.exports = {

  AddOpinion,
  GetOpinionById,
  deleteopinion,
  GetTheTenMostLevel
}