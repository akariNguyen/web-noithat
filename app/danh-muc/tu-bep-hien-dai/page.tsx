import Header from "@/components/header1";
import Footer from "@/components/footer";
import FloatingContact from "@/components/floating-contact";
import ProductGallery from "./product-gallery";
import styles from "./tu-bep-hien-dai.module.css";

const kitchenProducts = [
  {
    image: "/images/hien_dai/nhabep/anh0.png",
    title: "Bếp xám đen liền bàn ăn",
    description:
      "Không gian bếp chữ L tông xám đen, mặt đá sáng và đèn hắt dưới tủ. Bàn ăn đặt liền khu bếp giúp sinh hoạt thuận tiện, phù hợp nhà phố có cầu thang cạnh bếp.",
  },
  {
    image: "/images/hien_dai/nhabep/anh1.png",
    title: "Bếp trắng phối vân gỗ",
    description:
      "Tủ bếp trắng bóng kết hợp vân gỗ ấm, hệ tủ cao kịch trần và thiết bị âm tủ. Bàn ăn mặt đá lớn tạo cảm giác sạch, sáng và sang.",
  },
  {
    image: "/images/hien_dai/nhabep/anh2.png",
    title: "Bếp đảo cao cấp",
    description:
      "Bếp rộng với đảo trung tâm, tủ xám bóng, mặt đá vân mây và hệ tủ kính trưng bày có đèn. Tổng thể hợp với không gian mở liền phòng khách.",
  },
  {
    image: "/images/hien_dai/nhabep/anh3.png",
    title: "Bếp gỗ sáng chữ U",
    description:
      "Tủ bếp chữ U dùng vân gỗ sáng phối cánh màu be, có kệ trang trí đứng và đèn hắt ấm. Cách bố trí tận dụng tốt góc tường và tăng diện tích lưu trữ.",
  },
  {
    image: "/images/hien_dai/nhabep/anh4.png",
    title: "Bếp xanh pastel mềm mại",
    description:
      "Tủ dưới xanh pastel, tủ trên trắng và gạch ốp xanh nhạt tạo cảm giác nhẹ nhàng. Bàn ăn nhỏ đặt sát bếp, hợp căn hộ hoặc bếp gia đình diện tích vừa.",
  },
  {
    image: "/images/hien_dai/nhabep/anh5.png",
    title: "Bếp kính đen viền kim loại",
    description:
      "Tủ trên kính đen viền vàng, tủ dưới đen nhám và mặt bàn đá vân mạnh. Không gian có bàn ăn mặt đá đồng bộ, tạo phong cách hiện đại mạnh mẽ.",
  },
  {
    image: "/images/hien_dai/nhabep/anh6.png",
    title: "Bếp gỗ nhỏ gọn",
    description:
      "Bếp chữ L nhỏ với tủ gỗ sáng, tủ trên trắng và mảng tường trắng sạch. Thiết kế tối giản, gọn gàng, phù hợp căn hộ nhỏ hoặc khu bếp phụ.",
  },
  {
    image: "/images/hien_dai/nhabep/anh7.png",
    title: "Bếp đen xám rộng",
    description:
      "Hệ tủ bếp lớn tông đen xám, tủ lạnh âm khối và đá ốp đen vân sáng. Đèn hắt chạy dài giúp khu bếp sang và có chiều sâu hơn.",
  },
  {
    image: "/images/hien_dai/nhabep/anh8.png",
    title: "Bếp chữ L xanh đen",
    description:
      "Bếp chữ L với tủ xanh đen, cánh phẳng và mảng đá ốp trắng vân xám. Góc tủ kính trang trí giúp giảm cảm giác nặng của mảng tủ tối màu.",
  },
  {
    image: "/images/hien_dai/nhabep/anh9.png",
    title: "Bếp chữ L đồng bộ",
    description:
      "Thiết kế tương tự mẫu xanh đen với cách chia khoang rõ ràng, bếp nấu và chậu rửa nằm trên hai nhánh chữ L. Phù hợp không gian cần nhiều mặt bàn thao tác.",
  },
  {
    image: "/images/hien_dai/nhabep/anh10.png",
    title: "Bếp trắng thanh lịch",
    description:
      "Tủ bếp trắng kiểu nhẹ nhàng, phào chỉ tinh giản và mặt đá vân mây. Ánh sáng vàng dưới tủ làm khu bếp sáng nhưng vẫn ấm.",
  },
  {
    image: "/images/hien_dai/nhabep/anh11.png",
    title: "Bếp tím xám cá tính",
    description:
      "Tủ bếp tông tím xám kết hợp tường xanh nhạt và kệ gỗ trang trí. Bố cục chữ L giúp bếp rộng mặt thao tác mà vẫn giữ được sự mềm mại.",
  },
  {
    image: "/images/hien_dai/nhabep/anh12.png",
    title: "Bếp đen kính cao kịch trần",
    description:
      "Hệ tủ đen bóng cao kịch trần, xen kẽ khoang kính có đèn. Mặt đá trắng vân vàng làm điểm cân bằng cho tổng thể tối màu.",
  },
  {
    image: "/images/hien_dai/nhabep/anh13.png",
    title: "Bếp có đảo mini",
    description:
      "Không gian bếp sáng với tủ trắng, tủ lạnh đôi và đảo nhỏ ở giữa. Thiết kế phù hợp nhà phố cần thêm bàn soạn, bàn ăn nhanh hoặc quầy bar nhỏ.",
  },
  {
    image: "/images/hien_dai/nhabep/anh14.png",
    title: "Bếp đảo mini sáng màu",
    description:
      "Mẫu bếp sáng, bố trí đảo trung tâm và tủ trưng bày nhỏ. Các mảng tủ trắng giúp không gian rộng thoáng, dễ phối với nội thất xung quanh.",
  },
  {
    image: "/images/hien_dai/nhabep/anh15.png",
    title: "Bếp đen trong góc nhà",
    description:
      "Bếp chữ L tối màu đặt gọn trong góc, có tủ cao và khoang kính trang trí. Phù hợp không gian muốn giữ vẻ sang trọng nhưng không chiếm quá nhiều diện tích.",
  },
  {
    image: "/images/hien_dai/nhabep/anh16.png",
    title: "Bếp đen liền bàn ăn",
    description:
      "Tủ bếp đen bóng, tủ kính trên cao và bàn ăn trắng đặt sát khu nấu. Cách phối tương phản tạo cảm giác hiện đại, sạch và dễ tạo điểm nhấn.",
  },
  {
    image: "/images/hien_dai/nhabep/anh17.png",
    title: "Bếp gỗ sáng tối giản",
    description:
      "Tủ bếp gỗ sáng, kệ treo mở và nền sàn gỗ tạo cảm giác nhẹ nhàng. Phù hợp gia đình thích bếp thoáng, ít chi tiết và dễ sử dụng hằng ngày.",
  },
  {
    image: "/images/hien_dai/nhabep/anh18.png",
    title: "Bếp gỗ có quầy bar",
    description:
      "Bếp phối gỗ và xám, có quầy bar nhỏ cùng tủ kính trang trí. Không gian sáng, trẻ trung, hợp nhà có khu bếp mở ra sân hoặc cửa lớn.",
  },
  {
    image: "/images/hien_dai/nhabep/anh19.png",
    title: "Bếp gỗ chữ L ấm cúng",
    description:
      "Tủ bếp gỗ sáng chữ L, mặt đá trắng và kệ mở trang trí. Thiết kế nhiều ngăn kéo, dễ sắp xếp đồ dùng và tạo cảm giác gần gũi.",
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
