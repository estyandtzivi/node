module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      idusers: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mail: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );

  return users;
};
