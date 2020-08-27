import React from 'react';
import * as S from './styles';

// Components
import UserForm from './UserForm/index';
// import CalorieResult from './CalorieResult/index';
import UserPageInfo from './UserPageInfo/index';

export default function UserPage() {
  return (
    <>
      <p>
        With the calorie intake calculator from The Calorie Police, we’ll help
        you calculate and understand your daily calorie intake needs. Our
        calorie needs calculator is highly personalized, so it can yield calorie
        intake for both men and women. Simply input the requested information,
        and we’ll display the healthiest range for your recommended calorie
        intake whether you’re looking to gain, lose or maintain your current
        weight. Try it today, it doesn’t get any easier than this.
      </p>

      <UserForm />
      {/* <CalorieResult /> */}
      <UserPageInfo />
    </>
  );
}
