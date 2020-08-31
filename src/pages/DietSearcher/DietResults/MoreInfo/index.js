import React from 'react';
import styles from './styles';

export default function MoreInfo({ moreInfoRecipe, saveRecipe }) {
  return (
    <>
      {moreInfoRecipe.map((nutrient, index) => {
        const randomKey = Math.random() * 10;
        while (index <= 5) {
          return (
            <div key={randomKey}>
              <p>
                {nutrient.title}: {nutrient.amount}
              </p>
            </div>
          );
        }
      })}
      <button onClick={saveRecipe}>Add recipe</button>
    </>
  );
}
