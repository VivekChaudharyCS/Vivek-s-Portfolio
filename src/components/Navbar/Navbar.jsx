import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPrefersDark) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false); // Auto-close mobile menu on desktop
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // ✅ Scroll Spy (works on both desktop + mobile)
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navHeight = document.querySelector("nav")?.offsetHeight || 80;
    let observer;

    const createObserver = () => {
      if (observer) {
        sections.forEach((section) => observer.unobserve(section));
      }

      const isMobile = window.innerWidth < 768;
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          threshold: isMobile ? 0.2 : 0.4,
          rootMargin: isMobile
            ? `-${navHeight + 40}px 0px -${navHeight + 140}px 0px`
            : `-${navHeight + 20}px 0px -${navHeight + 100}px 0px`,
        }
      );

      sections.forEach((section) => observer.observe(section));
    };

    createObserver();
    window.addEventListener("resize", createObserver);

    return () => {
      if (observer) {
        sections.forEach((section) => observer.unobserve(section));
      }
      window.removeEventListener("resize", createObserver);
    };
  }, []);

  const handleMenuItemClick = (itemId) => {
    setActiveSection(itemId);
    setIsOpen(false);

    const element = document.getElementById(itemId);
    if (element) {
      let yOffset = itemId === "about" ? -160 : 0; // ✅ offset for navbar
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    // { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed font-bold top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-dark-bg/20 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="text-dark-text py-5 flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-2xl font-semibold cursor-pointer"
          onClick={() => handleMenuItemClick("about")}
        >
          <span className="text-global-clr">&lt;</span>
          <span className="dark:text-dark-text text-light-text">Vivek</span>
          <span className="text-global-clr">/</span>
          <span className="dark:text-dark-text text-light-text">Kumar</span>
          <span className="text-global-clr">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex dark:text-dark-text text-light-text space-x-8 text-lg">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`relative 
                after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 
                after:h-[2px] after:bg-global-clr after:transition-all after:duration-300 after:ease-in-out 
                hover:after:w-full ${
                  activeSection === item.id
                    ? "after:w-full text-global-clr"
                    : ""
                }`}
            >
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className="cursor-pointer"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Media Icons */}
        <div className="hidden md:flex space-x-4 text-2xl">
          <a
            href="https://github.com/VivekChaudharyCS"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-dark-text text-light-text hover:text-global-clr"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/vivek-kumar-software-developer"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-dark-text text-light-text hover:text-global-clr"
          >
            <FaLinkedin size={24} />
          </a>
          <button
            onClick={toggleTheme}
            area-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="inherit hover:cursor-pointer "
          >
            {theme === "dark" ? (
              <MdLightMode className="text-yellow-300 hover:text-global-clr rounded-full" />
            ) : (
              <MdDarkMode className="text-light-text hover:text-global-clr rounded-full" />
            )}
          </button>
        </div>

        {/* Mobile Menu Icons */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-global-clr cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-global-clr cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#053c48]/60 backdrop-blur-lg z-50 rounded-lg shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4 text-dark-text">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`relative cursor-pointer 
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 
                  after:h-[2px] after:bg-global-clr after:transition-all after:duration-300 after:ease-in-out 
                  hover:after:w-full ${
                    activeSection === item.id
                      ? "after:w-full text-global-clr"
                      : ""
                  }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}

            <div className="flex space-x-4">
              <a
                href="https://github.com/VivekChaudharyCS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-text hover:text-global-clr"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/vivek-kumar-software-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-text hover:text-global-clr"
              >
                <FaLinkedin size={24} />
              </a>
              <button
                onClick={toggleTheme}
                area-label={`Switch to ${
                  theme === "dark" ? "light" : "dark"
                } mode`}
                className="inherit hover:cursor-pointer "
              >
                {theme === "dark" ? (
                  <MdLightMode className="text-yellow-300 hover:text-global-clr rounded-full " />
                ) : (
                  <MdDarkMode className="text-light-text hover:text-global-clr rounded-full" />
                )}
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
