import { NavLink } from "@/components/NavLink";
import giraffyLogo from "@/assets/giraffy-white.svg";

const Navigation = () => {
  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-primary/20">
      <div className="container mx-auto px-6">
        <nav className="relative flex items-center h-16">
          <NavLink to="/" className="flex items-center">
            <img src={giraffyLogo} alt="Giraffy" className="h-6" />
          </NavLink>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="flex items-center gap-1 pointer-events-auto">
            <NavLink
              to="/"
              className="px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors rounded-md hover:bg-primary-foreground/10"
              activeClassName="text-primary-foreground bg-primary-foreground/10"
            >
              About
            </NavLink>
            <NavLink
              to="/companies"
              className="px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors rounded-md hover:bg-primary-foreground/10"
              activeClassName="text-primary-foreground bg-primary-foreground/10"
            >
              For Business
            </NavLink>
            <NavLink
              to="/investor"
              className="px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors rounded-md hover:bg-primary-foreground/10"
              activeClassName="text-primary-foreground bg-primary-foreground/10"
            >
              Investors
            </NavLink>
            <NavLink
              to="/pr-media"
              className="px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors rounded-md hover:bg-primary-foreground/10"
              activeClassName="text-primary-foreground bg-primary-foreground/10"
            >
              PR & Media
            </NavLink>
          </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
