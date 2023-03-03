const db = require("../models/index");
const dbName = db.users;

const trip = require('./fTrip');


async function deleteuser(id) {
  // Confirm data
  if (!id) {
    return res.status(400).json({ message: 'note ID required' })
  }
    await trip.deletetrip(id);
    await dbName.destroy({
    where: {
      idusers: id
    }
  })
}

async function update(user) {
  const { idusers, username, password, mail } = user

  // Confirm data

  const note = await dbName.update({ username, password, mail }, { where: { idusers: idusers } })

  if (!note) {
    return res.status(400).json({ message: 'note not found' })
  }


  return note;
}




module.exports = {
 deleteuser,
  update,

}
