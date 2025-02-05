import mongoose from "mongoose";
import "dotenv/config";

async function dbConnect() {
  mongoose
    .connect("mongodb://admin:password@localhost:27017/main?authSource=admin", {})
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("Unable to connect to database");
      console.error(error);
    });
}

export default dbConnect;
