module.exports = (sequelize, DataTypes) => {
    const trip = sequelize.define(
      "trip",
      {
        idtrips: {
          primaryKey:true,

          type: DataTypes.INTEGER,
         
        },
        
        area: {
          type: DataTypes.STRING,
          
        },
        userId: {
          type: DataTypes.INTEGER,
          
        },
        begin_point1: {
          type: DataTypes.FLOAT,
          
        },
        begin_point2: {
          type: DataTypes.FLOAT,
          
        },
        end_point1: {
          type: DataTypes.FLOAT,
          
        },
        end_point2: {
          type: DataTypes.FLOAT,
         
        },
        date: {
          type: DataTypes.DATE,
          
        },
        
      },
      {
        timestamps: false,
      }
    );
  
    return trip;
  };
//   //{
//     "idtrip": 1,
        
//     "area":null,
//     "userId":null,
//     "begin_point2": null
//     ,
//     "end_point1": null,
//     "end_point2": null,
//     "date":null
    
// }
        
