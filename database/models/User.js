const connection = require("../connection");
const Sequelize = require("sequelize");
const { UUID, UUIDV4, STRING } = Sequelize;
// const { Post, associate } = require("./Post");

// Creating table schemas for user
const User = connection.define("user", {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4,
    allowNull: false,
  },
  firstName: {
    type: STRING,
    allowNull: false,
  },
  lastName: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allownull: false,
  },
  password: {
    type: STRING,
    allownull: false,
  },
});

// // user can have many posts
User.associate = (models) => {
  User.hasMany(models.Post, {
    foreignKey: "user_id",
    as: "post",
  });
};

module.exports = User;
