module.exports = (sequelize, DataTypes) => {
    const category = sequelize.define(
      "category",
      {
        idcategory: {
          primaryKey:true,
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
        } ,
        type: {
           
            type: DataTypes.STRING,
            allowNull: false,
          } 

     },
        
     
      {
        timestamps: false,
      }
    );
  
    return category;
  };
  // num_of_turist: 
  // ages: 
  // bicycles: 
  // childern:
  // tripsKind: 
  // description:
  // trufic:
  // area: 