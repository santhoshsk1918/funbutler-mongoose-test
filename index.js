const mongoose = require("mongoose");
let dbList = []

const schema = {
    updatedAt: { type: Date},
    content: { type: Date },
}

const randomPingTenents = async (connection) => {
  for(var i=0; i<1000; i++) {
    let database = await getRandonDbConnection(connection);
    let col1 = database.model("col1")
    let col2 = database.model("col2")
    let col3 = database.model("col3")
    let col4 = database.model("col4")
    let col5 = database.model("col5")
    
    let a = col1.find();
    let a1 = col2.find();
    let a2 = col3.find();
    let a3 = col4.find();
    let a4 = col5.find();
    
  }
}


const getRandonDbConnection = async (connection) => {
    let db = `app${Math.floor(Math.random() * (1000 - 0 + 1) + 0)}`
    let database = connection.useDb(db, {noListener: true, useCache: true});
    if(!dbList.includes(db)) {
      dbList.push(db);
      for(var i=0; i<10; i++) {
        database.model(`col${i}`, schema);
      }
    }
    
    return database;
}

async function main() {
  let connecton = await mongoose
    .createConnection(
      "mongodb+srv://santhosh:santhosh@cluster0.j5z2f.mongodb.net/?retryWrites=true&w=majority",
      {
        minPoolSize: 1,
        maxPoolSize: 10,
      }
    )
    .asPromise();

    await randomPingTenents(connecton);
}
main();