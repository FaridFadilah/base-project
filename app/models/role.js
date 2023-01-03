'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.belongsToMany(models.user, {
        through: 'user_roles',
        foreignKey: 'userId',
        otherKey: 'roleId'
      })
    }
  }
  User.init({
    name: DataTypes.STRING,
  },{
    sequelize,
    modelName: 'role',
  });
  return User;
};