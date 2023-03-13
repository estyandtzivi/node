const express=require("express")
const siteRouter = express.Router();
const sitescontrollers = require("../controllers/sites");
const verifyJWT = require("../middleware/verifyJWT")
//site
siteRouter.route("/constrains")
 .post(sitescontrollers.getsitesbyconstrains)
//  siteRouter.route("/")
//  .get(sitescontrollers.GetMostVisitedSietes)
 siteRouter.route("/:sightId")
 .get(sitescontrollers.getsitebyid)
 .delete(sitescontrollers.deletesite)
 
 siteRouter.route("/")
 .post(sitescontrollers.postSite)
.get(sitescontrollers.GetMostVisitedSietes)
 .put(sitescontrollers.update)
 
//  .get(sitescontrollers.getsitesbytripid)

 

 module.exports = siteRouter;
