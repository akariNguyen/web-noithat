"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./trangchu.module.css";

const banners = [
  {
    image: "/images/banner.png",
    alt: "Nội thất nhà phố hiện đại trọn gói",
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
    title: "Tủ bếp hiện đại",
    href: "/danh-muc/tu-bep-hien-dai",
    image: "/images/hien_dai/nhabep/anh0.png",
    description:
      "Thiết kế bề mặt phẳng, tông màu tinh tế, tối ưu công năng và dễ vệ sinh.",
  },
  {
    title: "Phòng khách hiện đại",
    href: "/danh-muc/phong-khach-hien-dai",
    image: "/images/hien_dai/phongkhach/anh0.png",
    description:
      "Vách tivi, sofa, bàn trà và hệ trang trí đồng bộ, sang trọng và tiện nghi.",
  },
  {
    title: "Phòng ngủ hiện đại",
    href: "/danh-muc/phong-ngu-hien-dai",
    image: "/images/hien_dai/phongngu/anh0.png",
    description:
      "Giường ngủ, tủ áo, tab đầu giường và bàn trang điểm tối giản, gọn đẹp.",
  },
  {
    title: "Tủ đồ hiện đại",
    href: "/danh-muc/tu-do-hien-dai",
    image: "/images/hien_dai/tudo/anh0.png",
    description:
      "Tối ưu lưu trữ, tăng tính sang trọng và tận dụng hiệu quả từng khoảng không gian.",
  },
];

const serviceItems = [
  {
    icon: "3D",
    title: "Miễn phí thiết kế 3D",
    description: "Tối ưu công năng - Thẩm mỹ - Phù hợp ngân sách",
  },
  {
    icon: "KS",
    title: "Miễn phí khảo sát tận nơi",
    description: "Tư vấn tận tâm - Chính xác - Nhanh chóng",
  },
  {
    icon: "SX",
    title: "Sản xuất trực tiếp tại xưởng",
    description: "Chất lượng kiểm soát - Giá tốt - Không qua trung gian",
  },
  {
    icon: "TC",
    title: "Thi công đúng tiến độ",
    description: "Đội ngũ chuyên nghiệp - Cam kết đúng hẹn",
  },
  {
    icon: "BH",
    title: "Bảo hành dài hạn - Bảo trì tận tâm",
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

            <h1>Gói nội thất hiện đại</h1>

            <p>
              Hoàn thiện không gian sống đồng bộ, sang trọng và tiện nghi với các hạng
              mục nội thất hiện đại thiết kế theo nhu cầu thực tế.
            </p>
          </div>

          <div className={styles.categoryGrid}>
            {categories.map((item) => (
              <Link href={item.href} className={styles.categoryCard} key={item.title}>
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
              </Link>
            ))}
          </div>

          <div className={styles.serviceBox}>
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
