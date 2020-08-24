import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Grid } from '@material-ui/core';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justify="space-between">
          <Typography variant="h5" color="inherit">
            The Calorie Police
          </Typography>

          <Grid>
            <Button color="inherit">
              <NavLink
                style={{ color: 'inherit', textDecoration: 'inherit' }}
                to="/"
              >
                My info
              </NavLink>
            </Button>
            <Button color="inherit">
              <NavLink
                style={{ color: 'inherit', textDecoration: 'inherit' }}
                to="/food"
              >
                My diet
              </NavLink>
            </Button>
            <Button color="inherit">
              <NavLink
                style={{ color: 'inherit', textDecoration: 'inherit' }}
                to="/meal-plan"
              >
                Meal plans
              </NavLink>
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
