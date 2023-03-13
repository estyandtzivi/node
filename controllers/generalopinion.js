const generalOpinionDal = require("../dal/fgeneralopinion");
class generalOpinion {


  AddOpinion = (async (req, res) => {
    
    const opioon = await generalOpinionDal.AddOpinion(req.body)
    res.send(opioon)
  })
  GetOpinionById = (async (req, res) => {
    const { opinionid } = req.params
    const db = await generalOpinionDal.GetOpinionById(opinionid)
    res.send(db)
  })
  GetTheTenMostLevel = (async (req, res) => {
    
    const db = await generalOpinionDal.GetTheTenMostLevel()
    console.log(db)
    res.send(db)
  })
  deleteopinion = (async (req, res) => {
    const { opinionid } = req.params
    await generalOpinionDal.deleteopinion(opinionid)
    res.send("db")
  })
  

}
const generalOpinionclass = new generalOpinion();
module.exports = generalOpinionclass;