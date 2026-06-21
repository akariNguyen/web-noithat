import styles from "./floating-contact.module.css";

export default function FloatingContact() {
  return (
    <div className={styles.floatingContact}>
      <a
        href="https://zalo.me/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.contactButton} ${styles.zaloButton}`}
        aria-label="Liên hệ Zalo"
      >
        <span className={styles.zaloText}>Zalo</span>
      </a>

      <a
        href="tel:0908623117"
        className={`${styles.contactButton} ${styles.phoneButton}`}
        aria-label="Gọi điện thoại"
      >
        <span className={styles.phoneIcon}>☎</span>
      </a>
    </div>
  );
}