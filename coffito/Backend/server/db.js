const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Connect to the MongoDB database 'COFFITO'
        const conn = await mongoose.connect('mongodb://localhost:27017/COFFITO', {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        });
        
        console.log(`MongoDB Connected: ${conn.connection.host}`);

        // After connection, check the database name
        const dbName = conn.connection.name;
        console.log(`Connected to database: ${dbName}`);
      
    } catch (error) {
        console.error("Connection error:", error);
        process.exit(1); // Exit process if connection fails
    }
};

module.exports = connectDB;
