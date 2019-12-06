import React, { Component } from 'react'

//Quero que o input seja autocomplete

export class DietForm extends Component {

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} />
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default DietForm
