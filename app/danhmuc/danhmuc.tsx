import styles from "./danhmuc.module.css";

const categoryGroups = [
  {
    label: "Gỗ sồi tự nhiên",
    title: "Nội thất gỗ sồi tự nhiên",
    description:
      "Không gian ấm cúng, bền chắc và sang trọng với hệ nội thất gỗ sồi tự nhiên, phù hợp nhà phố và gia đình yêu thích chất liệu mộc.",
    items: [
      {
        title: "Tủ bếp gỗ sồi tự nhiên",
        image: "/images/do_go/nhabep/anh0.png",
        description:
          "Tủ bếp dưới, tủ bếp trên bằng gỗ sồi tự nhiên, bền chắc, chống mối mọt, ẩm mốc.",
      },
      {
        title: "Phòng khách gỗ sồi",
        image: "/images/do_go/phongkhach/anh0.png",
        description:
          "Vách trang trí tivi, kệ tivi, sofa gỗ sồi, bàn trà đồng bộ, sang trọng và tinh tế.",
      },
      {
        title: "Phòng ngủ gỗ sồi",
        image: "/images/do_go/phongngu/anh0.png",
        description:
          "Giường ngủ, tủ quần áo, bàn trang điểm, tab đầu giường bằng gỗ sồi tự nhiên.",
      },
      {
        title: "Tủ đồ gỗ sồi",
        image: "/images/do_go/tudo/anh0.png",
        description:
          "Tận dụng tối đa không gian, tăng khả năng lưu trữ, thiết kế gọn gàng và thẩm mỹ.",
      },
    ],
  },
  {
    label: "Phong cách hiện đại",
    title: "Nội thất hiện đại",
    description:
      "Thiết kế tinh gọn, sang trọng và tiện nghi với vật liệu hiện đại như MDF chống ẩm, acrylic, laminate, kính, đá và hệ đèn trang trí.",
    items: [
      {
        title: "Tủ bếp hiện đại",
        image: "/images/hien_dai/nhabep/anh0.png",
        description:
          "Tủ bếp hiện đại với bề mặt phẳng, màu sắc tinh tế, tối ưu công năng và dễ vệ sinh.",
      },
      {
        title: "Phòng khách hiện đại",
        image: "/images/hien_dai/phongkhach/anh0.png",
        description:
          "Vách tivi, sofa, bàn trà và hệ trang trí đồng bộ, tạo điểm nhấn sang trọng cho không gian sinh hoạt.",
      },
      {
        title: "Phòng ngủ hiện đại",
        image: "/images/hien_dai/phongngu/anh0.png",
        description:
          "Giường ngủ, tủ áo, tab đầu giường và bàn trang điểm thiết kế tối giản, tiện nghi và thẩm mỹ.",
      },
      {
        title: "Tủ đồ hiện đại",
        image: "/images/hien_dai/tudo/anh0.png",
        description:
          "Tủ quần áo, tủ trưng bày và khu thay đồ hiện đại, tối ưu lưu trữ và tăng tính sang trọng.",
      },
    ],
  },
];

export default function DanhMuc() {
  return (
    <section id="danh-muc" className={styles.categorySection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>BHOME Furniture</p>

          <h1>Danh mục nội thất nổi bật</h1>

          <p>
            Lựa chọn phong cách phù hợp với không gian sống của bạn: ấm cúng với
            gỗ sồi tự nhiên hoặc sang trọng, tinh gọn với nội thất hiện đại.
          </p>
        </div>

        <div className={styles.categoryGroups}>
          {categoryGroups.map((group) => (
            <div className={styles.categoryGroup} key={group.title}>
              <div className={styles.groupHeader}>
                <p>{group.label}</p>
                <h2>{group.title}</h2>
                <span>{group.description}</span>
              </div>

              <div className={styles.categoryGrid}>
                {group.items.map((item) => (
                  <article className={styles.categoryCard} key={item.title}>
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
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}