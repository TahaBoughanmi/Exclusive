const { Sequelize, DataTypes } = require("sequelize");

const dbName = "exclusive";
const dbUser = "root";
const dbPass = "root";
const dbHost = "localhost";

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
  host: dbHost,
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected database");
  })
  .catch((error) => {
    console.error("failed to connect to the database:", error);
  });

const User = require("../Models/User")(sequelize, DataTypes);
const Product = require("../Models/Products")(sequelize, DataTypes);
const Order=require("../Models/Order")(sequelize,DataTypes);
const Wishlist=require("../Models/Wishlist")(sequelize,DataTypes)
// sequelize
//   .sync()
//   .then(() => {
//     console.log("Tables created successfully!");
//   })
//   .catch((error) => {
//     console.error("Unable to create tables:", error);
//   });

  const db = {};

  db.connection = sequelize;
  db.Sequelize = Sequelize;
  
  db.User = User;
  db.Product = Product;
  db.Order=Order;
  db.Wishlist=Wishlist

  db.User.hasMany(db.Order,{foreignKey: 'userId'});
  db.Order.belongsTo(db.User,{foreignKey: 'userId'})
  
  db.User.hasOne(db.Wishlist,{foreignKey: 'userId'})
  db.Wishlist.belongsTo(db.User,{foreignKey: 'userId'})
  // export your Model Phrase below
  module.exports = db;


