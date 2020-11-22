import React from 'react';


export default function Pagination(props){

const current = props.currentPage;
const pageCount = Math.ceil(props.contentLength/20);

const setCurrentPage=(page)=>{
    props.setCurrentPage(page)
}


const getPageNumbers = () => {
    if (props.pageCount < 4) {
        // console.log("from pagination")
        // console.log([...Array(5).keys()].slice(1))
        return [...Array(props.pageCount + 1).keys()].slice(1);
    } else if (props.currentPage <= 4) {
    return [1, 2, 3, 4, 5];
    } else if (props.currentPage > props.pageCount - 4) {
       
    return [...Array(5).keys()].reverse().map(v => props.pageCount - v);
    } else {
    return [props.currentPage -1, props.currentPage,props.currentPage + 1];
    }
    }


return <React.Fragment>
<button onClick={ () => setCurrentPage(current - 1) }
disabled={ current === 1 } className="btn btn-secondary mx-.5">
Prev
</button>
{ current > 4 &&
<React.Fragment>
<button className="btn btn-secondary mx-1"
onClick={ () => setCurrentPage(1)}>1</button>
<span className="h4">...</span>
</React.Fragment>
}
{ getPageNumbers().map((num,index) =>
<button className={ `btn mx-1 ${num === current ? "btn-primary": "btn-secondary"}`}
onClick={ () => setCurrentPage(num)} key={ index }>
{ num }
</button>)}
{ current <= (pageCount - 4) &&
<React.Fragment>
<span className="h4">...</span>
<button className="btn btn-secondary mx-1"
onClick={ () => setCurrentPage(pageCount)}>
{ pageCount }
</button>
</React.Fragment>
}
<button onClick={ () => setCurrentPage(current + 1) }
disabled={ current === pageCount }
className="btn btn-secondary mx-.5">
Next
</button>
</React.Fragment>
}





