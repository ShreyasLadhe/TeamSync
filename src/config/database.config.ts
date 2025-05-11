import { config } from "./app.config"
import mongoose from "mongoose"

const connectDatabase = async () => {
    try {
        await mongoose.connect(config.MONGO_URI);
        console.log("Connected to Database successfully");
    } catch (error) {
        console.log("Error connecting to Database");
        process.exit(1);
    }
}

export default connectDatabase;