"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init(
    {
      name: DataTypes.TEXT,
      email: DataTypes.TEXT,
      phone: {
        type: DataTypes.STRING,
        get() {
          const phoneNumber = this.getDataValue("phone")
          if (phoneNumber && phoneNumber.startsWith("0")) {
            return "+62" + phoneNumber.substring(1)
          }
          return phoneNumber
        },
      },
    },
    {
      sequelize,
      modelName: "users",
    }
  )
  return user
}
