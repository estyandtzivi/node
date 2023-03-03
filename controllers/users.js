const userDal = require("../dal/fUsers");
class Users {
    deleteuser = (async (req, res) => {
        const { userId } = req.params
        console.log(":")
        await userDal.deleteuser(userId)
        res.send("deleteuser")
    })

    update = (async (req, res) => {

        const user = await userDal.update(req.body)
        res.send(user)
    })



}
const UserClass = new Users();
module.exports = UserClass;