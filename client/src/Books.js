import React,{useState,useEffect} from 'react';

import StarRatings from 'react-star-ratings';
export default function Books({data,selectParam,inputParam,pageNum}){
    const [bookData,setData]=useState([]);
    useEffect(() => {
        setData(data);
      },[data])
  
   return bookData!==undefined?bookData.map((dta,index)=><div className="book" key={index}>
       <a href={`/${Object.values(dta.id[0])[0]}?${pageNum}&${inputParam}&${selectParam}`} target="_blank"><img src={dta.best_book[0].image_url[0]} height="200" width="160" alt=""/>
       {/* <div>{console.log(dta)}</div> */}
       <div style={{height:"2.5em"}}>{dta.best_book[0].title[0].length>33 ? dta.best_book[0].title[0].slice(0,33)+'....':dta.best_book[0].title[0]}</div></a>
       <div>
        <StarRatings
        rating={(typeof dta.average_rating[0]==='object')?parseFloat(Object.values(dta.average_rating[0])[0]):parseFloat(dta.average_rating[0])}
        starRatedColor="yellow"
         numberOfStars={5}
         starDimension="23px"
         starSpacing="1px"
        name='rating'/>&nbsp;{dta.average_rating[0]}
       </div>
       
       </div>
):<div className="loader"></div>
}


