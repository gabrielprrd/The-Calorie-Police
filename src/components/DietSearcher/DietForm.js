import React from 'react'

const DietForm = ({handleChange, handleSubmit}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="query" onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default DietForm
