/*
| Developed by Starton
| Filename : Root.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from "react";
import { getInitColorSchemeScript } from "@mui/material/styles";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import theme from "@site/src/components/MuiTheme";

export default function Root({ children }): JSX.Element {
    return (
        <React.Fragment>
            {getInitColorSchemeScript()}
            <CssVarsProvider theme={theme}>{children}</CssVarsProvider>
        </React.Fragment>
    );
}
