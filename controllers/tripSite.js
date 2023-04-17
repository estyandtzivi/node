const TripSightDal = require("../dal/fTripSite");
class TripSight {

    
   
    AddSites = (async (req, res) => {

        const tripsite = await TripSightDal.AddtripSites(req.body)
        res.send(tripsite)
    })

    deletetripsite = (async (req, res) => {
        const { tripsiteId } = req.params
        console.log(":")
        await TripSightDal.deletetripsite(tripsiteId)
        res.send("delete")
    })
    update = (async (req, res) => {

        const user = await TripSightDal.update(req.body)
        res.send(user)
    })
    gets = (async (req, res) => {
const {tripsiteId}=req.params
        const user = await TripSightDal.Gettripsitesbytipid(tripsiteId)
        console.log(user)
        res.send(user)
    })
}
const TripSightclass = new TripSight();
module.exports = TripSightclass;
