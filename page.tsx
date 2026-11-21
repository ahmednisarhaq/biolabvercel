'use client';

import Image from 'next/image';
import { FormEvent, useEffect, useState } from 'react';

const topics = [
  { icon: '♥', title: 'Heart health', copy: 'Everyday habits, nutrition research and natural ways to support cardiovascular wellbeing.', articles: '12 studies & guides', tone: 'coral' },
  { icon: '◒', title: 'Joint comfort', copy: 'Movement, recovery and evidence-aware approaches for staying active and mobile.', articles: '8 studies & guides', tone: 'gold' },
  { icon: '✦', title: 'Brain & memory', copy: 'Explore cognitive health, healthy ageing and research around memory support.', articles: '10 studies & guides', tone: 'violet' },
  { icon: '☾', title: 'Sleep optimization', copy: 'Build a calmer evening, improve your sleep environment and support your natural rhythm.', articles: '14 studies & guides', tone: 'blue' },
  { icon: '☀', title: 'Energy & longevity', copy: 'Sunlight, circadian health and sustainable routines for better days over the long term.', articles: '9 studies & guides', tone: 'lime' },
  { icon: '⌁', title: 'Low-toxin living', copy: 'Understand labels, reduce unnecessary exposures and make more informed household choices.', articles: '7 studies & guides', tone: 'aqua' },
];

const guides = [
  { eyebrow: 'Sleep and cognition', title: 'The Olfactory Reset', copy: 'A safety-first guide to the 30-day circadian-timed aromatherapy protocol studied in older adults.', accent: 'sun', pages: '7 pages', file: 'Bio_Labs_Olfactory_Reset.pdf' },
  { eyebrow: 'Heart health', title: 'Sauna After Exercise', copy: 'What an 8-week randomized trial found when sedentary adults added 15 minutes of sauna after training.', accent: 'oil', pages: '5 pages', file: 'Bio_Labs_Sauna_After_Exercise.pdf' },
  { eyebrow: 'Brain and memory', title: 'The Brain Health Lifestyle Plan', copy: 'A plain-English guide to the two-year US POINTER lifestyle trial in older adults at risk of decline.', accent: 'moon', pages: '6 pages', file: 'Bio_Labs_Brain_Health_Lifestyle.pdf' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState<(typeof guides)[number] | null>(null);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = selectedGuide ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedGuide]);

  function closeModal() {
    setSelectedGuide(null);
    setSubmitted(false);
    setError('');
    setEmail('');
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const clean = email.trim();
    const validStructure = /^[^\s,@]+@[^\s,@]+\.[A-Za-z]{2,}$/.test(clean);
    const parts = clean.split('@');
    const validDomain = parts.length === 2 && !parts[1].startsWith('.') && !parts[1].includes('..');
    if (!validStructure || !validDomain) {
      setError('Please enter a complete email address, such as name@example.com.');
      return;
    }
    setError('');
    setSubmitted(true);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Bio Labs home">
          <Image src="/bio-labs-logo.png" alt="Bio Labs" width={58} height={58} priority />
          <span><b>BIO LABS</b><small>Science for better living</small></span>
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Open navigation">{menuOpen ? 'Close' : 'Menu'}</button>
        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">
          <a href="#topics" onClick={() => setMenuOpen(false)}>Health topics</a>
          <a href="#guides" onClick={() => setMenuOpen(false)}>Free guides</a>
          <a href="#standards" onClick={() => setMenuOpen(false)}>Our standards</a>
          <a className="nav-cta" href="#guides" onClick={() => setMenuOpen(false)}>Get a free guide</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Natural wellness, made practical</p>
          <h1>Small shifts.<br /><em>Better living.</em></h1>
          <p className="hero-lead">Evidence-aware guides, research summaries and non-medicinal biohacking ideas for a healthier life—without the hype.</p>
          <div className="hero-actions">
            <a className="button primary" href="#guides">Explore free guides <span>→</span></a>
            <a className="text-link" href="#topics">Browse health topics <span>↓</span></a>
          </div>
          <div className="trust-row">
            <div><b>99K+</b><span>Instagram community</span></div>
            <div><b>Safety first</b><span>Clear practical cautions</span></div>
            <div><b>No daily noise</b><span>Useful emails only</span></div>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="visual-card main-card">
            <span className="micro-label">TODAY&apos;S RESET</span>
            <div className="sun-disc"><span /></div>
            <h2>Meet the morning light</h2>
            <p>Step outside soon after waking and let your natural rhythm know the day has begun.</p>
            <div className="card-meta"><span>5–10 min read</span><span>Beginner friendly</span></div>
          </div>
          <div className="visual-card float-card"><span className="flask">⚗</span><div><small>BIO LABS PRINCIPLE</small><b>Curiosity, with context.</b></div></div>
        </div>
      </section>

      <section className="intro-strip">
        <p>Explore by what matters to you</p>
        <span>Practical ideas</span><i>•</i><span>Readable research</span><i>•</i><span>Thoughtful recommendations</span>
      </section>

      <section className="section topics-section" id="topics">
        <div className="section-heading">
          <div><p className="eyebrow dark"><span /> Health library</p><h2>Start with a topic.<br />Go as deep as you like.</h2></div>
          <p>Our health library brings related studies, practical habits and free guides together in one calm, easy-to-navigate place.</p>
        </div>
        <div className="topic-grid">
          {topics.map((topic) => (
            <article className={`topic-card ${topic.tone}`} key={topic.title}>
              <div className="topic-icon">{topic.icon}</div>
              <h3>{topic.title}</h3>
              <p>{topic.copy}</p>
              <a href="#guides" aria-label={`Explore ${topic.title}`}>{topic.articles}<span>→</span></a>
            </article>
          ))}
        </div>
        <p className="library-note">More topics will grow from the Bio Labs archive, including metabolic wellness, nutrients, anti-ageing, digestive health and environmental exposures.</p>
      </section>

      <section className="section guides-section" id="guides">
        <div className="section-heading light">
          <div><p className="eyebrow"><span /> Free e-book library</p><h2>A healthier routine<br />starts with one good guide.</h2></div>
          <p>Created to be saved, revisited and used at home. Every guide includes practical steps, context and responsible safety notes.</p>
        </div>
        <div className="guide-grid">
          {guides.map((guide, index) => (
            <article className={`guide-card ${guide.accent}`} key={guide.title}>
              <div className="book-cover">
                <Image src="/bio-labs-logo.png" alt="" width={44} height={44} />
                <small>BIO LABS FIELD GUIDE · 0{index + 1}</small>
                <span className="cover-mark">{index === 0 ? '☾' : index === 1 ? '♥' : '✦'}</span>
                <b>{guide.title}</b>
              </div>
              <div className="guide-body"><p>{guide.eyebrow}</p><h3>{guide.title}</h3><span>{guide.copy}</span><div><small>{guide.pages} · PDF</small><button onClick={() => setSelectedGuide(guide)}>Unlock guide</button></div></div>
            </article>
          ))}
        </div>
        <p className="guide-connection">Each health-topic article can recommend the most relevant guide at the end—so readers always have a practical next step.</p>
      </section>

      <section className="standards" id="standards">
        <div className="standards-copy"><p className="eyebrow dark"><span /> The Bio Labs standard</p><h2>Wellness information should feel empowering—not overwhelming.</h2><p>We translate research into plain language, distinguish early findings from established evidence, and include safety context wherever it matters.</p><a href="#topics" className="text-link">How we approach research <span>→</span></a></div>
        <div className="standards-list">
          <div><span>01</span><h3>Readable evidence</h3><p>Original sources and honest context, without pretending every promising study is settled science.</p></div>
          <div><span>02</span><h3>Natural, not naive</h3><p>“Natural” can still require care. Our guides include practical cautions and encourage individual professional advice.</p></div>
          <div><span>03</span><h3>Transparent choices</h3><p>Product relationships are disclosed clearly. Recommendations should earn trust, not borrow it.</p></div>
        </div>
      </section>

      <section className="newsletter">
        <div><p className="eyebrow"><span /> A calmer wellness newsletter</p><h2>Better ideas for better days.</h2><p>New guides, thoughtfully explained research and carefully selected wellness finds. No daily noise.</p></div>
        <button className="button primary" onClick={() => setSelectedGuide(guides[0])}>Join with a free guide <span>→</span></button>
      </section>

      <footer><div className="brand footer-brand"><Image src="/bio-labs-logo.png" alt="Bio Labs" width={52} height={52} /><span><b>BIO LABS</b><small>Science for better living</small></span></div><p>Educational information for general wellbeing. Not medical advice or a substitute for care from a qualified health professional.</p><div><a href="#topics">Health topics</a><a href="#guides">Free guides</a><a href="#standards">Editorial standards</a><a href="#">Privacy</a><a href="#">Affiliate disclosure</a></div><small>© 2026 Bio Labs. All rights reserved.</small></footer>

      {selectedGuide && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
          <section className="download-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <button className="modal-close" onClick={closeModal} aria-label="Close">×</button>
            {!submitted ? <>
              <p className="eyebrow dark"><span /> Your free Bio Labs guide</p>
              <h2 id="modal-title">Get <em>{selectedGuide.title}</em></h2>
              <p className="modal-intro">Enter your email to unlock the guide and join the Bio Labs newsletter.</p>
              <ul><li>Practical non-medicinal wellness ideas</li><li>New free guides and readable research</li><li>Carefully selected wellness recommendations</li></ul>
              <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="email">Email address</label>
                <div className="email-row"><input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" aria-describedby={error ? 'email-error' : undefined} autoFocus /><button type="submit">Unlock my guide</button></div>
                {error && <p className="form-error" id="email-error">{error}</p>}
                <small>By continuing, you agree to receive Bio Labs emails. Verify your address to complete the download. Unsubscribe anytime.</small>
              </form>
            </> : <div className="success-state"><div>✓</div><p className="eyebrow dark"><span /> Guide ready</p><h2 id="modal-title">Your PDF is unlocked.</h2><p>The GitHub Pages edition validates the email format locally. Connect your newsletter provider before launch to store subscribers and send verification emails.</p><a className="button dark-button" href={`guides/${selectedGuide.file}`} download>Download {selectedGuide.title}</a></div>}
          </section>
        </div>
      )}
    </main>
  );
}
