module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define("Profile", {
    fName: { type: DataTypes.STRING, allowNull: false },
    lName: { type: DataTypes.STRING, allowNull: false },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [10, 10],
          msg: "The password length should be between 7 and 42 characters."
        }
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    province: { type: DataTypes.STRING, allowNull: false },
    country: { type: DataTypes.STRING, allowNull: false }
  });
  return Profile;
};
