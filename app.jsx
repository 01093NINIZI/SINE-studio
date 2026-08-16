/* ============================================================
   app.jsx — controller: reveals · parallax · tweaks
   ============================================================ */

/* ---- TWEAKS ---- */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#F29A76",
  "motion": true
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const variant = HERO_VARIANTS[0];
  const heroKey = variant.key;

  /* accent + motion -> root */
  React.useEffect(() => {
    document.documentElement.style.setProperty("--accent", t.accent);
    document.body.classList.toggle("no-motion", !t.motion);
  }, [t.accent, t.motion]);

/* reveal + axis observers (re-run when hero changes) */
  React.useEffect(() => {
    const io = new IntersectionObserver((ents) => {
      ents.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    const tid = setTimeout(() => {
      document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));
      document.querySelectorAll(".proc").forEach(el => io.observe(el));
    }, 60);
    return () => { clearTimeout(tid); io.disconnect(); };
  }, [heroKey]);

  /* parallax */
  React.useEffect(() => {
    if (!t.motion) return;
    let ticking = false;
    const apply = () => {
      const vh = window.innerHeight;
      document.querySelectorAll(".px-hero, .px-slow").forEach(el => {
        const sp = el.classList.contains("px-hero") ? 0.14 : 0.07;
        const r = el.getBoundingClientRect();
        const off = (r.top + r.height / 2 - vh / 2) * -sp;
        el.style.transform = `translate3d(0,${off.toFixed(1)}px,0)`;
      });
      ticking = false;
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(apply); } };
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, [heroKey, t.motion]);

  return (
    <React.Fragment>
      <NetworkBanner />
      <Nav onDark={variant.dark} />
      <main id="top">
        <section className={"hero " + variant.cls} key={heroKey}>
          <variant.Comp />
        </section>
        <Services />
        <Work />
        <News />
        <Contact />
      </main>
      <Footer />

      <TweaksPanel>
        <TweakSection label="色彩 Color" />
        <TweakColor label="強調色" value={t.accent}
          options={["#F29A76", "#376AB3", "#C9CACA"]}
          onChange={v => setTweak("accent", v)} />
        <TweakSection label="動態 Motion" />
        <TweakToggle label="動態效果（視差・浮動）" value={t.motion} onChange={v => setTweak("motion", v)} />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
