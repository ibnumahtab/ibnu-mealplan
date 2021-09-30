import React, { useEffect, useState } from 'react';
import './Meals.css';
import Meal from '../Meal/Meal';
import MealInfo from '../MealInfo/MealInfo';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, [])
    const [mealInfo, setMealInfo] = useState([]);
    const handleBtn = (meal) => {
        const newCart = [...mealInfo, meal];
        setMealInfo(newCart);
    }
    return (
        <div className="container-fluid row">
            <div className="col-md-9">
                <div className="row"> 
                    <h4 className="pb-3">All Available Meals</h4>
                    {
                        meals.map(meal => <Meal handleBtn={handleBtn} meal={meal}/>)
                    }
                </div>
            </div>
            <div className="meal-info col-md-3">
                <h4 className="pb-3">Your Selected Meals</h4>
                {
                    mealInfo.map(meal => <MealInfo meal={meal}/>)
                }
            </div>
        </div>
    );
};

export default Meals;