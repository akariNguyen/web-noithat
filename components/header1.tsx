import Image from "next/image";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#trang-chu" className="logo">
          <Image
            src="/images/logo.png"
            alt="Nội Thất BHome"
            width={42}
            height={42}
            className="logo-image"
          />
          <span>Nội Thất BHome</span>
        </a>

        <nav className="nav-menu">
          <a href="#trang-chu">Trang chủ</a>
          <a href="#danh-muc">Danh mục</a>
          <a href="#gioi-thieu">Giới thiệu</a>
          <a href="#lien-he">Liên hệ</a>
        </nav>
      </div>
    </header>
  );
}