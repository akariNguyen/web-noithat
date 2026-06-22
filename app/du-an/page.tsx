"use client";

import { useEffect, useState } from "react";
import Header from "@/components/header1";
import Footer from "@/components/footer";
import FloatingContact from "@/components/floating-contact";
import styles from "./du-an.module.css";

type ProjectMedia = {
  type: "image" | "video";
  src: string;
  alt: string;
};

const projects = [
  {
    name: "Công trình trọn gói nội thất nhựa phủ laminate",
    location: "Chị Thảo",
    description:
      "Không gian nội thất hiện đại, tối ưu công năng sử dụng với vật liệu nhựa phủ laminate bền đẹp, dễ vệ sinh.",
    cover: "/images/duan/chithao/anh0.png",
    hover: "/images/duan/chithao/anh1.png",
    media: [
      { type: "image", src: "/images/duan/chithao/anh0.png", alt: "Dự án chị Thảo 1" },
      { type: "image", src: "/images/duan/chithao/anh1.png", alt: "Dự án chị Thảo 2" },
      { type: "image", src: "/images/duan/chithao/anh2.png", alt: "Dự án chị Thảo 3" },
      { type: "image", src: "/images/duan/chithao/anh3.png", alt: "Dự án chị Thảo 4" },
      { type: "image", src: "/images/duan/chithao/anh4.png", alt: "Dự án chị Thảo 5" },
      { type: "image", src: "/images/duan/chithao/anh5.png", alt: "Dự án chị Thảo 6" },
      { type: "image", src: "/images/duan/chithao/anh6.png", alt: "Dự án chị Thảo 7" },
      { type: "image", src: "/images/duan/chithao/anh7.png", alt: "Dự án chị Thảo 8" },
      { type: "video", src: "/video/chithaoaluoi.mp4", alt: "Video dự án chị Thảo" },
    ] satisfies ProjectMedia[],
  },
  {
    name: "Chung cư Eco Garden",
    location: "Dì Hoa",
    description:
      "Thiết kế và hoàn thiện căn hộ theo phong cách hiện đại, ấm cúng, phù hợp sinh hoạt gia đình.",
    cover: "/images/duan/eco_garden/anh0.png",
    hover: "/images/duan/eco_garden/anh1.png",
    media: [
      { type: "image", src: "/images/duan/eco_garden/anh0.png", alt: "Eco Garden 1" },
      { type: "image", src: "/images/duan/eco_garden/anh1.png", alt: "Eco Garden 2" },
      { type: "image", src: "/images/duan/eco_garden/anh2.png", alt: "Eco Garden 3" },
      { type: "image", src: "/images/duan/eco_garden/anh3.png", alt: "Eco Garden 4" },
      { type: "image", src: "/images/duan/eco_garden/anh4.png", alt: "Eco Garden 5" },
      { type: "image", src: "/images/duan/eco_garden/anh5.png", alt: "Eco Garden 6" },
      { type: "video", src: "/video/chungcudihoa.mp4", alt: "Video Eco Garden" },
    ] satisfies ProjectMedia[],
  },
  {
    name: "Chung cư Nera Garden",
    location: "Anh Khánh",
    description:
      "Dự án căn hộ với nhiều hạng mục nội thất đồng bộ, bố trí gọn gàng, sáng thoáng và tiện nghi.",
    cover: "/images/duan/nera_garden/anh0.png",
    hover: "/images/duan/nera_garden/anh1.png",
    media: [
      { type: "image", src: "/images/duan/nera_garden/anh0.png", alt: "Nera Garden 1" },
      { type: "image", src: "/images/duan/nera_garden/anh1.png", alt: "Nera Garden 2" },
      { type: "image", src: "/images/duan/nera_garden/anh2.png", alt: "Nera Garden 3" },
      { type: "image", src: "/images/duan/nera_garden/anh3.png", alt: "Nera Garden 4" },
      { type: "image", src: "/images/duan/nera_garden/anh4.png", alt: "Nera Garden 5" },
      { type: "image", src: "/images/duan/nera_garden/anh5.png", alt: "Nera Garden 6" },
      { type: "image", src: "/images/duan/nera_garden/anh6.png", alt: "Nera Garden 7" },
      { type: "image", src: "/images/duan/nera_garden/anh7.png", alt: "Nera Garden 8" },
      { type: "image", src: "/images/duan/nera_garden/anh8.png", alt: "Nera Garden 9" },
      { type: "image", src: "/images/duan/nera_garden/anh9.png", alt: "Nera Garden 10" },
      { type: "image", src: "/images/duan/nera_garden/anh10.png", alt: "Nera Garden 11" },
      { type: "image", src: "/images/duan/nera_garden/anh11.png", alt: "Nera Garden 12" },
      { type: "video", src: "/images/duan/nera_garden/video0.mp4", alt: "Video Nera Garden" },
    ] satisfies ProjectMedia[],
  },
  {
    name: "Công trọn gói nội thất chung cư Nera Garden",
    location: "Anh Thanh",
    description:
      "Không gian nội thất được hoàn thiện theo nhu cầu sử dụng thực tế, chú trọng sự gọn gàng và cảm giác ấm cúng.",
    cover: "/images/duan/anhthanh/anh0.png",
    hover: "/images/duan/anhthanh/anh1.png",
    media: [
      { type: "image", src: "/images/duan/anhthanh/anh0.png", alt: "Dự án anh Thành 1" },
      { type: "image", src: "/images/duan/anhthanh/anh1.png", alt: "Dự án anh Thành 2" },
      { type: "image", src: "/images/duan/anhthanh/anh2.png", alt: "Dự án anh Thành 3" },
      { type: "image", src: "/images/duan/anhthanh/anh3.png", alt: "Dự án anh Thành 4" },
      { type: "image", src: "/images/duan/anhthanh/anh4.png", alt: "Dự án anh Thành 5" },
      { type: "image", src: "/images/duan/anhthanh/anh5.png", alt: "Dự án anh Thành 6" },
    ] satisfies ProjectMedia[],
  },
  {
    name: "Công trình nội thất nhà phố hiện đại",
    location: "Anh Đức",
    description:
      "Không gian nhà phố được hoàn thiện với tủ kệ, phòng ngủ và các hạng mục nội thất gọn gàng, sạch sẽ, phù hợp sinh hoạt gia đình.",
    cover: "/images/duan/anhduc/anh0.png",
    hover: "/images/duan/anhduc/anh1.png",
    media: [
      { type: "image", src: "/images/duan/anhduc/anh0.png", alt: "Dự án anh Đức 1" },
      { type: "image", src: "/images/duan/anhduc/anh1.png", alt: "Dự án anh Đức 2" },
      { type: "image", src: "/images/duan/anhduc/anh2.png", alt: "Dự án anh Đức 3" },
      { type: "image", src: "/images/duan/anhduc/anh3.png", alt: "Dự án anh Đức 4" },
      { type: "image", src: "/images/duan/anhduc/anh4.png", alt: "Dự án anh Đức 5" },
      { type: "image", src: "/images/duan/anhduc/anh5.png", alt: "Dự án anh Đức 6" },
      { type: "image", src: "/images/duan/anhduc/anh6.png", alt: "Dự án anh Đức 7" },
      { type: "image", src: "/images/duan/anhduc/anh7.png", alt: "Dự án anh Đức 8" },
      { type: "image", src: "/images/duan/anhduc/anh8.png", alt: "Dự án anh Đức 9" },
    ] satisfies ProjectMedia[],
  },
];

export default function DuAnPage() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [activeMedia, setActiveMedia] = useState(0);

  const selectedProject =
    activeProject === null ? null : projects[activeProject];
  const selectedMedia = selectedProject?.media[activeMedia] ?? null;
  const mediaCount = selectedProject?.media.length ?? 0;

  const openProject = (projectIndex: number) => {
    setActiveProject(projectIndex);
    setActiveMedia(0);
  };

  const closeProject = () => {
    setActiveProject(null);
    setActiveMedia(0);
  };

  const goToNextMedia = () => {
    if (!selectedProject) {
      return;
    }

    setActiveMedia((current) => (current + 1) % selectedProject.media.length);
  };

  const goToPreviousMedia = () => {
    if (!selectedProject) {
      return;
    }

    setActiveMedia(
      (current) =>
        (current - 1 + selectedProject.media.length) %
        selectedProject.media.length
    );
  };

  useEffect(() => {
    if (!selectedProject) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProject(null);
        setActiveMedia(0);
      }

      if (event.key === "ArrowRight") {
        setActiveMedia((current) => (current + 1) % mediaCount);
      }

      if (event.key === "ArrowLeft") {
        setActiveMedia(
          (current) => (current - 1 + mediaCount) % mediaCount
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject, mediaCount]);

  return (
    <main>
      <Header />

      <section className={styles.projectPage}>
        <div className={styles.container}>
          <div className={styles.pageHeader}>
            <p>BHOME Furniture</p>
            <h1>Dự án</h1>
            <span>
              Những công trình BHome đã thiết kế, sản xuất và thi công hoàn thiện.
            </span>
          </div>

          <div className={styles.projectGrid}>
            {projects.map((project, index) => (
              <button
                type="button"
                className={styles.projectCard}
                onClick={() => openProject(index)}
                key={project.name}
              >
                <div className={styles.projectImageWrap}>
                  <img
                    src={project.cover}
                    alt={project.name}
                    className={styles.coverImage}
                  />
                  <img
                    src={project.hover}
                    alt=""
                    aria-hidden="true"
                    className={styles.hoverImage}
                  />
                </div>

                <div className={styles.projectContent}>
                  <p>{project.location}</p>
                  <h2>{project.name}</h2>
                  <span>Xem hình ảnh dự án</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && selectedMedia && (
        <div
          className={styles.lightbox}
          onClick={closeProject}
          role="dialog"
          aria-modal="true"
          aria-label={`Dự án ${selectedProject.name}`}
        >
          <button
            type="button"
            className={`${styles.lightboxArrow} ${styles.lightboxPrevious}`}
            onClick={(event) => {
              event.stopPropagation();
              goToPreviousMedia();
            }}
            aria-label="Xem ảnh trước"
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
              onClick={closeProject}
              aria-label="Đóng dự án"
            >
              ×
            </button>

            <div className={styles.mediaStage}>
              {selectedMedia.type === "video" ? (
                <div className={styles.videoFitFrame}>
                  <video
                    src={selectedMedia.src}
                    controls
                    playsInline
                    className={styles.stageVideo}
                  />
                </div>
              ) : (
                <div className={styles.imageFitFrame}>
                  <img
                    src={selectedMedia.src}
                    alt={selectedMedia.alt}
                    className={styles.stageImage}
                  />
                </div>
              )}
            </div>

            <div className={styles.lightboxInfo}>
              <div>
                <p>{selectedProject.location}</p>
                <h2>{selectedProject.name}</h2>
              </div>
              <span>
                {activeMedia + 1} / {selectedProject.media.length}
              </span>
            </div>

            <div className={styles.thumbnailRow}>
              {selectedProject.media.map((item, index) => (
                <button
                  type="button"
                  className={`${styles.thumbnail} ${
                    index === activeMedia ? styles.thumbnailActive : ""
                  }`}
                  onClick={() => setActiveMedia(index)}
                  aria-label={`Xem mục ${index + 1}`}
                  key={`${item.src}-${index}`}
                >
                  {item.type === "video" ? (
                    <span>Video</span>
                  ) : (
                    <img src={item.src} alt="" aria-hidden="true" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            className={`${styles.lightboxArrow} ${styles.lightboxNext}`}
            onClick={(event) => {
              event.stopPropagation();
              goToNextMedia();
            }}
            aria-label="Xem ảnh tiếp theo"
          >
            {">"}
          </button>
        </div>
      )}

      <Footer />
      <FloatingContact />
    </main>
  );
}
