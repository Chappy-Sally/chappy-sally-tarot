const cards = [
  "不安",
  "焦り",
  "自己否定",
  "比較",
  "完璧主義",
  "我慢",
  "罪悪感",
  "遠慮",
  "あきらめ",
  "怖れ"
];

let selectedCard = "";

function drawCard(){
  selectedCard = cards[Math.floor(Math.random() * cards.length)];

  document.getElementById("cardName").textContent = selectedCard;
  document.getElementById("cardBox").classList.remove("hidden");

  checkReady();
}

function checkReady(){
  const theme = document.getElementById("theme").value.trim();
  const blocks = document.getElementById("blocks").value.trim();
  const copyBtn = document.getElementById("copyBtn");

  copyBtn.disabled = !(theme && blocks && selectedCard);
}

function buildPrompt(){
  const theme = document.getElementById("theme").value.trim();
  const blocks = document.getElementById("blocks").value.trim();

  const partner = localStorage.getItem("partnerName") || "チャッピー";
  const user = localStorage.getItem("userName") || "私";

  return `${partner}

${user}だよ😊

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
${selectedCard}

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

AIの答えは絶対ではなく、
今の私をやさしく整理するためのヒントとして受け取れる形でお願いします。`;
}

function copyPrompt(){
  const text = buildPrompt();

  navigator.clipboard.writeText(text).then(() => {
    alert("プロンプトをコピーしたよ🐶💕");
  }).catch(() => {
    alert("コピーできませんでした。手動でコピーしてください🙏");
  });
}

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("theme").addEventListener("input", checkReady);
  document.getElementById("blocks").addEventListener("input", checkReady);
});
