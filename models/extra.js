//const { sequelize } = require("./index");

const applyExtraSetup = (sequelize) => {
  const {site_category,category, images, sites, opinion, users, trip_sites, trip, constrains } = sequelize.models;

  
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
  category.belongsToMany(sites, {
    through: 'site_category',
    as: "sites",
    foreignKey: "idcategory",
  });
  
  sites.belongsToMany(category, {
    through: 'site_category',
    as: "category",
    foreignKey: "idsite",
  });
  // sites.belongsToMany(category, { as: 'category', through: 'site_category' });
  // category.belongsToMany(sites, { as: 'sites', through: 'site_category' });



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
