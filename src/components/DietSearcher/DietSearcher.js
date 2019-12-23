import React, { Component } from 'react'
import { INITIAL_FOODLIST, apiKey } from '../../store'
import axios from 'axios'
import DietForm from './DietForm'
import DietResults from './DietResults'
import UserRecipes from './UserRecipes'

export class DietSearcher extends Component {

    state = INITIAL_FOODLIST

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const query = this.state.query
        const endpoint = `https://api.spoonacular.com/recipes/search?query=${query}&number=4&apiKey=${apiKey}`
        axios.get(endpoint)
            .then(res => {
                const food = res.data.results
                this.setState(prevState => ({
                    food,
                    isFoodShown: true
                }))
            })
    }

    seeMoreInfo = (id) => {
        axios.get(` https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${apiKey}`)
            .then(res => {
                const recipeid = res.data.id 
                const result = res.data.nutrition.nutrients.map(nutrient => {
                   return {
                    title: nutrient.title,
                    amount: nutrient.amount
                   }
                })
                this.setState(prevState => ({
                    moreInfoRecipe: {
                        ...prevState.moreInfoRecipe,
                        moreInfoResult: result,
                        recipeid,
                        isMoreInfoShown: true
                    }
                }))
                console.log(this.state)
            })
    }

    saveRecipe = () => {
        const newRecipe = this.state.food.filter(food => {
            return (food.id === this.state.moreInfoRecipe.recipeid)  
        })
        const newRecipeFullInfo = { ...newRecipe, savedRecipeInfo: this.state.moreInfoRecipe.moreInfoResult}
        let savedRecipes = [...this.state.savedRecipes, newRecipeFullInfo];

        const userRecipesTotalCaloriesArray = savedRecipes.map(recipe => {
            return recipe.savedRecipeInfo[0].amount
        })

        const userRecipesTotalCalories = userRecipesTotalCaloriesArray.reduce((prevValue, value) => {
            return prevValue + value
        })
        
        this.setState({
            savedRecipes: savedRecipes,
            isSavedRecipeShown: true,
            userRecipesTotalCalories
        },
            () => { console.log(this.state) }
        )

        if (typeof(Storage) !== "undefined") {
            localStorage.setItem('@calorie-police/savedRecipes', JSON.stringify(this.state.savedRecipes));
            localStorage.setItem('@calorie-police/userRecipesTotalCalories', JSON.stringify(this.state.userRecipesTotalCalories));
        }
    };

    render() {
        return (
            <div>
                <h3>Search and add the recipe you want to your diet and we will tell you if it fits your daily caloric need!</h3>
                <DietForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                
                { this.state.isFoodShown && 
                <DietResults food={this.state.food}
                seeMoreInfo={this.seeMoreInfo}
                moreInfoRecipe={this.state.moreInfoRecipe}
                saveRecipe={this.saveRecipe} /> }  

                <UserRecipes savedRecipes={this.state.savedRecipes} isSavedRecipeShown={this.state.isSavedRecipeShown}
                userRecipesTotalCalories={this.state.userRecipesTotalCalories} />         
            </div>
        )
    }
}

export default DietSearcher
