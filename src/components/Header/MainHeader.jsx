import { useState } from "react";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="shadow-md ">
    <div className="container mx-auto px-2 py-6 flex justify-between items-center">
      {/* Logo Section */}
      <Link to="/" className="text-xl font-bold text-red-800"></Link>
  
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>
  
      {/* Navigation Menu */}
      <nav
        className={`absolute md:static left-0 top-24 w-full md:w-auto bg-white md:bg-transparent md:flex ${menuOpen ? "block" : "hidden"}`}
      >
        <ul className="md:flex md:items-center gap-15 text-md  md:px-0 py-4 md:py-0 font-semibold -top-4">
          <li>
            <Link to="/" className="hover:text-yellow-500">
              HOME
            </Link>
          </li>
  
          {/* About Dropdown */}
          <li className="relative group">
            <Link to="/about" className="hover:text-yellow-500">
              ABOUT US
            </Link>
            <ul className="absolute hidden group-hover:block bg-white shadow-md p-2  space-y-1 w-50 z-20  ">
              <li>
                <Link to="/about/message" className="hover:text-yellow-500 block px-4 py-2  bg-gray-500 outline-none">
                  DIRECTOR MESSAGE
                </Link>
              </li>
              <li>
                <Link to="/about/vision" className="hover:text-yellow-500 block px-4 py-2">
                  VISION
                </Link>
              </li>
              <li>
                <Link to="/about/mission" className="hover:text-yellow-500 block px-4 py-2">
                  MISSION
                </Link>
              </li>
            </ul>
          </li>
  
          <li>
            <Link to="/admission" className="hover:text-yellow-500">
              ADMISSION
            </Link>
          </li>
  
          {/* Academic Zone Dropdown */}
          <li className="relative group">
            <Link to="/academic-zone" className="hover:text-yellow-500">
              ACADEMIC ZONE
            </Link>
            <ul className="absolute hidden group-hover:block bg-white shadow-md p-2 space-y-1 w-52 z-20">
              <li>
                <Link to="/academic-zone/activities" className="hover:text-yellow-500 block px-4 py-2">
                  ACTIVITIES
                </Link>
              </li>
              <li>
                <Link to="/academic-zone/tc-enquiry" className="hover:text-yellow-500 block px-4 py-2">
                  TC ENQUIRY
                </Link>
              </li>
              <li>
                <Link to="/academic-zone/annual-planner" className="hover:text-yellow-500 block px-4 py-2">
                  ANNUAL PLANNER
                </Link>
              </li>
              <li>
                <Link to="/academic-zone/exam-schedule" className="hover:text-yellow-500 block px-4 py-2">
                  EXAMINATION SCHEDULE
                </Link>
              </li>
            </ul>
          </li>
  
          {/* Session Information Dropdown */}
          <li className="relative group">
            <Link to="/sessioni-info" className="hover:text-yellow-500">
              SESSION INFORMATION
            </Link>
            <ul className="absolute hidden group-hover:block bg-white shadow-md p-2 space-y-1 w-52 z-20">
              <li>
                <Link to="/sessioni-info/schooltiming" className="hover:text-yellow-500 block px-4 py-2">
                  SCHOOL TIMING
                </Link>
              </li>
              <li>
                <Link to="/sessioni-info/freeregulation" className="hover:text-yellow-500 block px-4 py-2">
                  FREE REGULATION
                </Link>
              </li>
              <li>
                <Link to="/sessioni-info/rulecode-condt" className="hover:text-yellow-500 block px-4 py-2">
                  RULE OF CODE AND CONDUCT
                </Link>
              </li>
            </ul>
          </li>
  
          {/* Infrastructure Dropdown */}
          <li className="relative group">
            <Link to="/infrastructure" className="hover:text-yellow-500">
              INFRASTRUCTURE
            </Link>
            <ul className="absolute hidden group-hover:block bg-white shadow-md p-2 space-y-1 w-52 z-20">
              <li>
                <Link to="/infrastructure/transport-facilities" className="hover:text-yellow-500 block px-4 py-2">
                  TRANSPORT FACILITY
                </Link>
              </li>
              <li>
                <Link to="/infrastructure/schoolcampus" className="hover:text-yellow-500 block px-4 py-2">
                  SCHOOL CAMPUS
                </Link>
              </li>
              <li>
                <Link to="/infrastructure/laboratory" className="hover:text-yellow-500 block px-4 py-2">
                  LABORATORY
                </Link>
              </li>
              <li>
                <Link to="/infrastructure/smartclasses" className="hover:text-yellow-500 block px-4 py-2">
                  SMART CLASSES
                </Link>
              </li>
              <li>
                <Link to="/infrastructure/library" className="hover:text-yellow-500 block px-4 py-2">
                  LIBRARY
                </Link>
              </li>
              <li>
                <Link to="/infrastructure/sportsground" className="hover:text-yellow-500 block px-4 py-2">
                  SPORTS GROUND
                </Link>
              </li>
            </ul>
          </li>
  
          <li>
            <Link to="/gallery" className="hover:text-yellow-500">
              GALLERY
            </Link>
          </li>
  
          <li>
            <Link to="/contact" className="hover:text-yellow-500">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  
  );
};

export default Header;
