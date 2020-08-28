import React, { useState } from 'react';
import * as S from './styles';
import axios from 'axios';
import MealPlanResults from './MealPlanResults/index';

export default function MealPlan() {
  const [meals, setMeals] = useState();
  const [mealVisibility, setMealVisibility] = useState(false);

  const showMeals = async () => {
    try {
      const dailyCalories = JSON.parse(
        localStorage.getItem('@calorie-police/userInfo')
      ).dailyCalories;

      const response = await axios({
        method: 'post',
        url: 'http://localhost:3333/getmealplan',
        data: { dailyCalories },
      });

      setMeals(response.data);
      setMealVisibility(true);
    } catch (err) {
      console.log({ Error: err });
    }
  };

  return (
    <div>
      <h2>We suggest daily meal plans for your caloric needs!</h2>
      <button onClick={showMeals} type="button">
        Show me!
      </button>

      {mealVisibility && (
        <MealPlanResults meals={meals.meals} nutrients={meals.nutrients} />
      )}
    </div>
  );
}
