import * as mongoose from "mongoose";


const MONOGO_URI = process.env.MONGO_URI;

let cached = (global as any).mongoose || {conn: null, promise: null};

export const connectToDatabase = async () => {

    if (cached.conn) return cached.conn;

    if (!MONOGO_URI) throw new Error("Please define the MONGO_URI environment variable inside .env.local");

    cached.promise = cached.promise || mongoose.connect(MONOGO_URI, {
        dbName: 'evently',
        bufferCommands: false,
    });


}