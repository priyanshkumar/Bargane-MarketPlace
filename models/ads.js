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
    }
  });

  ADS.associate = function(models) {
    ADS.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return ADS;
};
