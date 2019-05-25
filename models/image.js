module.exports = function(sequelize, DataTypes) {
  var Image = sequelize.define("ad", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    logo: {
      type: DataTypes.BLOB,
      allowNull: false
    }
  });
  return Image;
};
