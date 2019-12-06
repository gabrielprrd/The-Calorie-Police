import React, { Component } from 'react'
import axios from 'axios'
import { INITIAL_MEAL_PLAN } from '../../store'
import { apiKey } from '../../store'
import MealPlanDayResults from './MealPlanDayResults'
import MealPlanWeekResults from './MealPlanWeekResults'
import MealPlanForm from './MealPlanForm'



export class MealPlan extends Component {

    state = INITIAL_MEAL_PLAN

    handleTimeFrameChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    showMeals = (e) => {
        e.preventDefault();
        const dailyCalories = JSON.parse(localStorage.getItem('@calorie-police/userInfo')).dailyCalories;

        const endpoint = `https://api.spoonacular.com/recipes/mealplans/generate?timeFrame=${this.state.timeFrame}&targetCalories=${dailyCalories}&apiKey=${apiKey}`
        axios.get(endpoint)
            .then(res => {
                const meals = res.data;
                this.setState({     
                    food: meals,
                    isMealShown: true
                })
                console.log(this.state)
                console.log(dailyCalories)
            });
    }

    render() {

        return (
            <div>
                <h1>We suggest complete meal plans for your caloric needs!</h1>
                <MealPlanForm handleTimeFrameChange={this.handleTimeFrameChange} showMeals={this.showMeals} />

                {/* Displays weekly meal plans */}
                { this.state.isMealShown && this.state.timeFrame === 'week' && <MealPlanWeekResults meals={this.state.food.items} /> }
                
                {/* Displays daily meal plans */}
                { this.state.isMealShown && this.state.timeFrame === 'day' && <MealPlanDayResults meals={this.state.food.meals} nutrients={this.state.food.nutrients} /> } 
            </div>
        )
    }
}

export default MealPlan
