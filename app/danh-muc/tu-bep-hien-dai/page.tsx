import Header from "@/components/header1";
import Footer from "@/components/footer";
import FloatingContact from "@/components/floating-contact";
import ProductGallery from "./product-gallery";
import styles from "./tu-bep-hien-dai.module.css";

const kitchenProducts = [
  {
    image: "/images/hien_dai/nhabep/anh0.png",
    title: "Bếp xám đen sang trọng",
    description:
      "Tủ bếp chữ L kết hợp bàn ăn, mặt đá sáng và hệ đèn hắt tạo cảm giác hiện đại, gọn gàng.",
  },
  {
    image: "/images/hien_dai/nhabep/anh1.png",
    title: "Bếp trắng phối vân gỗ",
    description:
      "Không gian sáng, sạch với tủ cao kịch trần, thiết bị âm tủ và bàn ăn mặt đá liền mạch.",
  },
  {
    image: "/images/hien_dai/nhabep/anh2.png",
    title: "Bếp đảo cao cấp",
    description:
      "Đảo bếp rộng, tủ kính trưng bày và ánh sáng vàng giúp khu bếp trở thành điểm nhấn của nhà.",
  },
  {
    image: "/images/hien_dai/nhabep/anh3.png",
    title: "Bếp gỗ sáng ấm áp",
    description:
      "Tông gỗ tự nhiên phối cánh tủ bóng, bố trí chữ U tối ưu lưu trữ cho không gian gia đình.",
  },
  {
    image: "/images/hien_dai/nhabep/anh4.png",
    title: "Bếp xanh pastel tinh tế",
    description:
      "Màu xanh nhẹ, tủ trắng và bàn ăn nhỏ tạo cảm giác mềm mại, phù hợp căn hộ hoặc bếp ấm cúng.",
  },
  {
    image: "/images/hien_dai/nhabep/anh5.png",
    title: "Bếp đen kính hiện đại",
    description:
      "Tủ kính đen viền kim loại, mặt đá vân mạnh và bàn ăn đồng bộ tạo phong cách mạnh mẽ.",
  },
];

export default function TuBepHienDaiPage() {
  return (
    <main>
      <Header />

      <section className={styles.detailSection}>
        <div className={styles.container}>
          <div className={styles.heroText}>
            <p>BHOME Furniture</p>
            <h1>Tủ bếp hiện đại</h1>
            <span>
              Chọn một mẫu sản phẩm để xem ảnh lớn và thông tin chi tiết trong
              popup.
            </span>
          </div>

          <ProductGallery products={kitchenProducts} />
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
}
