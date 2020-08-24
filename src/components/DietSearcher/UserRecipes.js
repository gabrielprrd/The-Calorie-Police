import React from 'react';

const UserRecipes = ({ savedRecipes, isSavedRecipeShown }) => {
  const dailyCalories = JSON.parse(
    localStorage.getItem('@calorie-police/userInfo')
  ).dailyCalories;
  const userRecipesTotalCalories = JSON.parse(
    localStorage.getItem('@calorie-police/userRecipesTotalCalories')
  );
  const savedRecipesList = savedRecipes.map((recipe, index) => {
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
      </div>
    );
  });

  return (
    <>
      <h2>Your recipes</h2>
      {isSavedRecipeShown ? (
        savedRecipesList
      ) : (
        <p>There are no recipes saved yet</p>
      )}
      <h3>
        The daily caloric need to maintain your current weight is{' '}
        {dailyCalories} calories
      </h3>
      <p>Your recipes have a total of {userRecipesTotalCalories} calories</p>
    </>
  );
};

export default UserRecipes;
