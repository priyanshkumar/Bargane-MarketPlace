module.exports = function(sequelize, DtatTypes) {
  var Cart = sequelize.define("Cart", {
    tax: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    shipping: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  });
  return Cart;
};
