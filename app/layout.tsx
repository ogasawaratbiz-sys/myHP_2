import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "〇〇経営コンサルティング事務所 | 中小企業診断士",
    template: "%s | 〇〇経営コンサルティング事務所",
  },
  description:
    "中小企業診断士による補助金申請支援・マーケティング支援の専門事務所。補助金採択率向上・売上アップを全力サポートします。まずは無料相談から。",
  keywords: ["中小企業診断士", "補助金支援", "マーケティング支援", "事業計画", "経営コンサルタント"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "〇〇経営コンサルティング事務所",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
