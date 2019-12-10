import React, { Component } from 'react'
import axios from 'axios'
import MoreInfo from './MoreInfo'
import { MORE_INFO_RECIPE, apiKey } from '../../store'

export class DietResults extends Component {
    state = MORE_INFO_RECIPE
    // saveRecipe = (key) => {
    //     const savedRecipes = food.filter(recipe => {
    //         return recipe.key === key
    //     })
    //     this.setState({
    //         savedRecipes
    //     })
    // }

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
                this.setState({
                    moreInfoResult: result,
                    isMoreInfoShown: true,
                    recipeid
                })
            // console.log(this.state)
            console.log(res.data)
            })
    }

    render() {
        const { food, saveRecipe } = this.props
        const foodList = food.map(meal => {
        return (
            <div className="foodResultContainer" key={meal.id}>
                <h3>{meal.title}</h3>
                <img src={`https://spoonacular.com/recipeImages/${meal.id}-480x360.jpg`} alt={meal.title} />
                <button onClick={() => {this.seeMoreInfo(meal.id)}}>More info</button>
                { meal.id === this.state.recipeid && this.state.isMoreInfoShown && <MoreInfo moreInfoResult={this.state.moreInfoResult} /> }
            </div>
        )
    })
    return (
        <>
        { foodList }
        </>
    )
    }
}

export default DietResults
