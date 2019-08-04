const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    'mongodb://root:GIXUdCnnJ8Guq6oD@cluster-node-udemy-shard-00-00-nejdy.mongodb.net:27017,cluster-node-udemy-shard-00-01-nejdy.mongodb.net:27017,cluster-node-udemy-shard-00-02-nejdy.mongodb.net:27017/shop?ssl=true&replicaSet=Cluster-Node-Udemy-shard-0&authSource=admin&retryWrites=true&w=majority')
    .then(client => {
      console.log('Conected!');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb() = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found !';
};


exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

//root - mongo log
//GIXUdCnnJ8Guq6oD - mongo pass
//mongodb://root:<password>@cluster-node-udemy-shard-00-00-nejdy.mongodb.net:27017,cluster-node-udemy-shard-00-01-nejdy.mongodb.net:27017,cluster-node-udemy-shard-00-02-nejdy.mongodb.net:27017/test?ssl=true&replicaSet=Cluster-Node-Udemy-shard-0&authSource=admin&retryWrites=true&w=majority