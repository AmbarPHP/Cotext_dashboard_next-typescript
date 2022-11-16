import React, { createContext, useContext } from "react";

//todo: declaracion de tipos
type ThemeType = {
  headerBg: string;
  fontColor: string;
  bodybg: string;
  logo: string;
};
type ThemeContextProviderProps = {
  children: React.ReactNode;
};

//todo: paso 2: crear los valores iniciales default
const themeConfig = {
  light: {
    headerBg: "#F7B30C",
    fontColor: "black",
    bodybg: "white",
    logo: "Brightness7Icon",
  },
  dark: {
    headerBg: "#3c3c3c",
    fontColor: "white",
    bodybg: "black",
    logo: "BedtimeIcon",
  },
};

export const ThemeContext = createContext<ThemeType | undefined>(themeConfig.light);

//Todo: paso 4 creacion de provider
export const ThemeProvider = ({ children }: ThemeContextProviderProps) => {
  //Todo : Paso 3: - Crear contexto y usecontext

  //explicacion : comparte los valores del contexto con los childres pasados por parametro
  return (
    <ThemeContext.Provider value={themeConfig.light}>{children}</ThemeContext.Provider>
  );
};


