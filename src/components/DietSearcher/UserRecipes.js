import React from 'react'

const UserRecipes = ({savedRecipes}) => {
    const savedRecipesList = savedRecipes.map(recipe => {
        return (
            <div key={recipe.id}>
                    <h3>{ recipe.title }</h3>
                    {/* <p></p> */}
            </div>
        )
    })

    return (
        <>
        <h2>Your recipes</h2>
         { savedRecipesList }
        </>
    )
}

export default UserRecipes