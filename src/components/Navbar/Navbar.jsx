import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { Ract } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

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

  // 🔥 Scroll Spy
  useEffect(() => {
    const sections = document.querySelectorAll("section"); // assumes each component has <section id="...">
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // section considered active when 50% in view
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleMenuItemClick = (itemId) => {
  setActiveSection(itemId);
  setIsOpen(false);

  const element = document.getElementById(itemId);
  if (element) {
    let yOffset = 0;
    if (itemId === "about") {
      yOffset = -160; // ✅ offset for fixed navbar
    }
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed font-bold top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[#053c48]/20 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="text-[#f1f5f9] py-5 flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-2xl font-semibold cursor-pointer"
          onClick={() => {
              handleMenuItemClick("about");
            }
          }
        >
          <span className="text-[#0fbbff]">&lt;</span>
          <span className="text-[#f1f5f9]">Vivek</span>
          <span className="text-[#0fbbff]">/</span>
          <span className="text-[#f1f5f9]">Kumar</span>
          <span className="text-[#0fbbff]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-[#f1f5f9] space-x-8 text-lg">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`
                relative cursor-pointer
                after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
                after:bg-[#0fbbff] after:transition-all after:duration-300 after:ease-in-out
                hover:after:w-full
                ${
                  activeSection === item.id ? "after:w-full text-[#0fbbff]" : ""
                }
            `}
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
            className="text-[#f1f5f9] hover:text-[#0fbbff]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/vivek-kumar-software-developer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f1f5f9] hover:text-[#0fbbff]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icons */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#0fbbff] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#0fbbff] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#053c48]/60 backdrop-blur-lg z-50 rounded-lg shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4 text-[#f1f5f9]">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`
                  relative cursor-pointer
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
                  after:bg-[#0fbbff] after:transition-all after:duration-300 after:ease-in-out
                  hover:after:w-full
                  ${
                    activeSection === item.id
                      ? "after:w-full text-[#0fbbff]"
                      : ""
                  }
              `}
              >
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className="cursor-pointer"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/VivekChaudharyCS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f1f5f9] hover:text-[#0fbbff]"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/vivek-kumar-software-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f1f5f9] hover:text-[#0fbbff]"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
