module.exports = (sequelize, DataTypes) => {
  const constrains = sequelize.define(
    "constrains",
    {
      idconstrains: {
        primaryKey:true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
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
      
      
    },
    {
      timestamps: false,
    }
  );

  return constrains;
};
// {
//   "acces":false,
//   "bicycles":false,
//   "tripstype":["around","lines"],
//   "description":null,
//   "truffic":false,
//   "area":["north"],
//   "payment":50,
//   "level":["easy","hard"]
// "categories":[1,2,3] 
// }

// {
//   "idimage": 1,      
//   "acces":false,
//   "bicycles":false,      
//   "tripstype":"around" ,
//   "description": null,
//   "truffic": false,
//   "area": "north",
//   "tripid":null ,
//   "payment": 20,
//   "level": "hard",
//   "duration":1 ,    
//   "place1": 1,

//   "place2": 2,
//   "address":"de" ,
//   "name": "mapal anistar" ,

//   "categories":[1,2,3]    
// }