import React, { useState, useEffect, useContext } from 'react';
import * as S from './styles';
import PageContainer from '../../assets/globalStyles/PageContainer';

// Context
import { CaloriesContext } from '../../contexts/caloriesContext';

// Components
import UserForm from './UserForm/index';
import CalorieResult from './CalorieResult/index';
import HomeInfo from './HomeInfo/index';

export default function Home() {
  const [componentShouldShow, setComponentShouldShow] = useState(false);
  const { dailyCalories } = useContext(CaloriesContext);

  useEffect(() => {
    if (dailyCalories > 0) {
      setComponentShouldShow(true);
    }
  }, [dailyCalories]);

  return (
    <PageContainer>
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
      {componentShouldShow && <CalorieResult dailyCalories={dailyCalories} />}
      <HomeInfo />
    </PageContainer>
  );
}
