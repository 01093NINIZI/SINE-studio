/* ============================================================
   共用文章／專案版型模板
   news.html 與 work.html 共用同一套結構與樣式
   ============================================================ */

/* ---- 集合頁模板 ---- */
function ArchiveShell({ eyebrow, title, accent, lead, barText, isEmpty, emptyText, sidebar, children }) {
  return (
    <div className="news-page">
      <div className="wrap news-archive-head">
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="h-sec" style={{ marginTop: 14 }}>{title}<span style={{ color: "var(--blue)" }}>{accent}</span></h1>
        {lead && <p className="lead" style={{ marginTop: 14, maxWidth: 520 }}>{lead}</p>}
      </div>
      <div className="wrap news-layout">
        <div>
          <div className="news-archive-bar"><span className="mono">{barText}</span></div>
          {isEmpty ? <p className="lb-sec-text">{emptyText}</p> : <div className="work-grid news-archive-grid">{children}</div>}
        </div>
        {sidebar}
      </div>
    </div>);
}

/* ---- 側邊欄模板 ---- */
function SideShell({ catTitle, cats, catUrl, catCount, current, recentTitle, recent }) {
  return (
    <aside className="news-side">
      <div className="news-side-block">
        <div className="news-side-title">{catTitle}</div>
        <div className="news-cat-list">
          {cats.map(c =>
          <a key={c} href={catUrl(c)} className={"news-cat-item" + (c === current ? " act" : "")}>
            <span>{c}</span><span className="mono n">{catCount(c)}</span>
          </a>
          )}
        </div>
      </div>
      <div className="news-side-block">
        <div className="news-side-title">{recentTitle}</div>
        <div className="news-recent">
          {recent.map(r =>
          <a key={r.href} href={r.href} className="news-recent-item">
            <span className="mono d">{r.meta}</span>
            <span className="t">{r.title}</span>
          </a>
          )}
        </div>
      </div>
      <a className="btn btn-accent news-side-cta" href="contact.html">開始合作 <span className="arr">→</span></a>
    </aside>);
}

/* ---- 內容頁模板（主視覺 2:1 → 標題區 → 內文 → 側邊欄） ---- */
function ArticleShell({ heroColor, heroImg, heroAlt, heroLabel, cat, tags = [], date, title, sidebar, back, next, children }) {
  const heroIsDark = heroColor !== "#C9CACA";
  const pills = [cat, ...tags.filter(t => t !== cat)].slice(0, 3);
  return (
    <article className="news-page">
      <div className="lb-hero-img" style={{ background: heroColor }}>
        {heroImg ? <img src={heroImg} alt={heroAlt} /> : (
        <div className="lb-img-ph">
          <Sparkle size={32} color={heroIsDark ? "rgba(255,255,255,0.5)" : "rgba(55,106,179,0.4)"} />
          <span style={{ color: heroIsDark ? "rgba(255,255,255,0.7)" : undefined }}>{heroLabel}</span>
        </div>
        )}
      </div>
      <div className="lb-titleblock">
        <div className="wrap">
          <div className="lb-tags-row">
            {pills.map((t, i) => <span key={t} className={"lb-tag-pill" + (i === 0 ? " active" : "")}>{t}</span>)}
            {date && <span className="news-date mono">{date}</span>}
          </div>
          <h1 className="lb-title">{title}</h1>
        </div>
      </div>
      <div className="wrap news-layout">
        <div className="news-body">
          {children}
          <div className="news-foot">
            <a className="news-back-link" href={back.href}>{back.label}</a>
            {next && (
            <a className="lb-next" href={next.href} style={{ textDecoration: "none" }}>
              <span className="lb-next-label">{next.label}</span>
              <span className="lb-next-title">{next.title} →</span>
            </a>
            )}
          </div>
        </div>
        {sidebar}
      </div>
    </article>);
}

Object.assign(window, { ArchiveShell, SideShell, ArticleShell });
