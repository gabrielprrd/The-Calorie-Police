import React, { useState, useEffect, useContext } from 'react';

// Components
import Swal from 'sweetalert2';

// Styling
import styles from './styles';
import PageContainer from '../../assets/globalStyles/PageContainer';

// Context
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
    if (localStorage.getItem('@calorie-police/savedRecipes') !== null) {
      const fetchLocalStorageRecipes = () => {
        const recipes = JSON.parse(
          localStorage.getItem('@calorie-police/savedRecipes')
        );
        setRecipes(recipes);
      };
      fetchLocalStorageRecipes();
    }
  }, []);

  useEffect(() => {
    if (recipes.length > 0) {
      setSavedRecipesVisibility(true);
    }
  }, [recipes]);

  useEffect(() => {
    calculateTotalCalories();
  }, [recipes]);

  function deleteItem(id) {
    // implementar delete
    const filteredArray = recipes.filter((recipe) => {
      return recipe[0].id !== id;
    });

    localStorage.setItem(
      '@calorie-police/savedRecipes',
      JSON.stringify(filteredArray)
    );

    Swal.fire({
      icon: 'success',
      title: 'Item deleted',
    });

    setTimeout(() => {
      window.location.reload();
    }, [2000]);
  }

  const savedRecipesList = recipes.map((recipe, index) => {
    if (recipes.length > 0) {
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
          <button onClick={() => deleteItem(recipe[0].id)}>Delete</button>
        </div>
      );
    }
  });

  return (
    <PageContainer>
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
    </PageContainer>
  );
}
