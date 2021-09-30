import React from 'react';
import './MealInfo.css';

const MealInfo = props => {
    const {idMeal, strMeal, strMealThumb } = props.meal;
    return (
        <div id="meal-info">
            <div className="card mb-2" style={{width: "18rem"}}>
                <div className="d-flex justify-content-start align-items-center">
                    <div>
                        <img className="mx-2 rounded" src={strMealThumb} alt={strMeal} />
                    </div>
                    <div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{strMeal}</li>
                            <li className="list-group-item">{idMeal}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealInfo;