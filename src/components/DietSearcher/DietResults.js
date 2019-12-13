import React from 'react'
import MoreInfo from './MoreInfo'

const DietResults = ({ food, seeMoreInfo, moreInfoRecipe, saveRecipe }) => {
    const foodList = food.map(meal => {
        return (
            <div className="foodResultContainer" key={meal.id}>
                <h3>{meal.title}</h3>
                <img src={`https://spoonacular.com/recipeImages/${meal.id}-480x360.jpg`} alt={meal.title} />
                <button id="see-more-button" onClick={() => {seeMoreInfo(meal.id)}}>More info</button>
                { meal.id === moreInfoRecipe.recipeid && moreInfoRecipe.isMoreInfoShown &&
                <MoreInfo moreInfoRecipe={moreInfoRecipe} saveRecipe={saveRecipe} /> }
            </div>
        )
    })
    return (
        <>
        { foodList }
        </>
    )
}

export default DietResults
