import Header from "@/components/header1";
import Footer from "@/components/footer";
import FloatingContact from "@/components/floating-contact";
import styles from "./go-soi.module.css";

const packageItems = [
  {
    title: "Tủ bếp gỗ sồi tự nhiên",
    image: "/images/goi_dich_vu/go_soi/tubep.png",
    description:
      "Tủ bếp dưới và tủ bếp trên bằng gỗ sồi tự nhiên, vân gỗ ấm, bền chắc, chống mối mọt và phù hợp nhà phố.",
  },
  {
    title: "Nội thất phòng khách",
    image: "/images/goi_dich_vu/go_soi/phongkhach.png",
    description:
      "Vách trang trí tivi, kệ tivi, sofa và bàn trà đồng bộ, tạo điểm nhấn sang trọng cho không gian sinh hoạt.",
  },
  {
    title: "Nội thất phòng ngủ",
    image: "/images/goi_dich_vu/go_soi/phongngu.png",
    description:
      "Giường ngủ, tủ quần áo, bàn trang điểm và tab đầu giường bằng gỗ sồi, màu sắc ấm và dễ phối nội thất.",
  },
  {
    title: "Tủ gầm cầu thang",
    image: "/images/goi_dich_vu/go_soi/tugamcauthang.png",
    description:
      "Tận dụng khu vực gầm cầu thang để tăng khả năng lưu trữ, giữ không gian gọn gàng và có tính thẩm mỹ.",
  },
  {
    title: "Tủ giày",
    image: "/images/goi_dich_vu/go_soi/tudo.png",
    description:
      "Tủ giày gỗ sồi thiết kế thông minh, nhiều ngăn, gọn gàng và tiện dụng cho khu vực sảnh vào.",
  },
  {
    title: "Phòng thờ",
    image: "/images/goi_dich_vu/go_soi/phongtho.png",
    description:
      "Bàn thờ, vách ốp và tủ thờ gỗ sồi tự nhiên, giữ cảm giác trang nghiêm, ấm cúng và bền đẹp.",
  },
];

const serviceItems = [
  "Miễn phí thiết kế 3D",
  "Miễn phí khảo sát tận nơi",
  "Sản xuất trực tiếp tại xưởng",
  "Thi công đúng tiến độ",
  "Bảo hành dài hạn - Bảo trì tận tâm",
];

const reasons = [
  "Gỗ cứng chắc, chịu lực tốt",
  "Vân gỗ đẹp, màu sắc sáng sang trọng",
  "Chống mối mọt, cong vênh, co ngót",
  "Tuổi thọ cao, càng dùng càng đẹp",
  "Thân thiện môi trường, an toàn cho sức khỏe",
];

export default function GoiGoSoiPage() {
  return (
    <main>
      <Header />

      <section className={styles.packageSection}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <img
              src="/images/goi_dich_vu/go_soi/banner.png"
              alt="Gói nội thất nhà phố gỗ sồi tự nhiên trọn gói"
            />
          </div>

          <div className={styles.titleBlock}>
            <p>BHOME Furniture</p>
            <h1>Gói nội thất bao gồm - toàn bộ bằng gỗ sồi tự nhiên</h1>
          </div>

          <div className={styles.detailGrid}>
            <div className={styles.itemGrid}>
              {packageItems.map((item) => (
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
            </div>

            <aside className={styles.sidePanel}>
              <div className={styles.serviceList}>
                {serviceItems.map((item) => (
                  <div className={styles.serviceItem} key={item}>
                    <span>✓</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <div className={styles.reasonBox}>
                <h2>Vì sao chọn nội thất gỗ sồi?</h2>
                {reasons.map((item) => (
                  <p key={item}>✓ {item}</p>
                ))}
              </div>

              <div className={styles.priceBox}>
                <p>Chỉ từ</p>
                <strong>139</strong>
                <span>triệu đồng</span>
                <small>
                  Sở hữu không gian sống đồng bộ, sang trọng với nội thất gỗ sồi tự nhiên.
                </small>
              </div>
            </aside>
          </div>

          <div className={styles.previewRow}>
            <img
              src="/images/goi_dich_vu/go_soi/phongkhach.png"
              alt="Phòng khách gỗ sồi tự nhiên"
            />
            <img
              src="/images/goi_dich_vu/go_soi/phongngu.png"
              alt="Phòng ngủ gỗ sồi tự nhiên"
            />
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
}
