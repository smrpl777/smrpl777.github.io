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
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--muted)',
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
    borderLeft: '2px solid var(--sage)',
    background: 'rgba(123,158,135,0.06)',
    marginTop: 16,
  }}>
    <p style={{
      fontSize: 15,
      lineHeight: 1.8,
      color: 'var(--muted)',
      fontStyle: 'italic',
      fontWeight: 300,
    }}>{text}</p>
    <span style={{
      display: 'block',
      marginTop: 12,
      fontFamily: "'DM Mono', monospace",
      fontSize: 11,
      letterSpacing: '0.12em',
      color: 'var(--muted)',
      opacity: 0.7,
    }}>{source}</span>
  </div>
);

const InsightPill = ({ text }: { text: string }) => (
  <span style={{
    display: 'inline-block',
    padding: '6px 14px',
    border: '1px solid rgba(26,21,16,0.15)',
    fontFamily: "'DM Mono', monospace",
    fontSize: 11,
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
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--muted)', fontWeight: 300 }}>
            Internationals in Porto knew the app — but couldn't find each other at the door.
            Language barriers, anxiety about approaching strangers, and unclear entry points
            meant strong RSVPs turned into weak attendance. The product wasn't broken. The
            moment of arrival was.
          </p>
        </PanelSection>

        <PanelSection label="What I Did">
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--muted)', fontWeight: 300 }}>
            I ran in-person observations at three events, shadowed attendees from arrival to
            introduction, and ran participatory design sessions with team leads. One session
            tested color-coded group identification across 184 iterations.
          </p>
          <div style={{ marginTop: 16 }}>
            <InsightPill text="In-person observation" />
            <InsightPill text="Participatory design" />
            <InsightPill text="184 prototype iterations" />
            <InsightPill text="Multi-language testing" />
          </div>
        </PanelSection>

        <PanelSection label="The Insight">
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--muted)', fontWeight: 300 }}>
            The friction wasn't the app — it was the 45 seconds after walking in the door.
            Color-coded group identification reduced the average time to find your group
            from over 3 minutes to under 0.5 seconds.
          </p>
        </PanelSection>
      </div>

      <div>
        <PanelSection label="Outcomes">
          <div style={{ display: 'flex', gap: 40, marginBottom: 32 }}>
            <PanelStat num="2.8×" label="RSVP lift across 3 events" />
            <PanelStat num="12M+" label="Internationals in target market" />
            <PanelStat num="0.5s" label="Avg. group-find time after fix" />
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
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--muted)', fontWeight: 300 }}>
            A government job portal served millions of applicants — but its design hadn't kept
            pace with who was using it. Younger applicants and career-changers were abandoning
            the process at critical points. The data showed drop-offs. The system showed no
            curiosity about why.
          </p>
        </PanelSection>

        <PanelSection label="What I Did">
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--muted)', fontWeight: 300 }}>
            I ran a secondary benchmarking audit against comparable portals, then conducted
            open-ended interviews with users aged 18–34 who had experienced friction firsthand.
            Cognitive load mapping revealed where the interface was asking users to hold
            too much in mind at once.
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
        <PanelSection label="Outcomes">
          <div style={{ display: 'flex', gap: 40, marginBottom: 32 }}>
            <PanelStat num="↓42%" label="Task completion time" />
            <PanelStat num="3.1×" label="Sentiment improvement" />
            <PanelStat num="#1" label="Barrier: resume builder" />
          </div>
        </PanelSection>

        <PanelSection label="Key Finding">
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--muted)', fontWeight: 300 }}>
            The resume builder — meant to help — was the single largest drop-off point.
            For users without traditional employment histories, the form's assumptions made
            them feel invisible. Redesigning the entry points alone reduced abandonment
            by 42% in usability testing.
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
        <PanelSection label="The Context">
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--muted)', fontWeight: 300 }}>
            A pharmaceutical company had a product hypothesis. The NIH I-Corps accelerator
            gave us 7 weeks to validate it — or kill it. Our mandate: 100 discovery interviews
            with physicians, payers, and patients to determine if the product idea would
            actually land in clinical practice.
          </p>
        </PanelSection>

        <PanelSection label="What I Did">
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--muted)', fontWeight: 300 }}>
            I led interview design and facilitation across all three stakeholder groups.
            Healthcare settings require a specific kind of restraint — clinical professionals
            flag leading questions immediately. I developed a protocol that opened doors
            without directing answers.
          </p>
          <div style={{ marginTop: 16 }}>
            <InsightPill text="100 stakeholder interviews" />
            <InsightPill text="Discovery research" />
            <InsightPill text="Clinical settings" />
            <InsightPill text="Payer + patient + physician" />
            <InsightPill text="7-week sprint" />
          </div>
        </PanelSection>
      </div>

      <div>
        <PanelSection label="Outcomes">
          <div style={{ display: 'flex', gap: 40, marginBottom: 32 }}>
            <PanelStat num="🏆" label="Best in Show" />
            <PanelStat num="$2M" label="Grant influence" />
            <PanelStat num="100" label="Interviews in 7 weeks" />
          </div>
        </PanelSection>

        <PanelSection label="The Pivot">
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--muted)', fontWeight: 300 }}>
            The interviews revealed that physicians weren't resistant to the product itself —
            they were resistant to the workflow interruption it created. Adoption wasn't
            a product problem. It was a workflow design problem. This insight redirected
            the entire product strategy.
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
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--muted)', fontWeight: 300 }}>
            DMV experiences are a universal stress point. Long wait times, confusing forms,
            and unclear next steps create friction at every stage. Zen DMV asked: what if
            government service design prioritized cognitive ease over institutional convention?
          </p>
        </PanelSection>

        <PanelSection label="What I Did">
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--muted)', fontWeight: 300 }}>
            Using Figma Make and Claude as AI-assisted design tools, I prototyped a calmer,
            more intuitive interface for DMV workflows. The design was informed by principles
            from biophilic design and cognitive load theory — tested against users from
            diverse cultural backgrounds for whom English is a second language.
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
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--muted)', fontWeight: 300 }}>
            Three principles guided every decision: show only what the user needs right now,
            use visual hierarchy instead of written instructions wherever possible, and treat
            waiting as a designed moment rather than dead time.
          </p>
        </PanelSection>

        <PanelSection label="Outcomes">
          <div style={{ display: 'flex', gap: 40, marginBottom: 32 }}>
            <PanelStat num="↓" label="Cognitive friction across all flows" />
            <PanelStat num="3" label="Core principles" />
          </div>
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
