
const express=require("express")
const tripSiteRouter = express.Router();//

const TripSitecontrollers = require("../controllers/tripSite");
 //TripSite

 
 tripSiteRouter.route("/")
 .put(TripSitecontrollers.update)
 .get(TripSitecontrollers.GetAllTripSight)
.post(TripSitecontrollers.AddSites)
// .get(TripSitecontrollers.GetAllTripSight)

tripSiteRouter.route("/:tripsiteId")
.get(TripSitecontrollers.GetSitesById)///////
.delete(TripSitecontrollers.deletetripsite)
// router.get('/:id', noteController.getOneNote)
module.exports = tripSiteRouter;