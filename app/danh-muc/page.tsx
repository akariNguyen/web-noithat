import Header from "@/components/header1";
import Footer from "@/components/footer";
import FloatingContact from "@/components/floating-contact";
import DanhMuc from "../danhmuc/danhmuc";

export default function DanhMucPage() {
  return (
    <main>
      <Header />

      <DanhMuc />

      <Footer />

      <FloatingContact />
    </main>
  );
}