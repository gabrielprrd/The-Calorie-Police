import React from 'react';
import MoreInfo from './MoreInfo';
import { Button } from '@material-ui/core';
import { FoodResultContainer } from '../../styles';

const DietResults = ({ food, seeMoreInfo, moreInfoRecipe, saveRecipe }) => {
  const foodList = food.map((meal) => {
    return (
      <FoodResultContainer key={meal.id}>
        <h3>{meal.title}</h3>
        <img
          src={`https://spoonacular.com/recipeImages/${meal.id}-480x360.jpg`}
          alt={meal.title}
        />
        {
          <Button
            color="primary"
            onClick={() => {
              seeMoreInfo(meal.id);
            }}
          >
            More info
          </Button>
        }
        {meal.id === moreInfoRecipe.recipeid &&
          moreInfoRecipe.isMoreInfoShown && (
            <MoreInfo moreInfoRecipe={moreInfoRecipe} saveRecipe={saveRecipe} />
          )}
      </FoodResultContainer>
    );
  });
  return <>{foodList}</>;
};

export default DietResults;
