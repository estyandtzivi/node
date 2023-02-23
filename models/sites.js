module.exports = (sequelize, DataTypes) => {
    const sites = sequelize.define(
      "sites",
      {
        idsites: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        idimage: {

          type: DataTypes.INTEGER,
        },
        
        num_of_turist: {
          type: DataTypes.STRING,
         
        },
        ages: {
          type: DataTypes.STRING,
        },
        children: {
          type: DataTypes.TINYINT,
        },
        discription: {
          type: DataTypes.STRING,
        },
        time_it_takes: {
          type: DataTypes.STRING,
        },
        accible: {
          type: DataTypes.TINYINT,
        },
        place1: {
          type: DataTypes.FLOAT,
        },
        place2: {
          type: DataTypes.FLOAT,
        },
        address: {
          type: DataTypes.STRING,
        },
        // constrainsId: {
        //   type: DataTypes.INT,
        // },

      },
      {
        timestamps: false,
      }
    );
  
    return sites;
  };
  // //{
  //   "idsites": 1,
  //   "idimage":1,
    
  //   "num_of_turist": null
     
  //   ,
  //   "ages":null,
  //   "children":null,
  //   "discription": null,
  //   "time_it_takes":null,
  //   "accible": null,
  //   "address": null
  //   // constrainsId: {
  //   //   type: DataTypes.INT,
  //   // },

  // }
