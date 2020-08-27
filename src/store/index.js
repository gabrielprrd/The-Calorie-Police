export const INITIAL_USERINFO = {
  name: '',
  gender: 'Male',
  age: '',
  height: '',
  weight: '',
  activity: 1.2,
  basalMetabolism: '',
  dailyCalories: '',
};

export const INITIAL_FOODLIST = {
  query: '',
  food: null,
  savedRecipes: [],
  userRecipesTotalCalories: 0,
  isSavedRecipeShown: false,
  isFoodShown: false,
  moreInfoRecipe: {
    moreInfoResult: null,
    recipeid: null,
    isMoreInfoShown: false,
  },
};

export const INITIAL_MEAL_PLAN = {
  food: null,
  isMealShown: false,
};

export const apiKey = '37d5be3315dc4a78acc31544ec2f7a84';
