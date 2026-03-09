import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "マーケティング支援サービス",
  description:
    "市場分析・競合調査から顧客獲得戦略まで。デジタルマーケティング・SNS活用・Webサイト改善など、中小企業の売上向上を実践的にサポートします。",
};

const menuItems = [
  {
    icon: "🔍",
    title: "市場・競合分析",
    description:
      "自社を取り巻く市場環境・競合他社を徹底分析。データに基づく客観的な現状把握から戦略立案を支援します。",
  },
  {
    icon: "👥",
    title: "顧客戦略・ペルソナ設計",
    description:
      "ターゲット顧客を明確化し、刺さるメッセージ・チャネルを特定。「誰に・何を・どうやって」を設計します。",
  },
  {
    icon: "🌐",
    title: "デジタルマーケティング",
    description:
      "SEO・リスティング広告・SNS広告など、費用対効果の高いデジタル施策を提案・実行支援します。",
  },
  {
    icon: "📱",
    title: "SNS・コンテンツ戦略",
    description:
      "Instagram・X（Twitter）・LINE公式など、御社に合ったSNSを活用した顧客接点づくりを支援します。",
  },
  {
    icon: "💻",
    title: "Webサイト改善（CRO）",
    description:
      "既存Webサイトのアクセス解析・UX改善を通じて、問い合わせ・購入の転換率を向上させます。",
  },
  {
    icon: "📊",
    title: "売上向上・販路拡大",
    description:
      "新規顧客獲得・既存顧客のリピート促進・新販路開拓まで、売上向上につながる具体的な施策を提案します。",
  },
];

const flow = [
  {
    step: "01",
    title: "無料相談・現状ヒアリング",
    description: "現在の売上状況・課題・目標をヒアリングし、最適なアプローチを検討します。",
  },
  {
    step: "02",
    title: "現状分析・課題の特定",
    description: "市場・競合・自社の3C分析、既存マーケティング施策の評価を行います。",
  },
  {
    step: "03",
    title: "戦略立案・施策の提案",
    description: "分析結果を踏まえ、優先度の高い施策から実行ロードマップを作成します。",
  },
  {
    step: "04",
    title: "施策の実行・伴走支援",
    description: "施策の実行を支援し、PDCAサイクルを回しながら継続的に改善します。",
  },
];

export default function MarketingPage() {
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
            SERVICE
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">マーケティング支援</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            データと戦略で、売上アップを実現する実践的支援
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <h2 className="section-title">マーケティング支援とは</h2>
          <div className="section-divider" />
          <p className="text-gray-600 leading-relaxed mt-8 text-center">
            「良い商品・サービスがあるのに売れない」「集客方法がわからない」
            「広告を出してみたが効果が感じられない」——
            そんな悩みを抱える中小企業経営者は多くいます。
            <br /><br />
            中小企業診断士の視点から市場・顧客・競合を分析し、
            限られた予算で最大の効果を出すマーケティング戦略を
            一緒に設計・実行します。
            「やってみたけどうまくいかなかった」にならないよう、
            実践的な伴走支援を行います。
          </p>
        </div>
      </section>

      {/* Service Menu */}
      <section className="py-16" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <h2 className="section-title">支援メニュー</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            御社の状況に合わせて、必要な支援を組み合わせてご提供します
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--navy-900)" }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Flow */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <h2 className="section-title">支援の流れ</h2>
          <div className="section-divider" />
          <p className="section-subtitle">現状把握から実行・改善まで伴走します</p>
          <div className="space-y-6 mt-4">
            {flow.map((item) => (
              <div key={item.step} className="flex gap-6">
                <div
                  className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-sm"
                  style={{ background: "var(--navy-900)" }}
                >
                  {item.step}
                </div>
                <div className="pt-2">
                  <h3 className="font-bold text-lg mb-1" style={{ color: "var(--navy-900)" }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
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
            マーケティングの悩み、まずはご相談ください
          </h2>
          <p className="text-blue-100 mb-8">
            初回相談は無料。現状の課題を一緒に整理します。
          </p>
          <Link href="/contact" className="btn-primary">
            無料相談を申し込む
          </Link>
        </div>
      </section>
    </>
  );
}
