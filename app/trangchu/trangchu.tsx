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
  {
    image: "/images/banner3.png",
    alt: "Thiết kế tủ bếp BHome",
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

const partners = [
  {
    name: "Halon Glass",
    image: "/images/doitac/anh0.png",
  },
  {
    name: "An Cường",
    image: "/images/doitac/anh1.png",
  },
  {
    name: "Minh Long",
    image: "/images/doitac/anh2.png",
  },
  {
    name: "Cariny",
    image: "/images/doitac/anh4.png",
  },
  {
    name: "Hafele",
    image: "/images/doitac/anh5.png",
  },
];

export default function TrangChu() {
  const [activeBanner, setActiveBanner] = useState(0);
  const [activePartner, setActivePartner] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const selectedPartner =
    activePartner === null ? null : partners[activePartner];

  const goToNextBanner = () => {
    setActiveBanner((current) => (current + 1) % banners.length);
  };

  const goToPreviousBanner = () => {
    setActiveBanner(
      (current) => (current - 1 + banners.length) % banners.length
    );
  };

  const goToNextPartner = () => {
    setActivePartner((current) =>
      current === null ? 0 : (current + 1) % partners.length
    );
  };

  const goToPreviousPartner = () => {
    setActivePartner((current) =>
      current === null
        ? partners.length - 1
        : (current - 1 + partners.length) % partners.length
    );
  };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveBanner((current) => (current + 1) % banners.length);
    }, 4500);

    return () => window.clearTimeout(timer);
  }, [activeBanner]);

  useEffect(() => {
    if (activePartner === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActivePartner(null);
      }

      if (event.key === "ArrowRight") {
        goToNextPartner();
      }

      if (event.key === "ArrowLeft") {
        goToPreviousPartner();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activePartner]);

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

          <section className={styles.partnerSection} aria-labelledby="doi-tac-title">
            <div className={styles.partnerHeader}>
              <h2 id="doi-tac-title">Đối tác của chúng tôi</h2>
            </div>

            <div className={styles.partnerGrid}>
              {partners.map((partner, index) => (
                <button
                  type="button"
                  className={styles.partnerCard}
                  onClick={() => setActivePartner(index)}
                  key={partner.name}
                >
                  <img src={partner.image} alt={partner.name} />
                </button>
              ))}
            </div>
          </section>
        </div>
      </section>

      {selectedPartner && (
        <div
          className={styles.partnerLightbox}
          onClick={() => setActivePartner(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Ảnh đối tác ${selectedPartner.name}`}
        >
          <button
            type="button"
            className={`${styles.lightboxArrow} ${styles.lightboxPrevious}`}
            onClick={(event) => {
              event.stopPropagation();
              goToPreviousPartner();
            }}
            aria-label="Xem đối tác trước"
          >
            {"<"}
          </button>

          <div
            className={styles.lightboxPanel}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.lightboxClose}
              onClick={() => setActivePartner(null)}
              aria-label="Đóng ảnh đối tác"
            >
              ×
            </button>

            <img src={selectedPartner.image} alt={selectedPartner.name} />

            <div className={styles.lightboxCaption}>
              <strong>{selectedPartner.name}</strong>
              <span>
                {(activePartner ?? 0) + 1} / {partners.length}
              </span>
            </div>
          </div>

          <button
            type="button"
            className={`${styles.lightboxArrow} ${styles.lightboxNext}`}
            onClick={(event) => {
              event.stopPropagation();
              goToNextPartner();
            }}
            aria-label="Xem đối tác tiếp theo"
          >
            {">"}
          </button>
        </div>
      )}
    </section>
  );
}
