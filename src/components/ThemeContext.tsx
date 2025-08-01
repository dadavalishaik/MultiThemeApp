import React, { createContext, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Theme = "theme1" | "theme2" | "theme3";

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>("theme1");
  const [pendingTheme, setPendingTheme] = useState<Theme | null>(null);
  const [currentKey, setCurrentKey] = useState<number>(0);

  useEffect(() => {
    const stored = localStorage.getItem("selectedTheme") as Theme;
    if (stored) setThemeState(stored);
  }, []);

  const setTheme = (newTheme: Theme) => {
    if (newTheme === theme) return;
    setPendingTheme(newTheme);
    setCurrentKey((prev) => prev + 1); // triggers AnimatePresence exit
  };

  const handleExitComplete = () => {
    if (pendingTheme) {
      setThemeState(pendingTheme);
      localStorage.setItem("selectedTheme", pendingTheme);
      setPendingTheme(null);
    }
  };

  const getMotionVariants = () => {
    switch (theme) {
      case "theme2":
        return {
          initial: { x: "-100vw", opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: "100vw", opacity: 0 },
        };
      case "theme3":
        return {
          initial: { y: "100vh", opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { y: "-100vh", opacity: 0 },
        };
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
        };
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
        <motion.div
          key={currentKey}
          initial={getMotionVariants().initial}
          animate={getMotionVariants().animate}
          exit={getMotionVariants().exit}
          transition={{ duration: 0.6 }}
          className={`theme-wrapper ${theme}`}
          style={{ minHeight: "100vh", width: "100vw" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};










// import React, { createContext, useContext, useState } from "react";

// type Theme = "theme1" | "theme2" | "theme3";

// interface ThemeContextProps {
//   theme: Theme;
//   setTheme: (theme: Theme) => void;
// }

// const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [theme, setTheme] = useState<Theme>("theme1");

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       <div className={theme}>{children}</div>
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = (): ThemeContextProps => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error("useTheme must be used within a ThemeProvider");
//   }
//   return context;
// };
