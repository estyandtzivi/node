const ImagesDal = require("../dal/fImages");
    class Images{
    GetAllImages=(async(req,res)=>{
        //GetAllSights
       await ImagesDal. GetAllImages()
        // res.send("GetAllImages")  
    })
    AddImages=(async(req,res)=>{
      const image= ImagesDal. AddImages(req.body)
        res.send(image)
    })
    GetImagesById=(async(req,res)=>{
        
        const{imageId}=req.params
        console.log(imageId)
       const db= await ImagesDal. GetImagesById(imageId)
        res.send(db)
    })
    deleteimages=(async(req,res)=>{
        const{imageId}=req.params
     await ImagesDal.deleteimages(imageId)
      res.send("db")
    })
    update=(async(req,res)=>{
        
        const image=await ImagesDal.update(req.body)
       res.send(image)
    }) 
    
    
}
const Imagesclass=new Images();
module.exports = Imagesclass;