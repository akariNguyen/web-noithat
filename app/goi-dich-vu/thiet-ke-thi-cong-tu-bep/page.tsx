import Header from "@/components/header1";
import Footer from "@/components/footer";
import FloatingContact from "@/components/floating-contact";
import styles from "./tu-bep.module.css";

const kitchenPackages = [
  {
    title: "Gói tiêu chuẩn",
    material: "Nhựa than tre + MDF Melamine",
    price: "4.990.000",
    image: "/images/goi_dich_vu/thicongtubep/tieuchuan.png",
    details: [
      "Tủ dưới nhựa than tre dày 17mm",
      "Tủ trên MDF chống ẩm dày 17mm phủ Melamine",
    ],
    advantages: [
      "Chống nước tốt khu vực tủ dưới",
      "Chống ẩm, hạn chế cong vênh",
      "Bề mặt Melamine chống trầy xước",
      "Màu sắc đa dạng",
    ],
  },
  {
    title: "Gói Laminate cao cấp",
    material: "Nhựa than tre + MDF Laminate",
    price: "5.500.000",
    image: "/images/goi_dich_vu/thicongtubep/laminate_cao_cap.png",
    details: [
      "Tủ dưới nhựa than tre dày 17mm",
      "Tủ trên MDF chống ẩm dày 17mm phủ Laminate",
    ],
    advantages: [
      "Chống trầy xước vượt trội",
      "Chống va đập tốt",
      "Nhiều màu sắc, vân gỗ đẹp",
      "Độ bền cao",
    ],
  },
  {
    title: "Gói tân cổ điển sơn PU S8",
    material: "Cánh Pano tân cổ điển sơn PU S8",
    price: "5.950.000",
    image: "/images/goi_dich_vu/thicongtubep/son_pu_s8.png",
    details: [
      "Tủ dưới nhựa PVC đặc ruột dày 17mm",
      "Tủ trên MDF chống ẩm dày 17mm",
      "Cánh Pano CNC sơn PU S8",
      "Phụ kiện giảm chấn",
    ],
    advantages: [
      "Sơn PU mịn đẹp, sang trọng",
      "Phong cách tân cổ điển đẳng cấp",
      "Bền màu, chống ẩm tốt",
      "Phù hợp biệt thự, nhà phố cao cấp",
    ],
    badge: "Mới",
  },
  {
    title: "Gói Acrylic cao cấp",
    material: "Nhựa than tre + MDF chống ẩm + cánh Acrylic",
    price: "6.250.000",
    image: "/images/goi_dich_vu/thicongtubep/acrylic_cao_cap.png",
    details: [
      "Tủ dưới nhựa than tre dày 17mm",
      "Tủ trên MDF chống ẩm dày 17mm",
      "Cánh Acrylic bóng gương cao cấp",
    ],
    advantages: [
      "Bề mặt bóng gương hiện đại",
      "Sang trọng, tinh tế",
      "Dễ vệ sinh, lau chùi",
      "Độ bền cao, không phai màu",
    ],
    badge: "Hot",
  },
];

const commitments = [
  "Vật liệu đúng chủng loại, đúng độ dày",
  "Sản xuất trực tiếp tại xưởng",
  "Thi công đúng tiến độ",
  "Bảo hành 24 tháng - Bảo trì dài hạn",
];

export default function ThietKeThiCongTuBepPage() {
  return (
    <main>
      <Header />

      <section className={styles.detailPage}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <img
              src="/images/goi_dich_vu/thicongtubep/banner.png"
              alt="Thiết kế và thi công tủ bếp chung cư"
            />
          </div>

          <div className={styles.sectionTitle}>
            <p>Thiết kế & thi công</p>
            <h1>Bảng gói tủ bếp theo mét dài</h1>
          </div>

          <div className={styles.packageGrid}>
            {kitchenPackages.map((item) => (
              <article className={styles.priceCard} key={item.title}>
                {item.badge ? <strong>{item.badge}</strong> : null}
                <div className={styles.cardHeader}>
                  <h2>{item.title}</h2>
                </div>

                <div className={styles.priceBlock}>
                  <p>{item.material}</p>
                  <span>{item.price}</span>
                  <small>VNĐ / mét dài</small>
                </div>

                <img src={item.image} alt={item.title} />

                <div className={styles.cardList}>
                  {item.details.map((detail) => (
                    <p key={detail}>✓ {detail}</p>
                  ))}
                </div>

                <div className={styles.cardList}>
                  <h3>Ưu điểm</h3>
                  {item.advantages.map((detail) => (
                    <p key={detail}>✓ {detail}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className={styles.bottomGrid}>
            <section className={styles.standardBox}>
              <h2>Quy cách 1 mét dài tủ bếp tiêu chuẩn BHome</h2>
              <div className={styles.standardImages}>
                <div>
                  <img
                    src="/images/goi_dich_vu/thicongtubep/tuduoi.png"
                    alt="Quy cách tủ dưới"
                  />
                  <h3>Tủ dưới</h3>
                  <p>Cao 810mm - 900mm, sâu 600mm, bao gồm mặt đá.</p>
                </div>
                <div>
                  <img
                    src="/images/goi_dich_vu/thicongtubep/tutren.png"
                    alt="Quy cách tủ trên"
                  />
                  <h3>Tủ trên</h3>
                  <p>Cao 750mm - 800mm, sâu 350mm.</p>
                </div>
              </div>
              <p>
                Áp dụng cho thiết kế tiêu chuẩn theo mét dài thực tế. Chưa bao
                gồm mặt đá, kính bếp, chậu vòi, thiết bị bếp và phụ kiện đặc
                biệt.
              </p>
            </section>

            <section className={styles.commitBox}>
              <h2>Cam kết BHome</h2>
              {commitments.map((item) => (
                <p key={item}>✓ {item}</p>
              ))}
              <img
                src="/images/goi_dich_vu/thicongtubep/baohanh24.png"
                alt="Bảo hành 24 tháng"
              />
            </section>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
}
