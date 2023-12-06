const Apps=require("../appSchema.js")


exports.getAllApps= async(req,res)=>{
    

try {
    const apps= await Apps.find()
   return  res.status(200).json({message:'successfully got the data',apps})

} catch (error) {
  return   res.status(500).json({message:'Internal server error'})
    
}
    

}

exports.createApps=async(req,res)=>{
    try {
        const app = await new Apps({
            ...req.body
        }).save()

        return res.status(200).json({ message: "Created successfully", app })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "internal server error" })
    }

}

exports.editApps=async(req,res)=>{
    try {
        const editApp = await Apps.findByIdAndUpdate(
            { _id: req.params.id }, { $set: req.body }, { new: true }
        )
        return res.status(200).json({ message: "successfully updated", editApp })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "internal server error" })

    }
}

exports.deleteApp=async(req,res)=>{
    try {
        const deleteApp = await Apps.findByIdAndDelete(
            { _id: req.params.id }
        )
        return res.status(200).json({ message: "successfully deleted" })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "internal server error" })
    }

}


exports.getOneApp=async(req,res)=>{

    try {
        const app = await Apps.findById(
            { _id: req.params.id }
        )
        return res.status(200).json({ message: "successfully got the app" ,app})

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "internal server error" })
    }

}