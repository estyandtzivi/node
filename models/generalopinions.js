module.exports = (sequelize, DataTypes) => {
    const generalopinions = sequelize.define(
      "generalopinions",
      {
        idopinion: {
          primaryKey: true,
  
          type: DataTypes.INTEGER,
          allowNull: false,
        },
  
       opinion: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        level: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        
       
      },
      {
        timestamps: false,
      }
    );
  
    return generalopinions;
  };
  