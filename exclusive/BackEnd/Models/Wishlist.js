module.exports = (connection, DataTypes) => {
    const Wishlist = connection.define("Wishlist", {
      products: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
    return Wishlist;
  };
  