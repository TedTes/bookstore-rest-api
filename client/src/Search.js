import React ,{useRef,useEffect} from 'react';

export default function Search(props){
    const inputRef=useRef(null)
    const selectRef=useRef(null);
    useEffect(() => {
       if (selectRef.current !==null)props.handleChange(selectRef.current)
        }, [])
    const handleChange=()=>{
        props.handleChange(inputRef.current,selectRef.current)
      }
    return <div>
        <div className="search" id="search">
        <input placeholder="search by"  ref={inputRef} onChange={handleChange} type="text" name="search" width="200" height="100"/>
        <select  ref={selectRef} onChange={handleChange} style={{top:"4.1em",height:'32.2px',marginLeft:"-4em",border:"0",outline:"none",borderRadius:'10px',zIndex:"10",position:"absolute"}}  size="1">
    <option selected="selected">All</option>
    <option value="author">Author</option>
    <option value="title">Title</option>
    <option value="ISBN">ISBN</option>
  </select>
        </div>
       
    </div>
}