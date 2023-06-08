const SitesDal = require("../dal/fSites");
class Sites {

    GetMostVisitedSietes = (async (req, res) => {
        const site = await SitesDal.GetMostVisitedSietes()

console.log(site)
        res.send(site)
    })
    getsitesbyconstrains = (async (req, res) => {
        const consatrain= req.body
        console.log(consatrain)
        const db = await SitesDal.getsitesbyconstrains(consatrain)
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
        const { sightid } = req.params
        console.log(sightid)
        const db = await SitesDal.getsitebyid(sightid)
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
        const { sightid } = req.params

        await SitesDal.deletesite(sightid)
        res.send("delete")

    })
    update = (async (req, res) => {
        const { sightid } = req.params
        console.log("sightid",sightid)
        const user = await SitesDal.update(req.body, sightid)
        res.send(user)
    })


}
const Sightsclass = new Sites();
module.exports = Sightsclass;