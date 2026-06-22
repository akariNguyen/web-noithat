import Header from "@/components/header1";
import Footer from "@/components/footer";
import FloatingContact from "@/components/floating-contact";
import Link from "next/link";
import styles from "./goi-dich-vu.module.css";

const servicePackages = [
  {
    href: "/goi-dich-vu/go-soi",
    image: "/images/goi_dich_vu/go_soi/banner.png",
    title: "Gỗ sồi tự nhiên trọn gói",
  },
  {
    href: "/goi-dich-vu/thiet-ke-thi-cong-tu-bep",
    image: "/images/goi_dich_vu/thicongtubep/banner.png",
    title: "Tủ bếp chung cư",
  },
  {
    href: "/goi-dich-vu/noi-that-2-phong-ngu",
    image: "/images/goi_dich_vu/noithat2phongngu/banner.png",
    title: "Trọn gói căn 2 phòng ngủ",
  },
];

export default function GoiDichVuPage() {
  return (
    <main>
      <Header />

      <section className={styles.servicePage}>
        <div className={styles.container}>
          <div className={styles.heroText}>
            <p>BHOME Furniture</p>
            <h1>Gói dịch vụ nội thất</h1>
            <span>
              Chọn một gói để xem chi tiết hạng mục, hình ảnh, vật liệu và cam kết thi công.
            </span>
          </div>

          <div className={styles.packageCards}>
            {servicePackages.map((item) => (
              <Link
                href={item.href}
                className={styles.packageCard}
                aria-label={`Xem chi tiết ${item.title}`}
                key={item.href}
              >
                <img src={item.image} alt={item.title} />

                <div className={styles.packageInfo}>
                  <span>Xem chi tiết gói</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
}
