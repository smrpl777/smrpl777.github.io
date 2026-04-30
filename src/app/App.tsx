import { useEffect, useState } from 'react';
import './styles.css';

// Import logos
import ucBerkeleyLogo from 'figma:asset/af3ef6e733e04c1384afc8f72ef2829fa9938f3b.png';
import nihLogo from 'figma:asset/06d53fa48da866eb902759c0fe388b6fe0eea59a.png';
import ixdfLogo from 'figma:asset/4d728eb69aa2aa038e20e7fcd59549b4f6c3a98c.png';
import infosysLogo from 'figma:asset/e91db71bac445c54ccb7cf58bc1eec3529b2758f.png';
import smeraPhoto from '../imports/IMG_7711-3.jpg';
import portoPhoto from '../imports/image-1.png';
import { CirclesCaseStudy, PortalCaseStudy, NIHCaseStudy, ZenDMVCaseStudy } from './components/CaseStudyPanels';

const MODAL_TITLES: Record<number, string> = {
  1: '01 — Circles Meetup App',
  2: '02 — Fixing a Broken Portal',
  3: '03 — NIH I-Corps',
  4: '04 — Zen DMV',
};

export default function App() {
  const [cursorPos, setCursorPos]   = useState({ x: 0, y: 0 });
  const [ringPos, setRingPos]       = useState({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState({ width: 10, height: 10, ringWidth: 36, ringHeight: 36 });
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const [copiedKey, setCopiedKey]     = useState<string | null>(null);

  const openModal  = (num: number) => setActiveModal(num);
  const closeModal = () => setActiveModal(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text).catch(() => {});
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  // Mouse cursor tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setTimeout(() => setRingPos({ x: e.clientX, y: e.clientY }), 60);
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Cursor grow on hover
  useEffect(() => {
    const interactiveElements = document.querySelectorAll('a, button, .project-card');
    const grow  = () => setCursorSize({ width: 20, height: 20, ringWidth: 56, ringHeight: 56 });
    const shrink = () => setCursorSize({ width: 10, height: 10, ringWidth: 36, ringHeight: 36 });
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });
    return () => interactiveElements.forEach(el => {
      el.removeEventListener('mouseenter', grow);
      el.removeEventListener('mouseleave', shrink);
    });
  }, []);

  // Scroll-reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) setTimeout(() => entry.target.classList.add('visible'), 80);
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // ESC closes modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActiveModal(null); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Scroll lock while modal is open
  useEffect(() => {
    document.body.style.overflow = activeModal !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeModal]);

  return (
    <div className="portfolio">

      {/* Custom Cursor */}
      <div className="cursor" style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px`, width: `${cursorSize.width}px`, height: `${cursorSize.height}px` }} />
      <div className="cursor-ring" style={{ left: `${ringPos.x}px`, top: `${ringPos.y}px`, width: `${cursorSize.ringWidth}px`, height: `${cursorSize.ringHeight}px` }} />

      {/* Navigation — static, not sticky */}
      <nav>
        <span className="nav-logo">
          <span className="nav-name">Smera Patil</span>
          <span className="nav-role">— UX</span>
        </span>
        <ul className="nav-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#methods">Methods</a></li>
          <li><a href="#philosophy">Philosophy</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* ─── HERO ─────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-bg-number">04</div>

        <div className="hero-left">
          <div className="hero-tag">Available for full-time roles</div>
          <h1 className="hero-headline">
            Designing for<br /><em>global impact.</em>
          </h1>
          <p className="hero-sub">
            I'm <strong>Smera</strong> — a UX designer trained in <strong>cognitive science &amp; global entrepreneurship</strong>,{' '}
            <strong>fluent</strong> in what makes humans tick. I've run <strong>100 user interviews</strong> for the NIH,
            redesigned broken job portals, and <strong>tripled event participation</strong> in three weeks.
          </p>
          <a href="#contact" className="hero-cta">
            Let's talk <span className="hero-cta-arrow">→</span>
          </a>
        </div>

        <div className="hero-right">
          {/* Portrait photo */}
          <div className="hero-portrait">
            <img src={smeraPhoto} alt="Smera Patil at UC Berkeley" className="hero-portrait-img" />
          </div>

          {/* Credential pills — tiered by category */}
          <div className="clout-tiers">

            {/* Tier 1: Education + Certifications */}
            <div className="clout-tier">
              <span className="clout-tier-label">Education + Certifications</span>
              <div className="clout-tier-row">
                <div className="clout-pill">
                  <img src={ucBerkeleyLogo} alt="UC Berkeley" className="clout-logo" />
                  <span className="clout-dot red"></span>
                  UC Berkeley — Cognitive Science
                  <span className="clout-tooltip">2024 UC Berkeley graduate in Cognitive Science</span>
                </div>
                <div className="clout-pill">
                  <img src={ixdfLogo} alt="IxDF" className="clout-logo" />
                  <span className="clout-dot"></span>
                  IxDF — Interaction Design
                  <span className="clout-tooltip">Top 10% in Class · UI Design Patterns for Successful Software</span>
                </div>
                <div className="clout-pill">
                  <svg className="clout-logo" style={{ width: '18px', height: '26px', flexShrink: 0 }} viewBox="0 0 38 57" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/>
                    <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z" fill="#0ACF83"/>
                    <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262"/>
                    <path d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5z" fill="#F24E1E"/>
                    <path d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5z" fill="#A259FF"/>
                  </svg>
                  <span className="clout-dot gold"></span>
                  Aliena Cai — Fast Track UX
                  <span className="clout-tooltip">Figma Partner Camp</span>
                </div>
              </div>
            </div>

            {/* Tier 2: Work / Companies */}
            <div className="clout-tier">
              <span className="clout-tier-label">Selected Experience</span>
              <div className="clout-tier-row">
                <div className="clout-pill">
                  <img src={nihLogo} alt="NIH" className="clout-logo" />
                  <span className="clout-dot sky"></span>
                  NIH I-Corps — Best in Show ✦
                  <span className="clout-tooltip">Discovery Sprint · 100 Stakeholder Interviews · 7 Weeks</span>
                </div>
                <div className="clout-pill">
                  <img src={infosysLogo} alt="Infosys" className="clout-logo" />
                  <span className="clout-dot gold"></span>
                  Infosys Helix
                  <span className="clout-tooltip">Healthcare Claims</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} style={{ display: 'flex', gap: '64px' }}>
              <span className="marquee-item">User Interviews</span>
              <span className="marquee-item">Participatory Design</span>
              <span className="marquee-item">Cognitive Science</span>
              <span className="marquee-item">Secondary Research</span>
              <span className="marquee-item">Biophilic Design</span>
              <span className="marquee-item">Journey Mapping</span>
              <span className="marquee-item">Accessibility</span>
              <span className="marquee-item">Human Centered Design</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── PROJECTS ─────────────────────────────────── */}
      <section id="work" style={{ padding: '120px 0' }}>
        <div style={{ padding: '0 48px' }}>
          <div className="section-label">Selected Work — 2022–2025</div>
        </div>

        <div className="projects-grid">

          {/* Project 01 — Circles */}
          <div className="project-card project-card-light fade-in">
            <div className="pcard-header">
              <span className="pcard-num">01</span>
              <span className="pcard-tags">Social UX · Participatory Design · Porto, PT</span>
            </div>
            <h2 className="project-title">Circles</h2>
            <p className="project-desc">
              The problem wasn't the app — it was the moment strangers had to find
              each other in a crowd across language barriers.
            </p>
            <div className="pcard-footer">
              <span className="pcard-stat">↑ 2.8× event RSVPs</span>
              <button className="project-expand-btn" onClick={() => openModal(1)}>+ View case study</button>
            </div>
          </div>

          {/* Project 02 — Broken Portal */}
          <div className="project-card project-card-azul fade-in">
            <div className="pcard-header">
              <span className="pcard-num">02</span>
              <span className="pcard-tags">Job Portal UX · Cognitive Mapping · YUJ Designs</span>
            </div>
            <h2 className="project-title">Broken Portal</h2>
            <p className="project-desc">
              Drop-offs were visible. The reasons weren't. No one had sat
              with users to find out what was actually happening.
            </p>
            <div className="pcard-footer">
              <span className="pcard-stat"></span>
              <button className="project-expand-btn" onClick={() => openModal(2)}>+ View case study</button>
            </div>
          </div>

          {/* Project 03 — NIH I-Corps */}
          <div className="project-card project-card-azul project-card-nih fade-in">
            <div className="pcard-header">
              <span className="pcard-num">03</span>
              <span className="pcard-tags">Healthcare · Discovery Research</span>
            </div>
            <h2 className="project-title">NIH I-Corps</h2>
            <p className="project-desc">
              A pharmaceutical company needed to know if their product had a real
              market. We had seven weeks and 100 interviews to find out.
            </p>
            <div className="pcard-footer">
              <span className="pcard-stat">🏆 Best in Show — NIH I-Corps</span>
              <button className="project-expand-btn" onClick={() => openModal(3)}>+ View case study</button>
            </div>
          </div>

          {/* Project 04 — Zen DMV */}
          <div className="project-card project-card-light fade-in">
            <div className="pcard-header">
              <span className="pcard-num">04</span>
              <span className="pcard-tags">AI-Assisted Design · Interaction Design · Figma Make</span>
            </div>
            <h2 className="project-title">Zen DMV</h2>
            <p className="project-desc">
              What if a government service started from calm instead of convention?
              I used Figma Make and AI prototyping to find out.
            </p>
            <div className="pcard-footer">
              <span className="pcard-stat"></span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <button className="project-expand-btn" onClick={() => openModal(4)}>+ View case study</button>
                <a
                  href="https://count-pitch-70585443.figma.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-expand-btn"
                >View prototype →</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── METHODS ──────────────────────────────────── */}
      <div className="methods-section" id="methods">
        <div className="section-label">How I Work</div>
        <div className="methods-grid">
          <div className="method-cell fade-in" data-method-num="I">
            <span className="method-icon">◎</span>
            <div className="method-name">Open-Ended Interviews</div>
            <p className="method-desc">
              I don't lead witnesses. I create conditions where people tell you what they
              actually think — not what they think you want to hear. Practiced across
              healthcare, tech, and social contexts.
            </p>
          </div>
          <div className="method-cell fade-in" data-method-num="II">
            <span className="method-icon">⬡</span>
            <div className="method-name">Participatory Design</div>
            <p className="method-desc">
              The best insights come when users are co-designers. I've used this method
              in live events, digital products, and field settings — adapting the format
              to what the context demands.
            </p>
          </div>
          <div className="method-cell fade-in" data-method-num="III">
            <span className="method-icon">◈</span>
            <div className="method-name">Secondary Research</div>
            <p className="method-desc">
              Industry benchmarks, academic literature, and competitive analysis ground
              my research in evidence. I triangulate qualitative findings against published
              data to sharpen recommendations.
            </p>
          </div>
        </div>
      </div>

      {/* ─── PHILOSOPHY ───────────────────────────────── */}
      <section className="philosophy-section" id="philosophy">
        <div className="section-label">Design Philosophy</div>
        <div className="philosophy-grid">
          <div className="philosophy-sticky">
            <h2 className="philosophy-big">People<br />before <em>pixels.</em></h2>
          </div>
          <div className="philosophy-items">
            <div className="philosophy-item fade-in">
              <span className="philosophy-item-num">01</span>
              <div className="philosophy-item-content">
                <div className="philosophy-item-title">Designing for Joy</div>
                <p className="philosophy-item-text">
                  Inspired by{' '}
                  <a href="https://aestheticsofjoy.com/" target="_blank" rel="noopener noreferrer" className="inline-link">
                    Ingrid Fetell Lee
                  </a>{' '}
                  and biophilic principles, I believe good UX should leave
                  people feeling better than before. Engagement metrics matter —
                  so does delight. The two aren't in conflict.
                </p>
              </div>
            </div>
            <div className="philosophy-item fade-in">
              <span className="philosophy-item-num">02</span>
              <div className="philosophy-item-content">
                <div className="philosophy-item-title">Avoid Cognitive Load</div>
                <p className="philosophy-item-text">
                  I studied cognitive science before I studied design. That order matters.
                  Every insight I surface gets filtered through how people actually process
                  information.
                </p>
              </div>
            </div>
            <div className="philosophy-item fade-in">
              <span className="philosophy-item-num">03</span>
              <div className="philosophy-item-content">
                <div className="philosophy-item-title">Method Matters</div>
                <p className="philosophy-item-text">
                  I've done research in parking lots in Portugal, and on remote video calls.
                  The method always follows the constraint. A brilliant research plan that
                  can't survive contact with reality is just a plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INTERESTS ────────────────────────────────── */}
      <section className="interests-section">
        <div className="interests-inner">
          <div className="interests-image-wrap fade-in">
            <img src={portoPhoto} alt="Cabo da Roca, Portugal" className="interests-img" />
          </div>
          <div className="interests-content fade-in" style={{ alignItems: 'center', textAlign: 'center' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Outside Work</div>
            <p className="interests-text">
              As an experience aficionado, I stay observant and curious.
              I find that being in unfamiliar places primes you for innovation
              and insights, so I love exploring.
            </p>
            <div className="interests-whisper">
              <span>Blue Zones</span>
              <span>Sunsets</span>
              <span>Travel</span>
              <span>Wellness</span>
              <span>Music</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ──────────────────────────────────── */}
      <section className="cta-section" id="contact">
        <div className="cta-bg">SP</div>
        <div className="cta-label">Get in Touch</div>
        <h2 className="cta-headline">If something<br />clicked, <em>let's chat.</em></h2>
        <p className="cta-sub">UX Designer · Cognitive Science · Human-Centered Design</p>

        {/* Eboo testimonial — secondary social proof */}
        <div className="cta-testimonial">
          <p className="cta-testimonial-text">
            "She is a strong and organized public speaker, and her passion for healthcare
            policy was evident in her independent research presentation. We were very
            pleased and proud to have had her on our team."
          </p>
          <span className="cta-testimonial-attr">— Eboo Versi, MD PhD · NIH I-Corps Manager</span>
        </div>

        <div className="cta-contact-grid">
          <div className="cta-contact-item">
            <span className="cta-contact-label">Email</span>
            <div className="cta-contact-row">
              <a href="mailto:smrpl777@gmail.com" className="cta-contact-link">smrpl777@gmail.com</a>
              <button
                className={`cta-copy-btn${copiedKey === 'email' ? ' copied' : ''}`}
                onClick={() => handleCopy('smrpl777@gmail.com', 'email')}
                title="Copy email"
              >
                {copiedKey === 'email' ? '✓' : '⎘'}
              </button>
            </div>
          </div>
          <div className="cta-contact-item">
            <span className="cta-contact-label">LinkedIn</span>
            <div className="cta-contact-row">
              <a href="https://linkedin.com/in/smerapatil" target="_blank" rel="noopener noreferrer" className="cta-contact-link">linkedin.com/in/smerapatil</a>
              <button
                className={`cta-copy-btn${copiedKey === 'linkedin' ? ' copied' : ''}`}
                onClick={() => handleCopy('https://linkedin.com/in/smerapatil', 'linkedin')}
                title="Copy link"
              >
                {copiedKey === 'linkedin' ? '✓' : '⎘'}
              </button>
            </div>
          </div>
          <div className="cta-contact-item">
            <span className="cta-contact-label">Book a Call</span>
            <div className="cta-contact-row">
              <a href="https://calendly.com/smrpl777/30min" target="_blank" rel="noopener noreferrer" className="cta-contact-link">calendly.com/smrpl777/30min</a>
              <button
                className={`cta-copy-btn${copiedKey === 'calendly' ? ' copied' : ''}`}
                onClick={() => handleCopy('https://calendly.com/smrpl777/30min', 'calendly')}
                title="Copy link"
              >
                {copiedKey === 'calendly' ? '✓' : '⎘'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <span className="footer-left">Smera Patil — UX Design Portfolio 2025</span>
        <span className="footer-right">Berkeley, CA · Available now</span>
      </footer>

      {/* ─── CASE STUDY MODAL ─────────────────────────── */}
      {activeModal !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <span className={`modal-title${activeModal === 3 ? ' modal-title--nih' : ''}`}>{MODAL_TITLES[activeModal]}</span>
              <button className="modal-close-btn" onClick={closeModal} aria-label="Close">
                ✕
              </button>
            </div>
            <div className="modal-body">
              {activeModal === 1 && <CirclesCaseStudy />}
              {activeModal === 2 && <PortalCaseStudy />}
              {activeModal === 3 && <NIHCaseStudy />}
              {activeModal === 4 && <ZenDMVCaseStudy />}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}