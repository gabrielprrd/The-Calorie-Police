import React from 'react';

export default function CalorieResult({ dailyCalories }) {
  return (
    <div>
      <p>Your daily calorie need is {dailyCalories} kcal</p>
    </div>
  );
}
