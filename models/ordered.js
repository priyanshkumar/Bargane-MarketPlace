modeule.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define("Order", {
    Oproducts: {
      type: DataTypes.STRING,
      allowNull: false
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  });
  return Order;
};
