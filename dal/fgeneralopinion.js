const db = require("../models/index");
const dbName = db.generalopinions;
const { Op } = require("sequelize");


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
  const opinion = await dbName.findAll({ where: {  level: { [Op.gte]:  4}, } })
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