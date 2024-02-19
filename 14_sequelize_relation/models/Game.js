const GameModel = function (sequelize, DataTypes) {
  const Game = sequelize.define(
    "Game",
    {
      Game_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING(63),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return Game;
};

module.exports = GameModel;
