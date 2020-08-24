import React, { Component } from 'react';
import axios from 'axios';
import { INITIAL_MEAL_PLAN, apiKey } from '../../store';
import MealPlanResults from './MealPlanResults';
import { Grid, Button } from '@material-ui/core';

export class MealPlan extends Component {
  state = INITIAL_MEAL_PLAN;

  showMeals = (e) => {
    e.preventDefault();
    const dailyCalories = JSON.parse(
      localStorage.getItem('@calorie-police/userInfo')
    ).dailyCalories;

    const endpoint = `https://api.spoonacular.com/recipes/mealplans/generate?timeFrame=day&targetCalories=${dailyCalories}&apiKey=${apiKey}`;
    axios.get(endpoint).then((res) => {
      const meals = res.data;
      this.setState({
        food: meals,
        isMealShown: true,
      });
      console.log(this.state);
      console.log(dailyCalories);
    });
  };

  render() {
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <h2>We suggest daily meal plans for your caloric needs!</h2>
        <Button
          onClick={this.showMeals}
          type="submit"
          variant="contained"
          color="secondary"
        >
          Show me!
        </Button>

        {/* Displays meal plans */}
        {this.state.isMealShown && (
          <MealPlanResults
            meals={this.state.food.meals}
            nutrients={this.state.food.nutrients}
          />
        )}
      </Grid>
    );
  }
}

export default MealPlan;
