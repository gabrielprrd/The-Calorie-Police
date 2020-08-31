import React from 'react';

// Theming
import { ThemeProvider } from 'styled-components';
import mainTheme from './assets/globalStyles/theme';

// Context
import QueryProvider from './contexts/queryContext';
import CalorieProvider from './contexts/caloriesContext';

// Styles
import 'typeface-roboto';
import { GlobalStyles } from './assets/globalStyles/globalStyles';
import AppContainer from './assets/globalStyles/AppContainer';

// Routing
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import NavBar from './components/NavBar/index';
import Footer from './components/Footer/index';

// Pages
import Home from './pages/Home/index';
import DietSearcher from './pages/DietSearcher/index';
import MealPlan from './pages/MealPlan/index';
import SavedRecipes from './pages/SavedRecipes/index';

export default function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <QueryProvider>
        <CalorieProvider>
          <BrowserRouter>
            <GlobalStyles />
            <AppContainer>
              <NavBar />
              <Route exact path="/" component={Home} />
              <Route path="/diets" component={DietSearcher} />
              <Route path="/meal-plan" component={MealPlan} />
              <Route path="/saved-recipes" component={SavedRecipes} />
              <Footer />
            </AppContainer>
          </BrowserRouter>
        </CalorieProvider>
      </QueryProvider>
    </ThemeProvider>
  );
}
