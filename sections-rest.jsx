/* ============================================================
   sections-rest.jsx — Services · Work · Process · Team · Contact · Footer
   ============================================================ */

/* ---- Services (4 pillars, click to open detail table) ---- */
const SERVICES = [
{
  zh: "電商", en: "eCommerce",
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
  zh: "廣告", en: "Advertising",
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
  zh: "設計", en: "Design",
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
  zh: "集資", en: "Crowdfunding",
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

function Services() {
  const [active, setActive] = React.useState(null);
  return (
    <section id="services" className="section" style={{ background: "var(--blue-tint-2)" }}>
      <Crosshatch cols={6} rows={6} cell={30} color="var(--pink)" opacity={0.3}
      style={{ position: "absolute", top: 40, left: -30 }} className="px-slow" />
      <BrandStar type="swirl" size={120} color="var(--gray)" style={{ position: "absolute", top: 20, right: 60, opacity: 0.35, pointerEvents: "none" }} />
      <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 640 }}>
          <div className="eyebrow reveal">Services · 服務項目</div>
          <h2 className="h-sec reveal d1" style={{ marginTop: 16, whiteSpace: "nowrap" }}>行銷 × 設計 × 廣告，<span style={{ color: "var(--blue)" }}>一站整合</span></h2>
          <p className="lead reveal d2" style={{ marginTop: 16 }}>從品牌識別到廣告投放，提供具專業性與價值的整合服務。</p>
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
          <div className="line">「<span className="accent">+ 更多服務</span>，歡迎洽詢」</div>
          <span className="en">以上僅供參考，實際報價依照不同專案內容會有所變動，歡迎直接洽詢</span>
        </div>
      </div>
      {active && <ServiceModal svc={active} onClose={() => setActive(null)} />}
    </section>);

}

/* ---- Work ---- */
const WORK = [
{
  zh: "晨光選物 品牌識別", en: "Brand Identity", cat: "品牌識別",
  heroColor: "#376AB3",
  client: "晨光選物 — 選品生活品牌",
  about: "客戶希望建立一個清新、有質感的選品生活品牌，目標族群為 25–40 歲注重生活美學的都市族群，強調「慢生活」的選品哲學。",
  process: "從品牌定位與命名出發，確立視覺語彙後，延伸至 LOGO、標準字、色彩系統與品牌應用。整個流程歷時約 6 週，共進行 3 輪提案修訂，最終確立獨具辨識度的品牌形象。",
  feedback: "「設計完全符合我們對品牌的想像，質感與細膩度超出預期。第一次看到 LOGO 提案時就決定了，幾乎不需要任何修改。」",
  metrics: [{ n: "6W", l: "週完成" }, { n: "3+", l: "應用展開" }, { n: "100%", l: "客戶滿意" }],
  imgColors: ["rgba(55,106,179,0.12)", "rgba(55,106,179,0.07)", "rgba(201,202,202,0.18)", "rgba(55,106,179,0.09)"]
},
{
  zh: "潮汐茶飲 包裝設計", en: "Packaging", cat: "包裝設計",
  heroColor: "#F29A76",
  client: "潮汐茶飲 — 台式茶飲品牌",
  about: "潮汐茶飲主打台灣在地茶葉，希望透過包裝傳遞海洋感與在地情感，在競爭激烈的手搖杯市場中建立差異化視覺識別。",
  process: "以海浪、潮汐的流動感為設計主軸，結合台灣傳統元素，開發杯身、提袋、菜單等一系列包裝設計，確保視覺上形成完整的品牌語言。",
  feedback: "「包裝一推出就獲得大量 IG 打卡分享，成功提升品牌能見度，第一個月營業額提升 35%。」",
  metrics: [{ n: "35%", l: "營業額成長" }, { n: "5+", l: "包裝品項" }, { n: "4W", l: "週完成" }],
  imgColors: ["rgba(242,154,118,0.18)", "rgba(242,154,118,0.1)", "rgba(201,202,202,0.15)", "rgba(242,154,118,0.13)"]
},
{
  zh: "星嶼民宿 社群經營", en: "Social Media", cat: "社群經營",
  heroColor: "#376AB3",
  client: "星嶼民宿 — 離島特色住宿",
  about: "星嶼民宿位於澎湖，定位為高端生態旅遊住宿，希望透過社群媒體建立品牌故事感，吸引注重體驗的旅遊族群。",
  process: "訂定社群視覺規範與內容策略後，每週產出 12–15 篇貼文素材，包含圖文排版、限時動態與活動企劃，並定期優化成效數據。",
  feedback: "「合作三個月後追蹤人數成長了一倍，訂房諮詢量也顯著增加，社群終於有了應有的溫度。」",
  metrics: [{ n: "2×", l: "粉絲成長" }, { n: "12+", l: "週均貼文" }, { n: "3M", l: "合作月數" }],
  imgColors: ["rgba(55,106,179,0.1)", "rgba(201,202,202,0.18)", "rgba(55,106,179,0.07)", "rgba(201,202,202,0.13)"]
},
{
  zh: "野放咖啡 視覺系統", en: "Visual System", cat: "品牌識別",
  heroColor: "#C9CACA",
  client: "野放咖啡 — 戶外風格咖啡廳",
  about: "野放咖啡主打戶外探險風格，是一家結合咖啡與選物的獨立品牌，客戶希望建立從 LOGO 到空間、餐具的一致性視覺語言。",
  process: "從品牌核心「野性與自由」出發，以粗曠線條與大地色系為主軸，延伸至 LOGO 系統、餐具、包裝、菜單與室內空間指引牌設計。",
  feedback: "「拿到設計稿那天，我們整個團隊都起立鼓掌。這就是我們想要的野放精神，完全到位。」",
  metrics: [{ n: "8+", l: "應用展開" }, { n: "8W", l: "週完成" }, { n: "98%", l: "客戶滿意" }],
  imgColors: ["rgba(201,202,202,0.28)", "rgba(55,106,179,0.08)", "rgba(201,202,202,0.18)", "rgba(55,106,179,0.06)"]
},
{
  zh: "光年保養 廣告投放", en: "Ad Campaign", cat: "廣告投放",
  heroColor: "#F29A76",
  client: "光年保養 — 台灣天然保養品牌",
  about: "光年保養主打天然成份的本土保養品牌，希望透過 Meta 廣告投放擴大品牌知名度，並提升電商轉換率。",
  process: "分析品牌現有用戶數據後，制定受眾分層策略，設計多組廣告素材進行 A/B 測試，持續優化 CPC 與 ROAS，並結合節慶檔期活動提升轉單。",
  feedback: "「合作兩個月後 ROAS 從 1.8 提升到 4.2，整體廣告效益完全超出我們的預期，非常感謝。」",
  metrics: [{ n: "4.2×", l: "ROAS 達成" }, { n: "−38%", l: "CPC 降低" }, { n: "2M", l: "合作月數" }],
  imgColors: ["rgba(242,154,118,0.16)", "rgba(242,154,118,0.09)", "rgba(55,106,179,0.09)", "rgba(242,154,118,0.12)"]
},
{
  zh: "拾光書店 活動視覺", en: "Event Visual", cat: "包裝設計",
  heroColor: "#376AB3",
  client: "拾光書店 — 獨立書店",
  about: "拾光書店是一家富有人文氣息的獨立書店，希望為年度閱讀節設計完整的活動視覺，包含主視覺海報、社群素材與現場展覽設計。",
  process: "以「光」為核心意象，融合書頁翻動的動態感，設計出溫暖而有力量的活動視覺系統，並延伸至各尺寸素材，確保跨媒體的一致性。",
  feedback: "「活動海報貼出後馬上被多位藝文媒體轉分享，今年的閱讀節報名人數是去年的三倍。」",
  metrics: [{ n: "3×", l: "活動報名" }, { n: "10+", l: "素材規格" }, { n: "3W", l: "週完成" }],
  imgColors: ["rgba(55,106,179,0.13)", "rgba(55,106,179,0.07)", "rgba(201,202,202,0.16)", "rgba(55,106,179,0.09)"]
},
{
  zh: "質感原食 品牌識別", en: "Brand Identity", cat: "品牌識別",
  heroColor: "#C9CACA",
  client: "質感原食 — 有機食材電商品牌",
  about: "質感原食主打嚴選有機食材直送，希望建立兼具信任感與美感的品牌識別，打破有機食品品牌形象老舊的刻板印象。",
  process: "以「自然、純粹、直接」為設計核心，開發簡潔有力的 LOGO 系統，搭配大地色系與清爽版型，延伸至包裝標籤與電商視覺。",
  feedback: "「新品牌上線後轉換率提升近 40%，客戶說終於找到一個有質感的有機品牌。」",
  metrics: [{ n: "40%", l: "轉換率提升" }, { n: "8W", l: "週完成" }, { n: "5+", l: "應用展開" }],
  imgColors: ["rgba(201,202,202,0.20)", "rgba(201,202,202,0.12)", "rgba(55,106,179,0.08)", "rgba(201,202,202,0.15)"]
},
{
  zh: "沐光攝影 品牌識別", en: "Brand Identity", cat: "品牌識別",
  heroColor: "#376AB3",
  client: "沐光攝影工作室 — 婚攝品牌",
  about: "沐光攝影是一家以「光影敘事」為核心理念的婚攝工作室，希望透過品牌識別傳遞細膩、溫暖的品牌個性，吸引高端婚慶客群。",
  process: "深入訪談創辦人的拍攝哲學後，以「光」的流動為設計語言，建立可辨識的 LOGO 與視覺系統，並延伸至合約文件、名片與社群視覺。",
  feedback: "「品牌升級後詢問高端婚攝的客戶明顯增加，感覺整個品牌終於跟上了我們的攝影風格。」",
  metrics: [{ n: "5W", l: "週完成" }, { n: "4+", l: "應用展開" }, { n: "98%", l: "客戶滿意" }],
  imgColors: ["rgba(55,106,179,0.10)", "rgba(55,106,179,0.06)", "rgba(201,202,202,0.14)", "rgba(55,106,179,0.08)"]
},
{
  zh: "綠徑植感 品牌識別", en: "Brand Identity", cat: "品牌識別",
  heroColor: "#C9CACA",
  client: "綠徑植感 — 植栽生活品牌",
  about: "綠徑植感以城市植栽為核心，主打讓植物融入都市生活的生活提案，希望建立清新且具辨識度的品牌形象。",
  process: "以簡約線條與自然意象為設計方向，發展出可延伸性強的 LOGO 系統，並規劃應用於植栽標籤、包材與空間指引。",
  feedback: "「設計出來的感覺跟我們想像的完全一樣，甚至更好，根本不需要修改。」",
  metrics: [{ n: "5W", l: "週完成" }, { n: "6+", l: "應用展開" }, { n: "100%", l: "客戶滿意" }],
  imgColors: ["rgba(201,202,202,0.18)", "rgba(55,106,179,0.07)", "rgba(201,202,202,0.12)", "rgba(55,106,179,0.07)"]
},
{
  zh: "禾光烘焙 社群經營", en: "Social Media", cat: "社群經營",
  heroColor: "#F29A76",
  client: "禾光烘焙 — 職人烘焙品牌",
  about: "禾光烘焙是一家主打職人精神的烘焙品牌，希望透過社群媒體呈現麵包師的工藝精神，同時帶動到店人潮與線上訂單。",
  process: "建立「職人日常」的社群內容主軸，每週規劃製程紀錄、產品故事與限定商品預告等內容，搭配統一的視覺風格，讓品牌在社群上形成獨特辨識度。",
  feedback: "「社群開始有了自己的風格，粉絲說他們是因為 IG 才來店的，這樣的回饋讓我們很感動。」",
  metrics: [{ n: "3.5×", l: "觸及成長" }, { n: "16+", l: "週均貼文" }, { n: "4M", l: "合作月數" }],
  imgColors: ["rgba(242,154,118,0.16)", "rgba(242,154,118,0.09)", "rgba(55,106,179,0.08)", "rgba(242,154,118,0.11)"]
},
{
  zh: "織月選品 社群經營", en: "Social Media", cat: "社群經營",
  heroColor: "#376AB3",
  client: "織月選品 — 北歐風格生活選品",
  about: "織月選品以北歐極簡風格為主軸，希望透過社群媒體建立品牌生活美學，同時提升電商流量與轉換率。",
  process: "制定「生活情境」的社群策略，每月規劃主題攝影、選品故事與生活方式內容，並整合社群數據持續優化受眾觸及。",
  feedback: "「合作半年，電商月營業額成長了兩倍，IG 粉絲也突破了一萬。這是我們沒想到的速度。」",
  metrics: [{ n: "2×", l: "電商成長" }, { n: "10K+", l: "粉絲突破" }, { n: "6M", l: "合作月數" }],
  imgColors: ["rgba(55,106,179,0.11)", "rgba(201,202,202,0.14)", "rgba(55,106,179,0.07)", "rgba(201,202,202,0.11)"]
},
{
  zh: "初覺美學 廣告投放", en: "Ad Campaign", cat: "廣告投放",
  heroColor: "#F29A76",
  client: "初覺美學 — 美容診所品牌",
  about: "初覺美學是一家結合醫美與生活美學的診所品牌，希望透過精準廣告投放擴大品牌知名度，並有效提升線上諮詢預約量。",
  process: "分析現有客群數據，建立多層次受眾分層，針對不同療程設計差異化廣告素材進行 A/B 測試，持續優化 CPC 與預約轉換率。",
  feedback: "「廣告成效超過預期，諮詢量成長了三倍，最令我們印象深刻的是新客戶的質量也同步提升了。」",
  metrics: [{ n: "3×", l: "諮詢成長" }, { n: "−42%", l: "CPC 降低" }, { n: "5M", l: "合作月數" }],
  imgColors: ["rgba(242,154,118,0.15)", "rgba(242,154,118,0.08)", "rgba(55,106,179,0.08)", "rgba(242,154,118,0.11)"]
},
{
  zh: "星野旅宿 廣告投放", en: "Ad Campaign", cat: "廣告投放",
  heroColor: "#376AB3",
  client: "星野旅宿 — 山林風格民宿",
  about: "星野旅宿主打山林療癒的住宿體驗，希望透過 Meta 與 Google Ads 精準觸及目標客群，在旺季前有效提升訂房率。",
  process: "針對「週末旅遊族」與「身心靈旅遊族群」建立不同受眾策略，結合旺季檔期設計廣告素材與促購活動，並透過再行銷機制強化訂房轉換。",
  feedback: "「旺季前兩個月就達成滿房，這是過去從來沒有過的成績，廣告策略精準度讓我們非常驚豔。」",
  metrics: [{ n: "100%", l: "旺季滿房" }, { n: "5.8×", l: "ROAS 達成" }, { n: "3M", l: "合作月數" }],
  imgColors: ["rgba(55,106,179,0.12)", "rgba(55,106,179,0.07)", "rgba(201,202,202,0.15)", "rgba(55,106,179,0.08)"]
}];

const WORK_CATS = ["全部", "品牌識別", "包裝設計", "社群經營", "廣告投放"];

/* ---- Work Lightbox ---- */
function WorkLightbox({ work, onClose, onNavigate }) {
  const idx = WORK.findIndex(w => w.zh === work.zh);
  const prev = idx > 0 ? WORK[idx - 1] : null;
  const next = idx < WORK.length - 1 ? WORK[idx + 1] : null;
  const [visible, setVisible] = React.useState(false);
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    const tid = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(tid);
  }, []);

  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [work.zh]);

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  React.useEffect(() => {
    const fn = (e) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft" && prev) onNavigate(prev);
      if (e.key === "ArrowRight" && next) onNavigate(next);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [work, prev, next]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 340);
  };

  const heroIsDark = work.heroColor !== "#C9CACA";

  return (
    <div className={"lb-overlay" + (visible ? " open" : "")}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}>
      <div className="lb-panel" ref={scrollRef}>

        {/* Top bar */}
        <div className="lb-topbar">
          <button className="lb-back" onClick={handleClose}>← 返回作品集</button>
          <div className="lb-nav-ctrl">
            <span className="lb-count">{idx + 1} / {WORK.length}</span>
            <button className={"lb-arr" + (!prev ? " dis" : "")} onClick={() => prev && onNavigate(prev)} aria-label="上一件">←</button>
            <button className={"lb-arr" + (!next ? " dis" : "")} onClick={() => next && onNavigate(next)} aria-label="下一件">→</button>
            <button className="lb-close-btn" onClick={handleClose} aria-label="關閉">✕</button>
          </div>
        </div>

        {/* Hero banner */}
        <div className="lb-hero" style={{ background: work.heroColor }}>
          <div className="wrap">
            <div className="lb-cat" style={{ color: heroIsDark ? "#fff" : "var(--blue)" }}>{work.cat}</div>
            <h2 className="lb-title" style={{ color: heroIsDark ? "#fff" : "var(--ink)" }}>{work.zh}</h2>
            <div className="lb-subtitle" style={{ color: heroIsDark ? "rgba(255,255,255,.72)" : "var(--ink-soft)" }}>{work.en}</div>
            <div className="lb-client" style={{ color: heroIsDark ? "rgba(255,255,255,.6)" : "var(--muted)" }}>{work.client}</div>
          </div>
        </div>

        {/* Body */}
        <div className="lb-body">
          <div className="wrap">

            {/* Main image */}
            <div className="lb-img-full" style={{ background: work.imgColors[0] }}>
              <div className="lb-img-ph"><Sparkle size={32} color="rgba(55,106,179,0.4)" /><span>主視覺 · {work.en.toUpperCase()}</span></div>
            </div>

            {/* 2-col images */}
            <div className="lb-img-2col">
              {[1, 2].map(i => (
                <div key={i} className="lb-img-half" style={{ background: work.imgColors[i] }}>
                  <div className="lb-img-ph"><Sparkle size={20} color="rgba(55,106,179,0.3)" /><span>作品圖 0{i + 1}</span></div>
                </div>
              ))}
            </div>

            {/* About */}
            <div className="lb-section">
              <div className="lb-sec-label">專案背景</div>
              <p className="lb-sec-text">{work.about}</p>
            </div>

            {/* Wide image */}
            <div className="lb-img-wide" style={{ background: work.imgColors[3] }}>
              <div className="lb-img-ph"><Sparkle size={22} color="rgba(55,106,179,0.35)" /><span>執行過程</span></div>
            </div>

            {/* Process */}
            <div className="lb-section">
              <div className="lb-sec-label">設計思路 · 執行過程</div>
              <p className="lb-sec-text">{work.process}</p>
            </div>

            {/* Metrics */}
            <div className="lb-metrics">
              {work.metrics.map(m => (
                <div key={m.l} className="lb-metric">
                  <div className="lb-metric-n">{m.n}</div>
                  <div className="lb-metric-l">{m.l}</div>
                </div>
              ))}
            </div>

            {/* Feedback */}
            <blockquote className="lb-quote">{work.feedback}</blockquote>

            {/* Next work */}
            {next && (
              <div className="lb-next" onClick={() => onNavigate(next)}>
                <span className="lb-next-label">NEXT PROJECT</span>
                <span className="lb-next-title">{next.zh} →</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const WORK_PAGE = 6; /* 每次顯示幾件 */

function Work() {
  const [cat, setCat] = React.useState("全部");
  const [visible, setVisible] = React.useState(WORK_PAGE);
  const [selected, setSelected] = React.useState(null);

  const filtered = WORK.filter((w) => cat === "全部" || w.cat === cat);
  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  const handleCat = (c) => { setCat(c); setVisible(WORK_PAGE); };

  return (
    <section id="work" className="section" style={{ position: "relative", overflow: "hidden" }}>
      <BrandStar type="burst8" size={160} color="var(--blue)" style={{ position: "absolute", top: -30, right: -40, opacity: 0.07, pointerEvents: "none" }} />
      <BrandStar type="oval" size={90} color="var(--gray)" style={{ position: "absolute", bottom: 60, left: 20, opacity: 0.22, pointerEvents: "none" }} />
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
          <div>
            <div className="eyebrow reveal">Work · 作品集</div>
            <h2 className="h-sec reveal d1" style={{ marginTop: 16 }}>讓品牌<span style={{ color: "var(--blue)" }}>被看見</span>的成果</h2>
          </div>
          <div className="work-filter reveal d2">
            {WORK_CATS.map((c) =>
            <button key={c} className={cat === c ? "act" : ""} onClick={() => handleCat(c)}>{c}</button>
            )}
          </div>
        </div>
        <div className="work-grid">
          {shown.map((w, i) =>
          <article className="work-card reveal" key={w.zh}
            style={{ transitionDelay: i % 3 * 0.08 + "s", cursor: "pointer" }}
            onClick={() => setSelected(w)}>
              <div className="work-thumb">
                <div className="ph">
                  <Sparkle size={26} color="var(--gray)" />
                  <span className="mono">作品圖 · {w.en.toUpperCase()}</span>
                </div>
                <div className="ov">
                  <div>
                    <div className="en">{w.en}</div>
                    <div style={{ fontWeight: 800, fontSize: 18, marginTop: 4 }}>{w.zh}</div>
                    <div style={{ fontSize: 13, opacity: .7, marginTop: 6 }}>查看詳情 →</div>
                  </div>
                </div>
              </div>
              <div className="meta">
                <div className="cat">{w.cat}</div>
                <h3>{w.zh}</h3>
              </div>
            </article>
          )}
        </div>

        {/* 載入更多 */}
        {hasMore && (
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <div className="work-count-info mono" style={{ fontSize: 13, color: "var(--muted)", marginBottom: 14 }}>
              已顯示 {shown.length} / {filtered.length} 件作品
            </div>
            <button className="btn-outline work-more-btn" onClick={() => setVisible(v => v + WORK_PAGE)}>
              載入更多作品
            </button>
          </div>
        )}

        {!hasMore && filtered.length > WORK_PAGE && (
          <div style={{ textAlign: "center", marginTop: 28 }}>
            <button className="work-collapse-btn mono" onClick={() => setVisible(WORK_PAGE)}
              style={{ fontSize: 13, color: "var(--muted)", textDecoration: "underline" }}>
              收合
            </button>
          </div>
        )}

        <p className="mono reveal" style={{ textAlign: "center", marginTop: 28, color: "var(--muted)", fontSize: 13 }}>
          ＊ 作品圖為佔位示意，待您提供真實作品後替換
        </p>
      </div>
      {selected && (
        <WorkLightbox
          work={selected}
          onClose={() => setSelected(null)}
          onNavigate={(w) => setSelected(w)}
        />
      )}
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
  const [sent, setSent] = React.useState(false);
  return (
    <section id="contact" className="section cta">
      <Crosshatch cols={6} rows={5} cell={30} color="rgba(242,154,118,.5)" opacity={0.5}
      style={{ position: "absolute", bottom: 30, left: -20, zIndex: 1 }} className="px-slow" />
      <BrandStar type="burst8" size={220} color="rgba(255,255,255,0.08)" style={{ position: "absolute", top: -40, right: -20, zIndex: 1, pointerEvents: "none" }} />
      <BrandStar type="oval" size={80} color="rgba(255,255,255,0.15)" style={{ position: "absolute", bottom: 20, right: "15%", zIndex: 1, pointerEvents: "none" }} />
      <div className="wrap cta-inner">
        <div>
          <div className="eyebrow on-dark reveal">Contact · 開始合作</div>
          <h2 className="reveal d1" style={{ marginTop: 18 }}>準備好讓品牌<br /><span className="accent">閃耀</span>了嗎？</h2>
          <p className="lead reveal d2" style={{ marginTop: 18, maxWidth: 440 }}>無論是品牌從零開始，或想提升行銷成效，告訴我們你的需求，一起把構想推向第二象限。</p>
          <div className="contact-meta reveal d3">
            <div className="row"><span className="k">LINE</span><span>@519baqoh</span></div>
            <div className="row"><span className="k">Email</span><span>ssinestudio2024@gmail.com</span></div>
            <div className="row"><span className="k">Area</span><span>台灣 · 港澳市場</span></div>
          </div>
        </div>
        <form className="contact-card reveal d2" onSubmit={(e) => {e.preventDefault();setSent(true);}}>
          <div className="field"><label>稱呼 Name</label><input required placeholder="您的姓名 / 品牌名稱" /></div>
          <div className="field"><label>聯絡方式 Email / LINE</label><input required placeholder="email 或 LINE ID" /></div>
          <div className="field"><label>需求 Project</label><textarea rows="3" placeholder="想聊聊品牌識別、社群代操或廣告投放…"></textarea></div>
          <button type="submit" className="btn btn-accent" style={{ width: "100%", justifyContent: "center" }}>
            {sent ? "已收到，我們會盡快回覆 ✦" : <React.Fragment>送出需求 <span className="arr">→</span></React.Fragment>}
          </button>
        </form>
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
              {NAV.map((n) => <a key={n.id} href={n.id === "contact" ? "contact.html" : "#" + n.id}>{n.zh}</a>)}
            </div>
            <div className="foot-col">
              <h4>Services</h4>
              <a href="#services">品牌識別 VIS</a>
              <a href="#services">平面與包裝</a>
              <a href="#services">社群代操</a>
              <a href="#services">廣告投放</a>
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

Object.assign(window, { Services, Work, Team, Contact, Footer });