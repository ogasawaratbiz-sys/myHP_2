"use client";

import { useState } from "react";

const serviceOptions = [
  "補助金支援について",
  "マーケティング支援について",
  "その他のご相談",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    // TODO: メール送信APIへの接続（Resend等）
    // 現時点では送信完了画面を表示するデモ動作
    try {
      // const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) });
      setSubmitted(true);
    } catch {
      setError("送信に失敗しました。お手数ですが、直接メールにてご連絡ください。");
    }
  };

  if (submitted) {
    return (
      <section className="py-32 text-center">
        <div className="container max-w-xl">
          <div className="text-6xl mb-6">✅</div>
          <h1 className="text-2xl font-bold mb-4" style={{ color: "var(--navy-900)" }}>
            お問い合わせを受け付けました
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            お送りいただきありがとうございます。
            <br />
            通常2営業日以内にご連絡いたします。
            <br />
            しばらくお待ちください。
          </p>
          <a href="/" className="btn-primary">
            トップページに戻る
          </a>
        </div>
      </section>
    );
  }

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
            CONTACT
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">お問い合わせ</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            初回相談は無料。お気軽にご連絡ください。
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-2xl">
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-10">
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              下記のフォームに必要事項をご入力のうえ、送信してください。
              通常2営業日以内にご返信いたします。
              <br />
              <span className="text-red-500">*</span> は必須項目です。
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-1" style={{ color: "var(--navy-900)" }}>
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="山田 太郎"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1" style={{ color: "var(--navy-900)" }}>
                  会社名・屋号
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="〇〇株式会社"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1" style={{ color: "var(--navy-900)" }}>
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@example.com"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1" style={{ color: "var(--navy-900)" }}>
                  電話番号
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="0X0-XXXX-XXXX"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1" style={{ color: "var(--navy-900)" }}>
                  ご相談内容 <span className="text-red-500">*</span>
                </label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors bg-white"
                >
                  <option value="">選択してください</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1" style={{ color: "var(--navy-900)" }}>
                  詳細・ご質問 <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="ご相談の内容を具体的にご記入ください。"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-400 transition-colors resize-none"
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}

              <button type="submit" className="btn-primary w-full text-center">
                送信する
              </button>
            </form>
          </div>

          {/* Direct contact info */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              お急ぎの場合はお電話でもお受けしています。
              <br />
              <span className="font-semibold" style={{ color: "var(--navy-900)" }}>
                0X0-XXXX-XXXX
              </span>
              　（平日 9:00〜18:00）
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
