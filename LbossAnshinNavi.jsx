import { useState } from "react";

export default function LbossAnshinNavi() {
  const [theme, setTheme] = useState("");
  const [blocks, setBlocks] = useState("");
  const [card, setCard] = useState("");

  const cards = [
    "不安", "焦り", "自己否定", "比較", "完璧主義",
    "我慢", "罪悪感", "遠慮", "あきらめ", "怖れ"
  ];

  const drawCard = () => {
    const random = cards[Math.floor(Math.random() * cards.length)];
    setCard(random);
  };

  const promptText = `
あなたは、私の安心できる相棒としてやさしく寄り添ってください。

これは占いや断定ではなく、
今の私の中にある「でも」「どうせ」「無理かも」という思い込みを
やさしく整理するための対話です。

ラスボスは敵ではなく、
私を守るために生まれた反応や思い込みです。

【テーマ】
${theme}

【出てきた思い込み・ブレーキ】
${blocks}

【引いたラスボスカード】
${card}

この内容をもとに、

1. 今の私に起きていること
2. このラスボスが守ろうとしていたもの
3. 本当はどうしたかったのか
4. 今の私に合うやさしい見方
5. 安心して進むための小さな一歩
6. 最後にやさしいひとこと

この順番で、
否定せず、決めつけず、安心できる言葉でまとめてください。
無理にポジティブ変換せず、
今の私が受け取れる形でお願いします。
`;

  const copyPrompt = () => {
    navigator.clipboard.writeText(promptText);
    alert("プロンプトをコピーしたよ🐶💕");
  };

  return (
    <div className="min-h-screen bg-pink-50 p-6 text-center">
      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-pink-600 mb-3">
          ラスボス安心ナビ
        </h1>

        <p className="text-sm text-gray-600 mb-6">
          「でも」「どうせ」「無理かも」の奥にある気持ちを、
          やさしく見つけて安心に戻るナビです。
        </p>

        <div className="text-left mb-4">
          <label className="block font-bold mb-2">
            叶えたいこと・テーマ
          </label>
          <input
            className="w-full border rounded-xl p-3"
            placeholder="例：私は100万円受け取りたい"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          />
        </div>

        <div className="text-left mb-4">
          <label className="block font-bold mb-2">
            出てきた「でも」「どうせ」
          </label>
          <textarea
            className="w-full border rounded-xl p-3 h-32"
            placeholder="例：でも働けない。どうせ私には無理。そんな商品がない。"
            value={blocks}
            onChange={(e) => setBlocks(e.target.value)}
          />
        </div>

        <button
          onClick={drawCard}
          className="bg-purple-500 text-white rounded-full px-6 py-3 mb-4"
        >
          ラスボスカードを引く
        </button>

        {card && (
          <div className="bg-purple-50 rounded-2xl p-4 mb-4">
            <p className="text-sm text-gray-600">今回のラスボス</p>
            <p className="text-xl font-bold text-purple-600">{card}</p>
          </div>
        )}

        <button
          onClick={copyPrompt}
          disabled={!theme || !blocks || !card}
          className="bg-pink-500 text-white rounded-full px-6 py-3 disabled:opacity-40"
        >
          AIに送る文章をコピー
        </button>

        <p className="text-xs text-gray-500 mt-5">
          AIの答えは絶対ではなく、今の自分をやさしく整理するためのヒントです。
        </p>
      </div>
    </div>
  );
}
