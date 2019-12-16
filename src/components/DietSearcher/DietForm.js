import React from 'react'
import { Button, TextField } from '@material-ui/core'
import { FormDiet } from '../../styles'


const DietForm = ({handleChange, handleSubmit}) => {
    return (
        <div>
            <FormDiet onSubmit={handleSubmit}>
                <TextField id="outlined-basic" variant="outlined" name="query" onChange={handleChange} />
                <Button color="secondary" variant="contained" type="submit">Search</Button>
            </FormDiet>
        </div>
    )
}

export default DietForm
