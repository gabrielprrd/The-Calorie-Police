import React from 'react'
import { InputLabel, FormControl, Select, MenuItem, FormControlLabel, FormLabel, RadioGroup, Radio, FormHelperText, Button, TextField } from '@material-ui/core'


const UserForm = ({handleChange, handleSelect, handleNameChange, handleSubmit, errorMsgs, activity}) => {

        return (
            <form onSubmit={handleSubmit}>

                <TextField type="text" id="name" placeholder="Your name" onChange={handleNameChange} />
                <FormHelperText className="errorDiv">{errorMsgs.nameError}</FormHelperText>

                <FormLabel>Gender: </FormLabel>
                <RadioGroup aria-label="gender" id="gender"  onChange={handleSelect}>
                    <FormControlLabel value="female" name="gender" control={<Radio color="secondary" />} label="Female" />
                    <FormControlLabel value="male" name="gender" control={<Radio color="primary" />} label="Male" />
                </RadioGroup>
                <div className="errorGender">{errorMsgs.genderError}</div>
                
                <TextField type="number" id="height" label="Your Height" onChange={handleChange} />
                <div className="errorDiv">{errorMsgs.heightError}</div>

                          
                <TextField type="number" id="weight" label="Your weight" onChange={handleChange} />
                <div className="errorDiv">{errorMsgs.weightError}</div>


                <TextField type="Number" id="age" label="Your age" onChange={handleChange} />
                <div className="errorDiv">{errorMsgs.ageError}</div>

                <FormControl>
                <InputLabel id="activity-label">Exercise level: </InputLabel>
                <Select name="activity" id="activity" value={activity} onChange={handleSelect}>
                    <MenuItem value={1.2}>Sedentary</MenuItem>
                    <MenuItem value={1.375}>Light exercises (1-3 days/week)</MenuItem>
                    <MenuItem value={1.550}>Moderate exercises (3-5 days/week)</MenuItem>
                    <MenuItem value={1.725}>Heavy exercises (5-7 days/week)</MenuItem>
                </Select>
                </FormControl>

                <Button variant="contained" color="secondary" type="submit">Show daily calories</Button>
            </form>
        )
    }

export default UserForm
