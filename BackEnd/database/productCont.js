const db = require('./config')

module.exports = {
  getProducts: (req, res) => {
    db.Product.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  },
  addProduct: (req, res) => {
    db.Product.create(req.body)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  },
  getOneProduct: (req, res) => {
    db.Product.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  },
  remove: (req, res) => {
    db.Product.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  },
  update: (req, res) => {
    db.Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  },
};
