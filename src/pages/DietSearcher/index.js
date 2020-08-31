import React, { useState, useEffect, useContext } from 'react';
import * as S from './styles';
import axios from 'axios';
import Swal from 'sweetalert2';

// Context
import { QueryContext } from '../../contexts/queryContext';

// Components
import DietForm from './DietForm';
import DietResults from './DietResults/index';

export default function DietSearcher() {
  const [foodList, setFoodList] = useState([]);
  const { query } = useContext(QueryContext);
  const [localStorageRecipes, setlocalStorageRecipes] = useState([]);
  const [sessionRecipes, setSessionRecipes] = useState([]);
  const [foodVisibility, setFoodVisibility] = useState(false);
  const [moreInfoRecipe, setMoreInfoRecipe] = useState({});
  const [recipeId, setRecipeId] = useState();
  const [moreInfoVisibility, setMoreInfoVisibility] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (typeof query === 'string') {
      try {
        const response = await axios({
          method: 'post',
          url: 'http://localhost:3333/recipes',
          data: { query },
        });
        setFoodList(response.data.results);
        setFoodVisibility(true);
      } catch (err) {
        Swal.fire({
          icon: 'error',
          text: err,
        });
      }
    } else {
      Swal.fire({
        icon: 'error',
        text: 'You must type a  valid recipe',
      });
    }
  };

  const seeMoreInfo = async (id) => {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:3333/moreinfo',
      data: { id },
    });
    const nutrients = response.data.nutrition.nutrients.map((nutrient) => {
      return {
        title: nutrient.title,
        amount: nutrient.amount,
      };
    });
    setMoreInfoRecipe(nutrients);
    setRecipeId(response.data.id);
    setMoreInfoVisibility(true);
  };

  function setRecipeToLocalStorage(recipe) {
    localStorage.setItem(
      '@calorie-police/savedRecipes',
      JSON.stringify(recipe)
    );
  }

  const saveRecipe = () => {
    const filteredRecipe = foodList.filter((recipe) => {
      return recipe.id === recipeId;
    });

    const filteredRecipeWithInfo = {
      ...filteredRecipe,
      savedRecipeInfo: moreInfoRecipe,
    };

    setSessionRecipes([...sessionRecipes, filteredRecipeWithInfo]);
    Swal.fire({
      icon: 'success',
      title: 'Recipe saved',
    });
  };

  useEffect(() => {
    const fetchLocalStorageRecipes = () => {
      const recipes = JSON.parse(
        localStorage.getItem('@calorie-police/savedRecipes')
      );
      setlocalStorageRecipes(recipes);
    };

    fetchLocalStorageRecipes();
    if (sessionRecipes.length > 0) {
      setRecipeToLocalStorage([...localStorageRecipes, ...sessionRecipes]);
    }
  }, [sessionRecipes]);

  return (
    <div>
      <h3>
        Search and add the recipe you want to your diet and we will tell you if
        it fits your daily caloric need!
      </h3>
      <DietForm handleSubmit={handleSubmit} />

      {foodVisibility && (
        <DietResults
          foodList={foodList}
          seeMoreInfo={seeMoreInfo}
          moreInfoRecipe={moreInfoRecipe}
          recipeId={recipeId}
          moreInfoVisibility={moreInfoVisibility}
          saveRecipe={saveRecipe}
        />
      )}
    </div>
  );
}
