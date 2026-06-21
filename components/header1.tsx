"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#trang-chu" className="logo" onClick={closeMenu}>
          <Image
            src="/images/logo.png"
            alt="Nội Thất BHome"
            width={42}
            height={42}
            className="logo-image"
          />
          <span>Nội Thất BHome</span>
        </a>

        <button
          type="button"
          className={`menu-toggle ${isOpen ? "is-open" : ""}`}
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Mở menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${isOpen ? "is-open" : ""}`}>
          <a href="#trang-chu" onClick={closeMenu}>
            Trang chủ
          </a>
          <a href="#danh-muc" onClick={closeMenu}>
            Danh mục
          </a>
          <a href="#gioi-thieu" onClick={closeMenu}>
            Giới thiệu
          </a>
          <a href="#lien-he" onClick={closeMenu}>
            Liên hệ
          </a>
        </nav>
      </div>
    </header>
  );
}