
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "h-16 blur-backdrop shadow-sm"
          : "h-20 bg-transparent"
      )}
    >
      <div className="container-tight h-full flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-xl font-medium">
            Cozy<span className="text-muted-foreground">Home</span>
          </a>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a href="#activities" className="nav-link">
                Activities
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#popular" className="nav-link">
                Popular
              </a>
            </li>
          </ul>
        </nav>

        <div className="md:hidden">
          <button 
            className="p-2 rounded-md hover:bg-secondary transition-colors"
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
