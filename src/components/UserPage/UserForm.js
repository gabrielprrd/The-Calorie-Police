import React from 'react'
import { InputLabel, Select, MenuItem, FormControlLabel, FormLabel, RadioGroup, Radio, FormHelperText, Button, TextField, InputAdornment  } from '@material-ui/core'
import { ErrorMsg, FormGroup } from '../../styles'


const UserForm = ({handleChange, handleSelect, handleNameChange, handleSubmit, errorMsgs, activity}) => {

        return (
            <FormGroup onSubmit={handleSubmit}>

            <div className="outterWrapper">
                <div className="innerWrapper">
                    <div className="inputWrapper">
                        <TextField required type="text" id="name" label="Your name" onChange={handleNameChange} />
                        <ErrorMsg>{errorMsgs.nameError}</ErrorMsg>
                    </div>

                    <div className="inputWrapper">
                        <FormLabel>Gender: </FormLabel>
                        <RadioGroup required aria-label="gender" id="gender" onChange={handleSelect}>
                            <FormControlLabel value="female" name="gender" control={<Radio color="secondary" />} label="Female" />
                            <FormControlLabel value="male" name="gender" control={<Radio color="primary" />} label="Male" />
                        </RadioGroup>
                        <ErrorMsg>{errorMsgs.genderError}</ErrorMsg>
                    </div>
                </div>
                
                <div className="innerWrapper">
                    <div className="inputWrapper">
                        <TextField required type="number" id="height" label="Your height" onChange={handleChange}
                        InputProps={{endAdornment: <InputAdornment position="end">m</InputAdornment>,}} />
                        <ErrorMsg>{errorMsgs.heightError}</ErrorMsg>
                    </div>

                    <div className="inputWrapper">           
                        <TextField required type="number" id="weight" label="Your weight" onChange={handleChange} InputProps={{endAdornment: <InputAdornment position="end">kg</InputAdornment>}} />
                        <ErrorMsg>{errorMsgs.weightError}</ErrorMsg>
                    </div>
                </div>

                <div className="innerWrapper">
                    <div className="inputWrapper">
                        <TextField required type="Number" id="age" label="Your age" onChange={handleChange} InputProps={{endAdornment: <InputAdornment position="end">years</InputAdornment>}} />
                        <ErrorMsg>{errorMsgs.ageError}</ErrorMsg>
                    </div>

                    <div className="inputWrapper">
                        <InputLabel id="activity">Exercise level: </InputLabel>
                        <Select required name="activity" id="activity" value={activity} onChange={handleSelect}>
                            <MenuItem value={1.2}>Sedentary</MenuItem>
                            <MenuItem value={1.375}>Light exercises (1-3 days/week)</MenuItem>
                            <MenuItem value={1.550}>Moderate exercises (3-5 days/week)</MenuItem>
                            <MenuItem value={1.725}>Heavy exercises (5-7 days/week)</MenuItem>
                        </Select>
                    </div>
                </div>
            </div>

            <div className="outterWrapper">
                <Button variant="contained" color="secondary" type="submit">Show daily calories</Button>
            </div>
            </FormGroup>
        )
    }

export default UserForm
