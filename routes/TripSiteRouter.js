
const express=require("express")
const tripSiteRouter = express.Router();//

const TripSitecontrollers = require("../controllers/tripSite");
 //TripSite

 
 tripSiteRouter.route("/")
 .put(TripSitecontrollers.update)
.post(TripSitecontrollers.AddSites)
// .get(TripSitecontrollers.GetAllTripSight)

tripSiteRouter.route("/:tripsiteId")
.delete(TripSitecontrollers.deletetripsite)
// router.get('/:id', noteController.getOneNote)
module.exports = tripSiteRouter;