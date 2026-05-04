import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const glowPulse = {
  animate: {
    opacity: [0.4, 0.7, 0.4],
    scale: [1, 1.05, 1],
    transition: {
      duration: 4,
      repeat: Infinity
    }
  }
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#071B14] text-[#E8E3D9] overflow-hidden">

      {/* NAVBAR */}
      <header className="flex items-center justify-between px-10 py-6 border-b border-[#1F3D32]">
        <div className="text-lg font-semibold tracking-wide text-[#C6A96B]" style={{fontFamily:"'Cormorant Garamond', serif"}}>
          AuraFormulate
        </div>
        <nav className="hidden md:flex gap-8 text-sm text-[#A8B5AC]">
          <a href="#features" className="hover:text-[#C6A96B] transition-colors">Features</a>
          <a href="#pricing" className="hover:text-[#C6A96B] transition-colors">Pricing</a>
          <a href="#who" className="hover:text-[#C6A96B] transition-colors">About</a>
        </nav>
        <motion.a
          href="https://app.auraformulate.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="px-5 py-2 rounded-lg font-medium hover:opacity-90 transition text-[#071B14]"
          style={{background:"linear-gradient(135deg, #C6A96B, #D9C9A3)"}}
        >
          Try Free
        </motion.a>
      </header>

      {/* HERO */}
      <section className="relative px-10 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <motion.div variants={stagger} initial="hidden" animate="show">

          <motion.div variants={fadeUp} className="mb-4 inline-block text-xs px-3 py-1 rounded-full bg-[#0F2A22] text-[#C6A96B] border border-[#1F3D32]">
            NOW LIVE — MADE FOR MAKERS
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl leading-tight" style={{fontFamily:"'Cormorant Garamond', serif", fontWeight:500}}>
            Turn your passion
            <br />
            for making
            <br />
            <span className="italic" style={{color:"#C6A96B"}}>
              into a real business
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 text-[#A8B5AC] max-w-lg" style={{fontWeight:300}}>
            Recipes, clients, orders, AI-powered formulation, cost calculations,
            and shipping — all in one beautiful tool.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex gap-4">
            <motion.a
              href="https://app.auraformulate.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-lg font-medium hover:opacity-90 transition text-white"
              style={{background:"linear-gradient(135deg, #7A1E2C, #9B2535)"}}
            >
              Start free today →
            </motion.a>
            <motion.a
              href="#features"
              whileHover={{ color: "#C6A96B" }}
              className="text-[#C6A96B] flex items-center"
            >
              See what's inside ↓
            </motion.a>
          </motion.div>

          {/* STATS */}
          <motion.div variants={fadeUp} className="mt-12 flex gap-10 text-sm text-[#A8B5AC]">
            <div>
              <div className="text-xl text-[#C6A96B]" style={{fontFamily:"'Cormorant Garamond', serif"}}>13</div>
              BUILT-IN TOOLS
            </div>
            <div>
              <div className="text-xl text-[#C6A96B]" style={{fontFamily:"'Cormorant Garamond', serif"}}>AI</div>
              RECIPE GENERATOR
            </div>
            <div>
              <div className="text-xl text-[#C6A96B]" style={{fontFamily:"'Cormorant Garamond', serif"}}>FREE</div>
              TO GET STARTED
            </div>
          </motion.div>

        </motion.div>

        {/* RIGHT (APP MOCKUP) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Glow pulse */}
          <motion.div
            variants={glowPulse}
            animate="animate"
            className="absolute -inset-12 blur-3xl"
            style={{background:"radial-gradient(circle, rgba(122,30,44,0.2), transparent 70%)"}}
          />

          {/* Mock container */}
          <div className="relative bg-[#0B241C] border border-[#1F3D32] rounded-2xl shadow-2xl overflow-hidden">
            {/* Window bar */}
            <div className="bg-[#071410] px-4 py-3 flex items-center gap-2 border-b border-[#1F3D32]">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
              <div className="ml-3 bg-white/5 rounded px-3 py-1 text-xs text-white/30 font-mono">app.auraformulate.com</div>
            </div>

            <div className="flex">
              {/* Sidebar */}
              <div className="w-36 bg-[#071410] border-r border-[#1F3D32] p-3 hidden md:block">
                <div className="mb-3 pb-3 border-b border-[#1F3D32]">
                  <div className="text-xs text-[#C6A96B]" style={{fontFamily:"'Cormorant Garamond', serif"}}>AuraFormulate</div>
                  <div className="text-[10px] text-white/30 uppercase tracking-wider">Made for Makers</div>
                </div>
                {["Dashboard","Recipes","Clients","Orders","Inventory","Cost & Pricing","Fragrance","Marketing"].map((item, i) => (
                  <div key={item} className={`flex items-center gap-2 px-2 py-1.5 text-[10px] rounded mb-0.5 ${i === 0 ? "bg-[#7A1E2C]/20 text-[#C6A96B] border-r-2 border-[#9B2535]" : "text-white/35"}`}>
                    <div className="w-1 h-1 rounded-full bg-current opacity-50"></div>
                    {item}
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="flex-1 p-4">
                <div className="text-xs text-[#C6A96B] mb-1" style={{fontFamily:"'Cormorant Garamond', serif"}}>Welcome back, Creator ✦</div>
                <div className="text-[10px] text-white/35 mb-3">Here's what's happening today.</div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
                  {[
                    {label:"Recipes", val:"24", change:"+12%"},
                    {label:"Orders", val:"7", change:"+2"},
                    {label:"Inventory", val:"186", change:"in stock"},
                    {label:"Revenue", val:"$12k", change:"+18%"},
                  ].map(s => (
                    <div key={s.label} className="bg-[#071B14] p-2 rounded-lg border border-[#1F3D32]">
                      <div className="text-[9px] text-white/30 uppercase">{s.label}</div>
                      <div className="text-sm text-[#C6A96B]" style={{fontFamily:"'Cormorant Garamond', serif"}}>{s.val}</div>
                      <div className="text-[9px] text-green-400">{s.change}</div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#071B14] border border-[#1F3D32] rounded-lg p-2">
                    <div className="text-[9px] text-white/30 uppercase mb-1">Recent Orders</div>
                    {[["Rose Body Butter","Processing"],["Lavender Scrub","Shipped"],["Vanilla Oil","Delivered"]].map(([name, status]) => (
                      <div key={name} className="flex justify-between py-1 border-b border-white/4 text-[9px]">
                        <span className="text-white/60">{name}</span>
                        <span className={`px-1 rounded text-[8px] ${status === "Processing" ? "bg-[#C6A96B]/20 text-[#C6A96B]" : status === "Shipped" ? "bg-green-500/20 text-green-400" : "bg-white/10 text-white/35"}`}>{status}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-[#071B14] border border-[#1F3D32] rounded-lg p-2">
                    <div className="text-[9px] text-white/30 uppercase mb-1">Low Stock</div>
                    {[["Shea Butter","8 left"],["Rosehip Oil","5 left"],["Emulsifying Wax","12 left"]].map(([name, qty]) => (
                      <div key={name} className="flex justify-between py-1 border-b border-white/4 text-[9px]">
                        <span className="text-white/55">{name}</span>
                        <span className="text-[#9B2535] font-semibold">{qty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating revenue card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -bottom-5 -right-5 bg-[#0D1A13] border border-[#C6A96B]/25 rounded-xl p-3 shadow-2xl min-w-[140px]"
          >
            <div className="text-[10px] text-white/35 mb-1">Total Revenue</div>
            <div className="text-lg text-[#C6A96B]" style={{fontFamily:"'Cormorant Garamond', serif"}}>$12,450</div>
            <div className="text-[10px] text-green-400 mt-0.5">↑ +18% this month</div>
            <svg viewBox="0 0 120 24" fill="none" className="w-full mt-2" style={{height:24}}>
              <polyline points="0,20 16,16 32,18 48,9 64,13 80,5 96,8 120,2" stroke="#C6A96B" strokeWidth="1.5" fill="none" opacity="0.7"/>
              <polyline points="0,20 16,16 32,18 48,9 64,13 80,5 96,8 120,2 120,24 0,24" fill="rgba(198,169,107,0.08)"/>
            </svg>
          </motion.div>

          {/* Floating recipe card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-14 -left-6 bg-[#0D1A13] border border-[#1F3D32] rounded-xl p-3 shadow-xl min-w-[130px]"
          >
            <div className="text-lg mb-1">🧪</div>
            <div className="text-xs text-[#E8E3D9]" style={{fontFamily:"'Cormorant Garamond', serif"}}>Recipe Library</div>
            <div className="text-[10px] text-white/35 mt-0.5">24 total · 4 this week</div>
            <a href="https://app.auraformulate.com" className="text-[10px] text-[#C6A96B] mt-2 block">View library →</a>
          </motion.div>

        </motion.div>
      </section>

      {/* TICKER */}
      <div className="bg-[#3D5A38] border-t border-b border-[#C6A96B]/12 overflow-hidden">
        <motion.div
          animate={{ x: [0, -1400] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...Array(2)].map((_, di) => (
            <div key={di} className="flex">
              {["🧪 Formulate", "📖 Recipe Library", "📦 Orders", "🌿 Inventory", "🌸 Fragrance Blender", "👥 Clients", "🚚 Shipping"].map((item) => (
                <div key={item} className="flex items-center gap-3 px-10 py-4 text-sm text-white/70 flex-shrink-0">
                  {item}
                  <span className="text-[#8A7040] text-xs">◆</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* FEATURES */}
      <section className="px-10 py-20 border-t border-[#1F3D32] bg-[#0B1F18]" id="features">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-xs text-[#C6A96B] uppercase tracking-widest mb-3">Power your business</div>
              <h2 className="text-4xl leading-tight" style={{fontFamily:"'Cormorant Garamond', serif", fontWeight:500}}>
                Everything you need,{" "}
                <span className="italic" style={{color:"#C6A96B"}}>all in one place.</span>
              </h2>
              <p className="mt-4 text-[#A8B5AC] text-sm leading-relaxed" style={{fontWeight:300}}>
                AuraFormulate is built specifically for cosmetic creators, small brands, and makers who want to grow without the chaos.
              </p>
              <motion.a
                href="https://app.auraformulate.com"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-lg text-sm text-[#C6A96B] border border-[#C6A96B]/25 bg-[#C6A96B]/10 hover:bg-[#C6A96B]/18 transition"
              >
                Explore Features →
              </motion.a>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-0.5 rounded-xl overflow-hidden"
            >
              {[
                {title:"Smart Formulator", desc:"Real-time cost calculations and ingredient insights.", img:"https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=400&q=80"},
                {title:"Order Management", desc:"Track and fulfill orders from start to finish.", img:"https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=400&q=80"},
                {title:"Inventory Control", desc:"Know what you have and what to restock.", img:"https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&q=80"},
                {title:"Client Management", desc:"Organize details, history, and communication.", img:"https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&q=80"},
              ].map((card) => (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  whileHover={{ scale: 1.02, zIndex: 2 }}
                  className="relative aspect-square overflow-hidden cursor-default"
                  style={{background:"rgba(50,75,45,0.45)"}}
                >
                  <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover opacity-50 transition-opacity duration-300 hover:opacity-65" />
                  <div className="absolute inset-0" style={{background:"linear-gradient(180deg, transparent 30%, rgba(7,20,16,0.88) 100%)"}} />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-sm font-medium text-[#E8E3D9]" style={{fontFamily:"'Cormorant Garamond', serif"}}>{card.title}</div>
                    <p className="text-[10px] text-white/55 mt-0.5 leading-snug">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="px-10 py-20 border-t border-[#1F3D32]" id="who">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs text-[#C6A96B] uppercase tracking-widest mb-3">Who it's for</div>
            <h2 className="text-4xl leading-tight" style={{fontFamily:"'Cormorant Garamond', serif", fontWeight:500}}>
              Whether you're just starting out<br/>or <em style={{color:"#C6A96B"}}>scaling up</em> — this is for you
            </h2>
            <p className="mt-4 text-[#A8B5AC] text-sm leading-relaxed" style={{fontWeight:300}}>
              It doesn't matter if you're making your first batch or your hundredth. If you handcraft beauty and cosmetic products and want to run your business with more confidence — AuraFormulate is for you.
            </p>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 mt-6"
            >
              {["🛍️ Etsy Sellers","🧴 Custom Product Makers","🌿 Natural Beauty Creators","💄 Small Beauty Brands","🧼 Soap Makers","💅 Lip & Nail Artists","🌺 Skincare Creators","💇 Hair Care Makers"].map((pill) => (
                <motion.span
                  key={pill}
                  variants={fadeUp}
                  whileHover={{ background: "rgba(122,30,44,0.2)", borderColor: "rgba(155,37,53,0.4)" }}
                  className="px-3 py-1.5 rounded-full text-xs text-[#A8B5AC] border border-[#C6A96B]/20"
                  style={{background:"rgba(61,90,56,0.3)"}}
                >
                  {pill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl p-9 border border-[#C6A96B]/15" style={{background:"rgba(50,75,45,0.45)"}}>
              <div className="text-5xl text-[#C6A96B] leading-none mb-4" style={{fontFamily:"'Cormorant Garamond', serif"}}>"</div>
              <p className="text-lg italic text-[#E8E3D9] leading-relaxed mb-6" style={{fontFamily:"'Cormorant Garamond', serif"}}>
                I used to dread the business side of things. Now I actually feel like I know what I'm doing. My recipes are all in one place, I know exactly what to charge, and my clients think I'm way more organized than I actually am.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-[#C6A96B] font-semibold border border-[#C6A96B]/25" style={{background:"linear-gradient(135deg, #071B14, #1a3020)", fontFamily:"'Cormorant Garamond', serif"}}>S</div>
                <div>
                  <div className="text-sm font-medium text-[#E8E3D9]">Sarah M.</div>
                  <div className="text-xs text-white/35 mt-0.5">Small-batch skincare creator · Etsy seller since 2019</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRICING */}
      <section className="px-10 py-20 border-t border-[#1F3D32] bg-[#0B1F18]" id="pricing">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="text-xs text-[#C6A96B] uppercase tracking-widest mb-3">Simple pricing</div>
            <h2 className="text-4xl" style={{fontFamily:"'Cormorant Garamond', serif", fontWeight:500}}>Simple pricing for small businesses</h2>
            <p className="mt-3 text-[#A8B5AC] text-sm" style={{fontWeight:300}}>Start free and upgrade when you're ready. No pressure, no contracts, no surprises.</p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Free */}
            <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="rounded-2xl p-8 border border-[#C6A96B]/15" style={{background:"rgba(50,75,45,0.2)"}}>
              <div className="text-xs uppercase tracking-widest text-[#C6A96B] mb-3">Free Forever</div>
              <div className="text-5xl text-[#E8E3D9] mb-1" style={{fontFamily:"'Cormorant Garamond', serif"}}>$0</div>
              <div className="text-xs text-white/35 mb-6">No credit card needed</div>
              <div className="h-px bg-[#C6A96B]/15 mb-6"></div>
              <ul className="space-y-2 mb-8">
                {["Up to 5 recipes","Up to 5 clients","Order tracking","Cost calculator","Inventory management"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#E8E3D9]">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] text-[#C6A96B]" style={{background:"rgba(198,169,107,0.2)"}}>✓</span>
                    {f}
                  </li>
                ))}
                {["AI recipe generation","AI fragrance blender","Unlimited recipes & clients"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/25">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px]" style={{background:"rgba(255,255,255,0.04)"}}>✗</span>
                    {f}
                  </li>
                ))}
              </ul>
              <motion.a href="https://app.auraformulate.com" whileHover={{scale:1.02}} whileTap={{scale:0.97}} className="block text-center py-3 rounded-lg text-sm font-medium text-[#C6A96B] border border-[#C6A96B]/30 hover:bg-[#C6A96B]/10 transition">
                Get started free
              </motion.a>
            </motion.div>

            {/* Pro */}
            <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="rounded-2xl p-8 border border-[#C6A96B]/35 relative" style={{background:"rgba(61,90,56,0.35)"}}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#071B14]" style={{background:"linear-gradient(135deg, #C6A96B, #D9C9A3)"}}>Most Popular</div>
              <div className="text-xs uppercase tracking-widest text-[#C6A96B] mb-3">Pro</div>
              <div className="text-5xl text-[#E8E3D9] mb-1" style={{fontFamily:"'Cormorant Garamond', serif"}}>$19<span className="text-xl text-white/35">/mo</span></div>
              <div className="text-xs text-white/35 mb-1">Billed monthly</div>
              <div className="text-xs text-[#C6A96B] mb-6">Or $149/year — save $79 ✦</div>
              <div className="h-px bg-[#C6A96B]/15 mb-6"></div>
              <ul className="space-y-2 mb-8">
                {["Unlimited recipes","Unlimited clients","Order tracking & archive","Full inventory management","AI recipe generation","AI fragrance blender","AI marketing & labels","Priority support"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#E8E3D9]">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] text-[#C6A96B]" style={{background:"rgba(198,169,107,0.2)"}}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <motion.a href="https://app.auraformulate.com" whileHover={{scale:1.02}} whileTap={{scale:0.97}} className="block text-center py-3 rounded-lg text-sm font-semibold text-white transition" style={{background:"linear-gradient(135deg, #7A1E2C, #9B2535)"}}>
                Start Pro free trial →
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="px-10 py-24 text-center border-t border-[#1F3D32]"
      >
        <div className="max-w-lg mx-auto">
          <div className="text-xs text-[#C6A96B] uppercase tracking-widest mb-3">Get early access</div>
          <h2 className="text-4xl mb-4" style={{fontFamily:"'Cormorant Garamond', serif", fontWeight:500}}>
            Ready to take your craft<br/><em style={{color:"#C6A96B"}}>seriously?</em>
          </h2>
          <p className="text-[#A8B5AC] text-sm mb-8 leading-relaxed" style={{fontWeight:300}}>
            Thousands of makers just like you are juggling too many tools, undercharging for their work, and burning out on admin. AuraFormulate fixes all of that.
          </p>
          <div className="flex gap-3 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg text-sm text-[#E8E3D9] placeholder-white/25 outline-none border border-[#C6A96B]/20 focus:border-[#C6A96B] transition"
              style={{background:"rgba(7,20,16,0.6)"}}
            />
            <motion.a
              href="https://app.auraformulate.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-3 rounded-lg text-sm font-semibold text-white"
              style={{background:"linear-gradient(135deg, #7A1E2C, #9B2535)"}}
            >
              Get started →
            </motion.a>
          </div>
          <p className="text-xs text-white/25 mt-3">Free to start. No credit card required. Cancel anytime.</p>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="px-10 py-8 border-t border-[#1F3D32] flex items-center justify-between" style={{background:"#071410"}}>
        <div>
          <div className="text-base text-[#E8E3D9]" style={{fontFamily:"'Cormorant Garamond', serif"}}>🌿 AuraFormulate</div>
          <div className="text-xs text-white/25 mt-1">© 2026 AuraFormulate. All rights reserved.</div>
        </div>
        <div className="flex gap-6 text-xs text-white/35">
          <a href="#features" className="hover:text-[#C6A96B] transition">Features</a>
          <a href="#pricing" className="hover:text-[#C6A96B] transition">Pricing</a>
          <a href="/terms-of-service.html" className="hover:text-[#C6A96B] transition">Terms</a>
          <a href="https://app.auraformulate.com" className="hover:text-[#C6A96B] transition">Launch App</a>
        </div>
      </footer>

    </div>
  );
}
