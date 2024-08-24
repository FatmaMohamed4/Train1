import { timeStamp } from "console";
import mongoose from "mongoose";
import { stringify } from "querystring";

const newsModel = new mongoose.Schema({
    type: {
        type : String ,
        enum :["Tech","Business"]
    } ,
    title :{
        type :String ,
    } ,
    desc :{
        type :String ,
    }
},
  {timestamps: true})
    
  const News = mongoose.model('News', newsModel);
  export default News;