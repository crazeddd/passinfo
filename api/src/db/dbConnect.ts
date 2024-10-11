import mongoose from "mongoose";
import "dotenv/config";

async function dbConnect() {
  mongoose
    // @ts-ignore (no idea why env types arent working)
    .connect(process.env.DB_ENDPOINT, {})
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("Unable to connect to database");
      console.error(error);
    });
}

export default dbConnect;
