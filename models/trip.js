module.exports = (sequelize, DataTypes) => {
    const trip = sequelize.define(
      "trip",
      {
        idtrips: {
          primaryKey:true,
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        
      
        userId: {
          type: DataTypes.INTEGER,
          
        },
        begin_point1: {
          type: DataTypes.INTEGER,
          
        },
        begin_point2: {
          type: DataTypes.FLOAT,
          
        },
        namestart:{
          type: DataTypes.STRING,

        },
        end_point1: {
          type: DataTypes.FLOAT,
          
        },
        end_point2: {
          type: DataTypes.FLOAT,
         
        },
        date: {
          type: DataTypes.DATEONLY,
          
        },
        payment: {
          type: DataTypes.STRING,
        },
         duration: {
          type: DataTypes.INTEGER,
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
// { 
//   "area": null,
//     "userId":1,
//     "begin_point1": null,
//     "begin_point2": "1",
//     "end_point1": "1",
//     "end_point2": null,
//     "date": null,
//     "listofsites":[1,2,4],
//     "constrains":{
//          "num_of_turist":"p",
//           "ages":"l",
//           "bicycles":"h",
//           "childern":null,
//           "tripsKind":null,
//           "description":null,
//           "trufic":"null",
//           "area":null
//         }
//     }
    
        
