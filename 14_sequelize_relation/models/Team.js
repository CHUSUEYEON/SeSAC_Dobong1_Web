const TeamModel = function (sequelize, DataTypes) {
  const Team = sequelize.define(
    "Team",
    {
      team_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(63),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return Team;
};

module.exports = TeamModel;
