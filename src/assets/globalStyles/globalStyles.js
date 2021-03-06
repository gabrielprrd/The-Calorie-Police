import styled, { createGlobalStyle } from 'styled-components';
import Karla from '../fonts/Karla-Regular.ttf';

export const GlobalStyles = createGlobalStyle`

// Typography
  @font-face {
    font-family: 'Karla', sans-serif;
    src: local('Karla'), local('Karla'),
    url(${Karla}) format('truetype'); 
    font-weight: 400;
    font-style: normal;
      };  

// Reset
  * {
    /* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
h5,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  max-width: 100vw;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  display: block;
}

/* Natural flow and rhythm in articles by default */
article > * + * {
  margin-top: 1em;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

  font-size: ${({ theme }) => theme.fontSize};
  font-family: 'Karla', sans-serif;
`;
