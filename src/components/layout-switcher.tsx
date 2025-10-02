"use client";

import { Maximize2, Minimize2 } from "lucide-react";
import { Button } from "./ui/button";
import { createContext, useContext, useEffect, useState } from "react";

interface LayoutContextType {
  isFullWidth: boolean;
  toggleLayout: () => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [isFullWidth, setIsFullWidth] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("layout-width");
      return saved === "full";
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem("layout-width", isFullWidth ? "full" : "default");

    // Добавляем/удаляем класс на body для управления шириной контента
    if (isFullWidth) {
      document.body.classList.add("layout-full-width");
    } else {
      document.body.classList.remove("layout-full-width");
    }
  }, [isFullWidth]);

  const toggleLayout = () => setIsFullWidth((prev) => !prev);

  return (
    <LayoutContext.Provider value={{ isFullWidth, toggleLayout }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within LayoutProvider");
  }
  return context;
}

export function LayoutSwitcher() {
  const { isFullWidth, toggleLayout } = useLayout();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLayout}
      className="h-8 w-8 rounded-md hover:bg-muted/50 transition-colors"
      title={isFullWidth ? "Default width" : "Full width"}
    >
      {isFullWidth ? (
        <Minimize2 className="h-4 w-4" />
      ) : (
        <Maximize2 className="h-4 w-4" />
      )}
      <span className="sr-only">Toggle layout</span>
    </Button>
  );
}
