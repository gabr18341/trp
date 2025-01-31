"use client";
import Link  from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
   const pathname =  usePathname();
   
    const navItems = [
        { title: "الرئيسية", link: "/" },
        { title: "من نحن", link: "/about" },
        { title: "خطط", link: "/services" },
        { title: "تطبيقات", link: "/application" },
        { title: "تواصل معنا", link: "/contact" },
        { title: "الدعم", link: "/contact" },
    ]
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center py-4 px-8">
      <div className="nav-box flex items-center">
          
          <nav>
            <ul className="flex gap-3 items-center menu-header">
              
              {navItems.map((item) => (
                <li key={item.title}>
                    <Link className={pathname === item.link ? "active" : ""} href={item.link}>{item.title} </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="auth-btns mr-5 flex gap-3">
            <Link className="main-btn" href="/login">تسجيل الدخول</Link>
            <Link className="main-btn secondary" href="/register">اشترك الآن</Link>
          </div>
        </div>
        <div className="logo-box">
          <Link href="/">
            <img className="w-32" src="/img/TRP Logo.png" alt="trp - logo" />
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
