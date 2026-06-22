import Header from "@/components/header1";
import Footer from "@/components/footer";
import FloatingContact from "@/components/floating-contact";
import ProductGallery from "../tu-bep-hien-dai/product-gallery";
import styles from "../tu-bep-hien-dai/tu-bep-hien-dai.module.css";

const bedroomProducts = [
  {
    image: "/images/hien_dai/phongngu/anh0.png",
    title: "Phòng ngủ xám luxury",
    description:
      "Giường bọc nệm đặt giữa không gian xám đá, tủ kính tối màu và trần hắt sáng. Tổng thể sang, hợp phòng ngủ master rộng.",
  },
  {
    image: "/images/hien_dai/phongngu/anh1.png",
    title: "Phòng ngủ gỗ sáng",
    description:
      "Giường, tủ áo, tab đầu giường và bàn trang điểm dùng cùng tông gỗ sáng. Không gian ấm, dễ chịu và phù hợp gia đình thích vẻ tự nhiên.",
  },
  {
    image: "/images/hien_dai/phongngu/anh2.png",
    title: "Phòng ngủ ốp gỗ trầm",
    description:
      "Vách đầu giường gỗ tối, đèn hắt ấm và tủ kính bên hông tạo cảm giác riêng tư, sang trọng. Phù hợp phòng ngủ master hiện đại.",
  },
  {
    image: "/images/hien_dai/phongngu/anh4.png",
    title: "Phòng ngủ tối giản nhỏ",
    description:
      "Giường thấp, tủ áo âm tường và tông trắng xám giúp phòng nhỏ vẫn thoáng. Thiết kế ít chi tiết, tập trung vào công năng cơ bản.",
  },
  {
    image: "/images/hien_dai/phongngu/anh5.png",
    title: "Phòng ngủ ấm ánh đèn",
    description:
      "Vách đầu giường bọc nệm, đèn hắt vàng và rèm tối màu tạo không khí thư giãn. Phù hợp người thích phòng ngủ trầm ấm.",
  },
  {
    image: "/images/hien_dai/phongngu/anh6.png",
    title: "Phòng ngủ giường bệt gỗ",
    description:
      "Giường bệt, vách gỗ lớn sau đầu giường và đèn hắt ngang tạo cảm giác hiện đại kiểu nghỉ dưỡng. Không gian rộng, thoáng và ấm.",
  },
  {
    image: "/images/hien_dai/phongngu/anh7.png",
    title: "Phòng ngủ hồng nhạt",
    description:
      "Tông trắng hồng nhẹ, kệ trang trí bo cong và bàn làm việc cạnh cửa sổ. Mẫu này hợp phòng ngủ trẻ, phòng nữ hoặc căn hộ nhỏ.",
  },
  {
    image: "/images/hien_dai/phongngu/anh8.png",
    title: "Phòng ngủ đen hiện đại",
    description:
      "Vách tivi, tủ kính và mảng tường tối màu kết hợp ánh sáng vàng. Thiết kế mạnh, cá tính, phù hợp phòng ngủ lớn.",
  },
  {
    image: "/images/hien_dai/phongngu/anh9.png",
    title: "Phòng ngủ gỗ gọn gàng",
    description:
      "Giường gỗ thấp, tủ áo trắng và bàn trang điểm nhỏ đặt sát tường. Bố cục đơn giản, dễ dùng và tận dụng tốt ánh sáng cửa sổ.",
  },
  {
    image: "/images/hien_dai/phongngu/anh10.png",
    title: "Phòng ngủ bo cong pastel",
    description:
      "Kệ trang trí bo vòm, bàn trang điểm nhỏ và tông màu hồng kem tạo cảm giác mềm. Phù hợp phòng ngủ trẻ trung, nhẹ nhàng.",
  },
  {
    image: "/images/hien_dai/phongngu/anh11.png",
    title: "Phòng ngủ trắng kem",
    description:
      "Giường trắng, kệ trang trí bo cong và bàn học cạnh cửa sổ giúp phòng sáng, thoáng. Đèn hắt trong kệ tạo điểm nhấn tinh tế.",
  },
  {
    image: "/images/hien_dai/phongngu/anh12.png",
    title: "Phòng ngủ xám cam",
    description:
      "Tông xám chủ đạo kết hợp điểm nhấn cam ở kệ trang trí. Cách phối hiện đại, gọn và hợp phòng ngủ cần vẻ trẻ trung.",
  },
  {
    image: "/images/hien_dai/phongngu/anh13.png",
    title: "Phòng ngủ có bàn làm việc",
    description:
      "Giường lớn, bàn làm việc dài cạnh vách lam và ánh sáng tự nhiên từ cửa sổ. Phù hợp người cần kết hợp nghỉ ngơi và làm việc tại phòng.",
  },
  {
    image: "/images/hien_dai/phongngu/anh14.png",
    title: "Phòng ngủ xám trắng",
    description:
      "Tủ áo xám, kệ mở đen và bàn trang điểm nhỏ tạo bố cục gọn. Tông trung tính dễ dùng, phù hợp nhiều độ tuổi.",
  },
  {
    image: "/images/hien_dai/phongngu/anh15.png",
    title: "Phòng ngủ gỗ sáng có kệ",
    description:
      "Giường gỗ, tủ áo trắng và kệ trang trí có đèn đặt cạnh đầu giường. Thiết kế cân bằng giữa lưu trữ, trưng bày và nghỉ ngơi.",
  },
  {
    image: "/images/hien_dai/phongngu/anh16.png",
    title: "Phòng ngủ tủ kính tối màu",
    description:
      "Tủ kính lớn chạy dọc phòng, giường thấp tông xám và rèm xuyên sáng. Không gian sang, hợp phòng ngủ master có chiều dài.",
  },
  {
    image: "/images/hien_dai/phongngu/anh17.png",
    title: "Phòng ngủ nhỏ đa năng",
    description:
      "Giường, tủ áo, kệ trang trí và bàn học được gom trong một bố cục gọn. Mẫu này tối ưu tốt cho phòng nhỏ nhưng vẫn đủ công năng.",
  },
  {
    image: "/images/hien_dai/phongngu/anh18.png",
    title: "Phòng ngủ có bàn đôi",
    description:
      "Giường đặt cạnh khu bàn học/làm việc hai chỗ ngồi, dùng tông trắng kem sáng. Phù hợp phòng ngủ kết hợp góc học tập hoặc làm việc.",
  },
];

export default function PhongNguHienDaiPage() {
  return (
    <main>
      <Header />

      <section className={styles.detailSection}>
        <div className={styles.container}>
          <div className={styles.heroText}>
            <p>BHOME Furniture</p>
            <h1>Phòng ngủ hiện đại</h1>
            <span>
              Chọn một mẫu phòng ngủ để xem ảnh lớn và mô tả chi tiết trong
              popup.
            </span>
          </div>

          <ProductGallery products={bedroomProducts} />
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
}
