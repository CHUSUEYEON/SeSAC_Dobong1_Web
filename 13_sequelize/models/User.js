const User = function (sequelize, DataTypes) {
  return sequelize.define(
    // id INT NOT NULL PRIMARY KEY AUTO_INCREMENT (mysql)를 sequlize를 이용하여 정의함.
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      //userid VARCHAR(20) NOT NULL
      userid: {
        type: DataTypes.STRING(20),
        allowNULL: false,
      },
      //name VARCHAR(20) NOT NULL
      name: {
        type: DataTypes.STRING(20),
        allowNULL: false,
      },
      //pw  VARCHAR(20) NOT NULL
      pw: {
        type: DataTypes.STRING(20),
        allowNULL: false,
      },
    },
    {
      tableName: "user",
      freezeTableName: true,
      timestamps: false,
    }
  );
};

module.exports = User;
