const mongose = require('mongoose')

function connectDB() {
    mongose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true, //Ensures Mongoose uses the new connection string parser
        useUnifiedTopology: true, // Enables the new Unified Topology engine in MongoDB's Node.js driver.
    })
    .then(() => console.log('Connected to the database'))
    .catch(error => console.log(error));
}

module.exports = connectDB