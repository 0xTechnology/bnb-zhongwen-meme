const lines = [
  "中文人生启动",
  "建设模块加载",
  "连接币安叙事",
  "中文meme 注入",
  "BNB 共识确认",
  "一切都是为了 BNB"
];
const log = document.getElementById("log");
document.getElementById("build").addEventListener("click", async () => {
  for (const line of lines) {
    log.textContent = line;
    await new Promise((r) => setTimeout(r, 450));
  }
  log.textContent = "建设完成 · 一切都是为了 BNB";
});
