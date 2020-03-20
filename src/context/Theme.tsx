import React, { createContext } from 'react';

interface IProps {
  toggleTheme(): void;
  children?: any;
}

export const ThemeContext = createContext<IProps | null>(null);

export function ThemeProvider({ toggleTheme, children }: IProps) {
  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
