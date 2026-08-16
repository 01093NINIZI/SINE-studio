/* ============================================================
   motifs.jsx — SINE STUDIO brand visual elements (SVG)
   象限軸 · 星光 · 流星 · 削角格線
   ============================================================ */
const { useRef, useState, useEffect, useLayoutEffect } = React;

/* ---- Sparkle: 4-point twinkle (the brand "星光") ---- */
function Sparkle({ size = 40, color = "#376AB3", thin = 0.18, className = "", style = {} }) {
  const r = 50, w = r * thin;
  const d = `M50,${50 - r} C${50 + w},${50 - w} ${50 + w},${50 - w} ${50 + r},50 `
    + `C${50 + w},${50 + w} ${50 + w},${50 + w} 50,${50 + r} `
    + `C${50 - w},${50 + w} ${50 - w},${50 + w} ${50 - r},50 `
    + `C${50 - w},${50 - w} ${50 - w},${50 - w} 50,${50 - r} Z`;
  return (
    <svg className={className} style={style} width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <path d={d} fill={color} />
    </svg>
  );
}

/* ---- 8-point starburst (logo big star: orange + gray + blue) ---- */
function Starburst({ size = 80, className = "", style = {} }) {
  const ray = (cx, cy, len, wd, ang, fill) => {
    const rad = (ang * Math.PI) / 180;
    const dx = Math.cos(rad), dy = Math.sin(rad);
    const px = -dy, py = dx; // perpendicular
    const tipX = cx + dx * len, tipY = cy + dy * len;
    const b1x = cx + px * wd, b1y = cy + py * wd;
    const b2x = cx - px * wd, b2y = cy - py * wd;
    return <path key={ang + "" + fill} d={`M${tipX},${tipY} L${b1x},${b1y} L${cx},${cy} L${b2x},${b2y} Z`} fill={fill} />;
  };
  const cx = 50, cy = 50;
  return (
    <svg className={className} style={style} width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      {/* gray long rays (curved feel via thin) */}
      {[22, 67, 112, 157, 202, 247, 292, 337].map(a => ray(cx, cy, 46, 3.5, a, "#C9CACA"))}
      {/* orange medium */}
      {[0, 90, 180, 270].map(a => ray(cx, cy, 40, 4.5, a, "#F29A76"))}
      {/* blue accent diagonal */}
      {[45, 225].map(a => ray(cx, cy, 34, 5, a, "#376AB3"))}
      <circle cx={cx} cy={cy} r="4" fill="#376AB3" />
    </svg>
  );
}

/* ---- Quadrant mark (logo): axis + sparkles + meteor ---- */
function QuadrantMark({ size = 120, color = "#376AB3", accent = "#F29A76", gray = "#C9CACA" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      {/* y axis */}
      <line x1="30" y1="14" x2="30" y2="100" stroke={color} strokeWidth="3.4" strokeLinecap="square" />
      {/* x axis */}
      <line x1="30" y1="100" x2="110" y2="100" stroke={color} strokeWidth="3.4" strokeLinecap="square" />
      {/* tick on y axis */}
      <line x1="22" y1="88" x2="38" y2="88" stroke={color} strokeWidth="3" />
      {/* meteor trail */}
      <path d="M55,86 L86,40" stroke={color} strokeWidth="4" strokeLinecap="round" opacity="0.92" />
      <circle cx="86" cy="40" r="2.4" fill={color} />
      {/* small gray sparkle */}
      <g transform="translate(52,44)"><Spk r={11} color={gray} /></g>
      {/* big starburst upper right */}
      <g transform="translate(86,38)">
        {[22, 67, 112, 157, 202, 247, 292, 337].map(a => <SpkRay key={a} a={a} len={20} wd={1.6} fill={gray} />)}
        {[0, 90, 180, 270].map(a => <SpkRay key={"o" + a} a={a} len={17} wd={2.1} fill={accent} />)}
        {[45, 225].map(a => <SpkRay key={"b" + a} a={a} len={14} wd={2.3} fill={color} />)}
        <circle r="2" fill={color} />
      </g>
    </svg>
  );
}
function SpkRay({ a, len, wd, fill }) {
  const rad = (a * Math.PI) / 180, dx = Math.cos(rad), dy = Math.sin(rad), px = -dy, py = dx;
  return <path d={`M${dx * len},${dy * len} L${px * wd},${py * wd} L0,0 L${-px * wd},${-py * wd} Z`} fill={fill} />;
}
function Spk({ r = 12, color = "#C9CACA" }) {
  const w = r * 0.2;
  const d = `M0,${-r} C${w},${-w} ${w},${-w} ${r},0 C${w},${w} ${w},${w} 0,${r} C${-w},${w} ${-w},${w} ${-r},0 C${-w},${-w} ${-w},${-w} 0,${-r} Z`;
  return <path d={d} fill={color} />;
}

/* ---- Brand lockup (LOGO-24.svg) ---- */
function Lockup({ onDark = false, markSize = 38 }) {
  return (
    <img
      src="assets/logo-sine.svg"
      alt="第二象限 SINE STUDIO"
      height={markSize}
      style={{
        display: "block",
        width: "auto",
        filter: onDark ? "brightness(0) invert(1)" : "none"
      }}
    />
  );
}

/* ---- Crosshatch grid (輔助圖形: 削角格線) ---- */
function Crosshatch({ cols = 6, rows = 6, cell = 26, color = "#F29A76", stroke = 1, className = "", style = {}, opacity = 0.5 }) {
  const w = cols * cell, h = rows * cell;
  const lines = [];
  for (let i = 0; i <= cols; i++) lines.push(<line key={"v" + i} x1={i * cell} y1={0} x2={i * cell} y2={h} stroke={color} strokeWidth={stroke} />);
  for (let j = 0; j <= rows; j++) lines.push(<line key={"h" + j} x1={0} y1={j * cell} x2={w} y2={j * cell} stroke={color} strokeWidth={stroke} />);
  return (
    <svg className={"crosshatch " + className} style={{ opacity, ...style }} width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none" aria-hidden="true">
      {lines}
    </svg>
  );
}

/* ---- Meteor (animated streak) ---- */
function Meteor({ length = 160, color = "#376AB3", className = "", style = {} }) {
  return (
    <svg className={className} style={style} width={length} height={length} viewBox={`0 0 ${length} ${length}`} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="mg" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor={color} stopOpacity="0" />
          <stop offset="1" stopColor={color} />
        </linearGradient>
      </defs>
      <line x1="6" y1={length - 6} x2={length - 14} y2="14" stroke="url(#mg)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx={length - 14} cy="14" r="3.5" fill={color} />
    </svg>
  );
}

/* ---- ChamferBox: measured chamfer outline frame (削角線條邊框) ---- */
function ChamferBox({ cut = 18, corners = "tr,bl", stroke = "#376AB3", strokeWidth = 1.6, fill = "none", dashDraw = false, className = "", bodyClass = "", style = {}, children }) {
  const ref = useRef(null);
  const [dim, setDim] = useState({ w: 0, h: 0 });
  useLayoutEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const ro = new ResizeObserver(() => setDim({ w: el.offsetWidth, h: el.offsetHeight }));
    ro.observe(el);
    setDim({ w: el.offsetWidth, h: el.offsetHeight });
    return () => ro.disconnect();
  }, []);
  const { w, h } = dim;
  const set = corners.split(",");
  const c = cut;
  const tl = set.includes("tl"), tr = set.includes("tr"), br = set.includes("br"), bl = set.includes("bl");
  let pts = [];
  pts.push(tl ? [0, c] : [0, 0]);
  if (tl) pts.push([c, 0]);
  pts.push(tr ? [w - c, 0] : [w, 0]);
  if (tr) pts.push([w, c]);
  pts.push(br ? [w, h - c] : [w, h]);
  if (br) pts.push([w - c, h]);
  pts.push(bl ? [c, h] : [0, h]);
  if (bl) pts.push([0, h - c]);
  const path = "M" + pts.map(p => p.join(",")).join(" L") + " Z";
  return (
    <div ref={ref} className={"cframe " + className} style={style}>
      {w > 0 && (
        <svg className="cframe-svg" width={w} height={h} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
          <path d={path} fill={fill} stroke={stroke} strokeWidth={strokeWidth}
            vectorEffect="non-scaling-stroke"
            className={dashDraw ? "draw-path" : ""}
            style={dashDraw ? { strokeDasharray: 2 * (w + h), strokeDashoffset: 2 * (w + h) } : {}} />
        </svg>
      )}
      <div className={"cframe-body " + bodyClass}>{children}</div>
    </div>
  );
}

Object.assign(window, { Sparkle, Starburst, QuadrantMark, Lockup, Crosshatch, Meteor, ChamferBox });
