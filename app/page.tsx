import Header from "@/components/header1";
import Footer from "@/components/footer";
import TrangChu from "./trangchu/trangchu";
import FloatingContact from "@/components/floating-contact";
export default function Home() {
  return (
    <main>
      <Header />

      <TrangChu />

      <Footer />
       <FloatingContact />
    </main>
  );
}