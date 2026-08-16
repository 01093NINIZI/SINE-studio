/* ============================================================
   sections-news.jsx — News · 最新消息（部落格）
   新增文章：在 NEWS 陣列最前面複製一組物件即可。
   slug：文章網址代號（英數，不可重複）→ news.html?p=slug
   cover / heroImg：封面圖、文章主視覺（assets/…），留空顯示佔位圖
   blocks：文章內容，依序排列
     { t: "h",   v: "小標題" }
     { t: "p",   v: "段落文字" }
     { t: "img", v: "assets/xxx.jpg", cap: "圖說（可省略）" }
     { t: "quote", v: "引用句" }
   ============================================================ */

const NEWS_CATS = ["全部", "二象碎念", "實用工具", "案例分享", "趨勢新知"];

const NEWS = [
{
  slug: "proposal-lessons",
  title: "設計提案被打回票的那一天，我們學到什麼",
  cat: "二象碎念",
  date: "2026.08.10",
  heroColor: "#376AB3",
  cover: "", heroImg: "",
  excerpt: "提案不是把作品攤開給客戶看，而是把客戶心裡那句說不出口的話講清楚。",
  tags: ["提案", "溝通"],
  blocks: [
  { t: "p", v: "那次提案我們準備了三個方向、十二頁簡報，客戶只回了一句「感覺不太對」。回到工作室後我們把整份稿子攤在桌上，發現問題不在視覺，而在我們沒有先確認客戶心中的「對」長什麼樣子。" },
  { t: "h", v: "先對齊語言，再談設計" },
  { t: "p", v: "後來我們調整了流程：提案前先做一輪關鍵字對焦，把「高級」、「年輕」、「溫暖」這種抽象詞轉換成具體的參考圖與色彩範圍。當雙方講的是同一種語言，設計討論才真的開始。" },
  { t: "quote", v: "設計沒有被否定，只是還沒被理解。" }]

},
{
  slug: "daily-tools",
  title: "我們每天都在用的 5 個設計與行銷工具",
  cat: "實用工具",
  date: "2026.07.28",
  heroColor: "#F29A76",
  cover: "", heroImg: "",
  excerpt: "從素材管理到成效追蹤，這幾個工具讓小團隊也能跑出穩定的產出節奏。",
  tags: ["工具", "工作流程"],
  blocks: [
  { t: "p", v: "工具不會讓設計變好，但會讓好設計更快被做出來。以下是我們團隊實際天天在用、而且確實省下時間的幾個選擇。" },
  { t: "h", v: "素材與版本管理" },
  { t: "p", v: "所有專案採統一命名規則與雲端資料夾結構，設計稿版本一律以日期 + 版次標記，避免「最終版最終版」的悲劇。" },
  { t: "h", v: "成效追蹤" },
  { t: "p", v: "廣告數據每週固定匯出成同一份報表模板，讓數字可以跨月比較，而不是每次都重新解讀。" }]

},
{
  slug: "crowdfunding-rhythm",
  title: "從 0 到 300 萬：一個集資專案的節奏拆解",
  cat: "案例分享",
  date: "2026.07.12",
  heroColor: "#376AB3",
  cover: "", heroImg: "",
  excerpt: "前測、預熱、上線、衝刺，四個階段各自要準備的素材與判斷指標。",
  tags: ["群眾集資", "專案管理"],
  blocks: [
  { t: "p", v: "集資專案的成敗常常在上線前就決定了。我們把一個實際專案的時間軸攤開，說明每個階段真正該關注的事。" },
  { t: "h", v: "前測期：驗證願付價格" },
  { t: "p", v: "以問卷與小額廣告測試三種價格帶與兩種主訴求，用實際點擊率決定主視覺方向，而不是憑感覺。" },
  { t: "h", v: "上線首日：集中火力" },
  { t: "p", v: "首日達標率是平台演算法與媒體報導的關鍵，因此所有名單、KOL 貼文與廣告預算都排在同一天釋出。" }]

},
{
  slug: "social-trends-2026h1",
  title: "2026 上半年台灣社群平台的三個變化",
  cat: "趨勢新知",
  date: "2026.06.30",
  heroColor: "#C9CACA",
  cover: "", heroImg: "",
  excerpt: "短影音成本上升、留言區成為新的搜尋入口、品牌帳號開始重視「人味」。",
  tags: ["社群", "趨勢"],
  blocks: [
  { t: "p", v: "我們整理了近半年在客戶帳號上觀察到的實際變化，以及對應的操作調整建議。" },
  { t: "h", v: "短影音不再是免費流量" },
  { t: "p", v: "自然觸及持續下降，短影音需要搭配廣告推播才能穩定放大，內容規劃上必須把製作成本與投放預算一起計算。" },
  { t: "h", v: "留言區的搜尋價值" },
  { t: "p", v: "越來越多消費者透過留言區判斷產品真實評價，主動經營留言回覆的品牌，轉換表現明顯較好。" }]

}];


const NEWS_PAGE = 6; /* 首頁「全部」顯示上限 */
const NEWS_PAGE_CAT = 3; /* 首頁其他分類顯示上限 */
const newsUrl = (p) => "news.html?p=" + p.slug;
const newsCatUrl = (c) => "news.html" + (c && c !== "全部" ? "?cat=" + encodeURIComponent(c) : "");
const newsCount = (c) => NEWS.filter(p => c === "全部" || p.cat === c).length;

/* ---- 卡片 ---- */
function NewsCard({ post: p, delay = 0 }) {
  return (
    <a className="work-card news-card reveal" href={newsUrl(p)}
      style={{ transitionDelay: delay + "s", display: "block", color: "inherit", textDecoration: "none" }}>
      <div className="work-thumb">
        {p.cover ? <img src={p.cover} alt={p.title} loading="lazy" /> : (
        <div className="ph" style={{ color: p.heroColor + "66" }}>
          <Sparkle size={26} color={p.heroColor} />
          <span className="mono">文章封面</span>
        </div>
        )}
        <div className="ov">
          <div style={{ fontSize: 13, opacity: .85 }}>閱讀文章 →</div>
        </div>
      </div>
      <div className="meta">
        <div className="news-date mono">{p.date}</div>
        <h3>{p.title}</h3>
        <p className="news-excerpt">{p.excerpt}</p>
        <div className="tags">
          {[p.cat, ...p.tags.filter(t => t !== p.cat)].slice(0, 3).map((t, i) => <span className={"tag" + (i === 0 ? " active" : "")} key={t}>{t}</span>)}
        </div>
      </div>
    </a>);
}

/* ---- 側邊分類欄 ---- */
function NewsSidebar({ current, exclude }) {
  const recent = NEWS.filter(p => !exclude || p.slug !== exclude).slice(0, 4);
  return (
    <aside className="news-side">
      <div className="news-side-block">
        <div className="news-side-title">文章分類</div>
        <div className="news-cat-list">
          {NEWS_CATS.map(c =>
          <a key={c} href={newsCatUrl(c)} className={"news-cat-item" + (c === current ? " act" : "")}>
            <span>{c}</span><span className="mono n">{newsCount(c)}</span>
          </a>
          )}
        </div>
      </div>
      <div className="news-side-block">
        <div className="news-side-title">最新文章</div>
        <div className="news-recent">
          {recent.map(p =>
          <a key={p.slug} href={newsUrl(p)} className="news-recent-item">
            <span className="mono d">{p.date}</span>
            <span className="t">{p.title}</span>
          </a>
          )}
        </div>
      </div>
      <a className="btn btn-accent news-side-cta" href="contact.html">開始合作 <span className="arr">→</span></a>
    </aside>);
}

/* ---- 文章集合頁（news.html 無參數時） ---- */
function NewsArchive({ cat = "全部" }) {
  const filtered = NEWS.filter(p => cat === "全部" || p.cat === cat);
  return (
    <div className="news-page">
      <div className="wrap news-archive-head">
        <div className="eyebrow">News · 最新消息</div>
        <h1 className="h-sec" style={{ marginTop: 14 }}>二象的<span style={{ color: "var(--blue)" }}>觀察筆記</span></h1>
        <p className="lead" style={{ marginTop: 14, maxWidth: 520 }}>設計、行銷與專案現場的觀察紀錄。</p>
      </div>
      <div className="wrap news-layout">
        <div>
          <div className="news-archive-bar">
            <span className="mono">{cat === "全部" ? "全部文章" : cat} · {filtered.length} 篇</span>
          </div>
          {filtered.length ? (
          <div className="work-grid news-archive-grid">
            {filtered.map((p, i) => <NewsCard key={p.slug} post={p} delay={i % 2 * 0.08} />)}
          </div>
          ) : (
          <p className="lb-sec-text">此分類目前還沒有文章。</p>
          )}
        </div>
        <NewsSidebar current={cat} />
      </div>
    </div>);
}

/* ---- 文章內容（news.html?p=slug） ---- */
function NewsArticle({ post }) {
  const idx = NEWS.findIndex(p => p.slug === post.slug);
  const next = idx > -1 && idx < NEWS.length - 1 ? NEWS[idx + 1] : null;
  const heroIsDark = post.heroColor !== "#C9CACA";

  return (
    <article className="news-page">
      <div className="lb-hero-img" style={{ background: post.heroColor }}>
        {post.heroImg ? <img src={post.heroImg} alt={post.title} /> : (
        <div className="lb-img-ph"><Sparkle size={32} color={heroIsDark ? "rgba(255,255,255,0.5)" : "rgba(55,106,179,0.4)"} /><span style={{ color: heroIsDark ? "rgba(255,255,255,0.7)" : undefined }}>文章主視覺</span></div>
        )}
      </div>

      <div className="lb-titleblock">
        <div className="wrap">
          <div className="lb-tags-row">
            <span className="lb-tag-pill active">{post.cat}</span>
            {post.tags.map(t => <span key={t} className="lb-tag-pill">{t}</span>)}
            <span className="news-date mono">{post.date}</span>
          </div>
          <h1 className="lb-title">{post.title}</h1>
        </div>
      </div>

      <div className="wrap news-layout">
        <div className="news-body">
          {post.blocks.map((b, i) =>
          b.t === "h" ? <h2 className="news-h" key={i}>{b.v}</h2> :
          b.t === "p" ? <p className="lb-sec-text" key={i}>{b.v}</p> :
          b.t === "quote" ? <p className="news-quote" key={i}>{b.v}</p> :
          <figure className="news-figure" key={i}>
              <div className="news-img" style={{ background: "rgba(55,106,179,0.1)" }}>
                {b.v ? <img src={b.v} alt={b.cap || ""} /> : (
                <div className="lb-img-ph"><Sparkle size={18} color="rgba(55,106,179,0.3)" /><span>文章圖片</span></div>
                )}
              </div>
              {b.cap && <figcaption className="mono">{b.cap}</figcaption>}
            </figure>
          )}

          <div className="news-foot">
            <a className="news-back-link" href={newsCatUrl(post.cat)}>← 回「{post.cat}」文章列表</a>
            {next && (
            <a className="lb-next" href={newsUrl(next)} style={{ textDecoration: "none" }}>
              <span className="lb-next-label">NEXT POST</span>
              <span className="lb-next-title">{next.title} →</span>
            </a>
            )}
          </div>
        </div>
        <NewsSidebar current={post.cat} exclude={post.slug} />
      </div>
    </article>);

}

/* ---- 首頁區塊 ---- */
function News() {
  const [cat, setCat] = React.useState("全部");
  const limit = cat === "全部" ? NEWS_PAGE : NEWS_PAGE_CAT;

  const filtered = NEWS.filter((p) => cat === "全部" || p.cat === cat);
  const shown = filtered.slice(0, limit);
  const hasMore = filtered.length > limit;
  const handleCat = (c) => setCat(c);

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
    <section id="news" className="section" style={{ position: "relative", overflow: "hidden", background: "var(--blue-tint-2)" }}>
      <BrandStar type="swirl" size={150} color="var(--blue)" style={{ position: "absolute", top: -20, left: -40, opacity: 0.07, pointerEvents: "none" }} />
      <BrandStar type="oval" size={80} color="var(--gray)" style={{ position: "absolute", bottom: 80, right: 24, opacity: 0.22, pointerEvents: "none" }} />
      <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
          <div>
            <div className="eyebrow reveal">News · 最新消息</div>
            <h2 className="h-sec reveal d1" style={{ marginTop: 16 }}>二象的<span style={{ color: "var(--blue)" }}>觀察筆記</span></h2>
          </div>
          <div className="work-filter reveal d2">
            {NEWS_CATS.map((c) =>
            <button key={c} className={cat === c ? "act" : ""} onClick={() => handleCat(c)}>{c}</button>
            )}
          </div>
        </div>
        <div className="work-grid" ref={gridRef}>
          {shown.map((p, i) => <NewsCard key={p.slug} post={p} delay={i % 3 * 0.08} />)}
        </div>

        {hasMore && (
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <div className="work-count-info mono" style={{ fontSize: 13, color: "var(--muted)", marginBottom: 14 }}>
            已顯示 {shown.length} / {filtered.length} 篇文章
          </div>
          <a className="news-more-link" href={newsCatUrl(cat)}>
            查看全部{cat === "全部" ? "" : cat}文章 <span className="ar">→</span>
          </a>
        </div>
        )}

        {!hasMore && (
        <div style={{ textAlign: "center", marginTop: 34 }}>
          <a className="news-more-link" href={newsCatUrl(cat)}>前往文章總覽 <span className="ar">→</span></a>
        </div>
        )}
      </div>
    </section>);

}

Object.assign(window, { News, NewsArticle, NewsArchive, NewsCard, NewsSidebar, NEWS, NEWS_CATS, newsUrl, newsCatUrl });
