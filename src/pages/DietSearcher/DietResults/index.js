import React from 'react';
import * as S from './styles';
import MoreInfo from './MoreInfo/index';

export default function DietResults({
  foodList,
  seeMoreInfo,
  moreInfoRecipe,
  recipeId,
  moreInfoVisibility,
  saveRecipe,
}) {
  return foodList.map((meal) => {
    return (
      <div key={meal.id}>
        <h3>{meal.title}</h3>
        <img
          src={`https://spoonacular.com/recipeImages/${meal.id}-480x360.jpg`}
          alt={meal.title}
        />
        {
          <button
            onClick={() => {
              seeMoreInfo(meal.id);
            }}
          >
            More info
          </button>
        }
        {meal.id === recipeId && moreInfoVisibility && (
          <MoreInfo moreInfoRecipe={moreInfoRecipe} saveRecipe={saveRecipe} />
        )}
      </div>
    );
  });
}
