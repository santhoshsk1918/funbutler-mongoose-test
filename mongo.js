const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://santhosh:santhosh@cluster0.j5z2f.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);

const randomPingTenents = async (connection) => {
    for (var i = 0; i < 1000; i++) {
      let database = await getRandonDbConnection(connection);
      console.log(database);
      const db = connection.db(database);
      const col1 = db.collection("col1");
      const col2 = db.collection("col2");
      const col3 = db.collection("col3");
      const col4 = db.collection("col4");
      const col5 = db.collection("col5");

      let a = col1.find();
      let a1 = col2.find();
      let a2 = col3.find();
      let a3 = col4.find();
      let a4 = col5.find();
    }
  };

const getRandonDbConnection = async (connection) => {
    let db = `app${Math.floor(Math.random() * (1000 - 0 + 1) + 0)}`;
    return db;
  };

async function main() {
    const url = 'mongodb+srv://santhosh:santhosh@cluster0.j5z2f.mongodb.net/?retryWrites=true&w=majority';
    const client = new MongoClient(url);
    await client.connect();
    await randomPingTenents(client);
  }

  main()