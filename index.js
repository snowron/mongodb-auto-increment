const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient("mongodb://localhost:27017", { useNewUrlParser: true });
client.connect(function (err) {
  console.log("MONGO BAGLANDI");
  db = client.db("users");
});
let db;
setTimeout(()=>{
db.collection('counters').findOneAndUpdate(
    { "_id": "userId" },
    { $inc: { "deger": 1 } }, { returnOriginal: false }, function (err, doc) {
      if (err) { throw err; }
      else {
        db.collection('users').insertOne({
          "id": (doc.value.deger).toString(),
          "writer": "snowronark",
        }, function (err, result) {
          if (!err) {
           console.log("Başarılı")
          }
          else { console.log("hata-3",err) }
        });
      }
    })},2000)
