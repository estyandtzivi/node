
const express=require("express")
const tripRouter = express.Router();//

const Tripcontrollers = require("../controllers/trip");

const verifyJWT=require("../middleware/verifyJWT")
 //trip
 
 tripRouter.route("/:userid")
 .get(Tripcontrollers.GetTripByuserId) 
 .delete(Tripcontrollers.deletetrip)
  .put(Tripcontrollers.update)
 tripRouter.route("/")
 .post(Tripcontrollers.postTrip)
 
 



module.exports = tripRouter;

