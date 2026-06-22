"use client";

import { useEffect, useState } from "react";
import styles from "./tu-bep-hien-dai.module.css";

type Product = {
  image: string;
  title: string;
  description: string;
};

type ProductGalleryProps = {
  products: Product[];
};

export default function ProductGallery({ products }: ProductGalleryProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProduct(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <>
      <div className={styles.galleryGrid}>
        {products.map((product) => (
          <button
            type="button"
            className={styles.productCard}
            onClick={() => setSelectedProduct(product)}
            key={product.image}
          >
            <div className={styles.imageWrap}>
              <img src={product.image} alt={product.title} />
            </div>

            <div className={styles.productName}>
              <h2>{product.title}</h2>
              <span>Xem chi tiết</span>
            </div>
          </button>
        ))}
      </div>

      {selectedProduct ? (
        <div
          className={styles.popupOverlay}
          role="presentation"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className={styles.popup}
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-popup-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.popupClose}
              onClick={() => setSelectedProduct(null)}
              aria-label="Đóng popup"
            >
              x
            </button>

            <div className={styles.popupImageWrap}>
              <img src={selectedProduct.image} alt={selectedProduct.title} />
            </div>

            <div className={styles.popupContent}>
              <p>BHOME Furniture</p>
              <h2 id="product-popup-title">{selectedProduct.title}</h2>
              <span>{selectedProduct.description}</span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
