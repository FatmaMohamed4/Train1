import mongoose from "mongoose";

const DataBase = 'mongodb+srv://mail1project1:team123456@cluster0.kcqny2i.mongodb.net/Train1'

async function connectDB() {
  await mongoose.connect( DataBase)
 .then(()=>{
   console.log("DB is Connected");
 }) 
}

// connectDB();
export default connectDB