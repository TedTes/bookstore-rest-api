const express=require('express');
const router=express.Router();
const {fetchData}=require('../model/FetchData.js')


router.get('/books',(req,res)=>{
    const q=req.query.q;
    const field=req.query.field;
    const pageNum=req.query.pageNum;
    fetchData({q,field,pageNum},res).catch(e=>console.log(e));
 
})




module.exports={router}


