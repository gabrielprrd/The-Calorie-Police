import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    
    *, *::after, *::before {
        box-sizing: border-box;
    }
    
    html {    
        font-size: calc(0.8em + 1vw);
        font-family: 'Roboto', sans-serif;
        min-height: 100vh;
        min-width: 100vw;
        position: relative;

        h1 {
            font-size: 2em;
        }
        
        h2 {
            font-size: 1.5em;
        }

        img {
            max-width: 100%;
            object-fit: contain;
        }
    }
`;

// Footer
export const Bottom = styled.footer`
    text-align: center;
    padding: 0.8em;
    background-color: #304ffe;
    margin-top: 2em;
    position: absolute;
    bottom: 0;
    width: 100vw;
    
    p {
        font-size: 0.8em;
    }
    
    a {
        color: black;
    }
`;

// MealPlan

export const GeneralMealsInfoContainer = styled.div`

`

export const MealResultContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    box-shadow: 1px 1px 6px grey;
    margin: 0.5em;
    padding: 0.8em;
    /* flex: 1 1 auto; */
    max-height: 100vh;
    
    img {
        border-radius: 10px;
        margin: 1em;
        flex: 1 100%;
    }

    @media screen and (max-width: 880px) {
        flex-direction: column;
        align-items: space-evenly;
    }
`

// Diet Searcher

export const FoodResultContainer = styled(MealResultContainer)`
    height: 100%;
    flex-direction: column;
`
export const FormDiet = styled.form`
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const MoreInfoContainer = styled.div`

    margin-bottom: 1em;
    align-items: flex-start;
    justify-content: flex-start;

    p {
        font-size: 0.5em;
        margin: 0;
        padding: 0;
    }
`