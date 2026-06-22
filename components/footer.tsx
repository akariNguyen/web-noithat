export default function Footer() {
  return (
    <footer id="lien-he" className="footer">
      <div className="footer-info-bar">
        <div className="footer-info-inner">
          <div className="footer-info-item">
            <span className="footer-info-icon">☎</span>

            <div>
              <p>Liên hệ ngay</p>
              <strong>0908 623 117</strong>
              <small>Hotline / Zalo</small>
            </div>
          </div>

          <div className="footer-info-item">
            <span className="footer-info-icon">⌖</span>

            <div>
              <p>Xưởng sản xuất BHome</p>
              <strong>Xóm 4, Thôn Thanh Vinh</strong>
              <small>P. Dương Nỗ, TP. Huế</small>
            </div>
          </div>

          <a
            href="https://www.facebook.com/Bhomehue22"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-info-item footer-facebook"
            aria-label="Facebook BHome Furniture"
          >
            <span className="footer-info-icon">f</span>

            <div>
              <p>Facebook</p>
              <strong>BHOME FURNITURE</strong>
              <small>facebook.com/Bhomehue22</small>
            </div>
          </a>

          <div className="footer-info-brand">
            <span className="footer-info-logo">⌂</span>

            <div>
              <strong>BHOME FURNITURE</strong>
              <p>Thiết kế - Thi công - Sản xuất nội thất trọn gói</p>
              <small>Kiến tạo không gian sống - Nâng tầm giá trị tổ ấm</small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
