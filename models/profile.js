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
          args: [10],
          msg: "The Incorrect Phone"
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
    PCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    province: { type: DataTypes.STRING, allowNull: false }
  });

  Profile.associate = function(models) {
    Profile.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Profile;
};
