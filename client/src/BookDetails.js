import React,{useState,useEffect,useContext} from 'react';
import axios from 'axios';
import {useLocation} from 'react-router-dom';
import {BookContext} from './Pagination.js'
import {useRouteMatch} from 'react-router-dom'

export default function BookDetails(){
   const[bookDetail,setBookDetail]=useState();
   const location=useLocation();
   const match=useRouteMatch();
 
   const selectParam=location.search.split('?')[1].split('&')[2]
   const inputParam=location.search.split('?')[1].split('&')[1];
   const pageNum=location.search.split('?')[1].split('&')[0];


   const context=useContext(BookContext)
   const id=match.params.id
   useEffect(() => {
 
    document.getElementById('search').style.display="none"

    axios.get(`https://bookstoresserver.herokuapp.com/api/v1/books?pageNum=${pageNum}&q=${inputParam}&field=${selectParam}`).then(res=>{
      if(res.data.length!==0) {
         setBookDetail(res.data.filter(dta=>Object.values(dta.id[0])[0]===id)) 
   }
   }).catch(e=>console.log(e))
  

   }, [pageNum,inputParam,selectParam])
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


