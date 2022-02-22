var express = require('express');
var Posts=require('../models/posts.js')

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({success:'deployed successfully'})
 })
.post('/nft/upload', function(req, res, next) {
 const {postUrl,title,name,address,colabName,colabAddress}=req.body;
  console.log(req.body);
  Posts.create({postUrl,title,name,address,colabName,colabAddress},(err,post)=>{
    if(err){next(err)}
    else{
      console.log(post,'present in database')
      res.status(200).json({message:'nft uploaded'})
    }
  })

})
.get('/nft/list',(req,res,next)=>{
  Posts.find({},(err,posts)=>{
    if(err){next(err)}
    else{
      res.status(200).json({posts})
    }
  })
})

module.exports = router;
