module.exports = (sequelize, DataTypes) => {
    const images = sequelize.define(
      "images",
      {
        idimages: {
          primaryKey:true,
          autoIncrement:true,
          type: DataTypes.INTEGER,
          
        },
        url: {
          type: DataTypes.STRING,
           
        },
       
       
      },
      {
        timestamps: false,
      }
    );
  
    return images;
  };
  
