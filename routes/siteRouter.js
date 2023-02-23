const express=require("express")
const siteRouter = express.Router();
const sitescontrollers = require("../controllers/sites");
 //site
//  siteRouter.route("/")
//  .get(sitescontrollers.GetMostVisitedSietes)
 siteRouter.route("/:sightId")
 .get(sitescontrollers.getsitebyid)
 .delete(sitescontrollers.deletesite)
 
 siteRouter.route("/")
 .post(sitescontrollers.postSite)
 .get(sitescontrollers.getall)
 .put(sitescontrollers.update)
//  .get(sitescontrollers.getsitesbytripid)

 

 module.exports = siteRouter;
