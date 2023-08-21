import mongoose from "mongoose";

const connectMongo = async () => {
  try {
     await mongoose.connect(process.env.MONGO_URL as string);
     console.log("Connected to mongodb");
  } catch (error) {
    console.log("Error connecting to database: ", error);
  }
};

export default connectMongo

