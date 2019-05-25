module.exports = function(sequelize, DataTypes) {
  var ADS = sequelize.define("Ad", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    quantity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    logo: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [10],
          msg: "Invalid Number"
        }
      }
    }
  });

  ADS.associate = function(models) {
    ADS.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  ADS.associate = function(models) {
    ADS.hasMany(models.Image, {
      onDelete: "cascade"
    });
  };
  return ADS;
};
