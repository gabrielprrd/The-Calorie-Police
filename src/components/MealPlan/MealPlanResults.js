import React from 'react';
import { MealResultContainer, GeneralMealsInfoContainer } from '../../styles';

const MealPlanResults = ({ meals, nutrients }) => {
  const { calories, carbohydrates, fat, protein } = nutrients;
  const mealsList = meals.map((meal) => {
    return (
      <MealResultContainer key={meal.id}>
        <img
          src={`https://spoonacular.com/recipeImages/${meal.id}-480x360.jpg`}
          alt={meal.title}
        />
        <div>
          <h3>{meal.title}</h3>
          <p>{meal.servings} servings</p>
          <p>Ready in {meal.readyInMinutes} minutes</p>
        </div>
      </MealResultContainer>
    );
  });

  return (
    <>
      <GeneralMealsInfoContainer>
        <h3>General information</h3>
        <p>Calories: {calories}</p>
        <p>Carbohydrates: {carbohydrates}</p>
        <p>Fat: {fat}</p>
        <p>Protein: {protein}</p>
      </GeneralMealsInfoContainer>
      {mealsList}
    </>
  );
};

export default MealPlanResults;
