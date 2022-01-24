import React from 'react';
import {Link} from 'react-router-dom'
const CocktailCard = ({item}) => {
    const{idDrink,strDrinkThumb,strDrink,strAlcoholic,strGlass}=item
  return <div className="card m-auto" style={{width: "18rem"}}>
            <img src={strDrinkThumb} className="card-img-top"  alt="img-drink"/>
            <div className="card-body">
                <h3 className="card-text">{strDrink}</h3>
                <h5 className="card-text">{strGlass}</h5>
                <p className="card-text text-muted">{strAlcoholic}</p>
               <div className='d-flex justify-content-center'><Link to={`cocktail/${idDrink}`} className="btn btn-outline-success">Details</Link></div>
                
            </div>
        </div>
};

export default CocktailCard;
