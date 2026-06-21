import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nội Thất BHome",
  description: "Website giới thiệu danh mục nội thất gia đình.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
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
