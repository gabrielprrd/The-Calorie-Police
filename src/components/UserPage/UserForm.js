import React from 'react'

const UserForm = ({handleChange, handleSubmit, errorMsgs}) => {

        return (
            <form onSubmit={handleSubmit}>
                {/* <label htmlFor="name">Your name:</label> */}
                <input type="text" id="name" placeholder="Your name" onChange={handleChange} />
                {  <div className="errorDiv">{errorMsgs.nameError}</div> }

                <p>Your gender:</p>
                <label>
                <p>Man</p>
                    <input type="radio" id="gender" value="male" onChange={handleChange} />
                </label>
                <label>
                    <p>Woman</p>
                    <input type="radio" id="gender" value="female" onChange={handleChange} />
                </label>
                
                <label htmlFor="height">Your height:</label>
                <input type="number" id="height" onChange={handleChange} />
                {  <div className="errorDiv">{errorMsgs.heightError}</div> }

        
                <label htmlFor="weight">Your weight:</label>                    
                <input type="number" id="weight" onChange={handleChange} />
                {  <div className="errorDiv">{errorMsgs.weightError}</div> }


                <label htmlFor="age">Your age:</label>
                <input type="number" id="age" onChange={handleChange} />
                {  <div className="errorDiv">{errorMsgs.ageError}</div> }


                <label htmlFor="activity">Exercise level:</label>
                <select id="activity" onChange={handleChange}>
                    <option value={1.2}>Sedentary</option>
                    <option value={1.375}>Light exercises (1-3 days/week)</option>
                    <option value={1.550}>Moderate exercises (3-5 days/week)</option>
                    <option value={1.725}>Heavy exercises (5-7 days/week)</option>
                </select>

                <button type="submit">Show daily calories</button>
            </form>
        )
    }

export default UserForm
