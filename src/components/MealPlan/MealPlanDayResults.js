import React from 'react'

const MealPlanDayResults = ({meals, nutrients}) => {
    const { calories, carbohydrates, fat, protein } = nutrients;
    const mealsList = meals.map(meal => {
        return (
        <div className="MealResultContainer" key={meal.id}>
            <img src={`https://spoonacular.com/recipeImages/${meal.id}-480x360.jpg`} alt={meal.title} />
            <h3>{meal.title}</h3>
            <p>{meal.servings} servings</p>
            <p>Ready in {meal.readyInMinutes} minutes</p>
        </div>
        )
    });
    
        return (
            <>
                { mealsList }
                <p>Calories: { calories }</p>
                <p>Carbohydrates: { carbohydrates}</p>
                <p>Fat: { fat }</p>
                <p>Protein: { protein }</p>
            </>
        );
}

export default MealPlanDayResults
