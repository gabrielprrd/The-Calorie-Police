import React, { Component } from 'react'
import UserForm from './UserForm'
import CalorieResult from './CalorieResult'
import UserPageInfo from './UserPageInfo'
import { INITIAL_USERINFO } from '../../store'

class UserPage extends Component {

    state = INITIAL_USERINFO

    handleSelect = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleNameChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }


    handleChange = (e) => {

            this.setState({
                [e.target.id]: parseInt(e.target.value)
            })

        const { gender, weight, height, age, activity, basalMetabolism } = this.state;

        if (gender === 'male') {
            let maleBasalMetabolism = 66.5 + (13.8*weight) + (5*height) - (6.8*age);
            this.setState({
                basalMetabolism: maleBasalMetabolism
            })
        }

        else if (gender === 'female') {
            let femaleBasalMetabolism = 655.1 + (13.8*weight) + (1.8*height) - (4.7*age);
            this.setState({
                basalMetabolism: femaleBasalMetabolism
            })
        }

        this.setState({
            dailyCalories: (activity * basalMetabolism).toFixed(2)
        })
    }

    validate = () => {
        const { name, gender, weight, height, age } = this.state;

        let nameError = '';
        let genderError = 'You must select a gender';
        let heightError = 'Your height should be higher than zero';
        let weightError = 'Your weight should be higher than zero';
        let ageError = 'Please insert a valid age';
        
        /* check name */
        if (name === '' || name.match(/^(\w+\S+)$/) !== null) {
            nameError = 'Please insert your name'
        }

        if (name.match(/[0-9]/) !== null) {
            nameError = 'Your name should contain only letters'
        }  

        if (nameError) {
            this.setState(prevState => ({ 
                errorMsgs: {
                    // ...prevState.errorMsgs,
                    nameError
            }
        }))
            return false
        }

        /* check gender */
        if (gender === null) {
            this.setState(prevState => ({
                errorMsgs: {
                    // ...prevState.errorMsgs,
                    genderError
                }
            }))
            return false
        }
        
        /* check height */
        if (height <= 0 || height === null) {
            this.setState(prevState => ({
                errorMsgs: {
                    // ...prevState.errorMsgs,
                    heightError
                }
            }))
            return false
        }

        /* check weight */
        if (weight <= 0 || weight === null) {
            this.setState(prevState => ({
                errorMsgs: {
                    // ...prevState.errorMsgs,
                    weightError
                }
            }))
            return false
        }

        /* check age */
        if (age <= 0 || age > 150 || age === null) {
            this.setState(prevState => ({
                errorMsgs: {
                    // ...prevState.errorMsgs,
                    ageError
                }
            }))
            return false
        }
        return true
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        const isValid = this.validate();
        if (isValid) {
            this.setState({
                isSubmitted: true
            })
    
            if (typeof(Storage) !== "undefined") {
                localStorage.setItem('@calorie-police/userInfo', JSON.stringify(this.state));
            }
        }
    }

    render() {
        return (
            <div>
                <div>
                    <p>
                    With the calorie intake calculator from The Calorie Police, we’ll help you calculate and understand your daily calorie intake needs. Our calorie needs calculator is highly personalized, so it can yield calorie intake for both men and women. Simply input the requested information, and we’ll display the healthiest range for your recommended calorie intake whether you’re looking to gain, lose or maintain your current weight. Try it today, it doesn’t get any easier than this
                    </p>
                </div>

                <UserForm
                // activity={this.state.activity}
                handleNameChange={this.handleNameChange}
                handleSelect={this.handleSelect}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                errorMsgs={this.state.errorMsgs}
                validate={this.validate} />
                
                {this.state.isSubmitted && <CalorieResult dailyCalories={this.state.dailyCalories} />}

                <UserPageInfo />
            </div>
        )
    }
}

export default UserPage
