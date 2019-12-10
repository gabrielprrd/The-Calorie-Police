import React, { Component } from 'react'
import { INITIAL_FOODLIST, apiKey } from '../../store'
import axios from 'axios'
import DietForm from './DietForm'
import DietResults from './DietResults'
// https://api.spoonacular.com/recipes/search?query=cheese&number=2?apiKey=37d5be3315dc4a78acc31544ec2f7a84


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
                this.setState({
                    food,
                    isFoodShown: true
                })
                console.log(this.state)
            })
    }

    // saveRecipe = (e) => {
    //     if (typeof(Storage) !== "undefined") {
    //         localStorage.setItem('@calorie-police/userRecipes', JSON.stringify(this.state.savedRecipes));
    //     }
    // }

    render() {
        return (
            <div>
                <h1></h1>
                <p>Search and add the recipe you want and we will tell you if it fits your daily caloric need</p>
                <DietForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                { this.state.isFoodShown && <DietResults food={this.state.food} /> }
            </div>
        )
    }
}

export default DietSearcher

