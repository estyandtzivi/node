const express = require("express")
const siteRouter = express.Router();
const sitescontrollers = require("../controllers/sites");
const verifyJWT = require("../middleware/verifyJWT")
const c=require("../dal/fsitecategory")
//site
siteRouter.route("/constrains")
    .post(sitescontrollers.getsitesbyconstrains)
    .get(sitescontrollers.GetMostVisitedSietes)
//  siteRouter.route("/")
//  .get(sitescontrollers.GetMostVisitedSietes)
siteRouter.route("/:sightid")
    .get(sitescontrollers.getsitebyid)
    .delete(sitescontrollers.deletesite)
    .put(sitescontrollers.update)
// .get(c.GetcategorySitesbyidcategory)
siteRouter.route("/")
    .post(sitescontrollers.postSite)
    .get(sitescontrollers.getall)
    siteRouter.route("/MostVisitedSietes")
   
    

//  .get(sitescontrollers.getsitesbytripid)



module.exports = siteRouter;
