import React, { useState, useEffect, useContext } from 'react';

// Styling
import * as S from './styles';
import PageContainer from '../../assets/globalStyles/PageContainer';

// Context
import { CaloriesContext } from '../../contexts/caloriesContext';

// Components
import UserForm from './UserForm/index';
import CalorieResult from './CalorieResult/index';
import HomeInfo from './HomeInfo/index';

// Image
import ManRunningImg from '../../assets/svg/fitness-stats.svg';
import IntroPatternLeftDesktop from '../../assets/svg/bg-pattern-intro-left-desktop.svg';
import IntroPatternRightDesktop from '../../assets/svg/bg-pattern-intro-right-desktop.svg';

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
      <S.IntroContainer>
        <S.TextContainer>
          <hr />
          <p>
            With the calorie intake calculator from The Calorie Police, we’ll
            help you calculate and understand your daily calorie intake needs.
            Our calorie needs calculator is highly personalized, so it can yield
            calorie intake for both men and women.
          </p>

          <p>
            Simply input the requested information, and we’ll display the
            healthiest range for your recommended calorie intake whether you’re
            looking to gain, lose or maintain your current weight. Try it today,
            it doesn’t get any easier than this.
          </p>
        </S.TextContainer>
        <S.ManRunningImg src={ManRunningImg} alt="man running" />
        <S.IntroPatternLeftDesktop
          src={IntroPatternLeftDesktop}
          alt="background pattern"
        />
        <S.IntroPatternRightDesktop
          src={IntroPatternRightDesktop}
          alt="background pattern"
        />
      </S.IntroContainer>

      <S.Card>
        <h1>Calculate your caloric needs</h1>
        <UserForm />
        {componentShouldShow && <CalorieResult dailyCalories={dailyCalories} />}
      </S.Card>

      <HomeInfo />
    </PageContainer>
  );
}
