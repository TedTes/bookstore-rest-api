require('dotenv').config();
const axios=require('axios');
const {xmlToJSON}=require('./XmlToJSON');

async function fetchData(params,res){
    let result;
try{
        if(params.q!=='undefined')
          result=await axios.get(`https://www.goodreads.com/search/index.xml?key=${process.env.API_KEY}&&page=${params.pageNum}&&q=${params.q}&&search[${params.field}]`)
        else
            result=await axios.get(`https://www.goodreads.com/search.xml?key=${process.env.API_KEY}&&page=${params.pageNum}&&q='all`)
         
 if(result.status===200){
       const jsonData=xmlToJSON(result.data)
         const data=jsonData.GoodreadsResponse.search[0].results[0].work;
      res.send(data);
    }
}
catch(e){
    console.log(e);
}

}

    module.exports={fetchData}