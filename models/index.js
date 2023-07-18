
const dbConfig = require('../config/dbConfig');
const { Sequelize, DataTypes } = require('sequelize');
const applyExtraSetup = require("./extra")

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.USER,
  dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
 
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle

  }
}
)

sequelize.authenticate().then(() => {
   console.log( "hy"
   ,new Sequelize(
    dbConfig.DB,),
    )
  console.log('Connection has been established successfully.');
 
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});


const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.tripSite = require('./tripSites')(sequelize, DataTypes)
db.category = require('./category')(sequelize, DataTypes)
db.siteCategory = require('./siteCategory')(sequelize, DataTypes)
db.constrains = require('./constrains')(sequelize, DataTypes)
db.images = require('./images')(sequelize, DataTypes)
db.opinion = require('./opinion')(sequelize, DataTypes)
db.sites = require('./sites')(sequelize, DataTypes)
db.trip = require('./trip')(sequelize, DataTypes)
db.users = require('./users')(sequelize, DataTypes)
db.generalopinions = require('./generalopinions')(sequelize, DataTypes)
applyExtraSetup(sequelize)
db.sequelize.sync({ alter: true })
  .then(() => {
    console.log('yes re-sync done!')
  })
module.exports = db

