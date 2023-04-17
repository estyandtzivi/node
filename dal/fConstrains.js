const db = require("../models/index");
const dbname = db.constrains;
async function postconstrains(co,id) {
    console.log(co)
      const{   acces,bicycles,tripstype,description,truffic,area,payment,level}=co
        const tripid=id
     
    const c = await dbname.create({   acces,bicycles,tripstype,description,truffic,area,tripid,payment,level})
    return c;
}
async function getconstrainsbytripid(tripid) {
    console.log(tripid)
    const c = await dbname.findAll({ where: { tripid: tripid } })
    return c;
}
async function deleteconstrains(id) {
    if (!id) {
      return res.status(400).json({ message: 'note ID required' })
    }
    await dbName.destroy({
      where: {
        idconstrains: id
      }
    })
  }
  async function update(user,id) {
    const { acces,bicycles,tripstype,description,truffic,area,tripid,payment,level } = user
  
    // Confirm data
  
    const note = await dbName.update({acces,bicycles,tripstype,description,truffic,area,tripid,payment,level}, { where: { idconstrains: id } })
  
    if (!note) {
      return res.status(400).json({ message: 'note not found' })
    }
  
  
    return note;
  }
module.exports = {
    postconstrains,
    getconstrainsbytripid,
    deleteconstrains,
    update
}