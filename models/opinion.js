module.exports = (sequelize, DataTypes) => {
    const opinion = sequelize.define(
      "opinion",
      {
        idopinion: {
          primaryKey:true,

          type: DataTypes.INTEGER,
          allowNull: false,
        },
        
        user_opinion: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        userid: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        siteid: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        timestamps: false,
      }
    );
  
    return opinion;
  };
