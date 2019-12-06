import React from 'react'

const MealPlanWeekResults = ({meals}) => {

    // criar um novo array de objetos onde cada objeto junta as refeições pelo dia
    const mealsList = meals.map(meal => {
        const objParsed = JSON.parse(meal.value)
        const title = objParsed.title
        const id = objParsed.id

        return (
            <div className="mealResultContainer" key={id}>
                <h3>Day { meal.day }</h3>
                <h4>{ title }</h4>
            </div>
        )
    })

    return (
        <>
            { mealsList }
        </>
    )
}

export default MealPlanWeekResults