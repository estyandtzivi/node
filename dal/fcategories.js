
const { sites } = require("../models/index");
const db = require("../models/index");
const dbName = db.category

async function Getcategoryidbytype(type) {
    console.log(type)
    const c = await dbName.findAll({ attributes: ["idcategory","type"],
        where: { type: type } })
    console.log(c)
    return c;
 }
 
 



module.exports = {
  
   
    
    Getcategoryidbytype
  
    
    }
    