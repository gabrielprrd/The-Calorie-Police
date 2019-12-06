export const INITIAL_USERINFO = {
    name: '',
    gender: null,
    age: null,
    height: null,
    weight: null,
    activity: 1.2,
    basalMetabolism: null,
    dailyCalories: null,
    isSubmitted: false,
    errorMsgs: {
        nameError: '',
        heightError: '',
        weightError: '',
        ageError: '',
    }
}

export const INITIAL_FOODLIST = {}

export const INITIAL_MEAL_PLAN = {
    food: null,
    isMealShown: false,
    timeFrame: 'day'
}

export const apiKey = '37d5be3315dc4a78acc31544ec2f7a84'