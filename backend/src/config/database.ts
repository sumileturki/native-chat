import mongoose from "mongoose";

export const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("mongo connected Successfullly");
        
    } catch (error) {
        console.log("MOngo connection eeri", error);
        
        process.exit(1); //exit with faliure
        
    }
}