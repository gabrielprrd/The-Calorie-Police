import React, { Component } from 'react'
import { INITIAL_FOODLIST } from '../../store'
import axios from 'axios'
import DietForm from './DietForm'
// https://api.spoonacular.com/recipes/search?query=cheese&number=2?apiKey=37d5be3315dc4a78acc31544ec2f7a84


export class DietSearcher extends Component {

    state = INITIAL_FOODLIST

    handleChange = (e) => {

    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <h1></h1>
                <p>Search and add the food you want and we will tell you if it fits your daily caloric need</p>
                <DietForm />
            </div>
        )
    }
}

export default DietSearcher

