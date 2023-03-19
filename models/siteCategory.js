module.exports = (sequelize, DataTypes) => {
    const site_category = sequelize.define(
      "site_category",
      {
        
        id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
          allowNull: false,
        },
        idcategory: {
          
          type: DataTypes.INTEGER,
          allowNull: false,
          
        },
        idsite: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      
      },
      {
        timestamps: false,
      }
    );
  
    return site_category;
  };