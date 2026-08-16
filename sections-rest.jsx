/* ============================================================
   sections-rest.jsx — Services · Work · Process · Team · Contact · Footer
   ============================================================ */

/* ---- Services (4 pillars, click to open detail table) ---- */
const SERVICES = [
{
  zh: "電商代操", en: "eCommerce",
  desc: "社群行銷內容、商品檔期行銷 & 推廣策略、數據分析與成效追蹤…",
  type: "compare",
  columns: ["廣告操作 + KOL", "企劃素材製作", "企劃 + 廣告操作 + KOL 專案", "再登場專案"],
  rows: [
  ["專案管理及策略發想", [1, 1, 1, 1]],
  ["前測問卷企劃執行", [0, 1, 1, 0]],
  ["嘖嘖頁面企劃執行", [0, 1, 1, 1]],
  ["社群企劃執行", [1, 0, 1, 1]],
  ["KOL 媒合推廣及接洽", [1, 1, 1, 1]],
  ["其他項目（電子報/LINE@）", [0, 1, 1, 1]],
  ["Meta 廣告投放（FB+IG）", [1, 0, 1, 1]]]

},
{
  zh: "廣告投放", en: "Advertising",
  desc: "Meta & Google 廣告投放、GA4 數據分析與優化、數據導向品牌行銷企劃、港澳市場廣告策略…",
  type: "compare",
  columns: ["純廣告代操", "廣告代操 + 數據分析", "廣告代操 + 數據分析 + 社群代操"],
  rows: [
  ["月度需求確認及專案溝通", [true, true, true]],
  ["單月 Meta 廣告投放（FB+IG）", [true, true, true]],
  ["單月 KOL 廣告投放", ["另計", "另計", "另計"]],
  ["月度成效報表", [false, "V 另計單週/雙週分析需求", "V 另計單週/雙週分析需求"]],
  ["月度社群規劃", [false, false, true]],
  ["月度貼文素材", [false, false, "V 單月至多 6 篇圖文"]],
  ["方案費", ["$7,200 起", "$9,200 起", "$18,200 起"]]],

  footnote: "* 如有 Google Ads 投放需求，歡迎洽詢了解"
},
{
  zh: "平面設計", en: "Graphic Design",
  desc: "品牌策略、LOGO、品牌識別、活動與宣傳視覺、印刷物、產品包裝、商業插畫…",
  type: "sections",
  sections: [
  {
    title: "品牌識別", type: "compare",
    columns: ["輕量版", "標準版", "精緻版"],
    rows: [
    ["適合對象", ["個人工作室、微型品牌、網拍賣家、小攤商", "中小企業、新創公司", "中大型企業、國際化品牌"]],
    ["LOGO 設計", ["提案 2~3 款草圖", "提案 3~5 款草圖", "提案 5~8 款草圖"]],
    ["標準色", ["基本色彩規範", "標準色彩規範", "全方位色彩規範"]],
    ["組合規範", ["1 組", "2 組", "3-5 組"]],
    ["品牌字型", [false, "基本版", "完整版"]],
    ["名片設計", ["單面單款", "雙面單款", "雙面 + 特殊加工規劃"]],
    ["基本應用模擬", ["1 款", "3 款", "8~10 款"]],
    ["修改次數", ["2 次小幅修改", "3 次小幅修改", "5 次小幅修改"]],
    ["輔助圖形", [false, "2~3 款", "5 款以上"]],
    ["品牌 VI 手冊", [false, "精簡版", "完整版"]],
    ["延伸應用", [false, "2 款", "4 款 + 社群模板 + 簡報模板"]],
    ["方案費", ["18,000 起", "50,000 起", "100,000 起"]],
    ["預估走期", ["10-18 工作天（不含客戶確認時間）", "20-30 工作天（不含客戶確認時間）", "45-60 工作天（不含客戶確認時間）"]]]

  },
  {
    title: "平面設計", type: "pricelist",
    groups: [
    { cat: "包裝設計", items: [["產品包裝（單品）", "12,000 起"], ["禮盒 / 組合包裝", "25,000 起"], ["標籤 / 貼紙系列", "3,000 起"]] },
    { cat: "印刷物", items: [["海報 / DM / 折頁", "3,000 起"], ["型錄 / 手冊", "1,200 / 頁 起"]] }]

  },
  {
    title: "活動視覺規劃", type: "compare",
    columns: ["標準版", "經典版"],
    rows: [
    ["適合對象", ["小型講座、店舖開幕、市集擺攤", "發表會、婚禮、尾牙、大型活動"]],
    ["提案內容", ["1 方向 + 2 布局", "2 方向 + 各 2 布局"]],
    ["海報", ["A3 x1", "A2 + A3 各 1"]],
    ["社群宣傳", ["2 張", "6 張"]],
    ["現場指示牌", ["2", "4-6"]],
    ["視覺展板", [false, "3 項 依需求（ex. 背板、展架、舞台背景、拍照打卡板、橫幅/布條）"]],
    ["周邊小物", [false, "3 項 依需求（ex. 邀請卡、工作識別證、門票…）"]],
    ["修改次數", ["2 次小幅修改", "3 次小幅修改"]],
    ["方案價", ["8,000 起", "28,000 起"]]]

  }]

},
{
  zh: "群眾集資", en: "Crowdfunding",
  desc: "提案輔導、全案規畫、執行代操、頁面設計、平台上架、行銷推廣、數據追蹤…",
  type: "compare",
  columns: ["廣告操作 + KOL", "企劃素材製作", "企劃 + 廣告操作 + KOL 專案", "再登場專案"],
  rows: [
  ["專案管理及策略發想", [1, 1, 1, 1]],
  ["前測問卷企劃執行", [0, 1, 1, 0]],
  ["嘖嘖頁面企劃執行", [0, 1, 1, 1]],
  ["社群企劃執行", [1, 0, 1, 1]],
  ["KOL 媒合推廣及接洽", [1, 1, 1, 1]],
  ["其他項目（電子報/LINE@）", [0, 1, 1, 1]],
  ["Meta 廣告投放（FB+IG）", [1, 0, 1, 1]]]

}];


function CompareTable({ columns, rows }) {
  return (
    <div className="cmp-table-wrap">
      <table className="cmp-table">
        <thead>
          <tr>
            <th>項目</th>
            {columns.map((c) => <th key={c}>{c}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) =>
          <tr key={r[0]}>
              <td className="cmp-label">{r[0]}</td>
              {r[1].map((v, i) =>
            v === true || v === 1 ?
            <td key={i} className="cmp-yes">V</td> :
            v === false || v === 0 ?
            <td key={i} className="cmp-no">X</td> :

            <td key={i} className="cmp-note">{v}</td>
            )}
            </tr>
          )}
        </tbody>
      </table>
    </div>);

}

function PriceListTable({ groups }) {
  return (
    <div className="cmp-table-wrap">
      <table className="cmp-table pl-table">
        <thead>
          <tr><th>類別</th><th>項目</th><th>常見計價</th></tr>
        </thead>
        <tbody>
          {groups.map((g) =>
          g.items.map((it, i) =>
          <tr key={g.cat + it[0]}>
              {i === 0 && <td className="cmp-label" rowSpan={g.items.length}>{g.cat}</td>}
              <td className="cmp-note">{it[0]}</td>
              <td className="cmp-note">{it[1]}</td>
            </tr>
          )
          )}
        </tbody>
      </table>
    </div>);

}

function ServiceModal({ svc, onClose }) {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const tid = setTimeout(() => setVisible(true), 10);
    document.body.style.overflow = "hidden";
    return () => { clearTimeout(tid); document.body.style.overflow = ""; };
  }, []);
  React.useEffect(() => {
    const fn = (e) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);
  const handleClose = () => { setVisible(false); setTimeout(onClose, 300); };

  return (
    <div className={"svc-modal-overlay" + (visible ? " open" : "")}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}>
      <div className="svc-modal-panel">
        <div className="svc-modal-top">
          <div>
            <span className="svc-modal-zh">{svc.zh}</span>
            <span className="svc-modal-en">{svc.en}</span>
          </div>
          <button className="lb-close-btn" onClick={handleClose} aria-label="關閉">✕</button>
        </div>
        <p className="svc-modal-desc">{svc.desc}</p>
        {svc.type === "rows" &&
        <div className="svc-rows" style={{ padding: "0 0 8px" }}>
            {svc.rows.map((r) =>
          <div className="svc-row" key={r[0]}>
                <span>{r[0]}</span>
                <span className="price">$ <b>{r[1]}</b> 起</span>
              </div>
          )}
          </div>}

        {svc.type === "compare" && <CompareTable columns={svc.columns} rows={svc.rows} />}
        {svc.type === "sections" &&
        svc.sections.map((s) =>
        <div className="svc-modal-sub" key={s.title}>
              <h3 className="svc-modal-sub-title">{s.title}</h3>
              {s.type === "compare" && <CompareTable columns={s.columns} rows={s.rows} />}
              {s.type === "pricelist" && <PriceListTable groups={s.groups} />}
            </div>
        )}
        {svc.footnote && <p className="cmp-footnote">{svc.footnote}</p>}

      </div>
    </div>);

}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: "smooth" });
}

function Services() {
  const [active, setActive] = React.useState(null);
  React.useEffect(() => {
    const fn = (e) => {
      const s = SERVICES.find(x => x.zh === e.detail);
      if (!s) return;
      scrollToId("services");
      setTimeout(() => setActive(s), 420);
    };
    window.addEventListener("sine:open-service", fn);
    return () => window.removeEventListener("sine:open-service", fn);
  }, []);
  return (
    <section id="services" className="section" style={{ background: "var(--blue-tint-2)" }}>
      <Crosshatch cols={6} rows={6} cell={30} color="var(--pink)" opacity={0.3}
      style={{ position: "absolute", top: 40, left: -30 }} className="px-slow" />
      <BrandStar type="swirl" size={120} color="var(--gray)" style={{ position: "absolute", top: 20, right: 60, opacity: 0.35, pointerEvents: "none" }} />
      <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 640 }}>
          <div className="eyebrow reveal">Services · 服務項目</div>
          <h2 className="h-sec reveal d1" style={{ marginTop: 16, whiteSpace: "nowrap" }}>行銷 × 設計 × 廣告<span style={{ color: "var(--blue)" }}></span></h2>
          <p className="lead reveal d2" style={{ marginTop: 16 }}></p>
        </div>
        <div className="svc-grid">
          {SERVICES.map((s, i) =>
          <button className={"svc reveal d" + (i % 2 + 1)} key={s.zh} onClick={() => setActive(s)}>
              <div className="svc-head">
                <span className="zh">{s.zh}</span>
                <span className="en">{s.en}</span>
              </div>
              <p className="svc-desc">{s.desc}</p>
              <div className="svc-more-link">查看詳細方案 →</div>
            </button>
          )}
        </div>
        <div className="svc-more reveal">
          <div className="svc-more-row">
            <div className="line"><span className="accent">+ 更多服務</span>，先聊聊你的需求</div>
            <a href="contact.html" className="btn btn-accent">開始合作 <span className="arr">→</span></a>
          </div>
          <span className="en">實際報價依專案需求與執行內容調整。</span>
        </div>
      </div>
      {active && <ServiceModal svc={active} onClose={() => setActive(null)} />}
    </section>);

}

/* ---- Work ---- */
const WORK = [
{
  slug: "tainong-yogurt", zh: "台農嚴選 — 新盈感優酪乳系列", en: "Packaging", cat: "平面設計",
  heroColor: "#376AB3",
  cover: "assets/work-01-cover.jpg", heroImg: "assets/work-01-hero.jpg", imgA: "assets/work-01-a.jpg", imgB: "assets/work-01-b.jpg", wideImg: "assets/work-01-cover.jpg",
  client: "台農嚴選 — 新盈感優酪乳系列",
  about: "台農以嚴選生乳聞名，本次以推廣半凝固狀優酪乳為主，一盒三入裝，分別為鮮奶、草莓、藍莓三種口味，希望跳脫台農以往較為寫實的風格，以新意象來包裝新商品。",
  process: "我們在了解台農嚴選此款優酪乳有別於他款，使用半凝固口感還加入果粒的特色後，發想出輕盈＋新感覺＝「新盈感」。目的希望藉由這樣的命名，消費者能第一眼理解產品想傳達出的全新感受。",
  feedback: "包裝設計上，將優酪乳流動狀態與口味意象轉化為幾何，並排後圖形之間交集出亮光，回應新盈感的「新」字。使用藍（鮮奶）、粉（草莓）、紫（藍莓），分別三種口味，透過日式簡約排版與明亮的用色，讓原先的大人感多些清新氛圍。",
  metrics: [{ n: "3", l: "口味系列" }, { n: "1", l: "全新命名" }, { n: "6W", l: "週完成" }],
  tags: ["品牌命名", "Slogan"],
  imgColors: ["rgba(55,106,179,0.12)", "rgba(242,154,118,0.1)", "rgba(150,110,190,0.12)", "rgba(55,106,179,0.09)"]
},
{
  slug: "chaoxi-tea", zh: "潮汐茶飲 包裝設計", en: "Packaging", cat: "平面設計",
  heroColor: "#F29A76",
  client: "潮汐茶飲 — 台式茶飲品牌",
  about: "潮汐茶飲主打台灣在地茶葉，希望透過包裝傳遞海洋感與在地情感，在競爭激烈的手搖杯市場中建立差異化視覺識別。",
  process: "以海浪、潮汐的流動感為設計主軸，結合台灣傳統元素，開發杯身、提袋、菜單等一系列包裝設計，確保視覺上形成完整的品牌語言。",
  feedback: "「包裝一推出就獲得大量 IG 打卡分享，成功提升品牌能見度，第一個月營業額提升 35%。」",
  metrics: [{ n: "35%", l: "營業額成長" }, { n: "5+", l: "包裝品項" }, { n: "4W", l: "週完成" }],
  tags: ["包裝設計", "手搖飲", "在地文化"],
  imgColors: ["rgba(242,154,118,0.18)", "rgba(242,154,118,0.1)", "rgba(201,202,202,0.15)", "rgba(242,154,118,0.13)"]
},
{
  slug: "xingyu-social", zh: "星嶼民宿 社群經營", en: "Social Media", cat: "電商代操",
  heroColor: "#376AB3",
  client: "星嶼民宿 — 離島特色住宿",
  about: "星嶼民宿位於澎湖，定位為高端生態旅遊住宿，希望透過社群媒體建立品牌故事感，吸引注重體驗的旅遊族群。",
  process: "訂定社群視覺規範與內容策略後，每週產出 12–15 篇貼文素材，包含圖文排版、限時動態與活動企劃，並定期優化成效數據。",
  feedback: "「合作三個月後追蹤人數成長了一倍，訂房諮詢量也顯著增加，社群終於有了應有的溫度。」",
  metrics: [{ n: "2×", l: "粉絲成長" }, { n: "12+", l: "週均貼文" }, { n: "3M", l: "合作月數" }],
  tags: ["社群經營", "旅宿品牌", "內容企劃"],
  imgColors: ["rgba(55,106,179,0.1)", "rgba(201,202,202,0.18)", "rgba(55,106,179,0.07)", "rgba(201,202,202,0.13)"]
},
{
  slug: "yefang-crowdfunding", zh: "野放咖啡 器具集資計畫", en: "Crowdfunding", cat: "群眾集資",
  heroColor: "#C9CACA",
  client: "野放咖啡 — 戶外風格咖啡廳",
  about: "野放咖啡推出戶外手沖器具組，希望透過群眾集資驗證市場需求，同時累積品牌的第一批核心客群。",
  process: "從產品定位與價格帶測試開始，規劃集資頁面故事線、回饋方案結構與影音素材，並在上線前以名單預熱、首日集中導流衝出達標動能。",
  feedback: "「上線第一天就達標，最後結案金額是我們原本目標的三倍，回饋方案的設計真的很關鍵。」",
  metrics: [{ n: "312%", l: "達成率" }, { n: "1D", l: "首日達標" }, { n: "6W", l: "專案週期" }],
  tags: ["群眾集資", "咖啡品牌", "回饋規劃"],
  imgColors: ["rgba(201,202,202,0.28)", "rgba(55,106,179,0.08)", "rgba(201,202,202,0.18)", "rgba(55,106,179,0.06)"]
},
{
  slug: "guangnian-ads", zh: "光年保養 廣告投放", en: "Ad Campaign", cat: "廣告投放",
  heroColor: "#F29A76",
  client: "光年保養 — 台灣天然保養品牌",
  about: "光年保養主打天然成份的本土保養品牌，希望透過 Meta 廣告投放擴大品牌知名度，並提升電商轉換率。",
  process: "分析品牌現有用戶數據後，制定受眾分層策略，設計多組廣告素材進行 A/B 測試，持續優化 CPC 與 ROAS，並結合節慶檔期活動提升轉單。",
  feedback: "「合作兩個月後 ROAS 從 1.8 提升到 4.2，整體廣告效益完全超出我們的預期，非常感謝。」",
  metrics: [{ n: "4.2×", l: "ROAS 達成" }, { n: "−38%", l: "CPC 降低" }, { n: "2M", l: "合作月數" }],
  tags: ["廣告投放", "保養品牌", "Meta 廣告"],
  imgColors: ["rgba(242,154,118,0.16)", "rgba(242,154,118,0.09)", "rgba(55,106,179,0.09)", "rgba(242,154,118,0.12)"]
},
{
  slug: "shiguang-crowdfunding", zh: "拾光書店 選集出版集資", en: "Crowdfunding", cat: "群眾集資",
  heroColor: "#376AB3",
  client: "拾光書店 — 獨立書店",
  about: "拾光書店首次自製選集出版，希望以群眾集資方式先確認讀者需求，再決定印量與裝幀規格。",
  process: "整理書店既有讀者名單作為前測受眾，規劃三檔回饋方案與限量裝幀版本，搭配作者訪談影片與社群連載內容維持整段集資期的討論度。",
  feedback: "「集資期間的內容節奏安排得很清楚，我們第一次出版就順利達標，也留下了長期會回訪的讀者。」",
  metrics: [{ n: "186%", l: "達成率" }, { n: "1.2K", l: "支持人數" }, { n: "5W", l: "集資期" }],
  tags: ["群眾集資", "獨立書店", "出版專案"],
  imgColors: ["rgba(55,106,179,0.13)", "rgba(55,106,179,0.07)", "rgba(201,202,202,0.16)", "rgba(55,106,179,0.09)"]
},
{
  slug: "zhigan-identity", zh: "質感原食 品牌識別", en: "Brand Identity", cat: "平面設計",
  heroColor: "#C9CACA",
  client: "質感原食 — 有機食材電商品牌",
  about: "質感原食主打嚴選有機食材直送，希望建立兼具信任感與美感的品牌識別，打破有機食品品牌形象老舊的刻板印象。",
  process: "以「自然、純粹、直接」為設計核心，開發簡潔有力的 LOGO 系統，搭配大地色系與清爽版型，延伸至包裝標籤與電商視覺。",
  feedback: "「新品牌上線後轉換率提升近 40%，客戶說終於找到一個有質感的有機品牌。」",
  metrics: [{ n: "40%", l: "轉換率提升" }, { n: "8W", l: "週完成" }, { n: "5+", l: "應用展開" }],
  tags: ["品牌識別", "有機電商", "包裝標籤"],
  imgColors: ["rgba(201,202,202,0.20)", "rgba(201,202,202,0.12)", "rgba(55,106,179,0.08)", "rgba(201,202,202,0.15)"]
},
];

const WORK_CATS = ["全部", "電商代操", "廣告投放", "平面設計", "群眾集資"];

const workUrl = (w) => "work.html?p=" + w.slug;
const workCatUrl = (c) => "work.html" + (c && c !== "全部" ? "?cat=" + encodeURIComponent(c) : "");
const workCount = (c) => WORK.filter(w => c === "全部" || w.cat === c).length;

/* ---- 側邊分類欄 ---- */
function WorkSidebar({ current, exclude }) {
  const recent = WORK.filter(w => !exclude || w.slug !== exclude).slice(0, 4);
  return (
    <aside className="news-side">
      <div className="news-side-block">
        <div className="news-side-title">專案分類</div>
        <div className="news-cat-list">
          {WORK_CATS.map(c =>
          <a key={c} href={workCatUrl(c)} className={"news-cat-item" + (c === current ? " act" : "")}>
            <span>{c}</span><span className="mono n">{workCount(c)}</span>
          </a>
          )}
        </div>
      </div>
      <div className="news-side-block">
        <div className="news-side-title">其他專案</div>
        <div className="news-recent">
          {recent.map(w =>
          <a key={w.slug} href={workUrl(w)} className="news-recent-item">
            <span className="mono d">{w.cat}</span>
            <span className="t">{w.zh}</span>
          </a>
          )}
        </div>
      </div>
      <a className="btn btn-accent news-side-cta" href="contact.html">開始合作 <span className="arr">→</span></a>
    </aside>);
}

/* ---- 專案總覽頁（work.html 無參數） ---- */
function WorkArchive({ cat = "全部" }) {
  const filtered = WORK.filter(w => cat === "全部" || w.cat === cat);
  return (
    <div className="news-page">
      <div className="wrap news-archive-head">
        <div className="eyebrow">Work · 執行專案</div>
        <h1 className="h-sec" style={{ marginTop: 14 }}>品牌的<span style={{ color: "var(--blue)" }}>無限可能</span></h1>
      </div>
      <div className="wrap news-layout">
        <div>
          <div className="news-archive-bar">
            <span className="mono">{cat === "全部" ? "全部專案" : cat} · {filtered.length} 件</span>
          </div>
          {filtered.length ? (
          <div className="work-grid news-archive-grid">
            {filtered.map((w, i) => <WorkCard key={w.slug} work={w} delay={i % 2 * 0.08} />)}
          </div>
          ) : (
          <p className="lb-sec-text">此分類目前還沒有專案。</p>
          )}
        </div>
        <WorkSidebar current={cat} />
      </div>
    </div>);
}

/* ---- 專案內容頁（work.html?p=slug） ---- */
function WorkArticle({ work }) {
  const idx = WORK.findIndex(w => w.slug === work.slug);
  const next = idx > -1 && idx < WORK.length - 1 ? WORK[idx + 1] : null;
  const heroIsDark = work.heroColor !== "#C9CACA";
  const isTextHeavy = work.cat === "廣告投放" || work.cat === "電商代操";

  return (
    <article className="news-page">
      <div className="lb-hero-img" style={{ background: work.heroColor }}>
        {work.heroImg ? <img src={work.heroImg} alt={work.zh} /> : (
        <div className="lb-img-ph"><Sparkle size={32} color={heroIsDark ? "rgba(255,255,255,0.5)" : "rgba(55,106,179,0.4)"} /><span style={{ color: heroIsDark ? "rgba(255,255,255,0.7)" : undefined }}>主視覺 · {work.en.toUpperCase()}</span></div>
        )}
      </div>

      <div className="lb-titleblock">
        <div className="wrap">
          <div className="lb-tags-row">
            <span className="lb-tag-pill active">{work.cat}</span>
            {work.tags.map(t => <span key={t} className="lb-tag-pill">{t}</span>)}
          </div>
          <h1 className="lb-title">{work.zh}</h1>
        </div>
      </div>

      <div className="wrap news-layout">
        <div className="news-body">
          <h2 className="news-h" style={{ marginTop: 0 }}>專案背景</h2>
          <p className="lb-sec-text">{work.about}</p>

          {isTextHeavy ? (
          <div className="lb-img-mid" style={{ background: work.imgColors[1] }}>
            {work.midImg ? <img src={work.midImg} alt="" /> : (
            <div className="lb-img-ph"><Sparkle size={18} color="rgba(55,106,179,0.3)" /><span>成效素材</span></div>
            )}
          </div>
          ) : (
          <div className="lb-img-2col">
            {[1, 2].map(i => (
              <div key={i} className="lb-img-half" style={{ background: work.imgColors[i] }}>
                {(i === 1 ? work.imgA : work.imgB) ? <img src={i === 1 ? work.imgA : work.imgB} alt="" /> : (
                <div className="lb-img-ph"><Sparkle size={20} color="rgba(55,106,179,0.3)" /><span>作品圖 0{i + 1}</span></div>
                )}
              </div>
            ))}
          </div>
          )}

          <h2 className="news-h">{isTextHeavy ? "投放策略 · 執行過程" : "設計思路 · 執行過程"}</h2>
          <p className="lb-sec-text">{work.process}</p>

          {!isTextHeavy && (
          <div className="lb-img-wide" style={{ background: work.imgColors[3] }}>
            {work.wideImg ? <img src={work.wideImg} alt="" /> : (
            <div className="lb-img-ph"><Sparkle size={22} color="rgba(55,106,179,0.35)" /><span>執行過程</span></div>
            )}
          </div>
          )}

          <h2 className="news-h">客戶回饋</h2>
          <p className="news-quote">{work.feedback}</p>

          <div className="news-stats">
            {work.metrics.map(m => <div className="stat" key={m.l}><div className="n">{m.n}</div><div className="l">{m.l}</div></div>)}
          </div>

          <div className="news-foot">
            <a className="news-back-link" href={workCatUrl(work.cat)}>← 回「{work.cat}」專案列表</a>
            {next && (
            <a className="lb-next" href={workUrl(next)} style={{ textDecoration: "none" }}>
              <span className="lb-next-label">NEXT PROJECT</span>
              <span className="lb-next-title">{next.zh} →</span>
            </a>
            )}
          </div>
        </div>
        <WorkSidebar current={work.cat} exclude={work.slug} />
      </div>
    </article>);
}

/* ---- 專案卡片 ---- */
function WorkCard({ work: w, delay = 0 }) {
  return (
    <a className="work-card reveal" href={workUrl(w)}
      style={{ transitionDelay: delay + "s", display: "block", color: "inherit", textDecoration: "none" }}>
      <div className="work-thumb">
        {w.cover ? <img src={w.cover} alt={w.zh} loading="lazy" /> : (
        <div className="ph" style={{ color: w.heroColor + "66" }}>
          <Sparkle size={26} color={w.heroColor} />
          <span className="mono">作品圖 · {w.en.toUpperCase()}</span>
        </div>
        )}
        <div className="ov">
          <div style={{ fontSize: 13, opacity: .85 }}>查看詳情 →</div>
        </div>
      </div>
      <div className="meta">
        <h3>{w.zh}</h3>
        <div className="tags">
          {[w.cat, ...w.tags.filter(t => t !== w.cat)].slice(0, 3).map((t, i) => <span className={"tag" + (i === 0 ? " active" : "")} key={t}>{t}</span>)}
        </div>
      </div>
    </a>);
}

const WORK_PAGE = 6; /* 「全部」每次顯示幾件 */
const WORK_PAGE_CAT = 3; /* 其他分類每次顯示幾件 */

function Work() {
  const [cat, setCat] = React.useState("全部");
  const step = cat === "全部" ? WORK_PAGE : WORK_PAGE_CAT;
  const limit = cat === "全部" ? WORK_PAGE : WORK_PAGE_CAT;

  const filtered = WORK.filter((w) => cat === "全部" || w.cat === cat);
  const shown = filtered.slice(0, limit);
  const hasMore = filtered.length > limit;

  const handleCat = (c) => setCat(c);

  React.useEffect(() => {
    const fn = (e) => {
      if (!WORK_CATS.includes(e.detail)) return;
      handleCat(e.detail);
      scrollToId("work");
    };
    window.addEventListener("sine:filter-work", fn);
    return () => window.removeEventListener("sine:filter-work", fn);
  }, []);

  const gridRef = React.useRef(null);
  React.useEffect(() => {
    const nodes = gridRef.current ? gridRef.current.querySelectorAll(".reveal:not(.in)") : [];
    if (!nodes.length) return;
    const io = new IntersectionObserver((ents) => {
      ents.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    const tid = setTimeout(() => nodes.forEach(el => io.observe(el)), 30);
    return () => { clearTimeout(tid); io.disconnect(); };
  }, [shown.length, cat]);

  return (
    <section id="work" className="section" style={{ position: "relative", overflow: "hidden" }}>
      <BrandStar type="burst8" size={160} color="var(--blue)" style={{ position: "absolute", top: -30, right: -40, opacity: 0.07, pointerEvents: "none" }} />
      <BrandStar type="oval" size={90} color="var(--gray)" style={{ position: "absolute", bottom: 60, left: 20, opacity: 0.22, pointerEvents: "none" }} />
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
          <div>
            <a href="#services" className="eyebrow reveal" style={{ textDecoration: "none" }}>Work · 執行專案</a>
            <h2 className="h-sec reveal d1" style={{ marginTop: 16 }}>品牌的<span style={{ color: "var(--blue)" }}>無限可能</span></h2>
          </div>
          <div className="work-filter reveal d2">
            {WORK_CATS.map((c) =>
            <button key={c} className={cat === c ? "act" : ""} onClick={() => handleCat(c)}>{c}</button>
            )}
          </div>
        </div>
        <div className="work-grid" ref={gridRef}>
          {shown.map((w, i) => <WorkCard key={w.slug} work={w} delay={i % 3 * 0.08} />)}
        </div>

        {/* 載入更多 */}
        {hasMore && (
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <div className="work-count-info mono" style={{ fontSize: 13, color: "var(--muted)", marginBottom: 14 }}>
              已顯示 {shown.length} / {filtered.length} 件作品
            </div>
            <a className="news-more-link" href={workCatUrl(cat)}>
              查看全部{cat === "全部" ? "" : cat}專案 <span className="ar">→</span>
            </a>
          </div>
        )}

        {!hasMore && (
          <div style={{ textAlign: "center", marginTop: 34 }}>
            <a className="news-more-link" href={workCatUrl(cat)}>前往專案總覽 <span className="ar">→</span></a>
          </div>
        )}

      </div>
    </section>
  );
}



/* ---- Team ---- */
const TEAM = [
{ zh: "Yu-Ting", role: "Founder · 創辦人", badge: "創辦人", img: "assets/team-founder.png", d: "堅持從 0 到 1，用專業與熱情完成真正喜歡的案子，注重品質與細節。",
  skills: ["專案管理", "企劃（電商、集資、社群、廣告）", "文案撰寫（銷售頁、社群、廣告）", "KOL 媒合行銷"] },
{ zh: "尼尼子", role: "Designer · 視覺設計", badge: "設計師", img: "assets/team-ninizi.png", d: "從品牌邏輯到視覺落點，職人式細節控，為品牌與市場打造有策略的視覺連接。",
  skills: ["品牌識別系統設計（LOGO、VIS…）", "廣告/電商設計（banner、銷售頁）", "包裝設計", "平面視覺（海報、印刷刊物、插畫）"] },
{ zh: "YT", role: "Marketing · 行銷企劃", badge: "行銷", img: "assets/team-yang.png", d: "整合社群、廣告與數據，讓設計的價值真正轉化為市場成效。",
  skills: ["廣告代操（Meta、Google Ads、港澳投放）", "數據分析（Meta / Google Ads、GA4、KOL 合作）", "文案撰寫（社群、廣告、銷售頁）"] }];


function Team() {
  return (
    <section id="team" className="section" style={{ position: "relative", overflow: "hidden" }}>
      <BrandStar type="pinwheel" size={180} color="var(--blue)" style={{ position: "absolute", top: 10, right: "5%", opacity: 0.09, pointerEvents: "none" }} />
      <BrandStar type="pinwheel" size={80} color="var(--accent)" style={{ position: "absolute", bottom: 40, right: "8%", opacity: 0.22, pointerEvents: "none" }} />
      <div className="wrap">
        <div style={{ maxWidth: 640 }}>
          <div className="eyebrow reveal">Team · 團隊介紹</div>
          <h2 className="h-sec reveal d1" style={{ marginTop: 16 }}>專注 × 熱情<span style={{ color: "var(--blue)" }}>並行</span>的團隊</h2>
        </div>
        <div className="team-grid">
          {TEAM.map((m, i) =>
          <div className={"member reveal d" + (i + 1)} key={m.zh}>
              <div className="member-ph has-img">
                <div className="badge">{m.badge}</div>
                <img src={m.img} alt={m.zh} loading="lazy" />
              </div>
              <div className="info">
                <div className="role">{m.role}</div>
                <h3>{m.zh}</h3>
                <p>{m.d}</p>
                {m.skills && (
                  <ul className="skill-list">
                    {m.skills.map(s => <li key={s}>{s}</li>)}
                  </ul>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ---- Contact / CTA ---- */
function Contact() {
  const [status, setStatus] = React.useState("idle"); // idle · submitting · success · error
  const [form, setForm] = React.useState({ name: "", contact: "", project: "" });

  const submit = (e) => {
    e.preventDefault();
    if (typeof navigator !== "undefined" && !navigator.onLine) { setStatus("error"); return; }
    setStatus("submitting");
    /* TODO(engineer): replace with real API call — this simulates network latency */
    setTimeout(() => {
      const ok = true; // swap in real response check
      setStatus(ok ? "success" : "error");
    }, 1100);
  };

  return (
    <section id="contact" className="section cta">
      <Crosshatch cols={6} rows={5} cell={30} color="rgba(242,154,118,.5)" opacity={0.5}
      style={{ position: "absolute", bottom: 30, left: -20, zIndex: 1 }} className="px-slow" />
      <BrandStar type="burst8" size={220} color="rgba(255,255,255,0.08)" style={{ position: "absolute", top: -40, right: -20, zIndex: 1, pointerEvents: "none" }} />
      <BrandStar type="oval" size={80} color="rgba(255,255,255,0.15)" style={{ position: "absolute", bottom: 20, right: "15%", zIndex: 1, pointerEvents: "none" }} />
      <div className="wrap cta-inner">
        <div>
          <a href="#work" className="eyebrow on-dark reveal" style={{ textDecoration: "none" }}>Contact · 聯繫我們</a>
          <h2 className="reveal d1" style={{ marginTop: 18 }}>準備好讓品牌<br /><span className="accent">閃耀</span>了嗎？</h2>
          <p className="lead reveal d2" style={{ marginTop: 18, maxWidth: 440 }}>無論是品牌從零開始，或想提升行銷成效，告訴我們你的需求，一起把品牌推向市場。</p>
          <div className="contact-meta reveal d3">
            <div className="row"><span className="k">LINE</span><span>@519baqoh</span></div>
            <div className="row"><span className="k">Email</span><span>ssinestudio2024@gmail.com</span></div>
            <div className="row"><span className="k">Area</span><span>台灣 · 港澳市場</span></div>
          </div>
        </div>

        {status === "success" ? (
        <div className="contact-card state-panel reveal in">
          <div className="state-icon ok">✓</div>
          <h3>已收到您的需求</h3>
          <p>我們會在 1–2 個工作日內透過您提供的聯絡方式回覆。</p>
          <button type="button" className="btn btn-ghost-light" onClick={() => { setForm({ name: "", contact: "", project: "" }); setStatus("idle"); }}>填寫新需求</button>
        </div>
        ) : status === "error" ? (
        <div className="contact-card state-panel reveal in">
          <div className="state-icon err">!</div>
          <h3>{typeof navigator !== "undefined" && !navigator.onLine ? "網路連線中斷" : "傳送失敗"}</h3>
          <p>請檢查網路連線後再試一次，或直接透過 LINE / Email 聯絡我們。</p>
          <button type="button" className="btn btn-accent" style={{ width: "100%", justifyContent: "center" }} onClick={() => setStatus("idle")}>重新填寫 <span className="arr">→</span></button>
        </div>
        ) : (
        <form className="contact-card reveal d2 in" onSubmit={submit}>
          <div className="field"><label>稱呼 Name</label><input required disabled={status === "submitting"} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="您的姓名 / 品牌名稱" /></div>
          <div className="field"><label>聯絡方式 Email / LINE</label><input required disabled={status === "submitting"} value={form.contact} onChange={e => setForm({ ...form, contact: e.target.value })} placeholder="email 或 LINE ID" /></div>
          <div className="field"><label>需求 Project</label><textarea rows="3" disabled={status === "submitting"} value={form.project} onChange={e => setForm({ ...form, project: e.target.value })} placeholder="想聊聊品牌識別、社群代操或廣告投放…"></textarea></div>
          <button type="submit" className="btn btn-accent" disabled={status === "submitting"} style={{ width: "100%", justifyContent: "center" }}>
            {status === "submitting" ? <React.Fragment><span className="spinner" />傳送中…</React.Fragment> : <React.Fragment>送出需求 <span className="arr">→</span></React.Fragment>}
          </button>
        </form>
        )}
      </div>
    </section>);

}

/* ---- Footer ---- */
function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div style={{ maxWidth: 300 }}>
            <Lockup onDark markSize={42} />
            <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.7 }}>設計驅動行銷，行銷助力設計。在第二象限中閃耀的存在。</p>
          </div>
          <div className="foot-cols">
            <div className="foot-col">
              <h4>Sitemap</h4>
              {NAV.filter(n => n.id !== "contact").map((n) => <a key={n.id} href={n.id === "about" ? "about.html" : "#" + (n.anchor || n.id)}>{n.zh}</a>)}
            </div>
            <div className="foot-col">
              <h4>Services</h4>
              <a href="#services">電商代操</a>
              <a href="#services">廣告投放</a>
              <a href="#services">平面設計</a>
              <a href="#services">群眾集資</a>
            </div>
            <div className="foot-col">
              <h4>Contact</h4>
              <a href="contact.html">LINE @519baqoh</a>
              <a href="contact.html">ssinestudio2024@gmail.com</a>
              <a href="contact.html">台灣 · 港澳</a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 第二象限 SINE STUDIO. All rights reserved. · <a href="privacy.html" style={{ textDecoration: "underline" }}>隱私權政策</a></span>
          <span className="mono">DESIGN × MARKETING · 0 → 1</span>
        </div>
      </div>
    </footer>);

}

Object.assign(window, { WorkArticle, WorkArchive, WorkCard, WorkSidebar, WORK, WORK_CATS, workUrl, workCatUrl, Services, Work, Team, Contact, Footer });