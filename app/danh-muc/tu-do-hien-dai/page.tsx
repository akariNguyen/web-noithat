import Header from "@/components/header1";
import Footer from "@/components/footer";
import FloatingContact from "@/components/floating-contact";
import ProductGallery from "../tu-bep-hien-dai/product-gallery";
import styles from "../tu-bep-hien-dai/tu-bep-hien-dai.module.css";

const wardrobeProducts = [
  {
    image: "/images/hien_dai/tudo/anh0.png",
    title: "Phòng thay đồ kính tối",
    description:
      "Hệ tủ kính tối màu bao quanh phòng, có đèn hắt trong từng khoang và ghế bench giữa phòng. Phù hợp không gian thay đồ cao cấp.",
  },
  {
    image: "/images/hien_dai/tudo/anh1.png",
    title: "Tủ áo mở có bàn trang điểm",
    description:
      "Tủ áo mở với nhiều khoang treo, kệ gấp đồ và bàn trang điểm gương tròn ở trung tâm. Ánh sáng vàng giúp khu thay đồ sang và dễ quan sát.",
  },
  {
    image: "/images/hien_dai/tudo/anh2.png",
    title: "Tủ áo cánh phẳng vân gỗ",
    description:
      "Tủ áo lớn cánh phẳng, phối hai tông gỗ đậm nhạt. Thiết kế kín đáo, gọn, hợp phòng ngủ cần lưu trữ nhiều mà vẫn tối giản.",
  },
  {
    image: "/images/hien_dai/tudo/anh3.png",
    title: "Tủ giày gỗ sáng",
    description:
      "Tủ giày thấp với cánh kín và kệ mở bên hông, có mặt trang trí phía trên. Phù hợp sảnh vào nhà hoặc góc chuyển tiếp phòng khách.",
  },
  {
    image: "/images/hien_dai/tudo/anh4.png",
    title: "Tủ áo gỗ có khoang kính",
    description:
      "Tủ áo gỗ nâu kết hợp khoang kính trưng bày quần áo. Kiểu này giữ vẻ ấm áp nhưng vẫn tạo điểm nhấn hiện đại cho phòng ngủ.",
  },
  {
    image: "/images/hien_dai/tudo/anh5.png",
    title: "Tủ áo liền bàn học",
    description:
      "Tủ trắng kết hợp kệ sách xanh và bàn học nhỏ. Thiết kế tận dụng vách tường, phù hợp phòng ngủ trẻ hoặc phòng làm việc nhỏ.",
  },
  {
    image: "/images/hien_dai/tudo/anh6.png",
    title: "Tủ áo gỗ cao kịch trần",
    description:
      "Hệ tủ áo cao kịch trần, xen kẽ kệ mở và cánh gỗ dọc. Cách chia khoang linh hoạt, phù hợp phòng ngủ master cần nhiều lưu trữ.",
  },
  {
    image: "/images/hien_dai/tudo/anh7.png",
    title: "Tủ áo liền bàn trang điểm",
    description:
      "Tủ áo kết hợp khoang mở, bàn trang điểm gương tròn và đèn hắt. Tổng thể sáng, hiện đại, giúp khu thay đồ tiện nghi hơn.",
  },
  {
    image: "/images/hien_dai/tudo/anh9.png",
    title: "Phòng thay đồ hành lang",
    description:
      "Hai bên là hệ tủ kính tối, giữa phòng có đảo lưu trữ. Sàn gỗ vân mạnh và đèn trần tạo cảm giác như boutique cá nhân.",
  },
  {
    image: "/images/hien_dai/tudo/anh10.png",
    title: "Tủ lưu trữ xanh trắng",
    description:
      "Tủ trắng phối mảng xanh, kệ sách mở và bàn nhỏ có gương. Phù hợp góc học tập, làm việc hoặc khu trang điểm trong phòng ngủ.",
  },
  {
    image: "/images/hien_dai/tudo/anh11.png",
    title: "Tủ áo liền giường nhỏ",
    description:
      "Tủ áo trắng, kệ bo góc vân gỗ và bàn dài đặt cạnh giường. Thiết kế tối ưu cho phòng nhỏ, kết hợp lưu trữ và góc làm việc.",
  },
  {
    image: "/images/hien_dai/tudo/anh12.png",
    title: "Tủ áo vòm pastel",
    description:
      "Cánh tủ bo vòm tông hồng kem, hai bên là kệ trang trí có đèn và bàn trang điểm. Mẫu này mềm mại, hợp phòng ngủ nữ hoặc trẻ.",
  },
  {
    image: "/images/hien_dai/tudo/anh13.png",
    title: "Tủ áo xanh trắng có kệ sách",
    description:
      "Tủ trắng kết hợp kệ sách xanh và bàn trang điểm nhỏ, bố cục giống mẫu đa năng nhưng nhìn trực diện hơn. Rất hợp phòng cần nhiều ngăn gọn.",
  },
  {
    image: "/images/hien_dai/tudo/anh14.png",
    title: "Bàn làm việc treo tường",
    description:
      "Bàn làm việc nhỏ đặt cạnh cửa sổ, phía trên có tủ treo và kệ trang trí. Thiết kế gọn, phù hợp căn hộ hoặc phòng ngủ cần góc làm việc riêng.",
  },
];

export default function TuDoHienDaiPage() {
  return (
    <main>
      <Header />

      <section className={styles.detailSection}>
        <div className={styles.container}>
          <div className={styles.heroText}>
            <p>BHOME Furniture</p>
            <h1>Tủ đồ hiện đại</h1>
            <span>
              Chọn một mẫu tủ đồ để xem ảnh lớn và mô tả chi tiết trong popup.
            </span>
          </div>

          <ProductGallery products={wardrobeProducts} />
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
}
