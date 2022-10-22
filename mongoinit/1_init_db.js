db.createUser({
  user: process.env.MONGO_INITDB_ACCESS_USR,
  pwd: process.env.MONGO_INITDB_ACCESS_PWD,
  roles: [
      {
        role: 'readWrite',
        db: 'testDB'
      }
  ],
});

confDb = new Mongo().getDB("configurations");

confDb.createUser({
user: process.env.MONGO_INITDB_ACCESS_USR,
pwd: process.env.MONGO_INITDB_ACCESS_PWD,
roles: [
    {
      role: 'readWrite',
      db: 'configurations'
    }
],
});

confDb.createCollection("credentials", { capped: false });

confDb.credentials.insert([
  {
    "_id": "248803b5-5880-4e76-b805-4437adbee208",
    "username": process.env.MONGO_INITDB_ACCESS_USR,
    "password": process.env.MONGO_INITDB_ACCESS_PWD,
    "database": "testDB",
    "ip": process.env.MONGODB_IP,
    "port": NumberInt(process.env.MONGODB_PORT)
  }
])

db = new Mongo().getDB("testDB");

db.createCollection('characters', { capped: false });
db.createCollection('items', { capped: false });
db.createCollection('backgrounds', { capped: false });
db.createCollection('feats', { capped: false });
db.createCollection('players', { capped: false });
db.createCollection('classes', { capped: false });
db.createCollection('spells', { capped: false });