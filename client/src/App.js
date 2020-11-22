import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Books from './Books';
import Search from './Search.js';
import Pagination from './Pagination.js'
import {Route,Switch,BrowserRouter as Router,Redirect} from 'react-router-dom';
import BookDetails from './BookDetails';


export const BookContext=React.createContext();
function App() {
  const [data,setData]=useState();
  const[contentLength,setContentLength]=useState(0)
  const [inputParam,setInputParam]=useState();
  const [selectParam,setSelectParam]=useState('all');
  const [pageNum,setPage]=useState(1);


  const setCurrentPage=(page)=>{
setPage(page);
  }
  const handleChange=(input,select)=>{
   if(select!==undefined)  setSelectParam(select.value);
    setInputParam(input.value);
}
  useEffect(() =>{
    axios.get(`http://localhost:5000/api/v1/books?pageNum=${pageNum}&q=${inputParam}&field=${selectParam}`).then(res=>{
     
          if(res.data.length!==0) setData(res.data);
          setContentLength(res.headers['content-length'])
    
           }).catch(e=>console.log(e))

    },[inputParam,selectParam,pageNum])
  return  <Router>

<BookContext.Provider value={data}/>
      <header className="App-header">
       <h2>Book Store</h2> 
        <Search handleChange={handleChange} />
      </header>
     <Switch>
    <Route exact path={'/'} render={()=><div><div className="books-container"><Books data={data}/></div> <div className="pagination">
   <Pagination currentPage={pageNum} setCurrentPage={setCurrentPage}  contentLength={contentLength} />
   </div></div>}/>
   <Route  path={'/:id'} render={()=><BookDetails data={data}/>}/>
   <Redirect to='/'/>
   </Switch>

 </Router>
}

export default App;
