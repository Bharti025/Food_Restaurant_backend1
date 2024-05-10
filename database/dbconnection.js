import mongoose from "mongoose";
export const dbConnection = () => {
    // Log process.env.MONGO_URI to ensure it's set correctly
console.log("MONGO_URI:", process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true});

// mongoose.connect(mongodb://localhost:27017/reservation, 
// {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected");
});
};

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose connection closed');
    process.exit(0);
  });
});
