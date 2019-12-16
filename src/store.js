export const INITIAL_USERINFO = {
    name: '',
    gender: null,
    age: null,
    height: null,
    weight: null,
    activity: null,
    basalMetabolism: null,
    dailyCalories: null,
    isSubmitted: false,
    errorMsgs: {
        nameError: '',
        genderError: '',
        heightError: '',
        weightError: '',
        ageError: '',
    }
}

export const INITIAL_FOODLIST = {
    query: '',
    food: null,
    savedRecipes: null,
    isFoodShown: false,
    moreInfoRecipe: {
        moreInfoResult: null,
        recipeid: null,
        isMoreInfoShown: false
    }
}

export const INITIAL_MEAL_PLAN = {
    food: null,
    isMealShown: false
}

export const apiKey = '37d5be3315dc4a78acc31544ec2f7a84'