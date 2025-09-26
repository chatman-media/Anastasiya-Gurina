import {
  createContext,
  createSignal,
  type JSX,
  onMount,
  type ParentComponent,
  useContext,
} from "solid-js";

export type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  defaultTheme?: Theme;
  storageKey?: string;
  children: JSX.Element;
};

type ThemeProviderState = {
  theme: () => Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: () => "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext(initialState);

export const ThemeProvider: ParentComponent<ThemeProviderProps> = (props) => {
  const [theme, setTheme] = createSignal<Theme>(
    typeof window !== "undefined"
      ? (localStorage.getItem(props.storageKey || "vite-ui-theme") as Theme) ||
          props.defaultTheme ||
          "system"
      : props.defaultTheme || "system",
  );

  onMount(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const currentTheme = theme() === "system" ? systemTheme : theme();

    root.classList.add(currentTheme);
    root.style.colorScheme = currentTheme;
  });

  const handleSetTheme = (newTheme: Theme) => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const currentTheme = newTheme === "system" ? systemTheme : newTheme;

    root.classList.add(currentTheme);
    root.style.colorScheme = currentTheme;

    if (typeof window !== "undefined") {
      localStorage.setItem(props.storageKey || "vite-ui-theme", newTheme);
    }
    setTheme(newTheme);
  };

  const value: ThemeProviderState = {
    theme,
    setTheme: handleSetTheme,
  };

  return (
    <ThemeProviderContext.Provider value={value}>{props.children}</ThemeProviderContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
