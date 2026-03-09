import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "var(--navy-900)" }} className="text-gray-300 mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 事務所情報 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-1">〇〇経営コンサルティング事務所</h3>
            <p className="text-sm" style={{ color: "var(--gold)" }}>
              中小企業診断士
            </p>
            <p className="text-sm mt-3 leading-relaxed">
              中小企業の経営課題を解決する<br />
              補助金支援・マーケティング支援の専門家
            </p>
          </div>

          {/* サービス */}
          <div>
            <h4 className="text-white font-semibold mb-3">サービス</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/subsidy" className="hover:text-white transition-colors">
                  補助金支援
                </Link>
              </li>
              <li>
                <Link href="/services/marketing" className="hover:text-white transition-colors">
                  マーケティング支援
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  無料相談
                </Link>
              </li>
            </ul>
          </div>

          {/* 事務所概要 */}
          <div>
            <h4 className="text-white font-semibold mb-3">事務所概要</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  代表プロフィール
                </Link>
              </li>
              <li>
                <Link href="/about#office" className="hover:text-white transition-colors">
                  アクセス・所在地
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} 〇〇経営コンサルティング事務所. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
