import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Theme = "light" | "dark" | "system";
type ThemeContextType = {theme: Theme; setTheme: (theme: Theme) => void};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({children}: {children: ReactNode}) {
    const [theme, setThemeState] = useState<Theme>("light");

    function applyTheme(value: Theme) {
        let actualTheme = value;
        if(value === "system") {
            actualTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        }
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(actualTheme);
    }

    function setTheme(value: Theme) {
        setThemeState(value);
        localStorage.setItem("theme", value);
        applyTheme(value);
    }

    useEffect(()=> {
        // const saved= (localStorage.getItem("theme") as Theme) || "dark";
        // setThemeState(saved);
        // applyTheme(saved);

        localStorage.setItem("theme", theme);
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>
    );
}

export function useTheme(){
    const context = useContext(ThemeContext);
    if(!context) {
        throw new Error("useTheme must be used inside ThemeProvider");
    }
    return context;
}