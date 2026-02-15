import app from "./src/app";
import { connectDb } from "./src/config/database";


connectDb().then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log("Server is listining " , process.env.PORT);
        
    })
})