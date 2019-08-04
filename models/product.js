const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class Product {
  constructor(title, price, imageUrl, description, id) {
    this.title = title;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
    this._id = id;
  }

  save() {
    const db = getDb();
    let dbOp;
    if (this._id) {
      dbOp = db
        .collection('products')
        .updateOne({ _id: new mongodb.ObjectID(this._id)}, {$set: this}); //$set: {title: this.title, ....}
    } else {
      dbOp = db.collection('products').insertOne(this)
    }
    return dbOp
      .then(result => { console.log(result) })
      .catch(err => { console.log(err) });
  }

  static fetchAll() {
    const db = getDb();
    return db
    .collection('products')
    .find()
    .toArray()
    .then(products => {
      console.log(products);
      return products;
    })
    .catch(err => { console.log(err) });
  }

  static findById (profId) {
    const db = getDb();
    return db
      .collection('products')
      .find({ _id: new mongodb.ObjectID(profId) })
      .next()
      .then(product => {
        console.log(product);
        return product;
      })
      .catch(err => { console.log(err) })
  }
}


module.exports = Product;
