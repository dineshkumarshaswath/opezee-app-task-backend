const mongoose=require("mongoose")



const appSchema= new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    publiser:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    version:{
        type:String,
        required:true
    },
    appspace:{
        type:String,
        required:true
    }

})

const Apps=mongoose.model("apps",appSchema)
module.exports=Apps
