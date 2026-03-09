import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "補助金支援サービス",
  description:
    "ものづくり補助金・IT導入補助金・小規模事業者持続化補助金など、御社に最適な補助金の選定から申請書類作成・採択後フォローまで一貫支援します。",
};

const subsidies = [
  {
    name: "ものづくり補助金",
    amount: "最大1,250万円",
    description: "革新的な製品・サービス開発や生産プロセス改善のための設備投資を支援",
    tag: "製造業・サービス業",
  },
  {
    name: "IT導入補助金",
    amount: "最大450万円",
    description: "業務効率化・売上向上のためのITツール・システム導入を支援",
    tag: "全業種",
  },
  {
    name: "小規模事業者持続化補助金",
    amount: "最大200万円",
    description: "販路開拓や業務効率化のための取り組みを支援。小規模事業者向け",
    tag: "小規模事業者",
  },
  {
    name: "事業再構築補助金",
    amount: "最大7,000万円",
    description: "新分野展開・業態転換・事業転換・業種転換などを支援",
    tag: "中小企業・中堅企業",
  },
];

const flow = [
  {
    step: "01",
    title: "無料相談・ヒアリング",
    description: "現在の事業内容・課題・投資計画をヒアリングし、活用できる補助金を診断します。",
  },
  {
    step: "02",
    title: "補助金の選定・スケジュール確認",
    description: "御社に最適な補助金を選定し、公募スケジュールと準備期間を確認します。",
  },
  {
    step: "03",
    title: "事業計画書の作成支援",
    description: "採択率を高めるための事業計画書を一緒に作成します。審査員の視点を意識した内容に仕上げます。",
  },
  {
    step: "04",
    title: "申請手続きのサポート",
    description: "電子申請システムへの入力・提出書類の確認まで、申請手続きをフルサポートします。",
  },
  {
    step: "05",
    title: "採択後の実施・報告支援",
    description: "採択後の実施報告・実績報告書の作成支援も対応。補助金受領まで伴走します。",
  },
];

export default function SubsidyPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">補助金支援</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            御社に最適な補助金を見つけ、採択まで一貫サポート
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <h2 className="section-title">補助金支援とは</h2>
          <div className="section-divider" />
          <p className="text-gray-600 leading-relaxed mt-8 text-center">
            補助金は、設備投資・ITシステム導入・新事業展開など、
            経営課題を解決するための強力な資金調達手段です。
            しかし申請書類の作成や要件の理解が複雑で、
            自社だけでは難しいと感じる経営者も多くいます。
            <br /><br />
            中小企業診断士として豊富な申請支援の実績を持つ私が、
            最適な補助金の選定から採択後の報告まで、
            すべての工程をサポートします。
          </p>
        </div>
      </section>

      {/* Subsidy List */}
      <section className="py-16" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <h2 className="section-title">対応している主な補助金</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            ※補助金の詳細・公募状況は定期的に変わります。最新情報はご相談ください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subsidies.map((subsidy) => (
              <div
                key={subsidy.name}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg" style={{ color: "var(--navy-900)" }}>
                    {subsidy.name}
                  </h3>
                  <span
                    className="text-xs font-semibold px-2 py-1 rounded-full ml-2 shrink-0"
                    style={{ background: "#e8f0fe", color: "var(--navy-700)" }}
                  >
                    {subsidy.tag}
                  </span>
                </div>
                <p
                  className="text-xl font-bold mb-3"
                  style={{ color: "var(--gold)" }}
                >
                  {subsidy.amount}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">{subsidy.description}</p>
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
          <p className="section-subtitle">初回相談から採択・受領まで一貫サポート</p>
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
            補助金申請、まずはご相談ください
          </h2>
          <p className="text-blue-100 mb-8">
            活用できる補助金があるか、無料で診断します。
          </p>
          <Link href="/contact" className="btn-primary">
            無料相談を申し込む
          </Link>
        </div>
      </section>
    </>
  );
}
