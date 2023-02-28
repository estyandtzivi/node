const express=require("express")
const siteRouter = express.Router();
const sitescontrollers = require("../controllers/sites");
const verifyJWT = require("../middleware/verifyJWT")
//site
//  siteRouter.route("/")
//  .get(sitescontrollers.GetMostVisitedSietes)
 siteRouter.route("/:sightId")
 .get(verifyJWT,sitescontrollers.getsitebyid)
 .delete(verifyJWT,sitescontrollers.deletesite)
 
 siteRouter.route("/")
 .post(sitescontrollers.postSite)
 .get(sitescontrollers.getall)
 .put(sitescontrollers.update)
//  .get(sitescontrollers.getsitesbytripid)

 

 module.exports = siteRouter;
