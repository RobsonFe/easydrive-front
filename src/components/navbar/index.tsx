import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { ModeToggle } from "../toggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "About", "Services", "Contact"];

  const handleClickOutside = (e: any) => {
    if (isOpen && !e.target.closest("nav")) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="text-lg font-medium text-neutral-900 dark:text-white">
            Logo
          </div>

          <button
            className="relative z-50 text-neutral-900 dark:text-white md:hidden"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-neutral-900 dark:text-white hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
            <ModeToggle/>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="rounded-full bg-neutral-900 px-6 py-2 text-sm font-medium text-white hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 transition-colors duration-300"
            >
              Sign Up
            </a>
            <a
              href="#"
              className="px-6 py-2 text-sm font-medium text-neutral-900 hover:text-neutral-500 dark:text-white dark:hover:text-neutral-400 transition-colors duration-300"
            >
              Login
            </a>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`absolute right-0 top-16 h-screen w-64 bg-white dark:bg-black transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col p-4">
            <div className="flex flex-col space-y-4 mb-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-neutral-900 dark:text-white hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
              <ModeToggle/>
            </div>

            <div className="flex flex-col space-y-4">
              <a
                href="#"
                className="rounded-full bg-neutral-900 px-6 py-2 text-sm font-medium text-white text-center hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 transition-colors duration-300"
              >
                Sign Up
              </a>
              <a
                href="#"
                className="px-6 py-2 text-sm font-medium text-neutral-900 hover:text-neutral-500 dark:text-white dark:hover:text-neutral-400 text-center transition-colors duration-300"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
