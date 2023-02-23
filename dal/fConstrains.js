const db = require("../models/index");
const dbname=db.constrains;
async function postconstrains(co){
    const c=await dbname.create(co)
    return c;
}
async function getconstrainsbytripid(tripid){
    const c=await dbName.findAll({where:{tripid:tripid}})
    return c;
}

module.exports={
    postconstrains,
    getconstrainsbytripid
  }