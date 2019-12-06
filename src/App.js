import React from 'react';
import 'typeface-roboto';
import { BrowserRouter, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import './App.css'

// Components
import NavBar from './components/NavBar'
import UserPage from './components/UserPage/UserPage'
import DietSearcher from './components/DietSearcher/DietSearcher'
import MealPlan from './components/MealPlan/MealPlan'
// import Footer from './components/Footer'

export default function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Container>
            <Route exact path="/" component={UserPage} />
            <Route path="/food" component={DietSearcher} />
            <Route path="/meal-plan" component={MealPlan} />
          </Container>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
  );
}
