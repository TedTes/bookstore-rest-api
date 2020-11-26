import React,{useState} from 'react';

export const BookContext=React.createContext();
export default function Pagination(props){

const current = props.currentPage;
 
const setCurrentPage=(page)=>{
    props.setCurrentPage(page)
}


const getPageNumbers = () => {
   if (current <= 4) {
    return [1, 2, 3, 4, 5];
    } else if (current > props.pageCount - 4) {
         return [...Array(5).keys()].reverse().map(v =>props.pageCount - v);
    } else {
    return [current-1, current,current + 1];
    }
    }


return <React.Fragment>
<button onClick={ () => setCurrentPage(current - 1) }
disabled={ current === 1 }>
Prev
</button>
{ current > 4 &&
<React.Fragment>
<button
onClick={ () => setCurrentPage(1)}>1</button>
<span>...</span>
</React.Fragment>
}
{ getPageNumbers().map((num,index) =>
<button style={{ "background": `${num === current ? "#c4b6b6": ""}`}}
onClick={ () => setCurrentPage(num)} key={ index }>
{ num }
</button>)}
{ current <= (props.pageCount - 4) &&
<React.Fragment>
<span >...</span>
<button onClick={ () => setCurrentPage(props.pageCount)}>
{ props.pageCount }
</button>
</React.Fragment>
}
<button onClick={ () => setCurrentPage(current + 1) }
disabled={ current === props.pageCount }>
Next
</button>
</React.Fragment>
}





