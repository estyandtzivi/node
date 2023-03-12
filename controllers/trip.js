const TripDal = require("../dal/fTrip");
class Trip {

  postTrip = (async (req, res) => {


    const trip = await TripDal.posttrip(req.body)
    res.send(trip)

    // res.send(listofsites);
  })
  GetTripByuserId = (async (req, res) => {
    //GetSighsById 
    const { tripid } = req.params


    const db = await TripDal.GetTripByuserId(tripid)
    res.send(db)
  })
  deletetrip = (async (req, res) => {
    const { tripid } = req.params

    await TripDal.deletetrip(tripid)
    res.send("delete")

  })
  update = (async (req, res) => {
    const id = req.params
    const user = await TripDal.update(req.body, id)
    res.send(user)
  })

}
const Tripclass = new Trip();
module.exports = Tripclass;