import styled from 'styled-components';

export const AppContainer = styled.div`
  min-height: 100vh;
  padding: 0 1em;
`;

// User Page
export const ErrorMsg = styled.div`
  font-size: 0.85em;
  color: red;
`;

export const HomeImgContainer = styled.div`
  position: relative;
  top: 1em;
  max-width: 90vw;
  height: auto;
  margin: 0 auto;

  .img-content {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2;
    color: white;
    padding: 0.5em;

    p {
      bottom: 0px;
    }
  }

  img {
    vertical-align: middle;
    width: 90vw;
    height: auto;
    z-index: 1;
    bottom: 0;
    left: 0;
  }

  .runningVerticalImg {
    display: none;
  }

  @media screen and (max-width: 600px) {
    .runningVerticalImg {
      display: block;
    }

    .sprintingImg {
      display: none;
    }
  }

  @media screen and (max-width: 300px) {
    p {
      font-size: 0.8em;
    }
  }
`;

export const FormGroup = styled.form`
  display: flex;
  flex-direction: column;

  .outterWrapper {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  .innerWrapper {
    display: flex;
    flex-direction: column;
    padding: 2em 1em;
    justify-content: center;
    align-items: flex-start;

    .inputWrapper {
      margin: 1em 0;
    }
  }

  button {
    margin: 1em;
  }

  @media screen and (max-width: 700px) {
    margin-top: 1.5em;

    .outterWrapper {
      flex-direction: column;
      align-items: stretch;
      justify-content: stretch;

      .innerWrapper {
        padding: 0;
        align-items: stretch;
        justify-content: stretch;

        .inputWrapper {
          align-items: stretch;
          justify-content: stretch;
          margin: 0.5em;
        }
      }
    }

    button {
      margin: 1em 0;
    }
  }
`;

export const TabButtonsContainer = styled.div`
  display: flex;

  button {
    margin: 0.3em 0.8em;
    font-size: 0.9em;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: space-evenly;
  }
`;

export const InfoTabsDiv = styled.div`
  padding: 1em;
`;

export const InfoTabsInnerDiv = styled.div``;

// Footer
export const Bottom = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  height: 80px;
  background-color: #304ffe;
  bottom: 0;

  p {
    font-size: 0.8em;
  }

  a {
    color: black;
  }
`;

// MealPlan

export const GeneralMealsInfoContainer = styled.div``;

export const MealResultContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  box-shadow: 1px 1px 6px grey;
  margin: 0.5em;
  padding: 0.8em;
  height: auto;

  img {
    border-radius: 10px;
    margin: 1em;
    width: auto;
    height: 100%;
  }

  @media screen and (max-width: 880px) {
    flex-direction: column;
    align-items: space-evenly;
  }

  @media screen and (max-width: 600px) {
    img {
      width: 70vw;
      height: auto;
    }
  }
`;

// Diet Searcher

export const FoodResultContainer = styled(MealResultContainer)`
  height: 100%;
  flex-direction: column;
`;
export const FormDiet = styled.form`
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const MoreInfoContainer = styled.div`
  margin-bottom: 1em;
  padding-bottom: 4px;
  align-items: flex-start;
  justify-content: flex-start;

  p {
    font-size: 0.8em;
    margin-bottom: -4px;
    padding: 0;
  }
`;
