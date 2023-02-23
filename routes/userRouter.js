const express=require("express")
const userRouter = express.Router();
const Userscontrollers = require("../controllers/users");
//user
userRouter.route("/")
 
.put(Userscontrollers.update)
userRouter.route("/:userId")
.delete(Userscontrollers.deleteuser)
userRouter.route("/:userId")
 .get(Userscontrollers.GetUserById)
 userRouter.route("/")//:tripId
//  .post(Userscontrollers.AddTripToUser)//////
 

 module.exports = userRouter;