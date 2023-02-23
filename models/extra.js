//const { sequelize } = require("./index");

const applyExtraSetup = (sequelize) => {
  const { images, sites, opinion, users,trip_sites,trip, constrains} = sequelize.models;
  //sites.belongsTo(images, { foreignKey: "idimage", as: "sites" });
  sites.belongsTo(images, { foreignKey: "idimage", as: "images" });
  // opinion.belongsTo(users, { foreignKey: "userid", as: "user" });
  // opinion.belongsTo(sites, { foreignKey: "siteid", as: "site" });
  // trip.belongsTo(users, { foreignKey: "userid", as: "users" });
  // trip_sites.belongsTo(trip, { foreignKey: "idtrip", as: "trip" });
  // trip_sites.belongsTo(sites, { foreignKey: "idsite", as: "trip" });

  images.hasMany(sites, { foreignKey: "idimage", as: "sites" });
  // users.hasMany(opinion, { foreignKey: "userid", as: "opinion" });
  // sites.hasMany(opinion, { foreignKey: "siteid", as: "opinion" });
  // users.hasMany(trip, { foreignKey: "userid", as: "trip" });
  // trip.hasMany(trip_sites, { foreignKey: "idtrip", as: "trip_site" });
  // sites.hasMany(trip_sites, { foreignKey: "idsite", as: "trip_site" });
};

module.exports = applyExtraSetup ;
