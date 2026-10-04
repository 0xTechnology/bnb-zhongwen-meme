const lines = [
  "中文人生启动",
  "建设模块加载",
  "连接币安叙事",
  "中文meme 注入",
  "BNB 共识确认",
  "一切都是为了 BNB"
];
const log = document.getElementById("log");
const fill = document.getElementById("fill");
const pct = document.getElementById("pct");

document.getElementById("build").addEventListener("click", async () => {
  fill.style.width = "0%";
  pct.textContent = "0%";
  for (let i = 0; i < lines.length; i++) {
    log.textContent = lines[i];
    const n = Math.round(((i + 1) / lines.length) * 100);
    fill.style.width = n + "%";
    pct.textContent = n + "%";
    await new Promise((r) => setTimeout(r, 450));
  }
  log.textContent = "建设完成 · 100% · 一切都是为了 BNB";
});
