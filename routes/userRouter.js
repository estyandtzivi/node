const express=require("express")
const userRouter = express.Router();
const Userscontrollers = require("../controllers/users");
//user
userRouter.route("/")
 
.put(Userscontrollers.update)
userRouter.route("/:userId")
.delete(Userscontrollers.deleteuser)
 module.exports = userRouter;