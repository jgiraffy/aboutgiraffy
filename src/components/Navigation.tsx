import { NavLink } from "@/components/NavLink";
import giraffyLogo from "@/assets/giraffy-white.svg";

const Navigation = () => {
  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-primary/20">
      <div className="mx-auto px-6">
        <nav className="flex items-center justify-center h-16">
          <NavLink to="/" className="flex items-center mr-6">
            <img src={giraffyLogo} alt="Giraffy" className="h-6" />
          </NavLink>
          
          <div className="flex items-center gap-1">
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
              Companies
            </NavLink>
            <NavLink
              to="/investor"
              className="px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors rounded-md hover:bg-primary-foreground/10"
              activeClassName="text-primary-foreground bg-primary-foreground/10"
            >
              Investor
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
