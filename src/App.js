import React from 'react';

// Theming
import { ThemeProvider } from 'styled-components';
import mainTheme from './assets/globalStyles/theme';

// Styles
import 'typeface-roboto';
import { CssBaseline } from '@material-ui/core';
import GlobalStyle from './assets/GlobalStyles/globalStyles';
import { AppContainer } from './styles';

// Components & Routing
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import NavBar from './components/NavBar/index';
import Footer from './components/Footer/index';

// Pages
import UserPage from './pages/UserPage/index';
import DietSearcher from './pages/DietSearcher/index';
import MealPlan from './pages/MealPlan/index';

export default function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <BrowserRouter>
        <div className="App">
          <GlobalStyle />
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
    </ThemeProvider>
  );
}
