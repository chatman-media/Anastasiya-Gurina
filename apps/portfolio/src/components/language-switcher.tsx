"use client";

import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "../../../../packages/ui/src/components/ui/button";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ru" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="h-8 w-8 rounded-md hover:bg-muted/50 transition-colors"
      title={i18n.language === "en" ? "Русский" : "English"}
    >
      <Globe className="h-4 w-4" />
      <span className="sr-only">Toggle language</span>
    </Button>
  );
}
