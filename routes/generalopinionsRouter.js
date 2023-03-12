const express=require("express")
const generalopinionRouter = express.Router();//

const generalopinioncontrollers = require("../controllers/generalopinion");
 //opinion
 generalopinionRouter.route("/")
 .post(generalopinioncontrollers.AddOpinion)
 .get(generalopinioncontrollers.GetTheTenMostLevel)
 generalopinionRouter.route("/:opinionid")
 .delete(generalopinioncontrollers.deleteopinion)
 .get(generalopinioncontrollers.GetOpinionById)
 //////
 
 
 module.exports = generalopinionRouter;

 