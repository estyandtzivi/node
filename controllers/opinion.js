const OpinionDal = require("../dal/fOpinion");
class Opinion {


  AddOpinion = (async (req, res) => {
    console.log(req)
    const opioon = await OpinionDal.AddOpinion(req.body)
    res.send(opioon)
  })
  GetOpinionBysiteId = (async (req, res) => {
    const { opinionid } = req.params
    const db = await OpinionDal.GetOpinionBysiteId(opinionid)
    res.send(db)
  })
  GetTheTenMostLevel = (async (req, res) => {
    
    const db = await OpinionDal.GetTheTenMostLevel()
    console.log(db)
    res.send(db)
  })
  deleteopinion = (async (req, res) => {
    const { opinionid } = req.params
    await OpinionDal.deleteopinion(opinionid)
    res.send("db")
  })
  update = (async (req, res) => {

    const user = await OpinionDal.update(req.body)
    // const ret = {
    //   user:user,
    //   sites:[]
    // }
    res.send(user)
  })

}
const Opinionclass = new Opinion();
module.exports = Opinionclass;