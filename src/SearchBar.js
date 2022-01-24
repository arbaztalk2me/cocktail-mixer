import React from 'react';
import { useGlobalContext } from './Context';
const SearchBar = () => {
  const {setSearchText}=useGlobalContext();
  const searchValue=React.useRef('');
  const searchCocktail=()=>{
    setSearchText(searchValue.current.value)
  }
  return (
    <div className="card m-auto mt-5" >
    
    <div className="card-body">
    <input className="form-control" onChange={searchCocktail} type="text" ref={searchValue} placeholder="Search cocktail" aria-label="default input example"/>
    </div>
  </div>
  );
};

export default SearchBar;
