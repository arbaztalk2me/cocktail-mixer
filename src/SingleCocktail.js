import React,{useEffect,useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from './Loading';
const url='https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
const SingleCocktail = () => {
  const{id}=useParams();
  const[data,setData]=useState({});
  const[loading,setLoading]=useState(true);
  const fetchData=async()=>{
    try {
      setLoading(true)
      const response=await fetch(`${url}${id}`);
      const result=await response.json();
      const {drinks}=result;
      setLoading(false)
      setData(drinks[0]);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchData();
  },[])
  const{strAlcoholic,strCategory,strDrink,strGlass,strDrinkThumb,strInstructions,strIngredient1,strIngredient2,strIngredient3,strIngredient4}=data;
  if(loading){
    return <Loading/>
  }
  return (
    <div className='d-flex justify-content-center mt-5'>
            <div className="card mb-3" style={{maxWidth:'600px'}}>
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center">
            <img src={strDrinkThumb} className="img-fluid " alt="cocktail logo"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title border-bottom border-success"> {strDrink}</h5>

              <p className="card-text"><span className="text-success">Category</span> : {strCategory}</p>
              <p className="card-text"><span className="text-success">Info</span> : {strAlcoholic}</p>
              <p className="card-text"><span className="text-success">Instruction</span> : {strInstructions}</p>
              <p className="card-text"><span className="text-success">Glass</span> : {strGlass}</p>
              <p className="card-text"><span className="text-success">Ingredient</span> : {strIngredient1+" "+strIngredient2+" "+strIngredient3+" "+strIngredient4}</p>
              <Link to='/' className="btn btn-danger">Go Back</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCocktail;
