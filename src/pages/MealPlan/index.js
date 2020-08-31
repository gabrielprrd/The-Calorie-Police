import React, { useState, useContext } from 'react';
import axios from 'axios';
// Components
import MealPlanResults from './MealPlanResults/index';
import Swal from 'sweetalert2';

import { CaloriesContext } from '../../contexts/caloriesContext';
import * as S from './styles';

export default function MealPlan() {
  const [meals, setMeals] = useState();
  const [mealVisibility, setMealVisibility] = useState(false);
  const { dailyCalories } = useContext(CaloriesContext);

  const showMeals = async () => {
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3333/mealplan',
        data: { dailyCalories },
      });

      if (response.data.length === 0) {
        Swal.fire({
          icon: 'error',
          title: 'Nothing found',
        });
      } else {
        setMeals(response.data);
        setMealVisibility(true);
      }
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
