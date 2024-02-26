//ติดต่อกับฐานข้อมูล/ดำเนินการกับฐานข้อมูล
const slugify = require("slugify")
const Blogs = require("../models/blogs")
const {v4:uuidv4 } = require('uuid')

//บันทึกข้อมูล/ส่งเนื้อหาให้api
exports.create=(req,res)=>{
  const {title,content,author}=req.body
  let slug = uuidv4()

  switch(true){
    case !title:
        return res.status(400).json({error:"กรุณาป้อนชื่อบทความ"})
        break;
    case !content:
        return res.status(400).json({error:"กรุณาป้อนเนื้อหาบทความ"})
        break;
}
Blogs.create({title,content,author,slug},(err,blog)=>{
    if(err){
        res.status(400).json({error:"บทความของท่านซ้ำกับผู้อื่น"})
    }
    res.json(blog)
})
}

//ดึงข้อมูลทั้งหมด
exports.getAllblogs = (req, res) => {
    Blogs.find({})
      .then((blogs) => {
        res.json(blogs);
      })
      .catch((err) => {
        res.status(500).send('Error retrieving blogs');
      })
}

  //ดึงข้อมูลที่เราสนใจ
exports.singleBlog = (req,res)=>{
    const {slug} = req.params
    Blogs.findOne({slug}).exec((err,blog)=>{
        res.json(blog)
    })
}
exports.remove = (req,res)=>{
  const {slug} = req.params
  Blogs.findOneAndRemove({slug}).exec((err,blog)=>{
      if(err) console.log(err)
      res.json({
          message:"ลบบทความเรียบร้อย"
      })
  })
}
exports.update = (req,res)=>{
  const {slug} =req.params
  //ส่งข้อมูล => title content author
  const {title,content,author}=req.body
  Blogs.findOneAndUpdate({slug},{title,content,author},{new:true}).exec((err,blog)=>{
    if(err)console.log(err)
    res.json(blog)
  })
}