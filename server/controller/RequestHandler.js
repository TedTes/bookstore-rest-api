
const express=require('express');
const {router}=require('./RouteHandler');

const app=express();
const cors=require('cors');
const PORT=process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log(`server started listening on ${PORT}`)
});

app.get('/',(req,res)=>{
    res.send('well come to bookstore server!');
})
app.use(cors());
app.use('/api/v1',router)

