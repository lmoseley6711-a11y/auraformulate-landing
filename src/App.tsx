import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const APP_URL = "https://app.auraformulate.com";

const features = [
  {
    eyebrow: "Create",
    title: "Formulate with confidence",
    copy: "Build percentage-based recipes, scale batches instantly, and let Aura help solve formulation problems.",
    image: "https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/FormulatorSS.png",
    tone: "wine",
  },
  {
    eyebrow: "Organize",
    title: "Keep every formula connected",
    copy: "Recipes, ingredients, client profiles, preferences, allergies, orders, and version history—together.",
    image: "https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/Recipe_Library.png",
    tone: "green",
  },
  {
    eyebrow: "Price",
    title: "Know your real cost",
    copy: "Calculate cost per unit, packaging, labor, overhead, margins, and suggested retail before you sell.",
    image: "https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/Cost-PricingSS.png",
    tone: "gold",
  },
  {
    eyebrow: "Grow",
    title: "Run the business behind the craft",
    copy: "Manage orders, production, labels, shipping, education, and marketing without another spreadsheet.",
    image: "https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/OrdersSS.png",
    tone: "sage",
  },
];

const workflow = [
  { number: "01", title: "Build", copy: "Create from scratch, import a recipe, or ask Aura to develop a starting formula." },
  { number: "02", title: "Refine", copy: "Adjust percentages, scale the batch, check structure, and save each version." },
  { number: "03", title: "Sell", copy: "Calculate pricing, create compliant label content, and send the product into an order." },
];

const faqs = [
  {
    q: "Do I need professional formulation experience?",
    a: "No. AuraFormulate supports new makers and experienced formulators. The tools explain percentages, structure, costing, and ingredient decisions as you work.",
  },
  {
    q: "Can I use my own ingredient inventory?",
    a: "Yes. Add your materials, suppliers, costs, quantities, and low-stock levels. Recipes can use existing inventory or clearly marked placeholders.",
  },
  {
    q: "Does AuraFormulate replace product testing?",
    a: "No. AuraFormulate helps you organize and evaluate a formula, but every cosmetic formula still requires appropriate stability, compatibility, preservation, and safety testing.",
  },
  {
    q: "Can I start without paying?",
    a: "Yes. The free plan lets you begin with core recipe, client, order, inventory, and costing tools. Upgrade when you need unlimited records and AI features.",
  },
];

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.65, ease: "easeOut" as const },
};

function Brand() {
  return (
    <a href="#top" className="brand" aria-label="AuraFormulate home">
      <span className="brand-mark">AF</span>
      <span>
        <strong>AuraFormulate</strong>
        <small>Formulation atelier</small>
      </span>
    </a>
  );
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [video, setVideo] = useState<"founder" | "overview" | null>(null);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    document.body.style.overflow = video || menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [video, menuOpen]);

  return (
    <main id="top" className="site-shell">
      <div className="grain" aria-hidden="true" />

      <div className="announcement">
        <span className="announcement-dot" />
        <span>A complete studio for independent cosmetic makers</span>
      </div>

      <header className="site-header">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#platform">Platform</a>
          <a href="#aura">Meet Aura</a>
          <a href="#demos">Demos</a>
          <a href="#founder">Founder</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <div className="header-actions">
          <a className="login-link" href={APP_URL}>Sign in</a>
          <a className="button button-small button-gold" href={APP_URL}>Start free</a>
          <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <span /><span /><span />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-menu" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }}>
            <div className="mobile-menu-top">
              <Brand />
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu">×</button>
            </div>
            <nav>
              {[
                ["Platform", "#platform"],
                ["Meet Aura", "#aura"],
                ["Demos", "#demos"],
                ["Founder", "#founder"],
                ["Pricing", "#pricing"],
                ["Questions", "#faq"],
              ].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}<span>→</span></a>)}
            </nav>
            <a className="button button-gold" href={APP_URL}>Open AuraFormulate <Arrow /></a>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="hero section-pad">
        <div className="hero-aura hero-aura-one" />
        <div className="hero-aura hero-aura-two" />
        <div className="hero-copy">
          <motion.p {...reveal} className="eyebrow">Formulate beautifully. Build intelligently.</motion.p>
          <motion.h1 {...reveal}>
            The business studio
            <span>your craft deserves.</span>
          </motion.h1>
          <motion.p {...reveal} className="hero-lede">
            Develop formulas, manage ingredients and clients, calculate true costs, create labels, plan production, and grow your cosmetic business—all in one considered workspace.
          </motion.p>
          <motion.div {...reveal} className="hero-actions">
            <a className="button button-copper" href={APP_URL}>Start creating free <Arrow /></a>
            <button className="button button-ghost" onClick={() => setVideo("overview")}>
              <span className="play">▶</span> Watch the formulator demo
            </button>
          </motion.div>
          <motion.div {...reveal} className="hero-proof">
            <div><strong>13+</strong><span>Connected tools</span></div>
            <div><strong>AI</strong><span>Formulation partner</span></div>
            <div><strong>$0</strong><span>To begin</span></div>
          </motion.div>
        </div>

        <motion.div className="hero-visual" initial={{ opacity: 0, scale: .96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .9, delay: .15 }}>
          <div className="hero-photo">
            <img src="https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/hero2.jpg" alt="Cosmetic maker pouring a botanical oil" />
            <span className="photo-label">Made for the maker behind the brand</span>
          </div>
          <div className="app-window">
            <div className="window-bar"><span /><span /><span /><small>app.auraformulate.com</small></div>
            <img src="https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/DashboardSS.png" alt="AuraFormulate dashboard" />
          </div>
          <div className="floating-note floating-note-one"><b>Formula saved</b><span>Version history updated</span></div>
          <div className="floating-note floating-note-two"><b>Margin protected</b><span>Pricing calculated</span></div>
        </motion.div>
      </section>

      <section className="trust-strip" aria-label="Platform capabilities">
        {["Formulation", "Recipe library", "Inventory", "Client profiles", "Costing", "Labels", "Orders", "Education"].map(item => <span key={item}>{item}</span>)}
      </section>

      <section className="workflow section-pad">
        <motion.div {...reveal} className="section-heading centered">
          <p className="eyebrow">One connected workflow</p>
          <h2>From first idea to finished product.</h2>
          <p>Stop rebuilding the same information in disconnected documents. Every part of your process carries forward.</p>
        </motion.div>
        <div className="workflow-grid">
          {workflow.map((item, index) => (
            <motion.article key={item.number} {...reveal} transition={{ ...reveal.transition, delay: index * .08 }}>
              <span className="step-number">{item.number}</span>
              <div className="step-line" />
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="platform" className="platform section-pad">
        <motion.div {...reveal} className="section-heading split-heading">
          <div><p className="eyebrow">Inside the studio</p><h2>Professional tools.<br /><em>Maker-minded design.</em></h2></div>
          <p>AuraFormulate combines formulation science with the daily business work that happens after the recipe is made.</p>
        </motion.div>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <motion.article key={feature.title} {...reveal} transition={{ ...reveal.transition, delay: index * .06 }} className={`feature-card tone-${feature.tone}`}>
              <div className="feature-copy">
                <span>{feature.eyebrow}</span>
                <h3>{feature.title}</h3>
                <p>{feature.copy}</p>
              </div>
              <div className="feature-image"><img src={feature.image} alt="" /></div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="aura" className="aura-section section-pad">
        <motion.div {...reveal} className="aura-portrait">
          <img src="https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/aura47654.png" alt="Aura, the AI formulation assistant" />
          <div className="portrait-caption"><span>Always available</span><strong>Aura · Formulation intelligence</strong></div>
        </motion.div>
        <motion.div {...reveal} className="aura-copy">
          <p className="eyebrow">Meet Aura</p>
          <h2>Expert guidance that works <em>alongside you.</em></h2>
          <p>Aura is the intelligence woven through the studio—a formulation partner for developing recipes, solving stability questions, exploring fragrance, and turning product details into polished business content.</p>
          <ul>
            <li><span>01</span>Build with your inventory or the best ingredients for the job.</li>
            <li><span>02</span>Understand the reasoning behind suggested structures and adjustments.</li>
            <li><span>03</span>Move from technical formula to customer-ready product without starting over.</li>
          </ul>
          <a className="text-link" href={APP_URL}>Ask Aura inside the app <Arrow /></a>
        </motion.div>
      </section>

      <section id="demos" className="demos section-pad">
        <motion.div {...reveal} className="section-heading centered">
          <p className="eyebrow">See the studio at work</p>
          <h2>Less admin. More creating.</h2>
          <p>Follow two of the workflows at the heart of AuraFormulate.</p>
        </motion.div>
        <div className="demo-grid">
          <motion.article {...reveal} className="demo-card">
            <div className="demo-video">
              <video controls preload="metadata" poster="https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/Fragrance-zoom.png">
                <source src="https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/fragrance_demo.mp4" type="video/mp4" />
              </video>
            </div>
            <div><span>Signature scent workflow</span><h3>Fragrance Blender</h3><p>Turn a scent brief into balanced blend ideas, usage guidance, and saved fragrance formulas.</p></div>
          </motion.article>
          <motion.article {...reveal} className="demo-card">
            <div className="demo-video">
              <video controls preload="metadata" poster="https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/Formulator-zoom.png">
                <source src="https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/formulator_demo.mp4" type="video/mp4" />
              </video>
            </div>
            <div><span>Recipe development workflow</span><h3>Smart Formulator</h3><p>Develop, scale, analyze, revise, and save a professional formula in one working canvas.</p></div>
          </motion.article>
        </div>
      </section>

      <section className="maker-section">
        <div className="maker-image"><img src="https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/lifestyle1.jpg" alt="Independent cosmetic maker at work" /></div>
        <motion.div {...reveal} className="maker-copy">
          <p className="eyebrow">Built for independent beauty</p>
          <h2>Your products are handcrafted.<br /><em>Your systems shouldn’t be.</em></h2>
          <p>For skincare creators, haircare formulators, soap makers, fragrance artists, custom-product businesses, Etsy sellers, and growing beauty brands.</p>
          <div className="maker-tags">{["Skincare", "Haircare", "Body care", "Fragrance", "Custom clients", "Small-batch brands"].map(tag => <span key={tag}>{tag}</span>)}</div>
        </motion.div>
      </section>

      <section id="founder" className="founder-section section-pad">
        <motion.div {...reveal} className="founder-copy">
          <p className="eyebrow">Meet the maker behind the studio</p>
          <h2>Built by a maker, <em>for makers.</em></h2>
          <p>Hear from founder Leah Rexrode about the idea behind AuraFormulate and the people it was built to support.</p>
          <button className="button button-copper" onClick={() => setVideo("founder")}><span className="play">▶</span> Watch Leah’s story</button>
        </motion.div>
        <motion.div {...reveal} className="founder-preview">
          <video controls preload="metadata" playsInline aria-label="Meet AuraFormulate founder Leah Rexrode">
            <source src="/videos/founder_video_compressed.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </section>

      <section id="pricing" className="pricing section-pad">
        <motion.div {...reveal} className="section-heading centered">
          <p className="eyebrow">Simple pricing</p>
          <h2>Start where you are. Grow when you’re ready.</h2>
          <p>No credit card required for the free plan.</p>
        </motion.div>
        <div className="pricing-grid">
          <motion.article {...reveal} className="price-card">
            <span className="plan-name">Free</span>
            <div className="price"><strong>$0</strong><small>forever</small></div>
            <p>Core tools for getting your formulas and business organized.</p>
            <ul>{["5 recipes", "5 clients", "Orders and inventory", "Cost calculator", "Education hub"].map(x => <li key={x}>✓ {x}</li>)}</ul>
            <a className="button button-ghost" href={APP_URL}>Start free</a>
          </motion.article>
          <motion.article {...reveal} className="price-card featured-price">
            <span className="popular">Most popular</span>
            <span className="plan-name">Pro</span>
            <div className="price"><strong>$19</strong><small>/ month</small></div>
            <p>The complete studio, including Aura’s AI-powered workflows.</p>
            <ul>{["Unlimited recipes and clients", "AI Formulator and tutor", "AI Fragrance Blender", "Marketing and label tools", "Complete business workspace"].map(x => <li key={x}>✓ {x}</li>)}</ul>
            <a className="button button-copper" href={APP_URL}>Start Pro <Arrow /></a>
            <small className="annual">Or $149 annually</small>
          </motion.article>
        </div>
      </section>

      <section id="faq" className="faq section-pad">
        <motion.div {...reveal} className="section-heading">
          <p className="eyebrow">Questions, answered</p>
          <h2>Before you step inside.</h2>
        </motion.div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <article key={faq.q} className={openFaq === index ? "open" : ""}>
              <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>
                <span>{faq.q}</span><b>{openFaq === index ? "−" : "+"}</b>
              </button>
              <AnimatePresence initial={false}>
                {openFaq === index && <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>{faq.a}</motion.p>}
              </AnimatePresence>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta section-pad">
        <div className="cta-glow" />
        <motion.div {...reveal}>
          <span className="cta-mark">AF</span>
          <p className="eyebrow">Your next formula starts here</p>
          <h2>Give your craft a place to grow.</h2>
          <p>Bring your formulas, your clients, and the business you’re building. AuraFormulate will help you connect the rest.</p>
          <a className="button button-gold" href={APP_URL}>Open your free studio <Arrow /></a>
        </motion.div>
      </section>

      <footer className="site-footer">
        <Brand />
        <p>Built for the makers behind independent beauty.</p>
        <nav>
          <a href="#platform">Platform</a>
          <a href="#pricing">Pricing</a>
          <a href="/terms-of-service.html">Terms</a>
          <a href={APP_URL}>Sign in</a>
        </nav>
        <small>© 2026 AuraFormulate. All rights reserved.</small>
      </footer>

      <AnimatePresence>
        {video && (
          <motion.div className="video-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setVideo(null)}>
            <motion.div initial={{ scale: .96, y: 16 }} animate={{ scale: 1, y: 0 }} exit={{ scale: .96, y: 16 }} onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setVideo(null)} aria-label="Close video">×</button>
              <video controls autoPlay playsInline>
                <source
                  src={video === "founder" ? "/videos/founder_video_compressed.mp4" : "https://zeotpulikdmwgtcdtazf.supabase.co/storage/v1/object/public/assets/formulator_demo.mp4"}
                  type="video/mp4"
                />
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
