import React from 'react';

// Styles
import 'typeface-roboto';
import { CssBaseline } from '@material-ui/core';
import { AppContainer } from './styles';

// Components & Routing
import { BrowserRouter, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import UserPage from './components/UserPage/UserPage';
import DietSearcher from './components/DietSearcher/DietSearcher';
import MealPlan from './components/MealPlan/MealPlan';
import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CssBaseline />
        <NavBar />
        <AppContainer>
          <Route exact path="/" component={UserPage} />
          <Route path="/food" component={DietSearcher} />
          <Route path="/meal-plan" component={MealPlan} />
          <Footer />
        </AppContainer>
      </div>
    </BrowserRouter>
  );
}
