const TripDal = require("../dal/fTrip");
class Trip {

  postTrip = (async (req, res) => {
console.log(req.body)

    const trip = await TripDal.posttrip(req.body)
    res.send(trip)

    // res.send(listofsites);
  })
  GetTripByuserId = (async (req, res) => {
    //GetSighsById 
    // console.log(req.user)
     const { userid} = req.params;


    const db = await TripDal.GetTripByuserId(userid)
    res.send(db)
  })
  deletetrip = (async (req, res) => {
    const { userid } = req.params

    await TripDal.deletetrip(userid)
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
