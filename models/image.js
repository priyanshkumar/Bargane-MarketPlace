module.exports = function(sequelize, DataTypes) {
  var Image = sequelize.define("Image", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    logo: {
      type: DataTypes.BLOB,
      allowNull: false
    }
  });

  Image.associate = function(models) {
    Image.belongsTo(models.Ad, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Image;
};
