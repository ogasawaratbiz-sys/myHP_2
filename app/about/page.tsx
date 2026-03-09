import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "事務所概要・プロフィール",
  description:
    "中小企業診断士〇〇のプロフィールと事務所概要。補助金支援・マーケティング支援を専門とする経営コンサルタントです。",
};

const profile = [
  { label: "氏名", value: "〇〇 〇〇（仮名）" },
  { label: "資格", value: "中小企業診断士（登録番号：XXXXXXXXX）" },
  { label: "専門分野", value: "補助金支援・マーケティング戦略・事業計画策定" },
  { label: "対応エリア", value: "全国（オンライン対応可）" },
];

const officeInfo = [
  { label: "事務所名", value: "〇〇経営コンサルティング事務所" },
  { label: "代表者", value: "〇〇 〇〇" },
  { label: "所在地", value: "〇〇県〇〇市〇〇町 X-X-X（詳細はお問い合わせください）" },
  { label: "電話番号", value: "0X0-XXXX-XXXX" },
  { label: "メール", value: "info@example.com" },
  { label: "営業時間", value: "平日 9:00〜18:00（土日・祝日は要相談）" },
];

const career = [
  { year: "20XX年", content: "〇〇大学 〇〇学部 卒業" },
  { year: "20XX年", content: "大手〇〇企業に入社。営業・マーケティング部門に従事" },
  { year: "20XX年", content: "中小企業診断士 資格取得" },
  { year: "20XX年", content: "〇〇経営コンサルティング事務所 設立" },
  { year: "現在", content: "補助金支援・マーケティング支援を中心に、多数の中小企業をサポート" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--navy-900) 0%, var(--navy-700) 100%)",
        }}
        className="text-white py-16 md:py-20"
      >
        <div className="container text-center">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--gold)" }}>
            ABOUT
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">事務所概要・プロフィール</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            中小企業の成長を支援する専門家として
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="section-title">代表プロフィール</h2>
          <div className="section-divider" />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            {/* Profile Photo Placeholder */}
            <div className="flex flex-col items-center">
              <div
                className="w-48 h-48 rounded-full flex items-center justify-center text-6xl mb-4"
                style={{ background: "var(--gray-100)" }}
              >
                👤
              </div>
              <p className="font-bold text-xl" style={{ color: "var(--navy-900)" }}>
                〇〇 〇〇
              </p>
              <p className="text-sm text-gray-500 mt-1">中小企業診断士</p>
            </div>

            {/* Profile Details */}
            <div className="md:col-span-2">
              <div className="space-y-3 mb-6">
                {profile.map((item) => (
                  <div key={item.label} className="flex gap-4 text-sm">
                    <span className="font-semibold w-20 shrink-0" style={{ color: "var(--navy-900)" }}>
                      {item.label}
                    </span>
                    <span className="text-gray-600">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-5 rounded-lg" style={{ background: "var(--gray-50)" }}>
                <h3 className="font-bold mb-3" style={{ color: "var(--navy-900)" }}>
                  ご挨拶
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  「良い商品・技術があるのに、うまく伝えられない」「補助金のことは気になっているが、何から始めればいいかわからない」——
                  そんなお悩みを持つ経営者の方々に寄り添い、具体的な解決策を提供したいという思いから、この事務所を立ち上げました。
                  <br /><br />
                  中小企業診断士として、補助金支援とマーケティング支援という2つの専門領域を掛け合わせ、
                  「資金調達」と「売上向上」の両面から経営課題を解決します。
                  まずはお気軽にご相談ください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career */}
      <section className="py-16" style={{ background: "var(--gray-50)" }}>
        <div className="container max-w-3xl">
          <h2 className="section-title">経歴</h2>
          <div className="section-divider" />
          <div className="mt-8 space-y-4">
            {career.map((item) => (
              <div key={item.year} className="flex gap-6">
                <span
                  className="shrink-0 text-sm font-bold w-20"
                  style={{ color: "var(--navy-700)" }}
                >
                  {item.year}
                </span>
                <p className="text-gray-600 text-sm">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Info */}
      <section id="office" className="py-20">
        <div className="container max-w-3xl">
          <h2 className="section-title">事務所概要</h2>
          <div className="section-divider" />
          <div className="mt-8">
            <table className="w-full text-sm">
              <tbody>
                {officeInfo.map((item) => (
                  <tr key={item.label} className="border-b border-gray-100">
                    <th
                      className="py-4 pr-6 text-left font-semibold w-28 shrink-0"
                      style={{ color: "var(--navy-900)" }}
                    >
                      {item.label}
                    </th>
                    <td className="py-4 text-gray-600">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--navy-900) 0%, var(--navy-700) 100%)",
        }}
        className="py-16 text-white"
      >
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            お気軽にご相談ください
          </h2>
          <p className="text-blue-100 mb-8">
            初回相談は無料です。経営のお悩みを一緒に整理しましょう。
          </p>
          <Link href="/contact" className="btn-primary">
            無料相談を申し込む
          </Link>
        </div>
      </section>
    </>
  );
}
