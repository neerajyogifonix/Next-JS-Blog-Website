import { navItems } from "@/lib/constants";
import Link from "next/link";
import ThemeTogggle from "./ThemeTogggle";

function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <h1 className="text-xl font-serif font-bold text-foreground">
              Resonance
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ">
            {navItems.map((item) => {
              return (
                <Link
                  className="text-sm font-md text-muted-foreground hover:text-foreground transition-colors duration-200"
                  key={item.name}
                  href={item.href}
                >
                  {item.name}
                </Link>
              );
            })}
            <ThemeTogggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
