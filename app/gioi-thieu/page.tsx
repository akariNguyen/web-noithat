"use client";

import { useEffect, useState } from "react";
import Header from "@/components/header1";
import Footer from "@/components/footer";
import FloatingContact from "@/components/floating-contact";
import styles from "./gioi-thieu.module.css";

const introImages = [
  {
    image: "/images/gioithieu/anh0.png",
    alt: "Không gian nội thất BHome",
  },
  {
    image: "/images/gioithieu/anh1.png",
    alt: "Phòng khách nội thất gỗ cao cấp",
  },
  {
    image: "/images/gioithieu/anh2.png",
    alt: "Phòng ngủ nội thất BHome",
  },
  {
    image: "/images/gioithieu/anh3.png",
    alt: "Nhà máy và công nghệ BHome",
  },
  {
    image: "/images/gioithieu/anh4.png",
    alt: "Nguồn nhân lực BHome",
  },
];

const introItems = [
  {
    number: "01",
    title: "BHOME là ai?",
    image: "/images/gioithieu/anh0.png",
    content: [
      "BHome được xây dựng trên tinh thần sáng tạo, chỉn chu và phát triển bền vững trong lĩnh vực thiết kế, sản xuất, thi công nội thất trọn gói.",
      "Chúng tôi không chỉ tạo ra sản phẩm nội thất, mà còn đồng hành để hoàn thiện một không gian sống có cảm xúc, có công năng và phản ánh rõ cá tính của từng gia chủ.",
      "Mỗi dự án đều được BHome tiếp cận từ nhu cầu thực tế: thói quen sinh hoạt, diện tích, ngân sách, phong cách mong muốn và độ bền sử dụng lâu dài.",
      "BHome hướng đến những không gian đồng bộ, sang trọng, tiện nghi, nơi từng chi tiết đều có lý do tồn tại và góp phần nâng chất lượng sống mỗi ngày.",
    ],
  },
  {
    number: "02",
    title: "Tầm nhìn và sứ mệnh",
    image: "/images/gioithieu/anh1.png",
    content: [
      "BHome định hướng trở thành đơn vị nội thất được khách hàng tin chọn nhờ năng lực thiết kế thực tế, quy trình thi công rõ ràng và chất lượng hoàn thiện ổn định.",
      "Tầm nhìn của chúng tôi là xây dựng những công trình có giá trị sử dụng lâu dài, không chạy theo hình thức nhất thời mà cân bằng giữa thẩm mỹ, công năng và độ bền.",
      "Sứ mệnh của BHome là giúp khách hàng tiết kiệm thời gian, kiểm soát chi phí và yên tâm hơn khi hoàn thiện nhà ở, căn hộ, nhà phố hoặc các công trình trọn gói.",
      "Chúng tôi xem sự hài lòng của khách hàng sau khi đưa công trình vào sử dụng là thước đo quan trọng nhất cho chất lượng dịch vụ.",
    ],
  },
  {
    number: "03",
    title: "Chất lượng dịch vụ",
    image: "/images/gioithieu/anh2.png",
    content: [
      "Chất lượng dịch vụ tại BHome bắt đầu từ khâu tư vấn, khảo sát và lắng nghe kỹ nhu cầu của khách hàng trước khi đề xuất phương án thiết kế.",
      "Trong quá trình triển khai, từng hạng mục được bóc tách rõ ràng để khách hàng dễ theo dõi vật liệu, kích thước, tiến độ và phạm vi thi công.",
      "BHome chú trọng tính chính xác khi đo đạc, sản xuất và lắp đặt, hạn chế phát sinh không cần thiết và đảm bảo không gian hoàn thiện đúng tinh thần thiết kế ban đầu.",
      "Sau bàn giao, chúng tôi tiếp tục đồng hành qua chính sách bảo hành, bảo trì và hỗ trợ xử lý các vấn đề sử dụng thực tế một cách nhanh chóng.",
    ],
  },
  {
    number: "04",
    title: "Nhà máy và công nghệ",
    image: "/images/gioithieu/anh3.png",
    content: [
      "BHome sở hữu hệ thống sản xuất trực tiếp, giúp kiểm soát tốt hơn chất lượng vật liệu, quy cách gia công, màu sắc và tiến độ từng đơn hàng.",
      "Việc chủ động sản xuất giúp giảm phụ thuộc trung gian, tối ưu chi phí và đảm bảo sự đồng bộ giữa bản vẽ thiết kế với sản phẩm hoàn thiện tại công trình.",
      "Máy móc hiện đại được kết hợp cùng tay nghề của đội ngũ thợ để tạo ra sản phẩm có độ chính xác cao, bề mặt hoàn thiện đẹp và khả năng sử dụng bền bỉ.",
      "BHome luôn cập nhật vật liệu, phụ kiện và kỹ thuật thi công mới để mỗi công trình vừa đẹp mắt, vừa phù hợp điều kiện sử dụng thực tế của gia đình Việt.",
    ],
  },
  {
    number: "05",
    title: "Nguồn nhân lực",
    image: "/images/gioithieu/anh4.png",
    content: [
      "Đội ngũ BHome gồm kiến trúc sư, kỹ thuật, thợ sản xuất và thợ lắp đặt có kinh nghiệm, làm việc theo tinh thần trách nhiệm và phối hợp chặt chẽ.",
      "Kiến trúc sư tập trung vào ý tưởng, bố cục không gian và trải nghiệm sử dụng; bộ phận kỹ thuật đảm bảo bản vẽ có thể thi công chính xác ngoài thực tế.",
      "Đội ngũ sản xuất và lắp đặt giữ vai trò quan trọng trong việc biến bản vẽ thành sản phẩm hoàn thiện, đúng kích thước, đúng vật liệu và đúng tiến độ.",
      "BHome tin rằng con người là nền tảng của mọi công trình đẹp. Vì vậy, chúng tôi luôn đề cao sự tận tâm, kỷ luật và khả năng lắng nghe trong từng vị trí.",
    ],
  },
];

export default function GioiThieuPage() {
  const [activeIntro, setActiveIntro] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const goToNextIntro = () => {
    setActiveIntro((current) => (current + 1) % introImages.length);
  };

  const goToPreviousIntro = () => {
    setActiveIntro(
      (current) => (current - 1 + introImages.length) % introImages.length
    );
  };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveIntro((current) => (current + 1) % introImages.length);
    }, 4200);

    return () => window.clearTimeout(timer);
  }, [activeIntro]);

  return (
    <main>
      <Header />

      <section className={styles.introPage}>
        <div
          className={styles.introSlider}
          onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
          onTouchEnd={(event) => {
            if (touchStart === null) {
              return;
            }

            const distance = touchStart - event.changedTouches[0].clientX;

            if (Math.abs(distance) > 45) {
              if (distance > 0) {
                goToNextIntro();
              } else {
                goToPreviousIntro();
              }
            }

            setTouchStart(null);
          }}
        >
          <div
            className={styles.introTrack}
            style={{ transform: `translateX(-${activeIntro * 100}%)` }}
          >
            {introImages.map((item) => (
              <img
                src={item.image}
                alt={item.alt}
                className={styles.introHeroImage}
                key={item.image}
              />
            ))}
          </div>

          <button
            type="button"
            className={`${styles.introControl} ${styles.introControlPrevious}`}
            onClick={goToPreviousIntro}
            aria-label="Xem ảnh giới thiệu trước"
          >
            {"<"}
          </button>

          <button
            type="button"
            className={`${styles.introControl} ${styles.introControlNext}`}
            onClick={goToNextIntro}
            aria-label="Xem ảnh giới thiệu tiếp theo"
          >
            {">"}
          </button>

          <div className={styles.introDots}>
            {introImages.map((item, index) => (
              <button
                type="button"
                className={`${styles.introDot} ${
                  index === activeIntro ? styles.introDotActive : ""
                }`}
                onClick={() => setActiveIntro(index)}
                aria-label={`Xem ảnh giới thiệu ${index + 1}`}
                aria-current={index === activeIntro}
                key={item.image}
              />
            ))}
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.introHeader}>
            <p>BHOME Furniture</p>
            <h1>Giới thiệu</h1>
          </div>

          <nav className={styles.quickNav} aria-label="Nội dung chính">
            <h2>Nội dung chính</h2>

            {introItems.map((item) => (
              <a href={`#muc-${item.number}`} key={item.number}>
                <span>{Number(item.number)}.</span>
                {item.title}
              </a>
            ))}
          </nav>

          <div className={styles.introList}>
            {introItems.map((item, index) => (
              <article
                id={`muc-${item.number}`}
                className={`${styles.introItem} ${
                  index % 2 === 1 ? styles.introItemReverse : ""
                }`}
                key={item.number}
              >
                <div className={styles.introImageWrap}>
                  <img src={item.image} alt={item.title} />
                </div>

                <div className={styles.introContent}>
                  <div className={styles.introNumberRow}>
                    <span></span>
                    <strong>{item.number}</strong>
                  </div>

                  <h2>{item.title}</h2>

                  {item.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
}
