import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className="relative bg-black flex flex-col text-white overflow-x-hidden"
      dir="rtl"
    >
      <Sidebar
        isOpen={isMenuOpen}
        onNavigate={() => setIsMenuOpen(false)}
      />
      <Navbar
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((open) => !open)}
      />
      <Outlet />
      <Footer />
    </div>
  );
}
