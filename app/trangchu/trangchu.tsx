"use client";

import { useEffect, useState } from "react";
import styles from "./trangchu.module.css";

const banners = [
  {
    image: "/images/banner.png",
    alt: "Nội thất nhà phố gỗ sồi tự nhiên trọn gói",
  },
  {
    image: "/images/banner1.jpg",
    alt: "Không gian nội thất BHome",
  },
  {
    image: "/images/banner2.png",
    alt: "Thiết kế nội thất BHome",
  },
];

const categories = [
  {
    title: "Tủ bếp gỗ sồi tự nhiên",
    image: "/images/do_go/nhabep/anh0.png",
    description:
      "Tủ bếp dưới, tủ bếp trên bằng gỗ sồi tự nhiên, bền chắc, chống mối mọt, ẩm mốc.",
  },
  {
    title: "Nội thất phòng khách",
    image: "/images/do_go/phongkhach/anh0.png",
    description:
      "Vách trang trí tivi, kệ tivi, sofa gỗ sồi, bàn trà đồng bộ, sang trọng và tinh tế.",
  },
  {
    title: "Nội thất phòng ngủ",
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
];

const serviceItems = [
  {
    icon: "🖥️",
    title: "Miễn phí thiết kế 3D",
    description: "Tối ưu công năng – Thẩm mỹ – Phù hợp ngân sách",
  },
  {
    icon: "📍",
    title: "Miễn phí khảo sát tận nơi",
    description: "Tư vấn tận tâm – Chính xác – Nhanh chóng",
  },
  {
    icon: "🪑",
    title: "Sản xuất trực tiếp tại xưởng",
    description: "Chất lượng kiểm soát – Giá tốt – Không qua trung gian",
  },
  {
    icon: "📅",
    title: "Thi công đúng tiến độ",
    description: "Đội ngũ chuyên nghiệp – Cam kết đúng hẹn",
  },
  {
    icon: "🛡️",
    title: "Bảo hành dài hạn – Bảo trì tận tâm",
    description: "An tâm sử dụng lâu dài",
  },
];

export default function TrangChu() {
  const [activeBanner, setActiveBanner] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const goToNextBanner = () => {
    setActiveBanner((current) => (current + 1) % banners.length);
  };

  const goToPreviousBanner = () => {
    setActiveBanner(
      (current) => (current - 1 + banners.length) % banners.length
    );
  };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveBanner((current) => (current + 1) % banners.length);
    }, 4500);

    return () => window.clearTimeout(timer);
  }, [activeBanner]);

  return (
    <section id="trang-chu" className={styles.trangchu}>
      <div
        className={styles.hero}
        onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
        onTouchEnd={(event) => {
          if (touchStart === null) {
            return;
          }

          const distance = touchStart - event.changedTouches[0].clientX;

          if (Math.abs(distance) > 45) {
            if (distance > 0) {
              goToNextBanner();
            } else {
              goToPreviousBanner();
            }
          }

          setTouchStart(null);
        }}
      >
        <div className={styles.heroSlider}>
          <div
            className={styles.heroTrack}
            style={{ transform: `translateX(-${activeBanner * 100}%)` }}
          >
            {banners.map((banner) => (
              <img
                src={banner.image}
                alt={banner.alt}
                className={styles.heroImage}
                key={banner.image}
              />
            ))}
          </div>

          <button
            type="button"
            className={`${styles.heroControl} ${styles.heroControlPrevious}`}
            onClick={goToPreviousBanner}
            aria-label="Xem banner trước"
          >
            {"<"}
          </button>

          <button
            type="button"
            className={`${styles.heroControl} ${styles.heroControlNext}`}
            onClick={goToNextBanner}
            aria-label="Xem banner tiếp theo"
          >
            {">"}
          </button>

          <div className={styles.heroDots}>
            {banners.map((banner, index) => (
              <button
                type="button"
                className={`${styles.heroDot} ${
                  index === activeBanner ? styles.heroDotActive : ""
                }`}
                onClick={() => setActiveBanner(index)}
                aria-label={`Xem banner ${index + 1}`}
                aria-current={index === activeBanner}
                key={banner.image}
              />
            ))}
          </div>
        </div>
      </div>

      <section id="danh-muc" className={styles.categorySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>BHOME Furniture</p>

            <h1>Gói nội thất gỗ sồi tự nhiên</h1>

            <p>
              Hoàn thiện không gian sống đồng bộ, sang trọng và ấm cúng với các
              hạng mục nội thất thiết kế theo nhu cầu thực tế.
            </p>
          </div>

          <div className={styles.categoryGrid}>
            {categories.map((item) => (
              <article className={styles.categoryCard} key={item.title}>
                <div className={styles.categoryImageWrap}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.categoryImage}
                  />
                </div>

                <div className={styles.categoryContent}>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div id="goi-dich-vu" className={styles.serviceBox}>
            {serviceItems.map((item) => (
              <div className={styles.serviceItem} key={item.title}>
                <div className={styles.serviceIcon}>{item.icon}</div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
