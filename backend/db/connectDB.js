import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("MongoDB URI is not defined in environment variables");
        }

        // Set global configuration
        mongoose.set('bufferTimeoutMS', 30000); // Increase buffer timeout to 30 seconds

        const conn = await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 30000, // Increase server selection timeout
            socketTimeoutMS: 45000, // Increase socket timeout
        });

        return conn;
    } catch (error) {
        console.error('\nMongoDB Connection Error:');
        if (error.name === 'MongoServerSelectionError') {
            console.error('Could not connect to MongoDB server. Please check:');
            console.error('1. Your MongoDB Atlas username and password');
            console.error('2. Your IP address is whitelisted in MongoDB Atlas');
            console.error('3. Your MongoDB Atlas cluster is active');
            console.error(`\nError details: ${error.message}`);
        } else {
            console.error(`Error type: ${error.name}`);
            console.error(`Error message: ${error.message}`);
        }
        throw error;
    }
};