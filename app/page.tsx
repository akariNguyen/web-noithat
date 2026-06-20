import Header from "@/components/header";

const categories = [
  {
    name: "Sofa",
    description: "Các mẫu sofa phòng khách hiện đại, sang trọng.",
  },
  {
    name: "Bàn trà",
    description: "Bàn trà gỗ, đá, kính phù hợp nhiều không gian.",
  },
  {
    name: "Tủ quần áo",
    description: "Tủ quần áo tiện dụng, bền đẹp và tối ưu không gian.",
  },
  {
    name: "Giường ngủ",
    description: "Giường ngủ hiện đại, chắc chắn và thẩm mỹ.",
  },
];

export default function Home() {
  return (
    <main>
      <Header />

      <section id="trang-chu" className="hero-section">
        <div className="container hero-content">
          <p className="small-title">Không gian sống hiện đại</p>

          <h1>Nội thất đẹp cho căn nhà của bạn</h1>

          <p className="hero-description">
            Chúng tôi mang đến các dòng sản phẩm nội thất phù hợp cho phòng
            khách, phòng ngủ và không gian gia đình hiện đại.
          </p>

          <div className="hero-actions">
            <a href="#danh-muc" className="primary-button">
              Xem danh mục
            </a>

            <a href="#lien-he" className="secondary-button">
              Liên hệ tư vấn
            </a>
          </div>
        </div>
      </section>

      <section id="danh-muc" className="section">
        <div className="container">
          <div className="section-heading">
            <p className="small-title">Danh mục</p>
            <h2>Danh mục nội thất nổi bật</h2>
            <p>
              Các nhóm sản phẩm chính được sắp xếp rõ ràng để khách hàng dễ tìm
              kiếm và lựa chọn.
            </p>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <article className="category-card" key={category.name}>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gioi-thieu" className="section about-section">
        <div className="container about-content">
          <div>
            <p className="small-title">Giới thiệu</p>
            <h2>Thiết kế tinh tế, chất lượng bền lâu</h2>
          </div>

          <p>
            Nội Thất An Gia hướng đến việc tạo ra không gian sống tiện nghi,
            hiện đại và phù hợp với nhu cầu sử dụng thực tế của từng gia đình.
            Mỗi sản phẩm được chọn lọc dựa trên kiểu dáng, chất liệu và khả năng
            phối hợp với nhiều phong cách nhà ở.
          </p>
        </div>
      </section>

      <section id="lien-he" className="section contact-section">
        <div className="container contact-box">
          <div>
            <p className="small-title">Liên hệ</p>
            <h2>Cần tư vấn nội thất?</h2>
            <p>
              Liên hệ với chúng tôi để được tư vấn mẫu mã, kích thước và phong
              cách phù hợp với không gian của bạn.
            </p>
          </div>

          <div className="contact-info">
            <p>
              <strong>Hotline:</strong> 0900 000 000
            </p>
            <p>
              <strong>Email:</strong> noithat@example.com
            </p>
            <p>
              <strong>Địa chỉ:</strong> Huế, Việt Nam
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© 2026 Nội Thất An Gia</p>
          <p>Website tĩnh deploy bằng Vercel</p>
        </div>
      </footer>
    </main>
  );
}