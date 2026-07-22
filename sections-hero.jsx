/* ============================================================
   sections-hero.jsx — Nav · Hero (3 variants) · Spirits · About
   ============================================================ */

const NAV = [
{ id: "about", zh: "關於", en: "About" },
{ id: "services", zh: "服務", en: "Services" },
{ id: "work", zh: "作品", en: "Work" },
{ id: "team", zh: "團隊", en: "Team" },
{ id: "contact", zh: "聯絡", en: "Contact" }];


function Nav({ onDark }) {
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
        <a href="#top" aria-label="第二象限 SINE STUDIO"><Lockup onDark={light} markSize={48} /></a>
        <div className="nav-links">
          {NAV.filter((n) => n.id !== "contact").map((n) => <a key={n.id} href={"#" + n.id} style={light ? { color: "rgba(255,255,255,.8)" } : null}>{n.zh}</a>)}
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
        {NAV.filter((n) => n.id !== "contact").map((n) => <a key={n.id} href={"#" + n.id} onClick={() => setOpen(false)}>{n.zh}<span className="en">{n.en}</span></a>)}
        <a href="contact.html" onClick={() => setOpen(false)} style={{ color: "var(--pink-soft)", borderBottom: "none", marginTop: 10 }}>開始合作 <span className="arr">→</span></a>
      </div>
    </React.Fragment>);

}

const HERO_TAGS = ["品牌識別", "官網、社群代操", "廣告投放", "平面包裝"];
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

    /* --- orange nebula lobes (circle + heavy blur = soft blob) --- */
    ctx.save();
    /* blur in canvas px = visual-px * dpr */
    const blurPx = Math.round(W * 0.088 * dpr);
    ctx.filter = `blur(${blurPx}px)`;

    /* mouse + time offsets */
    const mx1 = reduce ? 0 : Math.sin(t * 0.32        ) * 0.07 + (mx - 0.5) * 0.20;
    const my1 = reduce ? 0 : Math.cos(t * 0.25        ) * 0.06 + (my - 0.5) * 0.14;
    const mx2 = reduce ? 0 : Math.sin(t * 0.26 + 2.09 ) * 0.07 + (mx - 0.5) * 0.20;
    const my2 = reduce ? 0 : Math.cos(t * 0.20 + 1.80 ) * 0.06 + (my - 0.5) * 0.14;
    /* radius pulse */
    const r1 = W * 0.30 * (reduce ? 1 : 1 + 0.10 * Math.sin(t * 0.44));
    const r2 = W * 0.20 * (reduce ? 1 : 1 + 0.10 * Math.sin(t * 0.36 + 1.5));
    const r3 = W * 0.18 * (reduce ? 1 : 1 + 0.10 * Math.sin(t * 0.40 + 3.8));
    const mx3 = reduce ? 0 : Math.sin(t * 0.30 + 4.2) * 0.07 + (mx - 0.5) * 0.16;
    const my3 = reduce ? 0 : Math.cos(t * 0.24 + 3.5) * 0.06 + (my - 0.5) * 0.14;

    /* top-right lobe */
    ctx.fillStyle = 'rgba(242,154,118,0.92)';
    ctx.beginPath();
    ctx.arc((0.86 + mx1) * W, (0.12 + my1) * H, r1, 0, Math.PI * 2);
    ctx.fill();

    /* bottom-center lobe (smaller) */
    ctx.fillStyle = 'rgba(242,154,118,0.82)';
    ctx.beginPath();
    ctx.arc((0.50 + mx2) * W, (0.84 + my2) * H, r2, 0, Math.PI * 2);
    ctx.fill();

    /* third lobe — left-center (smaller) */
    ctx.fillStyle = 'rgba(242,154,118,0.78)';
    ctx.beginPath();
    ctx.arc((0.28 + mx3) * W, (0.52 + my3) * H, r3, 0, Math.PI * 2);
    ctx.fill();

    /* soft gray accent (very subtle, upper-left) */
    const rGray = W * 0.16 * (reduce ? 1 : 1 + 0.08 * Math.sin(t * 0.55 + 3.0));
    ctx.fillStyle = 'rgba(201,202,202,0.28)';
    ctx.beginPath();
    ctx.arc(W * 0.10 + (reduce ? 0 : (mx - 0.5) * W * 0.10),
            H * 0.25 + (reduce ? 0 : (my - 0.5) * H * 0.08), rGray, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();

    if (!reduce) {
      /* ---- cursor follower: reacts to speed ---- */
      ctx.save();
      const cBlur   = Math.round(W * Math.max(0.022, 0.056 - speed * 3.5) * dpr);
      const cR      = W * (0.09 + Math.min(speed * 4, 0.08));
      const cAlpha  = Math.min(0.72, 0.36 + speed * 6);
      ctx.filter    = `blur(${cBlur}px)`;
      ctx.fillStyle = `rgba(242,154,118,${cAlpha.toFixed(2)})`;
      ctx.beginPath();
      ctx.arc(mx * W, my * H, cR, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      /* ---- lagged trail: soft echo behind cursor ---- */
      ctx.save();
      ctx.filter    = `blur(${Math.round(W * 0.048 * dpr)}px)`;
      ctx.fillStyle = 'rgba(242,154,118,0.28)';
      ctx.beginPath();
      ctx.arc(lmx * W, lmy * H, W * 0.10, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    /* ---- Stars & Meteors ---- */
    const scaleX = W / VB_W, scaleY = H / VB_H;
    for (const s of STAR_DATA) {
      const a = Math.max(0, 0.08 + 0.92 * (0.5 + 0.5 * Math.sin(t * (2*Math.PI/s.spd) + s.ph)));
      drawSparkle(ctx, s.x * scaleX, s.y * scaleY, s.s * Math.min(scaleX,scaleY) * 3.5, a);
    }
    for (const m of METEOR_DATA) {
      const a = Math.max(0, Math.sin((t/m.per + m.ph/(2*Math.PI)) * Math.PI * 2));
      drawMeteor(ctx,
        m.x1*scaleX, m.y1*scaleY, m.x2*scaleX, m.y2*scaleY,
        m.w * scaleX * 0.5, a);
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
<div className="hero-inner wrap" style={{ display:'flex', justifyContent:'center', height:'557px', position:'relative', zIndex:1 }}>
        <div className="heroB-inner" style={{ paddingTop:80 }}>
          <div className="eyebrow on-dark reveal in" style={{ justifyContent:'center' }}>SINE STUDIO ／ 第二象限</div>
          <h1 className="h-display reveal in d1" style={{ marginTop:22 }}>
            在第二象限中<br /><span style={{ color:'var(--pink)' }}>閃耀</span>的存在
          </h1>
          <p className="lead reveal in d2" style={{ marginTop:24, marginInline:'auto', maxWidth:600 }}>{HERO_LEAD}</p>
          <div className="hero-tag reveal in d3" style={{ justifyContent:'center' }}>{HERO_TAGS.map((t) => <span key={t}>{t}</span>)}</div>
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

Object.assign(window, { Nav, HeroB, HERO_VARIANTS, Spirits });