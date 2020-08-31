import React, { useState, useEffect, createContext } from 'react';

export const CaloriesContext = createContext();

export default function CaloriesProvider({ children }) {
  const [dailyCalories, setDailyCalories] = useState(0);

  useEffect(() => {
    const fetchCalories = async () => {
      if (localStorage.getItem('@calorie-police/userInfo').length > 0) {
        try {
          const fetchedDailyCalories = await JSON.parse(
            localStorage.getItem('@calorie-police/userInfo')
          ).dailyCalories;
          setDailyCalories(fetchedDailyCalories);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchCalories();
  }, []);

  return (
    <CaloriesContext.Provider value={{ dailyCalories, setDailyCalories }}>
      {children}
    </CaloriesContext.Provider>
  );
}
