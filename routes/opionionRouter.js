const express=require("express")
const opinionRouter = express.Router();//

const opinioncontrollers = require("../controllers/opinion");
 //opinion
 opinionRouter.route("/")
 .post(opinioncontrollers.AddOpinion)
 .put(opinioncontrollers.update)
 opinionRouter.route("/:opinionid")
 .delete(opinioncontrollers.deleteopinion)
 .get(opinioncontrollers.GetOpinionById)
 //////
 
 
 module.exports = opinionRouter;
