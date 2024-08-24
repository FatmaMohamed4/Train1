import News from "../models/newsModel.js"

export const addNews =async(req,res)=>{
    try{
        const data =req.body
        const news =  await News.insertMany(data)
        res.status(201).json({
          status :true ,
          message :"News is created",
          news
        })
    } catch(err)
    {
        res.status(500).json({
            status :false ,
            ServerError
          })
    }

}

export const getNews =async (req,res)=>{
    try{
 const news = await News.find()
 res.status(200).json({
    status :true ,
    news
  })
    } catch(err){
        res.status(500).json({
            status :false ,
            ServerError
          })
    }
}


export const deleteNews = async (req,res)=>{
    try{
    const id = req.params.id
    await News.findByIdAndDelete(id)
    res.status(200).json({
        status :true ,
        message :"News is deleted"
      })
    } catch{
        res.status(500).json({
            status :true ,
            message :"Internal server Error"
          })
    }
}


export const updateNews = async (req,res)=>{
    try{
    const id = req.params.id
    const updated =await News.findByIdAndUpdate(id,req.body,{new :true})
    res.status(200).json({
        status :true ,
        message :"News is updated" ,
        updated
      })
    } catch{
        res.status(500).json({
            status :true ,
            message :"Internal server Error"
          })
    }
}