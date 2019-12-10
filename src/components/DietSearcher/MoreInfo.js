import React from 'react'

const MoreInfo = ({moreInfoResult}) => {
    const infoList = moreInfoResult.map(nutrient => {
        const nutrientKey = Math.random()*10
        return ( 
            <div className="more-info-container" key={nutrientKey}>
                <p>{nutrient.title}: {nutrient.amount}</p>
            </div>
        )
    })

    return (
        <>
            {infoList}
        </>
    )
}

export default MoreInfo