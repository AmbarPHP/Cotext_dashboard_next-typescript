import { ReactNode } from "react";
import { Toolbar, Box, styled } from "@mui/material";
import theme from "../theme";

import { Header } from "./Header/Header";
import { Drawer } from "./Drawer";
import { Footer } from "./Footer";
import { Main } from "./Main";

import { DrawerContextProvider } from "../contexts/drawer-context";
import { ThemeProvider } from "@mui/material/styles";

const OuterContainer = styled(Box)`
  display: flex;
  overflow: hidden;
  height: inherit;
  flex-direction: column;
  min-height: 100vh;
`;

const InnerContainer = styled(Box)`
  display: flex;
  flex: 1;
  overflow: hidden;
  background-color: theme.palette.primary.main,
  color: darkslategray;

  text-align: center;
`;

interface ILayoutProps {
  children: NonNullable<ReactNode>;
}

export const Layout = ({ children }: ILayoutProps) => (
  //paso 6 : habilitar el provedor---> paso 7 -usar los valores del contexto en inner components
  <ThemeProvider theme={theme}>
    <DrawerContextProvider>
      <OuterContainer>
        <Header /> 
        <Toolbar />
        <InnerContainer>
        <Drawer />
          <Main>{children}</Main>
        </InnerContainer>
        <Footer>Footer</Footer>
      </OuterContainer>
    </DrawerContextProvider>
  </ThemeProvider>
);
