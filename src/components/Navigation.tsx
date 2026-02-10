import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLanguage } from "@/i18n/LanguageContext";
import giraffyLogo from "@/assets/giraffy-white.svg";

const Navigation = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinkClass =
    "px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors rounded-md hover:bg-primary-foreground/10";
  const activeClass = "text-primary-foreground bg-primary-foreground/10";

  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-primary/20">
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img src={giraffyLogo} alt="Giraffy" className="h-6" />
          </NavLink>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass} activeClassName={activeClass}>
              {t.nav.about}
            </NavLink>
            <NavLink to="/companies" className={navLinkClass} activeClassName={activeClass}>
              {t.nav.forBusiness}
            </NavLink>
            <NavLink to="/investor" className={navLinkClass} activeClassName={activeClass}>
              {t.nav.investors}
            </NavLink>
            <NavLink to="/pr-media" className={navLinkClass} activeClassName={activeClass}>
              {t.nav.prMedia}
            </NavLink>
          </div>

          {/* Right side: language toggle + mobile hamburger */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className={navLinkClass}
            >
              {language === "en" ? "العربية" : "English"}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-primary-foreground/80 hover:text-primary-foreground"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 pb-4">
          <div className="container mx-auto px-6 flex flex-col gap-1 pt-2">
            <NavLink to="/" className={navLinkClass} activeClassName={activeClass} onClick={() => setMobileOpen(false)}>
              {t.nav.about}
            </NavLink>
            <NavLink to="/companies" className={navLinkClass} activeClassName={activeClass} onClick={() => setMobileOpen(false)}>
              {t.nav.forBusiness}
            </NavLink>
            <NavLink to="/investor" className={navLinkClass} activeClassName={activeClass} onClick={() => setMobileOpen(false)}>
              {t.nav.investors}
            </NavLink>
            <NavLink to="/pr-media" className={navLinkClass} activeClassName={activeClass} onClick={() => setMobileOpen(false)}>
              {t.nav.prMedia}
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
