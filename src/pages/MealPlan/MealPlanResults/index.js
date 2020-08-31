import React from 'react';

export default function MealPlanResults({ meals, nutrients }) {
  const { calories, carbohydrates, fat, protein } = nutrients;
  const mealsList = meals.map((meal) => {
    return (
      <div key={meal.id}>
        <img
          src={`https://spoonacular.com/recipeImages/${meal.id}-480x360.jpg`}
          alt={meal.title}
        />
        <div>
          <h3>{meal.title}</h3>
          <p>{meal.servings} servings</p>
          <p>Ready in {meal.readyInMinutes} minutes</p>
        </div>
      </div>
    );
  });

  return (
    <>
      <div>
        <h3>General information</h3>
        <p>Calories: {calories}</p>
        <p>Carbohydrates: {carbohydrates}</p>
        <p>Fat: {fat}</p>
        <p>Protein: {protein}</p>
      </div>
      {mealsList}
    </>
  );
}
