"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/#trang-chu" className="logo" onClick={closeMenu}>
          <Image
            src="/images/logo.png"
            alt="Nội Thất BHome"
            width={42}
            height={42}
            className="logo-image"
            priority
          />
          <span>Nội Thất BHome</span>
        </Link>

        <button
          type="button"
          className={`menu-toggle ${isOpen ? "is-open" : ""}`}
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "Đóng menu" : "Mở menu"}
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${isOpen ? "is-open" : ""}`}>
          <Link href="/#trang-chu" onClick={closeMenu}>
            Trang chủ
          </Link>

          <Link href="/danh-muc" onClick={closeMenu}>
            Danh mục
          </Link>

          <Link href="/#goi-dich-vu" onClick={closeMenu}>
            Gói dịch vụ
          </Link>

          <Link href="#lien-he" onClick={closeMenu}>
            Liên hệ
          </Link>
        </nav>
      </div>
    </header>
  );
}
