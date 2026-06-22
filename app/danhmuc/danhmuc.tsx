import Link from "next/link";
import styles from "./danhmuc.module.css";

const modernItems = [
  {
    title: "Tủ bếp hiện đại",
    image: "/images/hien_dai/nhabep/anh0.png",
    href: "/danh-muc/tu-bep-hien-dai",
    description:
      "Tủ bếp hiện đại với bề mặt phẳng, màu sắc tinh tế, tối ưu công năng và dễ vệ sinh.",
  },
  {
    title: "Phòng khách hiện đại",
    image: "/images/hien_dai/phongkhach/anh0.png",
    href: "/danh-muc/phong-khach-hien-dai",
    description:
      "Vách tivi, sofa, bàn trà và hệ trang trí đồng bộ, tạo điểm nhấn sang trọng cho không gian sinh hoạt.",
  },
  {
    title: "Phòng ngủ hiện đại",
    image: "/images/hien_dai/phongngu/anh0.png",
    href: "/danh-muc/phong-ngu-hien-dai",
    description:
      "Giường ngủ, tủ áo, tab đầu giường và bàn trang điểm thiết kế tối giản, tiện nghi và thẩm mỹ.",
  },
  {
    title: "Tủ đồ hiện đại",
    image: "/images/hien_dai/tudo/anh0.png",
    href: "/danh-muc/tu-do-hien-dai",
    description:
      "Tủ quần áo, tủ trưng bày và khu thay đồ hiện đại, tối ưu lưu trữ và tăng tính sang trọng.",
  },
];

export default function DanhMuc() {
  return (
    <section id="danh-muc" className={styles.categorySection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>BHOME Furniture</p>

          <h1>Danh mục nội thất hiện đại</h1>

          <p>
            Lựa chọn các hạng mục nội thất hiện đại, tinh gọn và tiện nghi cho
            không gian sống sang trọng.
          </p>
        </div>

        <div className={styles.categoryGroups}>
          <div className={styles.categoryGroup}>
            <div className={styles.groupHeader}>
              <p>Phong cách hiện đại</p>
              <h2>Nội thất hiện đại</h2>
              <span>
                Thiết kế tinh gọn, sang trọng và tiện nghi với vật liệu hiện
                đại như MDF chống ẩm, acrylic, laminate, kính, đá và hệ đèn
                trang trí.
              </span>
            </div>

            <div className={styles.categoryGrid}>
              {modernItems.map((item) => (
                <Link
                  href={item.href}
                  className={styles.categoryCard}
                  key={item.title}
                >
                  <div className={styles.categoryImageWrap}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles.categoryImage}
                    />
                  </div>

                  <div className={styles.categoryContent}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
