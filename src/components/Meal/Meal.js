import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

const Meal = (props) => {
    const {strMeal, strCategory, strInstructions, strMealThumb } = props.meal;
    return (
        <div className="col-md-6">
            <div className="card mb-3" style={{maxWidth : "540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={strMealThumb} className="img-fluid rounded-start" alt={strMeal}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{strMeal}</h5>
                            <p className="card-text">{strInstructions.substring(0, 100)}</p>
                            <p className="card-text card-footer d-flex justify-content-between align-items-center">
                                <small className="text-muted">Category: {strCategory}</small>
                                <button onClick={() => props.handleBtn(props.meal)} className="btn btn-success"><FontAwesomeIcon icon={faUtensils} />&nbsp; Take Meal</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
    );
};

export default Meal;