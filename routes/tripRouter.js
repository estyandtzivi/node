
const express=require("express")
const tripRouter = express.Router();//

const Tripcontrollers = require("../controllers/trip");


 //trip
 
 tripRouter.route("/:tripid")
 .get(Tripcontrollers.GetTripById) 
 .delete(Tripcontrollers.deletetrip)
  .put(Tripcontrollers.update)
 tripRouter.route("/")
 .post(Tripcontrollers.postTrip)
 
 



module.exports = tripRouter;


