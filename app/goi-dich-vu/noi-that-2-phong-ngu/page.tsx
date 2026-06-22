import Header from "@/components/header1";
import Footer from "@/components/footer";
import FloatingContact from "@/components/floating-contact";
import styles from "./can-ho.module.css";

const includedItems = [
  {
    title: "Tủ bếp dưới nhựa",
    image: "/images/goi_dich_vu/noithat2phongngu/tubepduoi.png",
    description: "Chống nước tuyệt đối, bền đẹp và dễ vệ sinh.",
  },
  {
    title: "Tủ bếp trên MDF chống ẩm",
    image: "/images/goi_dich_vu/noithat2phongngu/tubeptren.png",
    description: "Phủ Melamine, bền chắc, chống ẩm mốc, màu sắc đa dạng.",
  },
  {
    title: "Nội thất 2 phòng ngủ",
    image: "/images/goi_dich_vu/noithat2phongngu/phongngu.png",
    description: "Giường, tủ áo, bàn trang điểm MDF chống ẩm phủ Melamine.",
  },
  {
    title: "Vách trang trí phòng khách",
    image: "/images/goi_dich_vu/noithat2phongngu/phongkhach.png",
    description: "Tăng tính thẩm mỹ và tạo điểm nhấn cho không gian.",
  },
  {
    title: "Sofa",
    image: "/images/goi_dich_vu/noithat2phongngu/sofa.png",
    description: "Kiểu dáng hiện đại, êm ái và bền đẹp.",
  },
  {
    title: "Bàn trà",
    image: "/images/goi_dich_vu/noithat2phongngu/bantra.png",
    description: "Thiết kế tinh tế, hài hòa với không gian phòng khách.",
  },
  {
    title: "Tủ giày",
    image: "/images/goi_dich_vu/noithat2phongngu/tugiay.png",
    description: "Thiết kế thông minh, gọn gàng và tiện lợi.",
  },
];

const bedroomImages = [
  "/images/goi_dich_vu/noithat2phongngu/phongngu1.png",
  "/images/goi_dich_vu/noithat2phongngu/phongngu2.png",
  "/images/goi_dich_vu/noithat2phongngu/phongngu3.png",
];

const commitments = [
  "Thiết kế theo nhu cầu thực tế",
  "Đo đạc - tư vấn tận nơi",
  "Sản xuất trực tiếp tại xưởng",
  "Thi công chuyên nghiệp",
  "Bảo hành dài hạn",
  "Trọn gói không phát sinh",
  "Tiết kiệm chi phí",
  "Tối ưu công năng",
  "Thẩm mỹ hiện đại",
];

export default function NoiThatHaiPhongNguPage() {
  return (
    <main>
      <Header />

      <section className={styles.detailPage}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <img
              src="/images/goi_dich_vu/noithat2phongngu/banner.png"
              alt="Nội thất chung cư trọn gói căn 2 phòng ngủ"
            />
          </div>

          <div className={styles.sectionTitle}>
            <p>Gói nội thất chung cư</p>
            <h1>Trọn gói căn 2 phòng ngủ</h1>
            <span>
              Hiện đại, tiện nghi, tinh tế với mức giá trọn gói, không phát
              sinh.
            </span>
          </div>

          <div className={styles.includedGrid}>
            {includedItems.map((item) => (
              <article className={styles.itemCard} key={item.title}>
                <div className={styles.imageWrap}>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className={styles.itemContent}>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}

            <aside className={styles.commitBox}>
              <h2>Cam kết BHome</h2>
              {commitments.slice(0, 5).map((item) => (
                <p key={item}>✓ {item}</p>
              ))}
            </aside>
          </div>

          <div className={styles.bedroomSection}>
            <div className={styles.sectionTitle}>
              <p>Phòng ngủ hiện đại - tiện nghi</p>
              <h2>Không gian nghỉ ngơi đồng bộ</h2>
            </div>

            <div className={styles.bedroomGrid}>
              {bedroomImages.map((image, index) => (
                <img
                  src={image}
                  alt={`Phòng ngủ hiện đại mẫu ${index + 1}`}
                  key={image}
                />
              ))}
            </div>
          </div>

          <div className={styles.featureGrid}>
            {commitments.slice(5).map((item) => (
              <div className={styles.featureItem} key={item}>
                <span>✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
}
