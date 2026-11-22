const mongoose = require("mongoose");
const initData = require("./data.js");
const listing = require("../models/listing.js");

const MONGO_URL ="mongodb://127.0.0.1:27017/wanderlust";

async function main() {
    await mongoose.connect(MONGO_URL);
    
}  

main()
  .then(() =>{
    console.log("connected to DB");
})
  .catch((err) => {
    console.log(err);
})

//console.log("LOCATION:", initData.data[0].location);

const initDB = async () => {
    await listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj,owner:"6af85b5df3424b908e4b286e"}));
    await listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();