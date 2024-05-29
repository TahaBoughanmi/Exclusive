const { Sequelize, DataTypes } = require("sequelize");

const dbName = "exclusive";
const dbUser = "root";
const dbPass = "roots";
const dbHost = "localhost";
const sequelize = new Sequelize(dbName, dbUser, dbPass, {
  host: dbHost,
  dialect: "mysql",
});

const db = {};
db.connection = sequelize;
db.Sequelize = Sequelize;

const User = require("../Models/User")(sequelize, DataTypes);
const Product = require("../Models/Products")(sequelize, DataTypes);
const Order=require("../Models/Order")(sequelize,DataTypes);
const Wishlist=require("../Models/Wishlist")(sequelize,DataTypes)

db.User = User;
db.Product = Product;
db.Order=Order;
db.Wishlist=Wishlist

db.User.hasMany(db.Order,{foreignKey: 'userId'});
db.Order.belongsTo(db.User,{foreignKey: 'userId'})

db.User.hasOne(db.Wishlist,{foreignKey: 'userId'})
db.Wishlist.belongsTo(db.User,{foreignKey: 'userId'})

sequelize
  .authenticate()
  .then(() => {
    console.log("Database Connected ");
  })
  .catch((error) => {
    console.error("failed to connect to the database:", error);
  });

// sequelize
//   .sync({ force: true })
//   .then(() => {
//     console.log("Database & tables created!");
//   })
//   .catch((error) => {
//     console.error("Error creating database & tables:", error);
//   });



  // export your Model Phrase below
  module.exports = db;


