import { createContext, useState, useContext, useMemo } from 'react';

import { IMenuItem } from '../types';
import { MENU_LIST } from '../constants';


//tipos de datas que guardara el contexto
type DrawerContextType = {
  isOpened: boolean;
  toggleIsOpened: (value: boolean) => void;
  menu: IMenuItem[];
};

type DrawerContextProviderProps = {
  children: React.ReactNode;
};

//Todo: crear un contexto para compartir los datos
const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

// Todo: una funcion para expponer el provider,recibe un children para inyectar dentro del provider
export const DrawerContextProvider = ({ children }: DrawerContextProviderProps) => {
  const [isOpened, toggleIsOpened] = useState(false);

  const value = useMemo(() => ({
    isOpened,
    toggleIsOpened,
    menu: MENU_LIST
  })
  , [isOpened]);

//explicacion : comparte los valores del contexto con los childres pasados por parametro
  return (
    <DrawerContext.Provider value={value}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawerContext = () => {
  const context = useContext(DrawerContext);
  if (context === undefined) {
    throw new Error(
      "useDrawerContext must be used within a DrawerContextProvider"
    );
  }
  return context;
};
