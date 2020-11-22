import React,{useState,useEffect} from 'react';
import {useLocation} from 'react-router-dom';


export default function BookDetails({data}){
   const[bookDetail,setBookDetail]=useState();
   const location=useLocation();
   const id=location.pathname.split('/')[1]
   
   useEffect(() => {
     if(data!==undefined){
        setBookDetail(data.filter(dta=>Object.values(dta.id[0])[0]===id)) 
       console.log(data);
     }
   }, [data])
    return <div>
       { bookDetail!==undefined? <div className="book-detail"><img src={bookDetail[0].best_book[0].image_url[0]} height="260" width="270" alt=""/>
       <div style={{marginLeft:"1.5em" ,fontSize:"1.3em"}}>
       <div >Author:<h4 style={{marginTop:"0em"}}>{bookDetail[0].best_book[0].author[0].name[0]}</h4></div>
       <div  style={{marginTop:"-1em"}}>Title:<h4 style={{marginTop:"0em"}}>{bookDetail[0].best_book[0].title[0]}</h4></div>
       <div style={{marginTop:"-1em"}}>Books On Shelf:<h4 style={{marginTop:"0em"}}>{Object.values(bookDetail[0].books_count[0])[0]}</h4></div>
      <div style={{marginTop:"-1em"}}>Rating:<h4 style={{marginTop:"0em"}}>{bookDetail[0].average_rating[0]}</h4></div>
       </div>
         </div>:<div className="loader"></div>}
        </div>
    }


