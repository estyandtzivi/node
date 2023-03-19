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
      idimage: {//idsites,idimage,for,acces,bicycles,tripstype,description,truffic,area,tripid,payment,level,duration,place1,place2,address,name

        type: DataTypes.INTEGER,
      },
      
      acces: {
       
        type: DataTypes.BOOLEAN ,
        defaultValue: false,
      },
      bicycles: {
       
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      
      tripstype: {
       
        type: DataTypes.ENUM('around','lines','riding'),
        
      },
    
      description: {
       
        type: DataTypes.STRING,
        
      },
      truffic: {
       
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      area: {
       
        type: DataTypes.ENUM('north', 'South' ,'JerusalemSurroundingArea','center'),
        
      },

      tripid: {
       
        type: DataTypes.INTEGER,
        
      },

      payment: {
        type: DataTypes.INTEGER,
      },

      level: {
        type: DataTypes.ENUM('hard', 'easy' ,'medium'),
      },

      duration: {
        type: DataTypes.INTEGER,
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

      name: {
        type: DataTypes.STRING,
      },
    
    
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

// 
