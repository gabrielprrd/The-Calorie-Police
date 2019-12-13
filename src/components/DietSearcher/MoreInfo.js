import React from 'react'

const MoreInfo = ({moreInfoRecipe, saveRecipe}) => {
    const infoList = moreInfoRecipe.moreInfoResult.map(nutrient => {
        const randomKey = Math.random()*10
        return ( 
            <div className="more-info-container" key={randomKey}>
                <p>{nutrient.title}: {nutrient.amount}</p>
            </div>
        )
        
    })

    return (
        <>
            {infoList}
            <button id="add-recipe-button" onClick={saveRecipe}>Add recipe</button>
        </>
    )
}

export default MoreInfo