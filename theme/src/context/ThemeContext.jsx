import { useState } from "react";
import { createContext } from "react";

//1st step create the context
export const ThemeContext = createContext();

//2nd step create the context provider
export function ThemeProvider({children}) {
    const [theme, setTheme] = useState("dark")
    return (
        <ThemeContext.Provider  value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}