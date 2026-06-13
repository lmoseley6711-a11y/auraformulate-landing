import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const }
  }
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 }
  }
};

const glowPulse = {
  animate: {
    opacity: [0.3, 0.6, 0.3],
    scale: [1, 1.08, 1],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const }
  }
};

export default function LandingPage() {
  const [showVideo, setShowVideo] = useState(false);
  const [showFounderVideo, setShowFounderVideo] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(() => 
    localStorage.getItem('launch_banner_dismissed') === 'true'
  );
  const isLaunchWeek = true; // PREVIEW — revert to date check before launch
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const mockupY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <div className="min-h-screen text-[#E8E3D9] overflow-hidden" style={{ background: "#071A14", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>

      {/* GRAIN TEXTURE OVERLAY */}
      <div className="fixed inset-0 pointer-events-none z-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "256px 256px",
        opacity: 0.025,
        mixBlendMode: "overlay"
      }} />

      {/* LAUNCH WEEK BANNER */}
      {isLaunchWeek && !bannerDismissed && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9998,
          background: 'linear-gradient(90deg, #071A14, #0f2d1f, #071A14)',
          borderBottom: '1px solid rgba(184,154,93,0.4)',
          padding: '0.6rem 1.5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem',
        }}>
          <span style={{ fontSize: '0.85rem', color: '#E5C98B' }}>🎉 We're live on Product Hunt!</span>
          <button
            onClick={() => setShowFounderVideo(true)}
            style={{
              fontSize: '0.8rem', color: '#071A14', fontWeight: 600,
              background: 'linear-gradient(135deg, #B89A5D, #D4B87A)',
              border: 'none', borderRadius: '6px', padding: '0.3rem 0.9rem',
              cursor: 'pointer'
            }}>
            Meet the Founder →
          </button>
          <button
            onClick={() => { setBannerDismissed(true); localStorage.setItem('launch_banner_dismissed', 'true'); }}
            style={{ position: 'absolute', right: '1rem', background: 'none', border: 'none', color: '#B89A5D', cursor: 'pointer', fontSize: '1.1rem' }}>
            ✕
          </button>
        </div>
      )}

      {/* FOUNDER VIDEO LIGHTBOX */}
      {showFounderVideo && (
        <div
          onClick={() => setShowFounderVideo(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1rem'
          }}>
          <div onClick={e => e.stopPropagation()} style={{ position: 'relative', width: '100%', maxWidth: '340px' }}>
            <button
              onClick={() => setShowFounderVideo(false)}
              style={{
                position: 'absolute', top: -40, right: 0,
                background: 'none', border: 'none', color: '#B89A5D',
                fontSize: '1.5rem', cursor: 'pointer'
              }}>✕</button>
            <video
              src="https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/founder_video_compressed.mp4"
              controls
              autoPlay
              style={{
                width: '100%', borderRadius: '12px',
                boxShadow: '0 20px 80px rgba(0,0,0,0.8)',
                border: '1px solid rgba(184,154,93,0.2)'
              }}
            />
          </div>
        </div>
      )}

      {/* NAVBAR */}
      <header className="fixed left-0 right-0 z-40 flex items-center justify-between px-8 md:px-14 py-5"
        style={{ top: isLaunchWeek && !bannerDismissed ? '38px' : '0', background: "rgba(7,26,20,0.85)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(184,154,93,0.12)", transition: 'top 0.2s ease' }}>
        <div className="flex flex-col">
          <span className="text-2xl font-semibold tracking-wide text-[#B89A5D]" style={{ lineHeight: 1.1 }}>AuraFormulate</span>
          <span className="text-[9px] tracking-[0.25em] uppercase text-white/30">Made for Makers</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm text-[#A8B5AC]/80">
          <a href="#features" className="hover:text-[#B89A5D] transition-colors duration-200">Features</a>
          <a href="#pricing" className="hover:text-[#B89A5D] transition-colors duration-200">Pricing</a>
          <a href="#who" className="hover:text-[#B89A5D] transition-colors duration-200">About</a>
        </nav>
        <motion.a href="https://app.auraformulate.com" whileHover={{ scale: 1.04, y: -3, boxShadow: "0 8px 30px rgba(168,95,26,0.5), 0 4px 12px rgba(0,0,0,0.4)" }} whileTap={{ scale: 0.97 }}
          className="px-5 py-2 rounded-lg text-sm font-semibold text-white transition"
          style={{ background: "linear-gradient(135deg, #A85F1A, #C17A2E)", boxShadow: "0 6px 20px rgba(0,0,0,0.6), 0 2px 6px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.08) inset", letterSpacing: "0.04em" }}>
          Try Free
        </motion.a>
      </header>

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center" style={{ paddingTop: isLaunchWeek && !bannerDismissed ? '7rem' : '5.5rem', overflow: "hidden" }}>
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 90% 70% at 75% 40%, rgba(106,18,34,0.18) 0%, transparent 55%), radial-gradient(ellipse 50% 60% at 5% 80%, rgba(184,154,93,0.07) 0%, transparent 50%), #071A14"
        }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "linear-gradient(135deg, rgba(7,26,20,0.7) 0%, transparent 50%, rgba(7,26,20,0.5) 100%)"
        }} />
        <div className="absolute left-0 top-0 bottom-0 w-[3px] opacity-25" style={{
          background: "linear-gradient(180deg, transparent, #B89A5D 30%, #B89A5D 70%, transparent)"
        }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-14 grid md:grid-cols-2 gap-12 lg:gap-20 items-center py-16">

          {/* LEFT */}
          <motion.div variants={stagger} initial="hidden" animate="show">

            <motion.div variants={fadeUp} className="mb-8 rounded-2xl overflow-hidden relative"
              style={{
                height: "200px",
                border: "1px solid rgba(184,154,93,0.2)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)"
              }}>
              <img
                src="https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/hero2.jpg"
                alt="Luxury oil pour"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center" }}
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(7,26,20,0.2) 0%, transparent 60%, rgba(7,26,20,0.3) 100%)" }} />
            </motion.div>

            <motion.div variants={fadeUp} className="mb-4 inline-flex items-center gap-2 text-[10px] px-3 py-1.5 rounded-full border"
              style={{ background: "rgba(15,42,34,0.8)", borderColor: "rgba(184,154,93,0.2)", color: "#B89A5D", letterSpacing: "0.18em" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#A85F1A] animate-pulse" />
              NOW LIVE — MADE FOR MAKERS
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl leading-[1.08]" style={{ fontWeight: 500 }}>
              Turn your passion
              <br />for creating
              <br />
              <em style={{ color: "#B89A5D" }}>into a real business</em>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-5 text-[#A8B5AC] text-base leading-relaxed max-w-md"
              style={{ fontWeight: 300, fontFamily: "Georgia, serif" }}>
              Recipes, clients, orders, AI-powered formulation, cost calculations, and shipping — all in one beautiful tool built for makers like you.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <motion.a href="https://app.auraformulate.com"
                whileHover={{ scale: 1.05, y: -4, boxShadow: "0 8px 30px rgba(168,95,26,0.5), 0 4px 12px rgba(0,0,0,0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 rounded-lg font-medium text-white text-sm transition"
                style={{ background: "linear-gradient(135deg, #A85F1A, #C17A2E)", boxShadow: "0 6px 20px rgba(0,0,0,0.6), 0 2px 6px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.08) inset" }}>
                Start free today →
              </motion.a>
              <motion.a href="#features"
                className="px-7 py-3.5 rounded-lg text-sm border transition"
                style={{ color: "#B89A5D", borderColor: "rgba(184,154,93,0.25)", background: "rgba(184,154,93,0.06)" }}
                whileHover={{ background: "rgba(184,154,93,0.12)" }}>
                See what's inside ↓
              </motion.a>
              <motion.button
                onClick={() => setShowVideo(true)}
                className="px-7 py-3.5 rounded-lg text-sm transition flex items-center gap-2"
                style={{ color: "#1a1200", background: "linear-gradient(135deg, #B89A5D, #D4B87A)", boxShadow: "0 6px 20px rgba(0,0,0,0.6), 0 2px 6px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.08) inset", fontWeight: 600, letterSpacing: "0.04em", border: "none" }}
                whileHover={{ scale: 1.05, y: -4, boxShadow: "0 8px 30px rgba(184,154,93,0.5), 0 4px 12px rgba(0,0,0,0.4)" }}
                whileTap={{ scale: 0.97 }}>
                <span style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', width:22, height:22, borderRadius:'50%', background:'rgba(0,0,0,0.15)' }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><polygon points="2,1 9,5 2,9" fill="#1a1200"/></svg>
                </span>
                Watch the Video
              </motion.button>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-12 flex gap-8 text-sm">
              {[{ n: "13", label: "Built-in tools" }, { n: "AI", label: "Recipe generator" }, { n: "Free", label: "To get started" }].map(s => (
                <div key={s.n}>
                  <div className="text-2xl text-[#B89A5D]" style={{ lineHeight: 1 }}>{s.n}</div>
                  <div className="text-[10px] text-white/30 mt-1 uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — App Screenshot */}
          <motion.div style={{ y: mockupY }}
            initial={{ opacity: 0, scale: 0.94, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative">
            <motion.div variants={glowPulse} animate="animate"
              className="absolute -inset-16 blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(106,18,34,0.2), rgba(184,154,93,0.05) 50%, transparent 70%)" }} />

            {/* Shared visual wrapper — ties the two elements together */}
            <div className="relative rounded-2xl overflow-hidden p-3"
              style={{
                background: "linear-gradient(145deg, rgba(15,37,28,0.9), rgba(7,26,20,0.95))",
                border: "1px solid rgba(184,154,93,0.2)",
                boxShadow: "0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.03)"
              }}>

              {/* Gold connector line + label at top */}
              <div className="flex items-center gap-3 mb-3 px-1">
                <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, rgba(184,154,93,0.4), transparent)" }} />
                <span className="text-[9px] text-[#B89A5D]/60 tracking-[0.2em] uppercase">Live Preview</span>
                <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, rgba(184,154,93,0.4))" }} />
              </div>

              {/* Dashboard screenshot */}
              <div className="rounded-xl overflow-hidden"
                style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)" }}>
                <img src="https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/DashboardSS.png"
                  alt="AuraFormulate Dashboard" className="w-full object-cover object-top" style={{ maxHeight: "420px" }} />
              </div>

              {/* Bottom connector — floating badge sits inside the wrapper */}
              <div className="flex items-center gap-3 mt-3 px-1">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg"
                  style={{ background: "rgba(184,154,93,0.07)", border: "1px solid rgba(184,154,93,0.15)" }}>
                  <div className="w-5 h-5 rounded overflow-hidden flex-shrink-0"><img src="https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/icon_formulator.jpg" alt="" className="w-full h-full object-cover" /></div>
                  <div>
                    <div className="text-[10px] font-medium text-[#D9C9A3]">AI Formulator</div>
                    <div className="text-[9px] text-white/30">Ready to use</div>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-1" />
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg"
                  style={{ background: "rgba(184,154,93,0.07)", border: "1px solid rgba(184,154,93,0.15)" }}>
                  <div className="w-5 h-5 rounded overflow-hidden flex-shrink-0"><img src="https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/icon_recipes.jpg" alt="" className="w-full h-full object-cover" /></div>
                  <div>
                    <div className="text-[10px] font-medium text-[#D9C9A3]">Recipe Library</div>
                    <div className="text-[9px] text-white/30">24 saved</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES ICON STRIP */}
      <section style={{
        background: "linear-gradient(180deg, #071A14 0%, #0C2218 50%, #071A14 100%)",
        borderTop: "1px solid rgba(184,154,93,0.1)",
        borderBottom: "1px solid rgba(184,154,93,0.1)",
        padding: "48px 6%",
        position: "relative"
      }}>
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(184,154,93,0.06), transparent)" }} />
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="max-w-5xl mx-auto grid grid-cols-4 md:grid-cols-7 gap-4 md:gap-6">
          {[
            { img: "https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/icon_formulator.jpg", label: "Formulator" },
            { img: "https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/icon_recipes.jpg", label: "Recipes" },
            { img: "https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/icon_orders.jpg", label: "Orders" },
            { img: "https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/icon_inventory.jpg", label: "Inventory" },
            { img: "https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/icon_fragrance.jpg", label: "Fragrance" },
            { img: "https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/icon_clients.jpg", label: "Clients" },
            { img: "https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/icon_shipping.jpg", label: "Shipping" },
          ].map((f) => (
            <motion.div key={f.label} variants={fadeUp} whileHover={{ y: -4, scale: 1.05 }}
              className="flex flex-col items-center text-center group cursor-default">
              <div className="w-12 h-12 rounded-xl overflow-hidden mb-2.5 transition-all duration-300"
                style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.4)" }}>
                <img src={f.img} alt={f.label} className="w-full h-full object-cover" />
              </div>
              <div className="text-[10px] font-medium text-[#D9C9A3]/70 tracking-wide">{f.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SCREENSHOT SHOWCASE */}
      <section className="py-24 px-8 md:px-14" style={{
        background: "linear-gradient(180deg, #071A14 0%, #0C2218 60%, #071A14 100%)", position: "relative"
      }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(184,154,93,0.03) 0%, transparent 70%)" }} />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-14 relative z-10">
          <div className="text-[10px] text-[#B89A5D] uppercase tracking-[0.2em] mb-3">See it in action</div>
          <h2 className="text-4xl md:text-5xl" style={{ fontWeight: 500 }}>
            Every tool you need, <em className="italic" style={{ color: "#B89A5D" }}>beautifully designed</em>
          </h2>
          <div className="mx-auto mt-5 h-px w-24"
            style={{ background: "linear-gradient(90deg, transparent, rgba(184,154,93,0.4), transparent)" }} />
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
          {[
            { img: "https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/Recipe_Library.png", label: "Recipe Library", desc: "Every formula saved, searchable, and ready to scale to any batch size.", icon: "https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/icon_recipes.jpg" },
            { img: "https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/client_profiles.png", label: "Client Profiles", desc: "Track clients, their skin type, allergies, preferences, and full order history — all in one place.", icon: "https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/icon_clients.jpg" },
            { img: "https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/Cost_Pricing.png", label: "Cost & Pricing", desc: "Know exactly what each formula costs to make and what to charge for it.", icon: "https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/icon_cost.jpg" },
          ].map((s) => (
            <motion.div key={s.label} variants={fadeUp} whileHover={{ y: -8 }} className="rounded-2xl overflow-hidden cursor-default"
              style={{
                background: "linear-gradient(180deg, #0F2520 0%, #071A14 100%)",
                border: "1px solid rgba(184,154,93,0.18)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)"
              }}>
              <div className="overflow-hidden" style={{ height: "200px", position: "relative" }}>
                <img src={s.img} alt={s.label} className="w-full object-cover object-top transition-transform duration-700 hover:scale-105" style={{ height: "200px" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(15,37,32,0.1) 0%, rgba(7,26,20,0.5) 100%)" }} />
              </div>
              <div className="p-5 relative">
                <div className="absolute top-0 left-5 right-5 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(184,154,93,0.2), transparent)" }} />
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-base">{s.icon}</span>
                  <span className="text-base font-medium text-[#D9C9A3]">{s.label}</span>
                </div>
                <p className="text-xs text-white/40 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FEATURES — text left, 2x2 grid right */}
      <section className="px-8 md:px-14 py-24 border-t" id="features" style={{
        borderColor: "rgba(184,154,93,0.1)",
        background: "linear-gradient(180deg, #071A14 0%, #0D2118 100%)",
        position: "relative"
      }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(90deg, rgba(7,26,20,0.6) 0%, transparent 20%, transparent 80%, rgba(7,26,20,0.6) 100%)" }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="text-[10px] text-[#B89A5D] uppercase tracking-[0.2em] mb-4">Power your business</div>
              <h2 className="text-4xl md:text-5xl leading-tight" style={{ fontWeight: 500 }}>
                Everything you need, <em className="italic" style={{ color: "#B89A5D" }}>all in one place.</em>
              </h2>
              <p className="mt-5 text-[#A8B5AC] text-base leading-relaxed" style={{ fontWeight: 300, fontFamily: "Georgia, serif" }}>
                Built specifically for cosmetic creators, small brands, and makers who want to grow without the chaos.
              </p>
              <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-8 space-y-3">
                {["Real-time ingredient cost calculations", "AI-powered recipe generation", "Client management & order tracking", "Fragrance blending with AI guidance", "INCI labeling & compliance tools", "Shipping rate calculator"].map(item => (
                  <motion.li key={item} variants={fadeUp} className="flex items-start gap-3 text-sm text-[#A8B5AC]">
                    <span className="mt-0.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] text-[#B89A5D]"
                      style={{ background: "rgba(184,154,93,0.12)", border: "1px solid rgba(184,154,93,0.2)" }}>✓</span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.a href="https://app.auraformulate.com"
                whileHover={{ scale: 1.03, y: -4, boxShadow: "0 8px 30px rgba(168,95,26,0.5), 0 4px 12px rgba(0,0,0,0.4)" }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg text-sm text-white font-medium transition"
                style={{ background: "linear-gradient(135deg, #A85F1A, #C17A2E)", boxShadow: "0 6px 20px rgba(0,0,0,0.6), 0 2px 6px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.08) inset" }}>
                Explore all features →
              </motion.a>
            </motion.div>

            {(() => {
              const cards = [
                { title: "Smart Formulator", img: "https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/FormulatorSS.png" },
                { title: "Order Management", img: "https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/OrdersSS.png" },
                { title: "Fragrance Blender", img: "https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/Fragrance-zoom.png" },
                { title: "Education Hub", img: "https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/Education-HubSS.png" },
              ];
              const ScreenshotGrid = () => {
                const [hovered, setHovered] = useState<string | null>(null);
                return (
                  <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="grid grid-cols-2 gap-3" style={{ position: "relative" }}>
                    {cards.map((card) => (
                      <motion.div key={card.title} variants={fadeUp}
                        className="relative rounded-xl cursor-pointer"
                        style={{
                          aspectRatio: "4/3",
                          border: `1px solid ${hovered === card.title ? "rgba(184,154,93,0.4)" : "rgba(184,154,93,0.18)"}`,
                          boxShadow: hovered === card.title ? "0 30px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(184,154,93,0.2)" : "0 16px 50px rgba(0,0,0,0.5)",
                          overflow: "hidden",
                          zIndex: hovered === card.title ? 20 : 1,
                          transition: "border 0.2s, box-shadow 0.2s, z-index 0s",
                        }}
                        animate={{ scale: hovered === card.title ? 1.85 : 1 }}
                        transition={{ duration: 0.35, ease: [0.34, 1.2, 0.64, 1] }}
                        onMouseEnter={() => setHovered(card.title)}
                        onMouseLeave={() => setHovered(null)}
                      >
                        <img src={card.img} alt={card.title} className="w-full h-full object-cover object-top" />
                        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(7,20,16,0.92) 100%)" }} />
                        {/* Gold top line on hover */}
                        <div className="absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-200"
                          style={{ background: "linear-gradient(90deg, transparent, rgba(184,154,93,0.6), transparent)", opacity: hovered === card.title ? 1 : 0 }} />
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <div className="text-xs font-medium text-[#D9C9A3]">{card.title}</div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                );
              };
              return <ScreenshotGrid />;
            })()}
          </div>
        </div>
      </section>

      {/* ─── MEET AURA ─── */}
      <section className="px-8 md:px-14 py-24 border-t" style={{
        borderColor: "rgba(184,154,93,0.1)",
        background: "linear-gradient(180deg, #071A14 0%, #0C1F18 50%, #071A14 100%)",
        position: "relative", overflow: "hidden"
      }}>
        {/* Deep wine glow — layered with dark green to prevent pink cast */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 70% 90% at 15% 50%, rgba(90,12,20,0.18) 0%, rgba(7,26,20,0.65) 55%, transparent 75%)"
        }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 50% 60% at 85% 40%, rgba(184,154,93,0.06) 0%, transparent 60%)"
        }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 55% 100% at 0% 50%, rgba(7,26,20,0.45) 0%, transparent 55%)"
        }} />

        <div className="max-w-6xl mx-auto relative z-10">

          {/* Aura portrait + intro — two column */}
          <div className="grid md:grid-cols-2 gap-14 items-center mb-20">

            {/* Left — portrait */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="relative rounded-2xl overflow-hidden"
                style={{
                  border: "1px solid rgba(184,154,93,0.25)",
                  boxShadow: "0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(184,154,93,0.06)",
                  maxHeight: "560px"
                }}>
                <img
                  src="https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/AURAIMAGE.png"
                  alt="Aura — AI Formulation Assistant"
                  className="w-full object-cover"
                  style={{ objectPosition: "center top", maxHeight: "560px" }}
                />
                <div className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(184,154,93,0.6), transparent)" }} />
                <div className="absolute bottom-0 left-0 right-0 h-28"
                  style={{ background: "linear-gradient(180deg, transparent, rgba(7,26,20,0.9))" }} />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="text-[10px] text-[#B89A5D] uppercase tracking-[0.25em] mb-0.5">Your AI Creative Partner</div>
                  <div className="text-2xl text-[#E8E3D9]" style={{ fontWeight: 500 }}>Aura</div>
                </div>
              </div>
            </motion.div>

            {/* Right — intro text */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }}>
              <div className="flex items-center gap-4 mb-5">
                <div className="h-px w-16" style={{ background: "linear-gradient(90deg, transparent, #B89A5D)" }} />
                <span className="text-[#B89A5D] text-xl">✦</span>
              </div>
              <div className="text-[10px] text-[#B89A5D] uppercase tracking-[0.2em] mb-3">Your AI creative partner</div>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontWeight: 500 }}>
                Meet <em style={{ color: "#B89A5D" }}>Aura</em>
              </h2>
              <p className="text-[#A8B5AC] text-base leading-relaxed mb-5" style={{ fontWeight: 300, fontFamily: "Georgia, serif" }}>
                Aura is the AI at the heart of AuraFormulate — a world-class perfumer, formulation expert, and creative collaborator who speaks to you the way a knowledgeable friend would. Not robotic. Not generic. Intuitive, inspiring, and always in your corner.
              </p>
              <p className="text-[#A8B5AC] text-base leading-relaxed" style={{ fontWeight: 300, fontFamily: "Georgia, serif" }}>
                Tell her what you want to create and she builds it from your actual inventory. Describe a mood and she composes a signature fragrance blend. Ask her anything about your formula and she answers like an expert who actually knows your business.
              </p>
              <div className="mt-8 pt-6 border-t" style={{ borderColor: "rgba(184,154,93,0.12)" }}>
                <div className="text-sm italic text-[#D9C9A3]/70" style={{ fontFamily: "Georgia, serif" }}>
                  "I'm not here to replace your creativity — I'm here to make more of it possible."
                </div>
                <div className="text-[10px] text-[#B89A5D] mt-2 tracking-widest uppercase">— Aura</div>
              </div>
            </motion.div>

          </div>

          {/* Section subheader for the cards */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-12">
            <div className="text-[10px] text-[#B89A5D] uppercase tracking-[0.2em] mb-2">What she can do</div>
            <h3 className="text-2xl text-[#E8E3D9]" style={{ fontWeight: 400 }}>Aura works across your entire business</h3>
          </motion.div>

          {/* Three feature cards */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6">

            {/* Card 1 — Formulator */}
            <motion.div variants={fadeUp} whileHover={{ y: -6 }}
              className="rounded-2xl p-7 relative overflow-hidden"
              style={{
                background: "linear-gradient(145deg, rgba(15,42,34,0.7), rgba(7,26,20,0.9))",
                border: "1px solid rgba(184,154,93,0.18)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)"
              }}>
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(184,154,93,0.3), transparent)" }} />
              <div className="w-full h-36 rounded-xl overflow-hidden mb-5 -mx-0" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.4)" }}>
                <img src="https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/aura123.png" alt="Aura formulating" className="w-full h-full object-cover" style={{ objectPosition: "center 25%" }} />
              </div>
              <div className="text-[10px] text-[#B89A5D] uppercase tracking-widest mb-2">Smart Formulator</div>
              <h3 className="text-xl text-[#E8E3D9] mb-3" style={{ fontWeight: 500 }}>Aura builds recipes with you</h3>
              <p className="text-sm text-[#A8B5AC] leading-relaxed" style={{ fontFamily: "Georgia, serif", fontWeight: 300 }}>
                Tell Aura what you want to create — the skin type, the feel, the purpose — and she'll generate a complete, professional formula using ingredients you actually have. She explains every choice, suggests phases, and flags potential conflicts so you understand your formula, not just follow it.
              </p>
              <div className="mt-5 pt-5 border-t" style={{ borderColor: "rgba(184,154,93,0.1)" }}>
                <div className="text-[10px] text-[#B89A5D]/60 italic">"Give me a lightweight serum for oily skin with my rosehip and niacinamide..."</div>
              </div>
            </motion.div>

            {/* Card 2 — Fragrance Blender */}
            <motion.div variants={fadeUp} whileHover={{ y: -6 }}
              className="rounded-2xl p-7 relative overflow-hidden"
              style={{
                background: "linear-gradient(145deg, rgba(20,45,34,0.8), rgba(11,28,20,0.95))",
                border: "1px solid rgba(184,154,93,0.25)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(184,154,93,0.04)"
              }}>
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(184,154,93,0.5), transparent)" }} />
              {/* Featured badge */}
              <div className="absolute top-4 right-4 px-2 py-0.5 rounded-full text-[9px] font-semibold text-[#071A14] uppercase tracking-widest"
                style={{ background: "linear-gradient(135deg, #C6A86B, #B89A5D)" }}>Fan Favorite</div>
              <div className="w-full h-36 rounded-xl overflow-hidden mb-5" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.4)" }}>
                <img src="https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/aura66543.png" alt="Aura smelling fragrance" className="w-full h-full object-cover" style={{ objectPosition: "center 20%" }} />
              </div>
              <div className="text-[10px] text-[#B89A5D] uppercase tracking-widest mb-2">Fragrance Blender</div>
              <h3 className="text-xl text-[#E8E3D9] mb-3" style={{ fontWeight: 500 }}>Aura thinks like a perfumer</h3>
              <p className="text-sm text-[#A8B5AC] leading-relaxed" style={{ fontFamily: "Georgia, serif", fontWeight: 300 }}>
                Describe a mood, a memory, a feeling — and Aura composes three complete, distinct fragrance blends, each with a name, a story, and a full top/middle/base note breakdown. She works with your existing scent library or suggests inspired additions. Save your favorites, attach them to recipes, or link them to a specific client's profile.
              </p>
              <div className="mt-5 pt-5 border-t" style={{ borderColor: "rgba(184,154,93,0.1)" }}>
                <div className="flex flex-wrap gap-1.5">
                  {["Top/Mid/Base notes", "3 blend concepts", "Client profiles", "Save to recipe"].map(tag => (
                    <span key={tag} className="text-[9px] px-2 py-1 rounded-full text-[#B89A5D]"
                      style={{ background: "rgba(184,154,93,0.08)", border: "1px solid rgba(184,154,93,0.15)" }}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Card 3 — Labeling + Etsy */}
            <motion.div variants={fadeUp} whileHover={{ y: -6 }}
              className="rounded-2xl p-7 relative overflow-hidden"
              style={{
                background: "linear-gradient(145deg, rgba(15,42,34,0.7), rgba(7,26,20,0.9))",
                border: "1px solid rgba(184,154,93,0.18)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)"
              }}>
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(184,154,93,0.3), transparent)" }} />
              <div className="w-full h-52 rounded-xl overflow-hidden mb-5" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.4)" }}>
                <img src="https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/a2.png" alt="Aura at lab bench" className="w-full h-full object-cover" style={{ objectPosition: "center 45%" }} />
              </div>
              <div className="text-[10px] text-[#B89A5D] uppercase tracking-widest mb-2">Labeling & Marketing</div>
              <h3 className="text-xl text-[#E8E3D9] mb-3" style={{ fontWeight: 500 }}>From formula to shelf-ready</h3>
              <p className="text-sm text-[#A8B5AC] leading-relaxed" style={{ fontFamily: "Georgia, serif", fontWeight: 300 }}>
                Aura turns your recipe into a complete compliance package — proper INCI names in descending order, marketing claims, required warnings, and storage instructions. Then she keeps going: generate polished product descriptions, SEO-optimized Etsy listing copy, and tags that actually get found. Everything ready to copy, save, or send straight to Canva.
              </p>
              <div className="mt-5 pt-5 border-t" style={{ borderColor: "rgba(184,154,93,0.1)" }}>
                <div className="flex flex-wrap gap-1.5">
                  {["INCI names", "Compliance copy", "Etsy listings", "SEO tags", "Canva export"].map(tag => (
                    <span key={tag} className="text-[9px] px-2 py-1 rounded-full text-[#B89A5D]"
                      style={{ background: "rgba(184,154,93,0.08)", border: "1px solid rgba(184,154,93,0.15)" }}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* Bottom Aura quote */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 rounded-2xl px-8 py-6 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(106,18,34,0.12), rgba(184,154,93,0.06))",
              border: "1px solid rgba(184,154,93,0.15)"
            }}>
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(106,18,34,0.06), transparent 70%)" }} />
            <p className="text-base italic text-[#D9C9A3] relative z-10" style={{ fontFamily: "Georgia, serif" }}>
              "I'm not here to replace your creativity — I'm here to make more of it possible."
            </p>
            <p className="text-[10px] text-[#B89A5D] mt-2 tracking-widest uppercase relative z-10">— Aura</p>
          </motion.div>

        </div>
      </section>

      {/* ─── SEE IT IN ACTION — VIDEOS ─── */}
      <section className="px-8 md:px-14 py-24 border-t" style={{
        borderColor: "rgba(184,154,93,0.1)",
        background: "linear-gradient(180deg, #0C2218 0%, #071A14 100%)",
        position: "relative", overflow: "hidden"
      }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(184,154,93,0.04) 0%, transparent 60%)"
        }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-14">
            <div className="text-[10px] text-[#B89A5D] uppercase tracking-[0.2em] mb-3">Watch it work</div>
            <h2 className="text-4xl md:text-5xl" style={{ fontWeight: 500 }}>
              See Aura in <em style={{ color: "#B89A5D" }}>action</em>
            </h2>
            <p className="mt-4 text-[#A8B5AC] text-sm max-w-lg mx-auto leading-relaxed" style={{ fontWeight: 300, fontFamily: "Georgia, serif" }}>
              Watch how AuraFormulate turns a blank page into a complete formula, a signature scent, and a ready-to-publish listing — in minutes.
            </p>
            <div className="mx-auto mt-5 h-px w-24"
              style={{ background: "linear-gradient(90deg, transparent, rgba(184,154,93,0.4), transparent)" }} />
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8">

            {/* Video 1 — Fragrance Blender */}
            <motion.div variants={fadeUp} className="group">
              {/* Video container — replace src with your Supabase video URL when ready */}
              <div className="relative rounded-2xl overflow-hidden"
                style={{
                  aspectRatio: "16/9",
                  background: "linear-gradient(135deg, #0F2520, #0A1A10)",
                  border: "1px solid rgba(184,154,93,0.2)",
                  boxShadow: "0 30px 80px rgba(0,0,0,0.5)"
                }}>
                {/* SWAP THIS for your video: replace the div below with:
                    <video src="YOUR_SUPABASE_VIDEO_URL" controls poster="YOUR_THUMBNAIL_URL"
                      className="w-full h-full object-cover" /> */}
                <video
                  controls
                  className="w-full h-full object-cover"
                  style={{ background: "#071A14" }}
                  poster="https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/Fragrance-zoom.png"
                >
                  <source src="https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/fragrance_demo.mp4" type="video/mp4" />
                </video>

                {/* Gold top accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(184,154,93,0.4), transparent)" }} />
              </div>

              {/* Caption */}
              <div className="mt-4 px-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-5 h-5 rounded overflow-hidden flex-shrink-0"><img src="https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/icon_fragrance.jpg" alt="" className="w-full h-full object-cover" /></div>
                  <span className="text-sm font-medium text-[#D9C9A3]">Aura builds a fragrance blend</span>
                </div>
                <p className="text-xs text-white/40 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>
                  Watch Aura take a mood description and turn it into three complete, named scent blends — top, middle, and base notes broken down, usage rates included, ready to attach to any recipe or client.
                </p>
              </div>
            </motion.div>

            {/* Video 2 — Formulator */}
            <motion.div variants={fadeUp} className="group">
              <div className="relative rounded-2xl overflow-hidden"
                style={{
                  aspectRatio: "16/9",
                  background: "linear-gradient(135deg, #0F2520, #0A1A10)",
                  border: "1px solid rgba(184,154,93,0.2)",
                  boxShadow: "0 30px 80px rgba(0,0,0,0.5)"
                }}>
                {/* SWAP THIS for your video: replace the div below with:
                    <video src="YOUR_SUPABASE_VIDEO_URL" controls poster="YOUR_THUMBNAIL_URL"
                      className="w-full h-full object-cover" /> */}
                <video
                  controls
                  className="w-full h-full object-cover"
                  style={{ background: "#071A14" }}
                  poster="https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/Formulator-zoom.png"
                >
                  <source src="https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/formulator_demo.mp4" type="video/mp4" />
                </video>

                <div className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(184,154,93,0.4), transparent)" }} />
              </div>

              <div className="mt-4 px-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-5 h-5 rounded overflow-hidden flex-shrink-0"><img src="https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/icon_formulator.jpg" alt="" className="w-full h-full object-cover" /></div>
                  <span className="text-sm font-medium text-[#D9C9A3]">Aura formulates a recipe from scratch</span>
                </div>
                <p className="text-xs text-white/40 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>
                  From a simple description to a complete, costed formula — watch Aura select ingredients, assign phases, flag interactions, and generate a recipe ready to save to your library in under a minute.
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* MID-PAGE EMOTIONAL SECTION */}
      <section className="relative py-28 px-8 md:px-14 overflow-hidden" style={{ background: "#071A14" }}>
        <img
          src="https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/midpage2.jpg"
          alt="Luxury bathroom scene"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center", opacity: 0.18 }}
        />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(106,18,34,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 80% at 20% 50%, rgba(184,154,93,0.08) 0%, transparent 60%), rgba(7,26,20,0.72)" }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16" style={{ background: "linear-gradient(90deg, transparent, #B89A5D)" }} />
              <span className="text-[#B89A5D] text-xl">✦</span>
              <div className="h-px w-16" style={{ background: "linear-gradient(90deg, #B89A5D, transparent)" }} />
            </div>
            <div className="text-[10px] text-[#B89A5D] uppercase tracking-[0.2em] mb-4">Built for people like you</div>
            <h2 className="text-4xl md:text-5xl leading-tight mb-6" style={{ fontWeight: 500 }}>
              Your craft deserves
              <br /><em style={{ color: "#B89A5D" }}>a serious business behind it</em>
            </h2>
            <p className="text-[#A8B5AC] text-base leading-relaxed max-w-2xl mx-auto" style={{ fontWeight: 300, fontFamily: "Georgia, serif" }}>
              You put love, knowledge, and skill into every product you make. AuraFormulate gives you the business infrastructure to match — so you can charge what you're worth, serve your clients beautifully, and never lose a formula again.
            </p>
            <div className="flex items-center justify-center gap-4 mt-10">
              <div className="h-px w-16" style={{ background: "linear-gradient(90deg, transparent, #B89A5D)" }} />
              <span className="text-[#B89A5D] text-xl">✦</span>
              <div className="h-px w-16" style={{ background: "linear-gradient(90deg, #B89A5D, transparent)" }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHO IT'S FOR + TESTIMONIAL */}
      <section className="px-8 md:px-14 py-24 border-t" id="who" style={{
        borderColor: "rgba(184,154,93,0.1)",
        background: "linear-gradient(180deg, #0C2218 0%, #071A14 100%)",
        position: "relative"
      }}>
        <div className="absolute right-0 top-1/4 w-64 h-64 pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(106,18,34,0.1), transparent 70%)", filter: "blur(40px)" }} />
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="text-[10px] text-[#B89A5D] uppercase tracking-[0.2em] mb-4">Who it's for</div>
            <h2 className="text-4xl md:text-5xl leading-tight" style={{ fontWeight: 500 }}>
              Whether you're just starting
              <br />or <em style={{ color: "#B89A5D" }}>scaling up</em>
            </h2>
            <p className="mt-5 text-[#A8B5AC] text-sm leading-relaxed" style={{ fontWeight: 300, fontFamily: "Georgia, serif" }}>
              It doesn't matter if you're making your first batch or your hundredth. If you handcraft beauty and cosmetic products and want to run your business with more confidence — AuraFormulate is for you.
            </p>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-wrap gap-2 mt-7">
              {["Etsy Sellers", "Custom Product Makers", "Natural Beauty Creators", "Small Beauty Brands", "Soap Makers", "Lip & Nail Artists", "Skincare Creators", "Hair Care Makers"].map((pill) => (
                <motion.span key={pill} variants={fadeUp}
                  whileHover={{ borderColor: "rgba(184,154,93,0.4)", background: "rgba(106,18,34,0.15)" }}
                  className="px-3 py-1.5 rounded-full text-xs text-[#A8B5AC] border cursor-default transition"
                  style={{ background: "rgba(15,42,34,0.5)", borderColor: "rgba(184,154,93,0.15)" }}>
                  {pill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col gap-6">
            {/* Aura lifestyle image */}
            <div className="rounded-2xl overflow-hidden relative"
              style={{ border: "1px solid rgba(184,154,93,0.2)", boxShadow: "0 20px 60px rgba(0,0,0,0.5)", height: "260px" }}>
              <img src="https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/aura47654.png"
                alt="Aura in her studio" className="w-full h-full object-cover" style={{ objectPosition: "center 20%" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(7,26,20,0.7) 100%)" }} />
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(184,154,93,0.4), transparent)" }} />
            </div>
            {/* Testimonial */}
            <div className="rounded-2xl p-7 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(15,42,34,0.8), rgba(11,28,20,0.9))",
                border: "1px solid rgba(184,154,93,0.18)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.4)"
              }}>
              <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none"
                style={{ background: "radial-gradient(circle at top right, rgba(184,154,93,0.08), transparent 70%)" }} />
              <div className="text-5xl text-[#B89A5D] leading-none mb-3" style={{ opacity: 0.5 }}>"</div>
              <p className="text-base italic text-[#E8E3D9] leading-relaxed mb-5">
                I used to dread the business side of things. Now I actually feel like I know what I'm doing. My recipes are all in one place, I know exactly what to charge, and my clients think I'm way more organized than I actually am.
              </p>
              <div className="h-px mb-4" style={{ background: "linear-gradient(90deg, rgba(184,154,93,0.2), transparent)" }} />
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-[#B89A5D] font-semibold border text-sm"
                  style={{ background: "linear-gradient(135deg, #071A14, #1a3020)", borderColor: "rgba(184,154,93,0.2)" }}>S</div>
                <div>
                  <div className="text-sm font-medium text-[#E8E3D9]">Sarah M.</div>
                  <div className="text-[10px] text-white/30 mt-0.5">Small-batch skincare creator · Etsy seller since 2019</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRICING */}
      <section className="px-8 md:px-14 py-24 border-t" id="pricing" style={{
        borderColor: "rgba(184,154,93,0.1)",
        background: "linear-gradient(180deg, #0D2118 0%, #071A14 100%)"
      }}>
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="text-[10px] text-[#B89A5D] uppercase tracking-[0.2em] mb-3">Simple pricing</div>
            <h2 className="text-4xl" style={{ fontWeight: 500 }}>Simple pricing for small businesses</h2>
            <p className="mt-3 text-[#A8B5AC] text-sm" style={{ fontWeight: 300, fontFamily: "Georgia, serif" }}>Start free and upgrade when you're ready. No pressure, no contracts, no surprises.</p>
            <div className="mx-auto mt-5 h-px w-24" style={{ background: "linear-gradient(90deg, transparent, rgba(184,154,93,0.4), transparent)" }} />
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="rounded-2xl p-8"
              style={{ background: "linear-gradient(135deg, rgba(15,42,34,0.5), rgba(11,28,20,0.6))", border: "1px solid rgba(184,154,93,0.15)", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
              <div className="text-[10px] uppercase tracking-widest text-[#B89A5D] mb-3">Free Forever</div>
              <div className="text-5xl text-[#E8E3D9] mb-1">$0</div>
              <div className="text-xs text-white/30 mb-6">No credit card needed</div>
              <div className="h-px mb-6" style={{ background: "rgba(184,154,93,0.12)" }} />
              <ul className="space-y-2.5 mb-8">
                {["Up to 5 recipes", "Up to 5 clients", "Order tracking", "Cost calculator", "Inventory management"].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-[#E8E3D9]">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] text-[#B89A5D] flex-shrink-0" style={{ background: "rgba(184,154,93,0.12)" }}>✓</span>
                    {f}
                  </li>
                ))}
                {["AI recipe generation", "AI fragrance blender", "Unlimited recipes & clients"].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-white/20">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] flex-shrink-0" style={{ background: "rgba(255,255,255,0.04)" }}>✗</span>
                    {f}
                  </li>
                ))}
              </ul>
              <motion.a href="https://app.auraformulate.com" whileHover={{ scale: 1.02, y: -4, boxShadow: "0 8px 30px rgba(168,95,26,0.5), 0 4px 12px rgba(0,0,0,0.4)" }} whileTap={{ scale: 0.97 }}
                className="block text-center py-3 rounded-lg text-sm font-medium transition"
                style={{ color: "#B89A5D", border: "1px solid rgba(184,154,93,0.25)", background: "rgba(184,154,93,0.06)" }}>
                Get started free
              </motion.a>
            </motion.div>

            <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="rounded-2xl p-8 relative"
              style={{ background: "linear-gradient(135deg, rgba(20,55,40,0.7), rgba(15,42,34,0.8))", border: "1px solid rgba(184,154,93,0.3)", boxShadow: "0 30px 80px rgba(0,0,0,0.4)" }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#071A14]"
                style={{ background: "linear-gradient(135deg, #C6A86B, #B89A5D)" }}>Most Popular</div>
              <div className="text-[10px] uppercase tracking-widest text-[#B89A5D] mb-3">Pro</div>
              <div className="text-5xl text-[#E8E3D9] mb-1">$19<span className="text-xl text-white/30">/mo</span></div>
              <div className="text-xs text-white/30 mb-1">Billed monthly</div>
              <div className="text-xs text-[#B89A5D] mb-6">Or $149/year — save $79 ✦</div>
              <div className="h-px mb-6" style={{ background: "rgba(184,154,93,0.15)" }} />
              <ul className="space-y-2.5 mb-8">
                {["Unlimited recipes", "Unlimited clients", "Order tracking & archive", "Full inventory management", "AI recipe generation", "AI fragrance blender", "AI marketing & labels", "Priority support"].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-[#E8E3D9]">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] text-[#B89A5D] flex-shrink-0" style={{ background: "rgba(184,154,93,0.15)" }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <motion.a href="https://app.auraformulate.com" whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(106,18,34,0.4)" }} whileTap={{ scale: 0.97 }}
                className="block text-center py-3 rounded-lg text-sm font-semibold text-white transition"
                style={{ background: "linear-gradient(135deg, #A85F1A, #C17A2E)", boxShadow: "0 6px 20px rgba(0,0,0,0.6), 0 2px 6px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.08) inset" }}>
                Start Pro free trial →
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BOTTOM: BRAND FEEL — product photo grid placeholder */}
      <section className="relative py-20 px-8 md:px-14 overflow-hidden border-t" style={{
        borderColor: "rgba(184,154,93,0.1)",
        background: "linear-gradient(180deg, #071A14 0%, #0A1E12 100%)"
      }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(106,18,34,0.1) 0%, transparent 60%)" }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <div className="text-[10px] text-[#B89A5D] uppercase tracking-[0.2em] mb-3">Your work, elevated</div>
            <h2 className="text-4xl" style={{ fontWeight: 500 }}>Professional results, <em style={{ color: "#B89A5D" }}>maker-made</em></h2>
            <div className="mx-auto mt-5 h-px w-24" style={{ background: "linear-gradient(90deg, transparent, rgba(184,154,93,0.4), transparent)" }} />
          </motion.div>
          {/* PLACEHOLDER GRID — replace each div with <img src="..." /> + your Supabase lifestyle/product image URLs */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: "https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/banner-labeling.jpg", label: "Labeling & Compliance", pos: "center top" },
              { img: "https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/lifestyle1.jpg", label: "The Craft", pos: "center" },
              { img: "https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/product2.jpg", label: "Your Products", pos: "center" },
              { img: "https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/lifestyle2.jpg", label: "The Process", pos: "center" },
            ].map((p, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-xl overflow-hidden relative cursor-default"
                style={{
                  aspectRatio: "2/3",
                  border: "1px solid rgba(184,154,93,0.15)",
                  boxShadow: "0 16px 50px rgba(0,0,0,0.4)"
                }}>
                <img src={p.img} alt={p.label} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  style={{ objectPosition: p.pos }} />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, transparent 50%, rgba(7,26,20,0.85) 100%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="text-[10px] text-[#D9C9A3]/70 tracking-wide">{p.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
        className="px-8 md:px-14 py-28 text-center border-t relative overflow-hidden"
        style={{ borderColor: "rgba(184,154,93,0.1)", background: "#071A14" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(106,18,34,0.12) 0%, transparent 65%)" }} />
        <div className="max-w-lg mx-auto relative z-10">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, transparent, #B89A5D)" }} />
            <span className="text-[#B89A5D] text-xl">✦</span>
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, #B89A5D, transparent)" }} />
          </div>
          <div className="text-[10px] text-[#B89A5D] uppercase tracking-[0.2em] mb-3">Get early access</div>
          <h2 className="text-4xl md:text-5xl mb-5" style={{ fontWeight: 500 }}>
            Ready to take your craft<br /><em style={{ color: "#B89A5D" }}>seriously?</em>
          </h2>
          <p className="text-[#A8B5AC] text-sm mb-10 leading-relaxed" style={{ fontWeight: 300, fontFamily: "Georgia, serif" }}>
            Stop juggling spreadsheets, undercharging for your work, and losing formulas. AuraFormulate gives you everything you need to run a real business.
          </p>
          <div className="flex gap-3 max-w-sm mx-auto">
            <input type="email" placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg text-sm text-[#E8E3D9] outline-none transition"
              style={{ background: "rgba(7,20,16,0.8)", border: "1px solid rgba(184,154,93,0.2)" }} />
            <motion.a href="https://app.auraformulate.com"
              whileHover={{ scale: 1.05, y: -4, boxShadow: "0 8px 30px rgba(168,95,26,0.5), 0 4px 12px rgba(0,0,0,0.4)" }} whileTap={{ scale: 0.97 }}
              className="px-5 py-3 rounded-lg text-sm font-semibold text-white whitespace-nowrap"
              style={{ background: "linear-gradient(135deg, #A85F1A, #C17A2E)", boxShadow: "0 6px 20px rgba(0,0,0,0.6), 0 2px 6px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.08) inset" }}>
              Get started →
            </motion.a>
          </div>
          <p className="text-[10px] text-white/20 mt-4 tracking-wide">Free to start · No credit card required · Cancel anytime</p>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="px-8 md:px-14 py-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ background: "#071A14", borderColor: "rgba(184,154,93,0.1)" }}>
        <div>
          <div className="text-base text-[#B89A5D]">🌿 AuraFormulate</div>
          <div className="text-xs text-white/20 mt-1">© 2026 AuraFormulate. All rights reserved.</div>
        </div>
        <div className="flex gap-6 text-xs text-white/30">
          <a href="#features" className="hover:text-[#B89A5D] transition">Features</a>
          <a href="#pricing" className="hover:text-[#B89A5D] transition">Pricing</a>
          <a href="/terms-of-service.html" className="hover:text-[#B89A5D] transition">Terms</a>
          <a href="https://app.auraformulate.com" className="hover:text-[#B89A5D] transition">Launch App</a>
        </div>
      </footer>

      {/* VIDEO LIGHTBOX MODAL */}
      {showVideo && (
        <div
          onClick={() => setShowVideo(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1rem'
          }}>
          <div onClick={e => e.stopPropagation()} style={{ position: 'relative', width: '100%', maxWidth: '1000px' }}>
            <button
              onClick={() => setShowVideo(false)}
              style={{
                position: 'absolute', top: -40, right: 0,
                background: 'none', border: 'none', color: '#B89A5D',
                fontSize: '1.5rem', cursor: 'pointer', lineHeight: 1
              }}>✕</button>
            <video
              src="https://abeptkegweaoyaobjykf.supabase.co/storage/v1/object/public/assets/launch_video.mp4"
              controls
              autoPlay
              style={{
                width: '100%', borderRadius: '12px',
                boxShadow: '0 20px 80px rgba(0,0,0,0.8)',
                border: '1px solid rgba(184,154,93,0.2)'
              }}
            />
          </div>
        </div>
      )}

    </div>
  );
}
