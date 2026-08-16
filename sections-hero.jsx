/* ============================================================
   sections-hero.jsx — Nav · Hero (3 variants) · Spirits · About
   ============================================================ */

const NAV = [
{ id: "about", zh: "關於我們", en: "About", href: "about.html" },
{ id: "work", zh: "執行專案", en: "Work", href: "work.html" },
{ id: "news", zh: "最新消息", en: "News", href: "news.html" },
{ id: "contact", zh: "聯繫我們", en: "Contact", href: "contact.html" }];


function NetworkBanner() {
  const [offline, setOffline] = React.useState(typeof navigator !== "undefined" && !navigator.onLine);
  React.useEffect(() => {
    const on = () => setOffline(false), off = () => setOffline(true);
    window.addEventListener("online", on); window.addEventListener("offline", off);
    return () => { window.removeEventListener("online", on); window.removeEventListener("offline", off); };
  }, []);
  if (!offline) return null;
  return (
    <div className="net-banner" role="status">⚠ 網路連線已中斷，部分功能可能無法使用</div>);
}

function Nav({ onDark, isHome = true }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f();window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  const light = onDark && !scrolled;
  return (
    <React.Fragment>
      <nav className={"nav" + (scrolled ? " scrolled" : "")}>
        <a href={isHome ? "#top" : "index.html"} aria-label="第二象限 SINE STUDIO"><Lockup onDark={light} markSize={48} /></a>
        <div className="nav-links">
          {!isHome && <a href="index.html" style={light ? { color: "rgba(255,255,255,.8)" } : null}>回首頁</a>}
          {NAV.filter((n) => n.id !== "contact").map((n) => <a key={n.id} href={n.href} style={light ? { color: "rgba(255,255,255,.8)" } : null}>{n.zh}</a>)}
        </div>
        <a href="contact.html" className="btn btn-accent nav-cta">開始合作 <span className="arr">→</span></a>
        <button className="nav-burger" aria-label="選單" onClick={() => setOpen(true)}
        style={light ? {} : null}>
          <span style={light ? { background: "#fff" } : null}></span>
          <span style={light ? { background: "#fff" } : null}></span>
          <span style={light ? { background: "#fff" } : null}></span>
        </button>
      </nav>
      <div className={"mnav" + (open ? " open" : "")}>
        <div style={{ position: "absolute", top: 20, right: "var(--pad)" }}>
          <button onClick={() => setOpen(false)} style={{ color: "#fff", fontSize: 34, lineHeight: 1 }}>×</button>
        </div>
        {!isHome && <a href="index.html" onClick={() => setOpen(false)}>回首頁<span className="en">Home</span></a>}
        {NAV.filter((n) => n.id !== "contact").map((n) => <a key={n.id} href={n.href} onClick={() => setOpen(false)}>{n.zh}<span className="en">{n.en}</span></a>)}
        <a href="contact.html" onClick={() => setOpen(false)} style={{ color: "var(--pink-soft)", borderBottom: "none", marginTop: 10 }}>開始合作 <span className="arr">→</span></a>
      </div>
    </React.Fragment>);

}

const HERO_WINDMILL_POLYS = [
"134.6 154.77 132.89 156.64 76.53 216.41 57.53 198.53 98.45 155.14 100.88 152.53 115.6 136.92 132.75 153.05 134.6 154.77",
"100.98 155.04 98.45 155.14 16.35 157.55 15.55 131.49 75.21 129.72 78.69 129.6 100.18 128.98 100.88 152.53 100.98 155.04",
"94.93 112.45 78.69 129.6 77.02 131.41 75.21 129.72 15.43 73.34 33.28 54.39 76.71 95.3 79.28 97.7 94.93 112.45",
"102.87 97.01 79.28 97.7 76.81 97.77 76.71 95.3 74.28 13.16 100.36 12.4 102.13 72.02 102.25 75.6 102.87 97.01",
"177.46 30.13 136.54 73.52 134.11 76.13 119.4 91.72 102.25 75.6 100.4 73.87 102.13 72.02 158.46 12.22 177.46 30.13",
"219.45 97.15 159.79 98.92 156.3 99.06 134.81 99.68 134.11 76.13 134.03 73.6 136.54 73.52 218.65 71.09 219.45 97.15",
"219.56 155.31 201.71 174.27 158.29 133.34 155.68 130.92 140.09 116.21 156.3 99.06 157.98 97.25 159.79 98.92 219.56 155.31",
"160.72 215.5 134.64 216.24 132.89 156.64 132.75 153.05 132.13 131.62 155.68 130.92 158.19 130.83 158.29 133.34 160.72 215.5"];
const HERO_SWIRL_D = "M217.69,106.38c2.65.51,2.42,4.36-.27,4.55-3.17.22-6.35.8-9.52,1.64-20.19,5.25-40.37,20.5-60.59,17.09-1.85-.31-3.35,1.55-2.53,3.24,8.92,18.41,29.1,25.57,42.87,39.14,2.34,2.31,4.48,4.81,6.36,7.58,1.51,2.23-1.38,4.79-3.41,3.02-2.41-2.11-5.08-3.95-7.93-5.62-18.02-10.58-43.1-14.08-54.97-30.8-1.09-1.53-3.46-1.28-4.08.5-6.72,19.34,2.56,38.69,2.64,58.03.02,3.26-.22,6.53-.84,9.79-.51,2.65-4.36,2.42-4.55-.27-.22-3.17-.8-6.35-1.64-9.52-5.25-20.21-20.5-40.4-17.09-60.61.31-1.86-1.55-3.35-3.24-2.53-18.41,8.95-25.54,29.12-39.13,42.86-2.31,2.33-4.8,4.48-7.56,6.35-2.23,1.51-4.79-1.37-3.02-3.41,2.1-2.41,3.94-5.08,5.61-7.92,10.58-18.02,14.08-43.1,30.82-54.94,1.54-1.09,1.28-3.46-.49-4.08-19.34-6.75-38.69,2.53-58.03,2.65-3.27.01-6.53-.24-9.8-.86-2.65-.51-2.42-4.35.27-4.55,3.18-.23,6.35-.81,9.53-1.64,20.19-5.25,40.37-20.5,60.59-17.09,1.85.31,3.35-1.55,2.53-3.24-8.92-18.41-29.1-25.54-42.87-39.14-2.34-2.31-4.49-4.81-6.37-7.58-1.51-2.23,1.38-4.79,3.41-3.02,2.41,2.11,5.09,3.95,7.94,5.62,18.02,10.58,43.1,14.1,54.97,30.83,1.09,1.53,3.46,1.28,4.08-.5,6.72-19.34-2.56-38.69-2.64-58.03-.02-3.26.22-6.53.84-9.79.51-2.65,4.36-2.42,4.55.27.22,3.17.8,6.35,1.64,9.52,5.25,20.19,20.5,40.4,17.09,60.59-.31,1.86,1.55,3.35,3.24,2.53,18.41-8.92,25.54-29.1,39.14-42.84,2.3-2.32,4.78-4.46,7.53-6.33,2.23-1.52,4.79,1.37,3.02,3.41-2.09,2.4-3.92,5.05-5.57,7.87-10.58,18.02-14.08,43.1-30.82,54.97-1.54,1.09-1.28,3.46.5,4.08,19.34,6.72,38.68-2.53,58.03-2.64,3.26-.02,6.53.22,9.79.84Z";
const HERO_STARTHIN_D = "M118.2,56.37l5.89,28.48c.11.53.74.75,1.15.4l49-40.51c.67-.55,1.55.34,1,1l-40.51,49c-.34.41-.12,1.04.4,1.15l28.48,5.89c.76.16.76,1.24,0,1.39l-28.48,5.89c-.53.11-.75.74-.4,1.15l40.51,49c.55.67-.34,1.55-1,1l-48.87-40.41c-.44-.36-1.11-.09-1.16.48l-5.99,63.13c-.08.86-1.34.86-1.42,0l-5.99-63.13c-.05-.57-.72-.85-1.16-.48l-48.87,40.41c-.67.55-1.55-.34-1-1l40.51-49c.34-.41.12-1.04-.4-1.15l-28.48-5.89c-.76-.16-.76-1.24,0-1.39l28.48-5.89c.53-.11.75-.74.4-1.15l-40.51-49c-.55-.67.34-1.55,1-1l49,40.51c.41.34,1.04.12,1.15-.4l5.89-28.48c.16-.76,1.24-.76,1.39,0Z";
const HERO_SPARKLE4_D = "M217.71,112.28l-77.55-7.35,39.76-53.04-53.04,39.76-7.35-77.55c-.23-2.47-3.83-2.47-4.07,0l-7.35,77.55-53.04-39.76,39.76,53.04-77.55,7.35c-2.47.23-2.47,3.83,0,4.07l77.55,7.35-39.76,53.04,53.04-39.76,7.35,77.55c.23,2.47,3.83,2.47,4.07,0l7.35-77.55,53.04,39.76-39.76-53.04,77.55-7.35c2.47-.23,2.47-3.83,0-4.07Z";
function HeroIcon({ type, size = 60, color = "#fff" }) {
  const common = { width: size, height: size, viewBox: "0 0 235 228.64", fill: "none", "aria-hidden": true };
  if (type === "windmill") return <svg {...common}>{HERO_WINDMILL_POLYS.map((p, i) => <polygon key={i} points={p} fill={color} />)}</svg>;
  if (type === "swirl") return <svg {...common}><path d={HERO_SWIRL_D} fill={color} /></svg>;
  if (type === "sparkle4") return <svg {...common}><path d={HERO_SPARKLE4_D} fill={color} /></svg>;
  return <svg {...common}><path d={HERO_STARTHIN_D} fill={color} /></svg>;
}

const HERO_SCATTER_ITEMS = [
/* wide: 桌機橫向散落 · narrow: 手機直式散落 */
{ kind: "star", type: "starThin", size: 108, color: "#fff",                 rot: 0,   d: 0.05, wide: { top: "22%", left: "13%" }, narrow: { top: "16%", left: "72%" } },
{ kind: "tag",  label: "電商代操",       fill: "fill-accent", act: { t: "svc", k: "電商代操" },  rot: -10, d: 0.18, wide: { top: "62%", left: "22%" }, narrow: { top: "25%", left: "36%" } },
{ kind: "tag",  label: "群眾集資",       fill: "fill-line",   act: { t: "work", k: "群眾集資" }, rot: -3,  d: 0.28, wide: { top: "34%", left: "38%" }, narrow: { top: "37%", left: "58%" } },
{ kind: "star", type: "sparkle4", size: 56,  color: "rgba(255,255,255,.6)", rot: 8,   d: 0.36, wide: { top: "26%", left: "56%" }, narrow: { top: "67%", left: "62%" } },
{ kind: "tag",  label: "廣告投放",       fill: "fill-line",   act: { t: "svc", k: "廣告投放" },  rot: -8,  d: 0.42, wide: { top: "66%", left: "52%" }, narrow: { top: "60%", left: "43%" } },
{ kind: "star", type: "swirl",    size: 130, color: "var(--accent)",        rot: -6,  d: 0.5,  wide: { top: "18%", left: "89%" }, narrow: { top: "68%", left: "84%" } },
{ kind: "tag",  label: "平面設計",       fill: "fill-accent", act: { t: "work", k: "平面設計" }, rot: -3,  d: 0.58, wide: { top: "40%", left: "70%" }, narrow: { top: "82%", left: "47%" } },
{ kind: "star", type: "windmill", size: 130, color: "rgba(255,255,255,.7)", rot: 15,  d: 0.12, wide: { top: "84%", left: "64%" }, narrow: { top: "76%", left: "17%" } }];

function heroJump(act, e) {
  if (e) e.preventDefault();
  if (!act) return;
  window.dispatchEvent(new CustomEvent(act.t === "svc" ? "sine:open-service" : "sine:filter-work", { detail: act.k }));
}

function HeroScatter() {
  const narrow = typeof window !== "undefined" && window.matchMedia("(max-width:720px)").matches;
  const [isNarrow, setIsNarrow] = React.useState(narrow);
  React.useEffect(() => {
    const mq = window.matchMedia("(max-width:720px)");
    const fn = (e) => setIsNarrow(e.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  const pos = (it) => isNarrow ? it.narrow : it.wide;
  return (
    <div className="hero-scatter">
      {HERO_SCATTER_ITEMS.map((it, i) => it.kind === "star" ? (
        <div key={i} className="scatter-item is-star" style={{ top: pos(it).top, left: pos(it).left, width: "calc(" + it.size + "px * var(--sc,1))", height: "calc(" + it.size + "px * var(--sc,1))", "--rot": it.rot + "deg", "--d": it.d + "s" }}>
          <HeroIcon type={it.type} size="100%" color={it.color} />
        </div>
      ) : (
        <div key={i} className="scatter-item is-tag" style={{ top: pos(it).top, left: pos(it).left, "--rot": it.rot + "deg", "--d": it.d + "s" }}>
          <a href={it.act && it.act.t === "work" ? "#work" : "#services"} onClick={(e) => heroJump(it.act, e)} className={"scatter-tag " + it.fill} style={{ "--pd": (it.d + 0.75) + "s" }}># {it.label}</a>
        </div>
      ))}
    </div>
  );
}

const HERO_LEAD = "第二象限是行銷 × 設計 × 廣告的整合工作室。堅持從 0 到 1，以專業為基準、熱情為動力，讓每一個品牌都能被看見、被實現。";

/* ---- Sparkle & Meteor data (from 流星-24.svg, normalised 0-1) ---- */
const VB_W = 408.57, VB_H = 259.25;
const STAR_DATA = [
  {x:202.93,y: 88.51,s:1.0,ph:0.3 ,spd:4.2},
  {x:191.63,y:184.44,s:0.7,ph:1.7 ,spd:3.8},
  {x:293.91,y:184.44,s:0.6,ph:0.8 ,spd:5.1},
  {x: 39.18,y:209.06,s:0.6,ph:2.4 ,spd:4.6},
  {x: 12.25,y: 48.10,s:0.6,ph:3.1 ,spd:3.5},
  {x:123.52,y: 36.04,s:0.9,ph:0.6 ,spd:4.8},
  {x: 76.14,y:113.41,s:0.9,ph:1.9 ,spd:3.9},
  {x:345.90,y:  8.19,s:0.9,ph:2.7 ,spd:5.3},
  {x:326.28,y: 97.38,s:0.9,ph:0.2 ,spd:4.1},
  {x:377.22,y:135.00,s:0.9,ph:3.5 ,spd:3.6},
];
const METEOR_DATA = [
  {x1:198.02,y1:204.70,x2:373.04,y2: 31.40,w:2.4,per:10,ph:0  },
  {x1:324.49,y1:264.13,x2:377.45,y2:212.27,w:1.7,per:14,ph:4  },
  {x1: 51.16,y1:237.29,x2:104.12,y2:185.43,w:1.7,per:12,ph:7  },
  {x1: 18.94,y1: 76.01,x2: 51.03,y2: 44.59,w:1.2,per: 9,ph:2  },
  {x1:265.69,y1:205.31,x2:233.60,y2:236.73,w:1.2,per:16,ph:11 },
  {x1:139.61,y1:221.18,x2:107.52,y2:252.60,w:1.2,per:11,ph:8  },
  {x1:176.87,y1: 68.09,x2:193.01,y2: 53.09,w:0.9,per: 8,ph:1.5},
  {x1:277.52,y1: 20.18,x2:293.66,y2:  5.18,w:0.9,per:13,ph:5.5},
  {x1: 39.84,y1: 20.21,x2: 50.33,y2: 10.46,w:0.7,per: 7,ph:3  },
  {x1:259.83,y1:150.71,x2:239.51,y2:170.14,w:1.0,per:15,ph:9  },
];

function drawSparkle(ctx, x, y, sz, alpha) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.lineWidth = Math.max(0.4, sz * 0.14);
  ctx.lineCap = 'round';
  for (let i = 0; i < 2; i++) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(i * Math.PI / 2);
    const g = ctx.createLinearGradient(0, -sz, 0, sz);
    g.addColorStop(0,   'rgba(255,255,255,0)');
    g.addColorStop(0.5, 'rgba(255,255,255,1)');
    g.addColorStop(1,   'rgba(255,255,255,0)');
    ctx.strokeStyle = g;
    ctx.beginPath(); ctx.moveTo(0,-sz); ctx.lineTo(0,sz); ctx.stroke();
    ctx.restore();
  }
  ctx.restore();
}

function drawMeteor(ctx, x1, y1, x2, y2, lw, alpha) {
  if (alpha < 0.02) return;
  const g = ctx.createLinearGradient(x1, y1, x2, y2);
  g.addColorStop(0,    'rgba(255,255,255,0)');
  g.addColorStop(0.35, `rgba(255,255,255,${(alpha*0.55).toFixed(2)})`);
  g.addColorStop(0.85, `rgba(201,202,202,${alpha.toFixed(2)})`);
  g.addColorStop(1,    `rgba(201,202,202,${alpha.toFixed(2)})`);
  ctx.save();
  ctx.strokeStyle = g;
  ctx.lineWidth = lw;
  ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke();
  ctx.restore();
}

/* ---- Nebula canvas engine ---- */
function startNebula(canvas) {
  const ctx = canvas.getContext('2d');
  let W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
  let raf;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let mx = 0.5, my = 0.5, tmx = 0.5, tmy = 0.5;
  let lmx = 0.5, lmy = 0.5; /* lagged follower */
  let vx = 0, vy = 0, pmx = 0.5, pmy = 0.5; /* velocity */
  let speed = 0;

  function resize() {
    const r = canvas.getBoundingClientRect();
    W = r.width; H = r.height;
    canvas.width  = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    canvas.style.width  = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function frame(ts) {
    const t = ts / 1000;
    if (!reduce) {
      mx  += (tmx - mx) * 0.04;
      my  += (tmy - my) * 0.04;
      lmx += (mx - lmx) * 0.018;   /* slow trail */
      lmy += (my - lmy) * 0.018;
      vx   = vx * 0.78 + (mx - pmx) * 0.22;
      vy   = vy * 0.78 + (my - pmy) * 0.22;
      speed = speed * 0.88 + Math.sqrt(vx*vx + vy*vy) * 0.12;
      pmx = mx; pmy = my;
    }

    /* --- base blue --- */
    ctx.fillStyle = '#376AB3';
    ctx.fillRect(0, 0, W, H);

    /* orange nebula lobes + cursor glow removed */

    /* ---- Stars & Meteors ---- */
    const scaleX = W / VB_W, scaleY = H / VB_H;
    for (const s of STAR_DATA) {
      const a = Math.max(0, 0.08 + 0.92 * (0.5 + 0.5 * Math.sin(t * (2*Math.PI/s.spd) + s.ph)));
      drawSparkle(ctx, s.x * scaleX, s.y * scaleY, s.s * Math.min(scaleX,scaleY) * 3.5, a);
    }
    for (const m of METEOR_DATA) {
      const x1 = m.x1 * scaleX, y1 = m.y1 * scaleY, x2 = m.x2 * scaleX, y2 = m.y2 * scaleY;
      const dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy) || 1;
      const ux = dx / len, uy = dy / len;
      const overshoot = len * 2.6;
      const totalTravel = len + overshoot * 2;
      const progRaw = (t / m.per + m.ph / (2 * Math.PI));
      const prog = progRaw - Math.floor(progRaw);
      const headDist = -overshoot + prog * totalTravel;
      const headX = x1 + ux * headDist, headY = y1 + uy * headDist;
      const tailX = headX - ux * len, tailY = headY - uy * len;
      const edge = 0.08;
      let a = 1;
      if (prog < edge) a = prog / edge;
      else if (prog > 1 - edge) a = (1 - prog) / edge;
      drawMeteor(ctx, tailX, tailY, headX, headY, m.w * scaleX * 0.5, a);
    }

    raf = requestAnimationFrame(frame);
  }

  const onMove = (e) => {
    const r = canvas.getBoundingClientRect();
    tmx = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
    tmy = Math.max(0, Math.min(1, (e.clientY - r.top)  / r.height));
  };

  resize();
  raf = requestAnimationFrame(frame);
  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', onMove);

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener('resize', resize);
    window.removeEventListener('mousemove', onMove);
  };
}


/* ---- Hero B ---- */
function HeroB() {
  const canvasRef  = React.useRef(null);
  React.useEffect(() => {
    if (canvasRef.current) return startNebula(canvasRef.current);
  }, []);

  return (
    <React.Fragment>
      <canvas ref={canvasRef} style={{ position:'absolute', inset:0, width:'100%', height:'100%', zIndex:0, display:'block' }} />
<div className="hero-inner wrap" style={{ display:'flex', justifyContent:'center', minHeight:557, position:'relative', zIndex:1 }}>
        <div className="heroB-inner" style={{ paddingTop:80 }}>
          <h1 className="h-display reveal in d1" style={{ marginTop:22 }}>
            有產品，但不知道怎麼賣？<br />陪品牌從一個好想法，<br />走到<span style={{ color:'var(--pink)' }}>被市場看見</span>
          </h1>
          <div className="reveal in d3">
            <HeroScatter />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}


const HERO_VARIANTS = [
{ key: "B", label: "星空", cls: "heroB", dark: true, Comp: HeroB }];


/* ---- Brand spirits (4大精神) ---- */
const SPIRITS = [
{ num: "01", zh: "熱情", en: "Enthusiasm", d: "在接收每位客戶的需求時，始終以熱忱與專業的態度，深入理解並回應客戶的期望。" },
{ num: "02", zh: "專業", en: "Professional", d: "面對每一個專案與客戶，秉持追求卓越的信念，堅持以最佳的執行力完成每一項任務。" },
{ num: "03", zh: "堅持", en: "Persistence", d: "跨越單純的價格競爭，致力堅持「設計驅動行銷」的宗旨，提供具價值的服務。" },
{ num: "04", zh: "創造力", en: "Creativity", d: "深信每個品牌皆獨具特色，透過深入理解需求，創造出最適合專案的風格與內容。" }];

const SPIRIT_COLORS = ["var(--blue)", "var(--blue)", "var(--gray)", "var(--blue-700)"];

function Spirits() {
  return (
    <section id="about" className="section" style={{ position: "relative", overflow: "hidden" }}>
      <BrandStar type="burst8" size={200} color="var(--blue)" style={{ position: "absolute", top: -30, right: -50, opacity: 0.06, pointerEvents: "none" }} />
      <BrandStar type="pinwheel" size={90} color="var(--accent)" style={{ position: "absolute", bottom: 30, left: 20, opacity: 0.14, pointerEvents: "none" }} />
      <Crosshatch cols={5} rows={4} cell={22} color="var(--blue)" opacity={0.08}
        style={{ position: "absolute", top: 60, left: -10, pointerEvents: "none" }} />
      <div className="wrap">
        <div className="about-split">
          <div>
            <div className="eyebrow reveal">About · 品牌精神</div>
            <h2 className="h-sec reveal d1" style={{ marginTop: 18 }}>
              捲起袖子，<br />把構想<span style={{ color: "var(--blue)" }}>變成成果</span>
            </h2>
          </div>
          <div className="reveal d2">
            <p className="lead">「第二象限」象徵實際行動與具體落實——不只停留在「構想」，而是真正投入其中，將想法一步步轉化為能被看見、被實現的成果。</p>
            <p className="lead" style={{ marginTop: 16 }}>我們以專業為基準、熱情為動力、堅持為方向，並以創造力讓成果不僅達成，更能閃耀。</p>
            <div className="stat-row">
              <div className="stat"><div className="n">0<span className="accent">→</span>1</div><div className="l">從無到有的落地實踐</div></div>
              <div className="stat"><div className="n">4<span style={{ fontSize: ".5em" }}> 大</span></div><div className="l">品牌核心精神</div></div>
              <div className="stat"><div className="n">3<span className="accent">+</span></div><div className="l">行銷 × 設計 × 廣告</div></div>
            </div>
          </div>
        </div>
        <div className="spirit-grid">
          {SPIRITS.map((s, i) =>
          <div className={"spirit reveal d" + (i + 1)} key={s.zh}>
              <div className="num">{s.num}</div>
              <div className="en">{s.en}</div>
              <h3 style={{ color: SPIRIT_COLORS[i] === "var(--gray)" ? "var(--ink)" : SPIRIT_COLORS[i] }}>{s.zh}</h3>
              <p>{s.d}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

Object.assign(window, { Nav, HeroB, HERO_VARIANTS, Spirits, NetworkBanner });