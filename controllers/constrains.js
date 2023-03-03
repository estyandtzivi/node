const ConstrainsDal = require("../dal/fConstrains");
class Constrains {

    postconstrains = (async (req, res) => {
        const c = ConstrainsDal.postconstrains(req.body)
        res.send(c)
    })

}
const Constrainsclass = new Constrains();
module.exports = Constrainsclass;