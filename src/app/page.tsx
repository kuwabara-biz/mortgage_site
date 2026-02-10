'use client';

import { Phone, MessageCircle, Clock, FileCheck, Key, BadgeCheck, Home as HomeIcon, Coins, TrendingUp, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center gap-2">
              <HomeIcon className="w-7 h-7 sm:w-8 sm:h-8 text-teal-600" />
              <span className="text-lg sm:text-xl font-bold text-teal-800">実家じまいサポート</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <a href="tel:0120-xxx-xxx" className="hidden sm:flex items-center gap-2 text-teal-700 font-semibold text-base sm:text-lg">
                <Phone className="w-5 h-5" />
                <span>0120-XXX-XXX</span>
              </a>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm sm:text-base">
                無料査定
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-white to-orange-50 py-12 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                <span className="text-teal-700">遠方の実家、</span><br />
                片付けに行かなくて<br />
                <span className="text-orange-500">大丈夫です。</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-6 sm:mb-8 font-medium leading-relaxed">
                鍵を送るだけで、<br className="sm:hidden" />遺品整理から売却まで<br />
                <span className="text-teal-600 font-bold">完全現金化。</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-full text-lg sm:text-xl transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2">
                  <MessageCircle className="w-6 h-6" />
                  LINEで概算査定
                </button>
                <button className="bg-white border-2 border-teal-600 text-teal-700 hover:bg-teal-50 font-bold py-4 px-8 rounded-full text-lg sm:text-xl transition-all flex items-center justify-center gap-2">
                  <Phone className="w-6 h-6" />
                  電話で相談
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/hero-house.png"
                alt="清潔な家"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg font-bold text-sm sm:text-base">
                ✓ 写真を送るだけ
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-4">
            こんなお悩み、<span className="text-teal-600">ありませんか？</span>
          </h2>
          <p className="text-center text-gray-600 mb-10 sm:mb-12 text-base sm:text-lg">
            実家の片付けは、想像以上に大変です
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-orange-400">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto sm:mx-0">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 text-center sm:text-left">週末が潰れる</h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center sm:text-left">
                往復の移動と片付けで、毎週末がなくなってしまう…
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-teal-400">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto sm:mx-0">
                <FileCheck className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 text-center sm:text-left">業者選びが面倒</h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center sm:text-left">
                整理業者、不動産業者…何社も比較・契約するのが大変
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-orange-400 sm:col-span-2 lg:col-span-1">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto sm:mx-0">
                <Coins className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 text-center sm:text-left">費用持ち出しが不安</h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center sm:text-left">
                整理費用だけで数十万…結局赤字になるのでは？
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            だから、選ばれています
          </h2>
          <p className="text-center text-teal-100 mb-10 sm:mb-12 text-base sm:text-lg">
            当社なら、すべての不安を解消します
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all border border-white/20">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto sm:mx-0">
                <Coins className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-center sm:text-left">持ち出し0円</h3>
              <p className="text-teal-50 text-base sm:text-lg leading-relaxed text-center sm:text-left">
                整理費用は買取額と相殺。<br />
                <span className="font-bold text-orange-300">現金が手元に残ります。</span>
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all border border-white/20">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto sm:mx-0">
                <Key className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-center sm:text-left">残置物そのままOK</h3>
              <p className="text-teal-50 text-base sm:text-lg leading-relaxed text-center sm:text-left">
                家具・家電・荷物は全て当社で処分。<br />
                <span className="font-bold text-orange-300">鍵を送るだけで完結。</span>
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all border border-white/20 sm:col-span-2 lg:col-span-1">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto sm:mx-0">
                <BadgeCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-center sm:text-left">契約不適合責任免責</h3>
              <p className="text-teal-50 text-base sm:text-lg leading-relaxed text-center sm:text-left">
                売却後のトラブル一切なし。<br />
                <span className="font-bold text-orange-300">安心してお任せください。</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flow Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-4">
            <span className="text-teal-600">たった3ステップ</span>で完結
          </h2>
          <p className="text-center text-gray-600 mb-10 sm:mb-16 text-base sm:text-lg">
            面倒な手続きは一切なし
          </p>
          <div className="relative">
            {/* Connection line for desktop */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-teal-300 via-teal-500 to-orange-400" style={{ width: '85%', marginLeft: '7.5%' }}></div>

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative">
              {/* Step 1 */}
              <div className="text-center relative">
                <div className="bg-gradient-to-br from-teal-500 to-teal-700 text-white w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl text-3xl sm:text-4xl font-bold relative z-10">
                  1
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">お問い合わせ</h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
                  LINEまたはお電話で<br />
                  物件情報をお知らせください
                </p>
                <div className="bg-teal-50 rounded-xl p-4 inline-block">
                  <MessageCircle className="w-10 h-10 sm:w-12 sm:h-12 text-teal-600 mx-auto" />
                </div>
              </div>

              {/* Step 2 */}
              <div className="text-center relative">
                <div className="bg-gradient-to-br from-teal-500 to-teal-700 text-white w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl text-3xl sm:text-4xl font-bold relative z-10">
                  2
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">鍵郵送・査定</h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
                  鍵を郵送いただければ<br />
                  現地確認・査定を実施
                </p>
                <div className="bg-orange-50 rounded-xl p-4 inline-block">
                  <Key className="w-10 h-10 sm:w-12 sm:h-12 text-orange-600 mx-auto" />
                </div>
              </div>

              {/* Step 3 */}
              <div className="text-center relative">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl text-3xl sm:text-4xl font-bold relative z-10">
                  3
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">入金・完了</h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
                  契約後、速やかにご入金<br />
                  手続き完了です
                </p>
                <div className="bg-orange-50 rounded-xl p-4 inline-block">
                  <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-orange-600 mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-4">
            実際の<span className="text-teal-600">買取事例</span>
          </h2>
          <p className="text-center text-gray-600 mb-10 sm:mb-12 text-base sm:text-lg">
            多くのお客様にご満足いただいています
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Case 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <img
                src="/case-1.png"
                alt="前橋市の事例"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-teal-700 mb-3">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold text-sm sm:text-base">群馬県前橋市</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">築40年・木造戸建</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  遺品整理込み<br />
                  残置物多数あり
                </p>
                <div className="bg-orange-100 rounded-lg p-4">
                  <p className="text-gray-700 text-sm font-medium mb-1">手残り金額</p>
                  <p className="text-3xl sm:text-4xl font-extrabold text-orange-600">120万円</p>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <img
                src="/case-2.png"
                alt="熊谷市の事例"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-teal-700 mb-3">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold text-sm sm:text-base">埼玉県熊谷市</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">築35年・2階建</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  家財道具そのまま<br />
                  庭木の処理も対応
                </p>
                <div className="bg-teal-100 rounded-lg p-4">
                  <p className="text-gray-700 text-sm font-medium mb-1">手残り金額</p>
                  <p className="text-3xl sm:text-4xl font-extrabold text-teal-700">180万円</p>
                </div>
              </div>
            </div>

            {/* Case 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 sm:col-span-2 lg:col-span-1">
              <img
                src="/case-3.png"
                alt="柏市の事例"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-teal-700 mb-3">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold text-sm sm:text-base">千葉県柏市</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">築30年・平屋</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  すぐに現金化希望<br />
                  最短2週間で完了
                </p>
                <div className="bg-orange-100 rounded-lg p-4">
                  <p className="text-gray-700 text-sm font-medium mb-1">手残り金額</p>
                  <p className="text-3xl sm:text-4xl font-extrabold text-orange-600">95万円</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-teal-800 to-teal-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-4">
            まずは無料査定から
          </h2>
          <p className="text-center text-teal-100 mb-10 sm:mb-12 text-base sm:text-lg">
            物件の住所を入力するだけで、概算金額をお知らせします
          </p>
          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-2xl">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-bold mb-2 text-base sm:text-lg">
                  物件の住所 <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="例: 群馬県前橋市〇〇町1-2-3"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-300 rounded-xl focus:border-teal-500 focus:outline-none text-base sm:text-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2 text-base sm:text-lg">
                  お名前
                </label>
                <input
                  type="text"
                  placeholder="山田 太郎"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-300 rounded-xl focus:border-teal-500 focus:outline-none text-base sm:text-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2 text-base sm:text-lg">
                  お電話番号
                </label>
                <input
                  type="tel"
                  placeholder="090-1234-5678"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-300 rounded-xl focus:border-teal-500 focus:outline-none text-base sm:text-lg"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 sm:py-5 px-8 rounded-xl text-lg sm:text-xl transition-all transform hover:scale-105 shadow-xl"
              >
                無料で査定依頼する
              </button>
              <p className="text-center text-gray-500 text-xs sm:text-sm">
                お問い合わせ後、1営業日以内にご連絡いたします
              </p>
            </form>
          </div>

          {/* Quick Contact Options */}
          <div className="mt-10 sm:mt-12 grid sm:grid-cols-2 gap-4 sm:gap-6">
            <a href="tel:0120-xxx-xxx" className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 font-bold py-4 sm:py-5 px-6 sm:px-8 rounded-xl transition-all flex items-center justify-center gap-3 text-base sm:text-lg">
              <Phone className="w-6 h-6" />
              0120-XXX-XXX
            </a>
            <button className="bg-[#06C755] hover:bg-[#05b04d] text-white font-bold py-4 sm:py-5 px-6 sm:px-8 rounded-xl transition-all flex items-center justify-center gap-3 text-base sm:text-lg">
              <MessageCircle className="w-6 h-6" />
              LINEで相談
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HomeIcon className="w-6 h-6 sm:w-8 sm:h-8 text-teal-400" />
            <span className="text-lg sm:text-xl font-bold text-white">実家じまいサポート</span>
          </div>
          <p className="text-sm sm:text-base mb-4">
            北関東エリア（群馬・埼玉・千葉・栃木）専門<br className="sm:hidden" />の不動産買取サービス
          </p>
          <p className="text-xs sm:text-sm text-gray-500">
            © 2024 実家じまいサポート. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
