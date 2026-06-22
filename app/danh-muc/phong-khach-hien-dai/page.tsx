import Header from "@/components/header1";
import Footer from "@/components/footer";
import FloatingContact from "@/components/floating-contact";
import ProductGallery from "../tu-bep-hien-dai/product-gallery";
import styles from "../tu-bep-hien-dai/tu-bep-hien-dai.module.css";

const livingRoomProducts = [
  {
    image: "/images/hien_dai/phongkhach/anh0.png",
    title: "Phòng khách kính lớn",
    description:
      "Không gian sang với vách tivi đá sáng, tủ kính hai bên và sofa thấp. Mảng kính lớn lấy sáng tự nhiên, phù hợp phòng khách nhà phố hiện đại.",
  },
  {
    image: "/images/hien_dai/phongkhach/anh1.png",
    title: "Phòng khách gỗ sáng",
    description:
      "Kệ tivi, bàn trà và vách trang trí dùng tông gỗ sáng đồng bộ. Bố cục ấm, gần gũi, hợp không gian liên thông bếp và cầu thang.",
  },
  {
    image: "/images/hien_dai/phongkhach/anh2.png",
    title: "Phòng khách căn hộ nhỏ",
    description:
      "Kệ tivi treo gọn, ghế đơn bo tròn và bàn trà nhỏ giúp không gian nhẹ nhàng. Rèm sáng và nền gỗ tạo cảm giác ấm cho căn hộ.",
  },
  {
    image: "/images/hien_dai/phongkhach/anh3.png",
    title: "Phòng khách nhà phố dài",
    description:
      "Vách tivi dài kết hợp tủ kính trưng bày, sofa chữ I và cầu thang kính. Cách bố trí phù hợp nhà phố có chiều sâu lớn.",
  },
  {
    image: "/images/hien_dai/phongkhach/anh4.png",
    title: "Vách tivi đá luxury",
    description:
      "Vách tivi đá tối màu, hệ kệ kính có đèn và trần hắt sáng tạo điểm nhấn mạnh. Phù hợp không gian muốn vẻ sang trọng, nổi bật.",
  },
  {
    image: "/images/hien_dai/phongkhach/anh5.png",
    title: "Phòng khách sáng tối giản",
    description:
      "Kệ tivi thấp, tủ trang trí nhỏ và sofa màu sáng tạo cảm giác thoáng. Thiết kế phù hợp phòng khách cần ít chi tiết, dễ sinh hoạt.",
  },
  {
    image: "/images/hien_dai/phongkhach/anh6.png",
    title: "Phòng khách tủ sách lớn",
    description:
      "Mảng tủ sách cao kịch trần kết hợp sofa da và tranh nghệ thuật. Không gian có chiều sâu, hợp gia chủ thích trưng bày và đọc sách.",
  },
  {
    image: "/images/hien_dai/phongkhach/anh7.png",
    title: "Phòng khách sofa da nâu",
    description:
      "Sofa da nâu, bàn trà đồng bộ và kệ tivi sáng tạo cảm giác ấm. Mảng gương và rèm giúp không gian vẫn thoáng, không bị nặng màu.",
  },
  {
    image: "/images/hien_dai/phongkhach/anh8.png",
    title: "Phòng khách nâu trầm",
    description:
      "Sofa da, kệ trang trí có đèn và vách tivi tối màu tạo không khí ấm, sang. Phù hợp phòng khách cần vẻ chắc chắn và lịch sự.",
  },
  {
    image: "/images/hien_dai/phongkhach/anh9.png",
    title: "Phòng khách mở liền bếp",
    description:
      "Không gian rộng với sofa xám, vách tivi sáng và tủ rượu có đèn cạnh cầu thang. Bố cục mở giúp kết nối phòng khách, bếp và lối đi.",
  },
  {
    image: "/images/hien_dai/phongkhach/anh10.png",
    title: "Phòng khách cầu thang sáng",
    description:
      "Sofa bo tròn, bàn trà tròn và kệ tivi cong mềm giúp không gian nhẹ. Cầu thang cạnh phòng khách được xử lý như một phần trang trí.",
  },
  {
    image: "/images/hien_dai/phongkhach/anh11.png",
    title: "Phòng khách gỗ cao cấp",
    description:
      "Sofa da nâu, bàn trà gỗ và vách tivi đá sáng tạo cảm giác bề thế. Hệ tủ kính bên hông tăng khả năng trưng bày cho nhà phố.",
  },
  {
    image: "/images/hien_dai/phongkhach/anh12.png",
    title: "Phòng khách mini mềm mại",
    description:
      "Sofa nhỏ, kệ tivi treo và mảng tường cong có đèn hắt. Thiết kế hợp căn hộ nhỏ hoặc phòng sinh hoạt cần sự nhẹ nhàng, ít chiếm chỗ.",
  },
];

export default function PhongKhachHienDaiPage() {
  return (
    <main>
      <Header />

      <section className={styles.detailSection}>
        <div className={styles.container}>
          <div className={styles.heroText}>
            <p>BHOME Furniture</p>
            <h1>Phòng khách hiện đại</h1>
            <span>
              Chọn một mẫu phòng khách để xem ảnh lớn và mô tả chi tiết trong
              popup.
            </span>
          </div>

          <ProductGallery products={livingRoomProducts} />
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
}
