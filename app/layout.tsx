import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nội Thất An Gia",
  description: "Website giới thiệu danh mục nội thất gia đình.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}