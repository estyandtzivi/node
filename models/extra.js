//const { sequelize } = require("./index");

const applyExtraSetup = (sequelize) => {
  const { images, sites, opinion, users, trip_sites, trip, constrains } = sequelize.models;

  trip.belongsToMany(sites, {
    through: trip_sites,
    as: "sites",
    foreignKey: "idtrip",
  });
  
  sites.belongsToMany(trip, {
    through: trip_sites,
    as: "trips",
    foreignKey: "idsite",
  });



  sites.belongsTo(images, { foreignKey: "idimage", as: "images" });
  opinion.belongsTo(users, { foreignKey: "userid", as: "user" });
  opinion.belongsTo(sites, { foreignKey: "siteid", as: "site" });
  // trip.belongsTo(users, { foreignKey: "userid", as: "users" });
  constrains.belongsTo(trip, { foreignKey: "tripid", as: "trip" });
  
  images.hasMany(sites, { foreignKey: "idimage", as: "sites" });
  users.hasMany(opinion, { foreignKey: "userid", as: "opinion" });
  sites.hasMany(opinion, { foreignKey: "siteid", as: "opinion" });
  trip.hasMany(constrains, { foreignKey: "tripid", as: "constrains" });
  
  // users.hasMany(trip, { foreignKey: "userid", as: "trip" });
  
};

module.exports = applyExtraSetup;
