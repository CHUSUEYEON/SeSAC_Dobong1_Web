"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
//config에 있는 development 라는 객체[]를 가져오기 위해.
const db = {};

// (1)Sequelize 클래스를 이용하여 sequelize 인스턴스 생성
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// (2) 모델 불러오기, sequelize 인스턴스와 sequelize 모듈을 전달
const PlayerModel = require("./Player")(sequelize, Sequelize);
const ProfileModel = require("./Profile")(sequelize, Sequelize);
const TeamModel = require("./Team")(sequelize, Sequelize);
const GameModel = require("./Game")(sequelize, Sequelize);
const TeamGameModel = require("./TeamGame")(sequelize, Sequelize);

// (3) 모델간 관계 설정 (관계 설정을 먼저 하고, 이후에 짜는 게 나음)
// hasOne, hasMany, belongsTo, belongsMany

// 3-1) 1:1 관계 설정, Player:Profile
// Player의 Pk가 Profile의 fk가 된다.
// Profile은 Player에 속해있다.(belongs to)
PlayerModel.hasOne(ProfileModel, {
  //두 모델을 연결하는 키 설정
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
  foreignKey: "player_id",
});
ProfileModel.belongsTo(PlayerModel, {
  //두 모델을 연결하는 키 설정
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
  foreignKey: "player_id",
});

// 3-2) 1:다 관계 설정, Team:Player
// 한 팀에 여러 플레이어가 "속해있음"
TeamModel.hasMany(PlayerModel, {
  sourceKey: "team_id",
  foreignKey: "teamid",
});
PlayerModel.belongsTo(TeamModel, {
  traget: "team_id",
  foreignKey: "teamid",
});

// 3-3) 다:다 관계 설정, Game:Team
// 하나의 팀은 여러 경기를 할 수 있고,
// 하나의 경기에는 여러팀(2팀)이 참여
TeamModel.belongsToMany(GameModel, {
  through: TeamGameModel,
  foreignKey: "team_id",
});
GameModel.belongsToMany(TeamModel, {
  through: TeamGameModel,
  foreignKey: "game_id",
});

// (4) db객체에 models 추가하는 작업!!
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Player = PlayerModel;
db.Profile = ProfileModel;
db.Team = TeamModel;
db.Game = GameModel;
db.TeamGame = TeamGameModel;
//여기에 있는 디비를 컨트롤러에 가져다 쓰는 거임.

module.exports = db;

//나머지 5가지 모델을 관장하는 제이에스
