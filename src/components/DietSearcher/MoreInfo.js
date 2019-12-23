import React from 'react'
import { Button } from '@material-ui/core'
import { MoreInfoContainer } from '../../styles'


const MoreInfo = ({moreInfoRecipe, saveRecipe}) => {
    const infoList = moreInfoRecipe.moreInfoResult.map((nutrient, index) => {
        const randomKey = Math.random()*10
        while (index <= 5) {
            return ( 
                <MoreInfoContainer key={randomKey}>
                    <p>{nutrient.title}: {nutrient.amount}</p>
                </MoreInfoContainer>
            )
        }
        
    })

    return (
        <>
            {infoList}
            <Button variant="contained" color="secondary" onClick={saveRecipe}>Add recipe</Button>
        </>
    )
}

export default MoreInfo