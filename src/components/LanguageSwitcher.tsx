import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // Define language names for display
  const languages: { [key: string]: string } = {
    pt: "Português",
    en: "English",
    fr: "Français",
    de: "Deutsch",
    it: "Italiano",
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full bg-white shadow-lg">
            <Globe className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Mudar idioma</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {Object.keys(i18n.options.supportedLngs || {}).map((lngKey) => {
            const lng = i18n.options.supportedLngs?.[parseInt(lngKey)];
            if (lng && lng !== 'cimode') { // Exclude cimode if present
              return (
                <DropdownMenuItem key={lng} onClick={() => changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}>
                  {languages[lng] || lng} {i18n.resolvedLanguage === lng ? "✓" : ""}
                </DropdownMenuItem>
              );
            }
            return null;
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSwitcher;

