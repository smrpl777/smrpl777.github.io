import React from 'react';

/* ─────────────────────────────────────────────────
   Shared helpers
───────────────────────────────────────────────── */

const PanelStat = ({ num, label }: { num: string; label: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
    <span style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: 32,
      fontWeight: 700,
      color: 'var(--ink)',
      lineHeight: 1,
    }}>{num}</span>
    <span style={{
      fontFamily: "'DM Mono', monospace",
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--muted)',
    }}>{label}</span>
  </div>
);

const PanelSection = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 40 }}>
    <div style={{
      fontFamily: "'DM Mono', monospace",
      fontSize: 12,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--ink)',
      fontWeight: 600,
      marginBottom: 20,
      paddingBottom: 12,
      borderBottom: '1px solid rgba(26,21,16,0.1)',
    }}>{label}</div>
    {children}
  </div>
);

const Testimonial = ({ text, source }: { text: string; source: string }) => (
  <div style={{
    padding: '24px 32px',
    borderLeft: '2px solid var(--sky)',
    background: 'rgba(135,181,208,0.06)',
    marginTop: 16,
  }}>
    <p style={{
      fontSize: 16,
      lineHeight: 1.9,
      color: 'var(--muted)',
      fontStyle: 'italic',
      fontWeight: 300,
    }}>{text}</p>
    <span style={{
      display: 'block',
      marginTop: 12,
      fontFamily: "'DM Mono', monospace",
      fontSize: 12,
      letterSpacing: '0.12em',
      color: 'var(--muted)',
      opacity: 0.7,
    }}>{source}</span>
  </div>
);

const InsightPill = ({ text }: { text: string }) => (
  <span style={{
    display: 'inline-block',
    padding: '8px 16px',
    border: '1px solid rgba(26,21,16,0.15)',
    fontFamily: "'DM Mono', monospace",
    fontSize: 12,
    letterSpacing: '0.1em',
    color: 'var(--ink)',
    marginRight: 8,
    marginBottom: 8,
  }}>{text}</span>
);

/* ─────────────────────────────────────────────────
   Project 01 — Circles
───────────────────────────────────────────────── */

export const CirclesCaseStudy = () => (
  <div className="case-study-panel">
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>

      <div>
        <PanelSection label="The Problem">
          <p style={{ fontSize: 17, lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
            People RSVPed but didn't show up — or showed up and couldn't find
            their group. The app worked. The arrival experience didn't.
          </p>
        </PanelSection>

        <PanelSection label="What I Did">
          <p style={{ fontSize: 17, lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
            As Chief Design Officer in a team of five at the European Innovation
            Academy, I led participatory testing, in-person observation, and
            interviews to understand where coordination was breaking down.
          </p>
          <div style={{ marginTop: 16 }}>
            <InsightPill text="In-person observation" />
            <InsightPill text="Participatory design" />
            <InsightPill text="Iterative prototype testing" />
            <InsightPill text="Multi-language testing" />
          </div>
        </PanelSection>

        <PanelSection label="The Insight">
          <p style={{ fontSize: 17, lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
            Large-group coordination had too many steps and too much ambiguity.
            Simplifying the interaction model — progressive flows, clearer visual
            hierarchy — turned a confusing arrival into a legible one.
          </p>
        </PanelSection>
      </div>

      <div>
        <PanelSection label="Outcomes">
          <div style={{ display: 'flex', gap: 40, marginBottom: 32 }}>
            <PanelStat num="2.8×" label="Increase in event RSVPs" />
          </div>
        </PanelSection>

        <PanelSection label="From a Participant">
          <Testimonial
            text="Circles was great. These were people I walked past daily but never got the opportunity to really talk with. It was great to sit down, learn about their cultures, how they got here — and now I talk to these people multiple times a day."
            source="— Chris M., Ireland"
          />
        </PanelSection>

        <PanelSection label="Frameworks Used">
          <InsightPill text="Jobs to Be Done" />
          <InsightPill text="Affinity Mapping" />
          <InsightPill text="Rapid Prototyping" />
          <InsightPill text="Behavioral Observation" />
        </PanelSection>
      </div>

    </div>
  </div>
);

/* ─────────────────────────────────────────────────
   Project 02 — Broken Portal
───────────────────────────────────────────────── */

export const PortalCaseStudy = () => (
  <div className="case-study-panel">
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>

      <div>
        <PanelSection label="The Problem">
          <p style={{ fontSize: 17, lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
            A job portal was losing people mid-flow. The drop-offs were visible.
            What was causing them wasn't. No one had sat with users to find out.
          </p>
        </PanelSection>

        <PanelSection label="What I Did">
          <p style={{ fontSize: 17, lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
            Under the mentorship of Prasad Bartakke at YUJ Designs, I audited
            comparable portals and ran open-ended interviews with users who'd hit
            friction firsthand. Cognitive load mapping showed where the interface
            was asking too much at once.
          </p>
          <div style={{ marginTop: 16 }}>
            <InsightPill text="Competitive benchmarking" />
            <InsightPill text="Open-ended interviews" />
            <InsightPill text="Cognitive load mapping" />
            <InsightPill text="Accessibility audit" />
          </div>
        </PanelSection>
      </div>

      <div>
        <PanelSection label="What We Found">
          <p style={{ fontSize: 17, lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
            Users weren't confused by the steps. They didn't see themselves in
            the assumptions the design made about them.
          </p>
        </PanelSection>

        <PanelSection label="Key Insight">
          <p style={{ fontSize: 17, lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
            The cognitive load wasn't in the number of steps — it was in the mismatch between
            the system's assumptions and the user's lived experience. Simplification alone
            wouldn't have solved it. Reframing the entry points did.
          </p>
        </PanelSection>

        <PanelSection label="Frameworks Used">
          <InsightPill text="Heuristic Evaluation" />
          <InsightPill text="Think-Aloud Protocol" />
          <InsightPill text="Task Analysis" />
          <InsightPill text="Affinity Mapping" />
        </PanelSection>
      </div>

    </div>
  </div>
);

/* ─────────────────────────────────────────────────
   Project 03 — NIH I-Corps
───────────────────────────────────────────────── */

export const NIHCaseStudy = () => (
  <div className="case-study-panel">
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>

      <div>
        <PanelSection label="The Problem">
          <p style={{ fontSize: 17, lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
            DMK Pharmaceuticals needed to know whether their product had a real
            market — or whether they were solving the wrong problem entirely.
          </p>
        </PanelSection>

        <PanelSection label="What I Did">
          <p style={{ fontSize: 17, lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
            Over roughly seven weeks, I conducted ~100 stakeholder interviews with
            payers, physicians, and decision-makers — mapping workflows and listening
            for where adoption was actually breaking down.
          </p>
          <div style={{ marginTop: 16 }}>
            <InsightPill text="Discovery research" />
            <InsightPill text="Clinical settings" />
            <InsightPill text="Payer + patient + physician" />
            <InsightPill text="7-week sprint" />
          </div>
        </PanelSection>
      </div>

      <div>
        {/* Outlined stat blocks */}
        <PanelSection label="Recognition">
          <div style={{ display: 'flex', gap: 16, marginBottom: 32, flexWrap: 'wrap' }}>
            <div style={{
              border: '1.5px solid rgba(26,21,16,0.18)',
              padding: '24px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              minWidth: 160,
              flex: 1,
            }}>
              <span style={{ fontSize: 28, lineHeight: 1 }}>🏆</span>
              <span style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 13,
                letterSpacing: '0.14em',
                textTransform: 'uppercase' as const,
                color: 'var(--ink)',
                fontWeight: 700,
              }}>Best in Show</span>
              <span style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                letterSpacing: '0.1em',
                color: 'var(--muted)',
                opacity: 0.6,
              }}>NIH I-Corps Program</span>
            </div>
            <div style={{
              border: '1.5px solid rgba(26,21,16,0.18)',
              padding: '24px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              minWidth: 160,
              flex: 1,
            }}>
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 36,
                fontWeight: 700,
                color: 'var(--ink)',
                lineHeight: 1,
              }}>~100</span>
              <span style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 12,
                letterSpacing: '0.12em',
                textTransform: 'uppercase' as const,
                color: 'var(--muted)',
              }}>Stakeholder interviews</span>
            </div>
          </div>
        </PanelSection>

        <PanelSection label="The Insight">
          <p style={{ fontSize: 17, lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
            The barrier wasn't the drug. It was the workflow around it. That reframe
            changed how the product positioned itself — and earned Best in Show at
            the NIH I-Corps program.
          </p>
        </PanelSection>

        <PanelSection label="Frameworks Used">
          <InsightPill text="Discovery Interviews" />
          <InsightPill text="Lean Startup Validation" />
          <InsightPill text="Stakeholder Mapping" />
          <InsightPill text="Journey Mapping" />
          <InsightPill text="Thematic Analysis" />
          <InsightPill text="I-Corps Methodology" />
        </PanelSection>
      </div>

    </div>
  </div>
);

/* ─────────────────────────────────────────────────
   Project 04 — Zen DMV
───────────────────────────────────────────────── */

export const ZenDMVCaseStudy = () => (
  <div className="case-study-panel">
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>

      <div>
        <PanelSection label="The Challenge">
          <p style={{ fontSize: 17, lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
            DMV experiences are a universal stress point. What if a government
            service started from calm instead of convention?
          </p>
        </PanelSection>

        <PanelSection label="What I Did">
          <p style={{ fontSize: 17, lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
            Using Figma Make and AI-assisted prototyping, I designed a quieter,
            more intuitive DMV interface — informed by cognitive load theory and
            biophilic design principles.
          </p>
          <div style={{ marginTop: 16 }}>
            <InsightPill text="AI-assisted prototyping" />
            <InsightPill text="Biophilic design" />
            <InsightPill text="Multilingual UX" />
            <InsightPill text="Cognitive load reduction" />
            <InsightPill text="Figma Make" />
          </div>
        </PanelSection>
      </div>

      <div>
        <PanelSection label="Design Principles">
          <p style={{ fontSize: 17, lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
            Show only what the user needs right now. Use visual hierarchy instead
            of written instructions wherever possible. Treat waiting as a designed
            moment, not dead time.
          </p>
        </PanelSection>

        <PanelSection label="Frameworks Used">
          <InsightPill text="Progressive Disclosure" />
          <InsightPill text="Plain Language Design" />
          <InsightPill text="Accessibility-first" />
          <InsightPill text="AI-Assisted Iteration" />
        </PanelSection>
      </div>

    </div>
  </div>
);