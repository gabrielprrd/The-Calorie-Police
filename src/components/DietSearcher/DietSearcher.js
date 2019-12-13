import React, { Component } from 'react'
import { INITIAL_FOODLIST, apiKey } from '../../store'
import axios from 'axios'
import DietForm from './DietForm'
import DietResults from './DietResults'

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
        const savedRecipes = this.state.food.filter(food => {
            return food.id === this.state.moreInfoRecipe.recipeid
        })
        this.setState(prevState => ({
                savedRecipes: {
                ...prevState.savedRecipes,
                savedRecipes
        }}))
        console.log(this.state)
            
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem('@calorie-police/userRecipes', JSON.stringify(this.state.savedRecipes));
        }
    }

    render() {
        return (
            <div>
                <h1></h1>
                <p>Search and add the recipe you want to your diet and we will tell you if it fits your daily caloric need</p>
                <DietForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                
                { this.state.isFoodShown && 
                <DietResults food={this.state.food}
                seeMoreInfo={this.seeMoreInfo}
                moreInfoRecipe={this.state.moreInfoRecipe}
                saveRecipe={this.saveRecipe} /> }           
            </div>
        )
    }
}

export default DietSearcher
