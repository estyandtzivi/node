module.exports = (sequelize, DataTypes) => {
    const trip_sites = sequelize.define(
      "trip_sites",
      {
        
        idtrip_site: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
          allowNull: false,
        },
        idtrip: {
          
          type: DataTypes.INTEGER,
          allowNull: false,
          
        },
        idsite: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        number_in_trip: {
          type: DataTypes.INTEGER,
        },
      },
      {
        timestamps: false,
      }
    );
  
    return trip_sites;
  };
// //{
//   "idtrip_sites": 2,
//   "idtrip": 1,
//   "idsite": 1,
//   "number_in_trip": 4
  
// }{
//   "idtrip":"1" ,
//   "idsite":"1" ,
//   "number_in_trip": "6"
// }idtrip,idsite,number_in_trip