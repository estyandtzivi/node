const db = require("../models/index");
const dbname = db.constrains;
async function postconstrains(co,id) {
    console.log(co)
      const{   num_of_turist, ages,bicycles,childern,tripsKind,description,trufic,area,payment}=co
        const tripid=id
     
    const c = await dbname.create({   num_of_turist, ages,bicycles,childern,tripsKind,description,trufic,area,tripid,payment})
    return c;
}
async function getconstrainsbytripid(tripid) {
    console.log(tripid)
    const c = await dbname.findAll({ where: { tripid: tripid } })
    return c;
}

module.exports = {
    postconstrains,
    getconstrainsbytripid
}