import React, { useState, useEffect, createContext } from 'react';

export const UserCalorieContext = createContext();

export default function UserCalorieProvider({ children }) {
  const [userCalorie, setUserCalorie] = useState(null);

  return (
    <UserCalorieContext.Provider value={{ userCalorie, setUserCalorie }}>
      {children}
    </UserCalorieContext.Provider>
  );
}
