import React, { useState } from 'react';
import { themes } from "constants/themeConstants";

export const ThemeContext = React.createContext();

export const ThemeContextProvider = ( {children} ) => {
  const [currentTheme, setTheme] = useState(themes.LIGHT);
  const changeTheme = (selectedTheme) => (
    setTheme(selectedTheme)
  );

  return (
    <ThemeContext.Provider value={[currentTheme, changeTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}
