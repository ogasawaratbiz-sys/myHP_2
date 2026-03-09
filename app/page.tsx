import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "〇〇経営コンサルティング事務所 | 中小企業診断士",
  description:
    "中小企業診断士による補助金申請支援・マーケティング支援の専門事務所。補助金採択率向上・売上アップを全力サポートします。まずは無料相談から。",
};

const services = [
  {
    icon: "📋",
    title: "補助金支援",
    description:
      "ものづくり補助金・IT導入補助金・小規模事業者持続化補助金など、御社に最適な補助金を選定。採択率を高める事業計画書の作成から申請手続きまで一貫してサポートします。",
    href: "/services/subsidy",
    cta: "詳しく見る",
  },
  {
    icon: "📈",
    title: "マーケティング支援",
    description:
      "市場分析・競合調査から顧客戦略の立案まで。デジタルマーケティング・SNS活用・Webサイト改善など、現代のビジネス環境に対応した実践的なマーケティング戦略を提案します。",
    href: "/services/marketing",
    cta: "詳しく見る",
  },
];

const reasons = [
  {
    icon: "🏆",
    title: "補助金採択の実績",
    description:
      "多数の補助金申請を支援し、高い採択率を実現。豊富な申請ノウハウを活かした質の高い事業計画書を作成します。",
  },
  {
    icon: "🤝",
    title: "二人三脚の伴走支援",
    description:
      "申請だけで終わらず、採択後の実施・報告まで継続的にサポート。事業の成功まで一緒に取り組みます。",
  },
  {
    icon: "💡",
    title: "補助金×マーケティングの相乗効果",
    description:
      "補助金を活用したマーケティング投資の設計が得意領域。資金調達と成長戦略を同時に実現します。",
  },
  {
    icon: "📞",
    title: "迅速・丁寧な対応",
    description:
      "中小企業経営者の忙しさを理解し、迅速かつ分かりやすいコミュニケーションを心がけています。",
  },
];

const faqs = [
  {
    q: "初めての補助金申請でも相談できますか？",
    a: "もちろんです。補助金を初めて申請される方でも丁寧にご説明します。まずは無料相談でお気軽にご連絡ください。",
  },
  {
    q: "費用はいくらかかりますか？",
    a: "初回相談は無料です。その後のご支援費用は業務内容によって異なりますので、まずはご相談の上でお見積りをご提案します。",
  },
  {
    q: "どのエリアに対応していますか？",
    a: "オンライン相談に対応しているため、全国どこからでもご支援が可能です。",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--navy-900) 0%, var(--navy-700) 100%)",
        }}
        className="text-white py-24 md:py-32"
      >
        <div className="container text-center">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--gold)" }}
          >
            中小企業診断士 個人事務所
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            あなたのビジネスの可能性を
            <br className="hidden md:block" />
            最大限に引き出します
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            補助金支援とマーケティング支援を通じて、
            <br className="hidden md:block" />
            中小企業の成長を全力でサポートする専門家です。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              無料相談はこちら
            </Link>
            <Link href="/services/subsidy" className="btn-outline">
              サービスを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <h2 className="section-title">サービス</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            経営の課題に合わせた2つの専門サービスをご用意しています
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl shadow-sm p-8 flex flex-col hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "var(--navy-900)" }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-1">{service.description}</p>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-1 font-semibold transition-colors"
                  style={{ color: "var(--navy-700)" }}
                >
                  {service.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="section-title">選ばれる理由</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            多くの中小企業経営者から信頼いただいている理由をご紹介します
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason) => (
              <div key={reason.title} className="text-center p-6">
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3
                  className="font-bold text-lg mb-3"
                  style={{ color: "var(--navy-900)" }}
                >
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--navy-900) 0%, var(--navy-700) 100%)",
        }}
        className="py-16 text-white"
      >
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            まずは無料相談からお気軽にどうぞ
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            補助金のこと、マーケティングのこと、
            <br className="hidden md:block" />
            経営全般のご相談をお受けしています。
          </p>
          <Link href="/contact" className="btn-primary">
            無料相談を申し込む
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20" style={{ background: "var(--gray-50)" }}>
        <div className="container max-w-3xl">
          <h2 className="section-title">よくあるご質問</h2>
          <div className="section-divider" />
          <div className="space-y-4 mt-10">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-bold mb-2" style={{ color: "var(--navy-900)" }}>
                  Q. {faq.q}
                </h3>
                <p className="text-gray-600 text-sm">A. {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
