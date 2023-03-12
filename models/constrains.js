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
        num_of_turist: {
         
          type: DataTypes.INTEGER,
          
        },
        ages: {
         
          type: DataTypes.STRING,
          
        },
        bicycles: {
         
          type: DataTypes.INTEGER,
          
        },
        childern: {
         
          type: DataTypes.INTEGER,
          
        },
        tripsKind: {
         
          type: DataTypes.STRING,
          
        },
        description: {
         
          type: DataTypes.STRING,
          
        },
        trufic: {
         
          type: DataTypes.STRING,
          
        },
        area: {
         
          type: DataTypes.STRING,
          
        },
        tripid: {
         
          type: DataTypes.INTEGER,
          
        },
        
      },
      {
        timestamps: false,
      }
    );
  
    return constrains;
  };
  // num_of_turist: 
  // ages: 
  // bicycles: 
  // childern:
  // tripsKind: 
  // description:
  // trufic:
  // area: 