const Visitor = function (Sequelize, DataTypes) {
  // Sequelize 는 model/index.js 의 sequelize
  // Datatypes 는 mode/index.js의 Sequelize

  //   const model = Sequelize.define(params1, params2, params3);

  //   params1: 모델 이름 설정
  //   params2: 컬럼을 정의, (CREATE TABLE 제약조건)
  //   params3: 모델 옵션

  const model = Sequelize.define(
    "Visitor",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT("medium"),
      },
    },
    {
      tableName: "visitor",
      timestamps: false,
      freezeTableName: true, // 테이블명을 단수로 쓰면 자동적으로 복수형으로 바뀜. 이것을 방지하는 것이 freezeTableName!
      // true로 하면 복수형으로 안 바뀌고 내가 설정한 이름 그대로 됨.
    }
  );

  return model;
};

module.exports = Visitor;
