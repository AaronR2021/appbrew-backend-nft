var mongoose=require('mongoose');
var Schema=mongoose.Schema

var postSchema=new Schema({
    postUrl:{type:String,unique:true},
    title:String,
    name:String,
    address:String,
    colabName:String,
    colabAddress:String
},{timestamps:true})

module.exports=mongoose.model('Post',postSchema)
