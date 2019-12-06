import React from 'react'

const MealPlanForm = ({handleTimeFrameChange, showMeals}) => {
    return (
        <>
            <form onSubmit={showMeals}>
                <select id="timeFrame" onChange={handleTimeFrameChange}>
                    <option value="day">Daily meal plans</option>
                    <option value="week">Weekly meal plans</option>
                </select>
                
                <button type="submit">Show me!</button>
            </form>  
        </>
    )
}


export default MealPlanForm