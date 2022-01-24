import React from 'react';
import { useGlobalContext } from './Context';
import { FaCocktail } from "react-icons/fa";
import Loading from './Loading';
import CocktailCard from './CocktailCard'
const MocktailList = () => {
  const {loading,cocktails}=useGlobalContext();
  console.log(cocktails)
  if(loading){
    return <Loading/>
  }else if(cocktails==null){
    return <h3 className="text-center mt-3">No Items To Display <FaCocktail/></h3>
  }
  return <div className='container mt-5'>
    <div className='row'>
    
    {cocktails.map((item)=>{
      return (<div key={item.idDrink} className="col-12 col-md-4 my-2">
      <CocktailCard   item={item}/>
      </div>);
    })}
    
  </div>
  </div>;
};

export default MocktailList;
