const parseString = require('xml2js').parseString;

function xmlToJSON(xml){
	let data;
parseString(xml, (err, result) =>{
    data=JSON.parse(JSON.stringify(result))

});
return data;
}


module.exports={
    xmlToJSON
}