import { useEffect, useState } from 'react';
import './styles.css';

// Import logos
import ucBerkeleyLogo from 'figma:asset/af3ef6e733e04c1384afc8f72ef2829fa9938f3b.png';
import nihLogo from 'figma:asset/06d53fa48da866eb902759c0fe388b6fe0eea59a.png';
import ixdfLogo from 'figma:asset/4d728eb69aa2aa038e20e7fcd59549b4f6c3a98c.png';
import infosysLogo from 'figma:asset/e91db71bac445c54ccb7cf58bc1eec3529b2758f.png';
import { CirclesCaseStudy, PortalCaseStudy, NIHCaseStudy, ZenDMVCaseStudy } from './components/CaseStudyPanels';

export default function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState({ width: 10, height: 10, ringWidth: 36, ringHeight: 36 });
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleProject = (num: number) => {
    setExpandedProject(prev => prev === num ? null : num);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setTimeout(() => {
        setRingPos({ x: e.clientX, y: e.clientY });
      }, 60);
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interactiveElements = document.querySelectorAll('a, button, .project-card');
    const handleMouseEnter = () => setCursorSize({ width: 20, height: 20, ringWidth: 56, ringHeight: 56 });
    const handleMouseLeave = () => setCursorSize({ width: 10, height: 10, ringWidth: 36, ringHeight: 36 });
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });
    return () => {
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), 80);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio">

      {/* Custom Cursor */}
      <div
        className="cursor"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          width: `${cursorSize.width}px`,
          height: `${cursorSize.height}px`,
        }}
      />
      <div
        className="cursor-ring"
        style={{
          left: `${ringPos.x}px`,
          top: `${ringPos.y}px`,
          width: `${cursorSize.ringWidth}px`,
          height: `${cursorSize.ringHeight}px`,
        }}
      />

      {/* Navigation */}
      <nav>
        <span className="nav-logo">Smera Patil — UX</span>
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
            Research<br />that makes<br />people <em>act.</em>
          </h1>
          <p className="hero-sub">
            I'm Smera — a UX researcher trained in <strong>cognitive science &amp; entrepreneurship</strong>,
            fluent in what makes humans tick. I've run 100 user interviews for the NIH,
            redesigned broken job portals, and increased event participation{' '}
            <strong>2.8× in three weeks</strong>.
          </p>
          <a href="#contact" className="hero-cta">
            Let's talk <span className="hero-cta-arrow">→</span>
          </a>

          <div className="hero-stat-row">
            <div className="stat">
              <span className="stat-num">100+</span>
              <span className="stat-label">User interviews</span>
            </div>
            <div className="stat">
              <span className="stat-num">2.8×</span>
              <span className="stat-label">Participation lift</span>
            </div>
            <div className="stat">
              <span className="stat-num">4</span>
              <span className="stat-label">Projects</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="clout-stack">
            <div className="clout-pill">
              <img src={ucBerkeleyLogo} alt="UC Berkeley" className="clout-logo" />
              <span className="clout-dot red"></span>
              UC Berkeley — Cognitive Science
            </div>
            <div className="clout-pill">
              <img src={infosysLogo} alt="Infosys" className="clout-logo" />
              <span className="clout-dot gold"></span>
              Infosys Helix
            </div>
            <div className="clout-pill">
              <img src={ixdfLogo} alt="IxDF" className="clout-logo" />
              <span className="clout-dot"></span>
              IxDF — Interaction Design
            </div>
            <div className="clout-pill">
              <img src={nihLogo} alt="NIH" className="clout-logo" />
              <span className="clout-dot red"></span>
              NIH I-Corps — Best in Show ✦
            </div>
            <div className="clout-pill">
              <div className="clout-logo aliena-logo">AC</div>
              <span className="clout-dot gold"></span>
              Aliena Cai Fast Track UX
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
          <div className="project-card project-card-hover-warm fade-in">
            <span className="project-num">01</span>
            <div className="project-tag">Social UX · Multicultural Design · Porto, PT</div>
            <h2 className="project-title">Circles<br />Meetup App</h2>
            <p className="project-desc">
              The problem wasn't the app — it was the moment strangers had to find each other
              in a crowd across language barriers. I ran in-person observations and participatory
              tests to pinpoint the friction. A single insight turned logistics invisible.
            </p>
            <span className="project-result">↑ 2.8× RSVPs across 3 events</span>
            <button
              className={`project-expand-btn${expandedProject === 1 ? ' active' : ''}`}
              onClick={() => toggleProject(1)}
            >
              <span className="btn-icon">+</span>
              {expandedProject === 1 ? 'Close case study' : 'View case study'}
            </button>
          </div>

          {/* Project 02 — Broken Portal */}
          <div className="project-card project-card-hover-green fade-in">
            <span className="project-num">02</span>
            <div className="project-tag">Job Portal UX · Accessibility · Research</div>
            <h2 className="project-title">Fixing a<br />Broken Portal</h2>
            <p className="project-desc">
              Job searching is already anxiety-inducing. I combined secondary benchmarking
              with open-ended interviews to surface the hidden drop-off points — especially
              for younger applicants the system wasn't designed to serve.
            </p>
            <span className="project-result">Resume builder identified as #1 barrier</span>
            <button
              className={`project-expand-btn${expandedProject === 2 ? ' active' : ''}`}
              onClick={() => toggleProject(2)}
            >
              <span className="btn-icon">+</span>
              {expandedProject === 2 ? 'Close case study' : 'View case study'}
            </button>
          </div>

          {/* Expansion panel for Projects 01 & 02 */}
          {(expandedProject === 1 || expandedProject === 2) && (
            expandedProject === 1
              ? <CirclesCaseStudy key="cs-1" />
              : <PortalCaseStudy key="cs-2" />
          )}

          {/* Project 03 — NIH I-Corps */}
          <div className="project-card project-card-dark project-card-full fade-in">
            <div>
              <span className="project-num">03</span>
              <div className="project-tag">Healthcare · Pharma · Stakeholder Research</div>
              <h2 className="project-title">NIH I-Corps:<br />100 Interviews,<br />One Direction</h2>
              <p className="project-desc">
                A pharmaceutical company needed to know if their product would actually land.
                We conducted 100 stakeholder interviews — physicians, payers, patients — in an
                accelerator sprint. Asking the right open-ended questions in formal healthcare
                settings is a skill. We won Best in Show.
              </p>
              <span className="project-result">🏆 Best in Show — NIH I-Corps Accelerator</span>
              <button
                className={`project-expand-btn${expandedProject === 3 ? ' active' : ''}`}
                onClick={() => toggleProject(3)}
              >
                <span className="btn-icon">+</span>
                {expandedProject === 3 ? 'Close case study' : 'View case study'}
              </button>
            </div>

            <div>
              <div className="project-insight">
                <div className="project-insight-title">Key Insight</div>
                <p className="project-insight-text">
                  The real adoption barrier wasn't the drug — it was the workflow it interrupted.
                </p>
              </div>
              <div className="project-manager-quote">
                <p className="project-manager-quote-text">
                  She is a strong and organized public speaker and her passion for healthcare
                  policy was evident in her independent research presentation. We were very
                  pleased and proud to have had her on our team.
                </p>
                <span className="project-manager-quote-source">— Eboo Versi, MD PhD · Manager</span>
              </div>
            </div>
          </div>

          {/* Expansion panel for Project 03 */}
          {expandedProject === 3 && <NIHCaseStudy key="cs-3" />}

          {/* Project 04 — Zen DMV */}
          <div className="project-card project-card-full project-card-hover-purple fade-in">
            <div>
              <span className="project-num">04</span>
              <div className="project-tag">AI-Assisted Design · Interaction Design · Figma Make</div>
              <h2 className="project-title">Zen DMV:<br />Calm by<br /><em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Design</em></h2>
              <p className="project-desc">
                Zen and DMV are two words you rarely hear together. I made this dichotomy a
                practical reality — using AI tools including Figma Make and Claude to design a
                calmer, more intuitive experience for users navigating complex government services
                across diverse cultural backgrounds.
              </p>
              <span className="project-result">↓ Reduced cognitive friction across all flows</span>
              <button
                className={`project-expand-btn${expandedProject === 4 ? ' active' : ''}`}
                onClick={() => toggleProject(4)}
              >
                <span className="btn-icon">+</span>
                {expandedProject === 4 ? 'Close case study' : 'View case study'}
              </button>
            </div>

            <div className="project-insight-light">
              <div className="project-insight-title">Approach</div>
              <p className="project-insight-text-light">
                Designing for calm isn't the absence of information — it's the presence of
                clarity at exactly the right moment.
              </p>
            </div>
          </div>

          {/* Expansion panel for Project 04 */}
          {expandedProject === 4 && <ZenDMVCaseStudy key="cs-4" />}

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
                  Inspired by Ingrid Fetell Lee and biophilic principles, I believe good UX
                  should leave people feeling better than before. Engagement metrics matter —
                  so does delight. The two aren't in conflict.
                </p>
              </div>
            </div>
            <div className="philosophy-item fade-in">
              <span className="philosophy-item-num">02</span>
              <div className="philosophy-item-content">
                <div className="philosophy-item-title">Cognitive Load is the Enemy</div>
                <p className="philosophy-item-text">
                  My background in cognitive science isn't a credential decoration — it's a lens.
                  Every insight I surface is filtered through how people actually process
                  information under real-world conditions, not ideal ones.
                </p>
              </div>
            </div>
            <div className="philosophy-item fade-in">
              <span className="philosophy-item-num">03</span>
              <div className="philosophy-item-content">
                <div className="philosophy-item-title">Method Follows Context</div>
                <p className="philosophy-item-text">
                  I've done research in parking lots in Portugal, hospital corridors, and remote
                  video calls. The method always follows the constraint. A brilliant research plan
                  that can't survive contact with reality is just a plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────── */}
      <section className="cta-section" id="contact">
        <div className="cta-bg">SP</div>
        <div className="cta-label">Open to Opportunities</div>
        <h2 className="cta-headline">Let's make<br />something <em>real.</em></h2>
        <p className="cta-sub">UX Researcher · Mixed Methods · Cognitive Science · Human-Centered Design</p>
        <div className="cta-buttons">
          <a href="mailto:smerapatil@berkeley.edu" className="btn-primary">Get in touch →</a>
          <a href="#work" className="btn-secondary">View my work</a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <span className="footer-left">Smera Patil — UX Research Portfolio 2025</span>
        <span className="footer-right">Berkeley, CA · Available now</span>
      </footer>

    </div>
  );
}
