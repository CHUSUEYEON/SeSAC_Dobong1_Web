const TeamGameModel = function (sequelize, DataTypes) {
  const TeamGame = sequelize.define(
    "TeamGame",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return TeamGame;
};

module.exports = TeamGameModel;
