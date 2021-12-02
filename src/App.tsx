import React from 'react';
import './App.css';
import { Typography as TypographyMui } from "@mui/material";
import { Typography as TypographyKite } from '@kite-js/experimental';
import { Typography as TypographyPlane } from '@plane-js/core';
import { coreDefaultTheme } from '@plane-js/theme';
import { ThemeProvider as ThemeProviderMui } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "styled-components";

function App() {
    const muiTheme = createTheme({
        typography: {
            body1: {
                fontSize: "18px",
            }
        },
    });

  return (
    <div className="App">
        <TypographyKite variant="body1">Design System POC - Kite.JS</TypographyKite>
        <ThemeProviderMui theme={muiTheme}>
            <TypographyMui variant="body1">Design System POC - MUI</TypographyMui>
        </ThemeProviderMui>
        <TypographyMui variant="body1">Design System POC - MUI</TypographyMui>
        <ThemeProvider theme={{...coreDefaultTheme}}>
           <TypographyPlane variant="body-1-short">Design System POC - Plane.JS</TypographyPlane>
           <TypographyPlane variant="title-1-short">Design System POC - Plane.JS</TypographyPlane>
        </ThemeProvider>
        <TypographyPlane variant="body-1-short">Design System POC - Plane.JS</TypographyPlane>
    </div>
  );
}

export default App;
