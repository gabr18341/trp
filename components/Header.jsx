"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { XIcon } from "lucide-react";

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { title: "الرئيسية", link: "/" },
    { title: "من نحن", link: "/about" },
    { title: "خطط", link: "/services" },
    { title: "تطبيقات", link: "/application" },
    { title: "تواصل معنا", link: "/contact" },
    { title: "الدعم", link: "/support" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center py-4 px-8 header-container">
        <div className={`nav-box flex items-center ${menuOpen ? "open" : ""}`}>
          <div className="head-nav-mobile w-full items-center justify-between">
            <button onClick={() => setMenuOpen(false)}>
              <XIcon />
            </button>
            <img src="/img/pages/sidebar_logo.svg" width={"60px"} alt="" />
          </div>
          <nav>
            <ul className="flex gap-3 items-center menu-header">
              {navItems.map((item) => (
                <li key={item.title} onClick={() => setMenuOpen(false)} >
                  <Link
                    className={pathname === item.link ? "active" : ""}
                    href={item.link}
                  >
                    {item.title}{" "}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="auth-btns mr-5 flex gap-3">
            <Link onClick={() => setMenuOpen(false)} className="main-btn" href="/login">
              تسجيل الدخول
            </Link>
            <Link onClick={() => setMenuOpen(false)} className="main-btn secondary" href="/register">
              اشترك الآن
            </Link>
          </div>
        </div>
        <div className="logo-box">
          <Link href="/">
            <img className="w-32" src={`/img/TRP Logo${pathname !== '/' ? '2' : ''}.png`} alt="trp - logo" />
          </Link>
        </div>
        <div className="menu-icon cursor-pointer" onClick={() => setMenuOpen(true)} >
          <img src="/img/icons/header_nav.svg" height={"30px"} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
