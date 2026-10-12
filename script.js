(() => {
  const CREDIT = "Made with ♥ by Akash_Ak.07";
  const WEBSITE = "https://surjitkaurrai321-web.github.io/Akash/";
  const TELEGRAM = "https://t.me/YouTube_Saler_Ak";

  function replaceCredit() {
    document.querySelectorAll("body *").forEach(el => {
      if (el.children.length === 0 &&
          /leeapk\.com/i.test(el.textContent)) {
        el.textContent = "";

        const a = document.createElement("a");
        a.textContent = CREDIT;
        a.href = WEBSITE;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        el.appendChild(a);

        const t = document.createElement("a");
        t.textContent = " | Telegram";
        t.href = TELEGRAM;
        t.target = "_blank";
        t.rel = "noopener noreferrer";
        el.appendChild(t);
      }
    });
  }

  if (document.body) replaceCredit();
  new MutationObserver(replaceCredit).observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
