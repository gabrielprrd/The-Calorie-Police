import React, { useState, useEffect, useContext } from 'react';
import Swal from 'sweetalert2';
import styles from './styles';

import { CaloriesContext } from '../../contexts/caloriesContext';

export default function SavedRecipes() {
  const [recipes, setRecipes] = useState([]);
  const { dailyCalories } = useContext(CaloriesContext);
  const [userRecipesTotalCalories, setRecipesTotalCalories] = useState(0);
  const [savedRecipesVisibility, setSavedRecipesVisibility] = useState(false);

  function calculateTotalCalories() {
    const userRecipesTotalCaloriesArray = recipes.map((recipe) => {
      return recipe.savedRecipeInfo[0].amount;
    });

    const userRecipesTotalCalories = userRecipesTotalCaloriesArray.reduce(
      (prevValue, value) => {
        return prevValue + value;
      },
      0
    );
    setRecipesTotalCalories(userRecipesTotalCalories.toFixed(2));
  }

  useEffect(() => {
    const fetchLocalStorageRecipes = () => {
      const recipes = JSON.parse(
        localStorage.getItem('@calorie-police/savedRecipes')
      );
      setRecipes(recipes);
    };
    fetchLocalStorageRecipes();
  }, []);

  useEffect(() => {
    if (recipes.length > 0) {
      setSavedRecipesVisibility(true);
    }
  }, [recipes]);

  useEffect(() => {
    calculateTotalCalories();
  }, [recipes]);

  function deleteItem() {
    // implementar delete
    Swal.fire({
      icon: 'success',
      title: 'Item deleted',
    });
  }

  const savedRecipesList = recipes.map((recipe, index) => {
    return (
      <div key={index}>
        <img
          src={`https://spoonacular.com/recipeImages/${recipe[0].id}-240x150.jpg`}
          alt={recipe[0].title}
        />
        <h3>{recipe[0].title}</h3>
        {recipe.savedRecipeInfo.map((recipeInfo, i) => {
          while (i <= 5) {
            const randomKey = Math.random() * 10;
            return (
              <div key={randomKey}>
                <p>
                  {recipeInfo.title}: {recipeInfo.amount}
                </p>
              </div>
            );
          }
        })}
        <button onClick={deleteItem}>Delete</button>
      </div>
    );
  });

  return (
    <>
      <h2>Your recipes</h2>
      {savedRecipesVisibility ? (
        <div>
          {savedRecipesList}
          <p>Your recipes have a total of {userRecipesTotalCalories} kcal</p>
        </div>
      ) : (
        <p>There are no recipes saved yet</p>
      )}
      <h3>
        The daily caloric need to maintain your current weight is{' '}
        {dailyCalories} calories
      </h3>
    </>
  );
}
