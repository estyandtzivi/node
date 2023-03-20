const SitesDal = require("../dal/fSites");
class Sites {

    GetMostVisitedSietes = (async (req, res) => {
        const site = await SitesDal.GetMostVisitedSietes()


        res.send(site)
    })
    getsitesbyconstrains = (async (req, res) => {

        const db = await SitesDal.getsitesbyconstrains(req.body)
        console.log("db")
        res.send(db)
    })
    getall = (async (req, res) => {
        console.log(":")
        const db = await SitesDal.getall()
        console.log(db)
        res.send(db)
    })

    getsitebyid = (async (req, res) => {
        const { sightId } = req.params
        console.log(sightId)
        const db = await SitesDal.getsitebyid(sightId)
        console.log(db)
        res.send(db)
    })

    postSite = (async (req, res) => {
        //const{idsites,}= req.body
        const site = await SitesDal.postSite(req.body)
        
        res.send(site)
        //res.send({mesage:"asdfa"})
    })


    deletesite = (async (req, res) => {
        const { sightId } = req.params

        await SitesDal.deletesite(sightId)
        res.send("delete")

    })
    update = (async (req, res) => {

        const user = await SitesDal.update(req.body)
        res.send(user)
    })


}
const Sightsclass = new Sites();
module.exports = Sightsclass;