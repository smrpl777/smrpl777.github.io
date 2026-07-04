(function () {
  'use strict';

  // ============ DATA ============

  var credentials = [
    { name: 'UC Berkeley — Cognitive Science', group: 'Education + Certifications', dot: '#B0654A', logo: 'assets/logo-berkeley.png' },
    { name: 'IxDF — Top 10% UI Design', group: 'Education + Certifications', dot: '#5c7a5a', logo: 'assets/logo-ixdf.png' },
    { name: 'Aliena Cai — Fast Track UX', group: 'Education + Certifications', dot: '#a5842e', logo: 'assets/logo-aliena.png' },
    { name: 'NIH I-Corps — Best in Show', group: 'Selected Experience', dot: '#D6A48C', logo: 'assets/logo-nih.png' },
    { name: 'Infosys Helix', group: 'Selected Experience', dot: '#4a7ba7', logo: 'assets/logo-infosys.png' }
  ];

  var projects = [
    {
      id: 'infosys',
      category: 'Insurance UX · Unified Navigation · Infosys Helix',
      categoryColor: '#4a7ba7',
      blockColor: '#5B8FC4',
      rotate: 'rotate(-0.5deg)',
      title: 'Insurance Claims',
      cardCopy: 'Users had access to dozens of capabilities but no single place to see them — or find the one record they needed. Claims got lost in navigation before anyone got to solve them.',
      stat: null,
      displayTitle: '01 — Infosys Helix',
      titleWeight: 500,
      titleSize: '30px',
      washColor: 'rgba(91,143,196,0.3)',
      fullWidth: true,
      leftBlocks: [
        { label: 'The Problem', text: 'Enterprise insurance claims portal had proliferated into dozens of disconnected tools and views. Users navigated by muscle memory and institutional knowledge rather than clear information architecture.' },
        { label: 'What I Did', text: 'I led information architecture audits, conducted user testing across different user personas, and designed a unified navigation system that brought all claims capabilities into one coherent experience.', tags: ['Information Architecture', 'User Testing', 'Enterprise Systems', 'Navigation Design'] }
      ],
      rightBlocks: [
        { label: 'The Insight', isText: true, text: 'When access is abundant but findability is broken, users suffer cognitive overload. A single source of truth for navigation removed the guesswork.' },
        { label: 'Frameworks Used', isText: true, text: '', tags: ['Card Sorting', 'Tree Testing', 'User Research', 'Systems Thinking'] }
      ]
    },
    {
      id: 'circles',
      category: 'Social UX · Participatory Design · Porto, PT',
      categoryColor: '#5c7a5a',
      blockColor: '#97B094',
      rotate: 'rotate(-0.8deg)',
      title: 'Meetup App',
      cardCopy: 'Helping strangers find each other in a crowd across language barriers.',
      stat: '↑ 2.8× event RSVPs',
      displayTitle: '02 — Circles Meetup App',
      titleWeight: 500,
      titleSize: '30px',
      washColor: 'rgba(151,176,148,0.35)',
      leftBlocks: [
        { label: 'The Problem', text: "People RSVPed but didn't show up — or showed up and couldn't find their group. The app worked. The arrival experience didn't." },
        { label: 'What I Did', text: 'As Chief Design Officer in a team of five at the European Innovation Academy, I led participatory testing, in-person observation, and interviews to understand where coordination was breaking down.', tags: ['In-person observation', 'Participatory design', 'Iterative prototype testing', 'Multi-language testing'] },
        { label: 'The Insight', text: 'Large-group coordination had too many steps and too much ambiguity. Simplifying the interaction model — progressive flows, clearer visual hierarchy — turned a confusing arrival into a legible one.' }
      ],
      rightBlocks: [
        { label: 'Outcomes', isStat: true, statValue: '2.8×', statLabel: 'Increase in event RSVPs' },
        { label: 'From a Participant', isTestimonial: true, quote: 'Circles was great. These were people I walked past daily but never got the opportunity to really talk with. It was great to sit down, learn about their cultures, how they got here — and now I talk to these people multiple times a day.', author: '— Chris M., Ireland' },
        { label: 'Frameworks Used', isText: true, text: '', tags: ['Jobs to Be Done', 'Affinity Mapping', 'Rapid Prototyping', 'Behavioral Observation'] }
      ]
    },
    {
      id: 'portal',
      category: 'Job Portal UX · Cognitive Mapping · YUJ Designs',
      categoryColor: '#a5842e',
      blockColor: '#E0BE6E',
      rotate: 'rotate(0.6deg)',
      title: 'Broken Portal',
      cardCopy: "Drop-offs were visible. The reasons weren't. No one had sat with users to find out what was actually happening.",
      stat: null,
      displayTitle: '03 — Fixing a Broken Portal',
      titleWeight: 500,
      titleSize: '30px',
      washColor: 'rgba(224,190,110,0.35)',
      leftBlocks: [
        { label: 'The Problem', text: "A job portal was losing people mid-flow. The drop-offs were visible. What was causing them wasn't. No one had sat with users to find out." },
        { label: 'What I Did', text: "Under the mentorship of Prasad Bartakke at YUJ Designs, I audited comparable portals and ran open-ended interviews with users who'd hit friction firsthand. Cognitive load mapping showed where the interface was asking too much at once.", tags: ['Competitive benchmarking', 'Open-ended interviews', 'Cognitive load mapping', 'Accessibility audit'] }
      ],
      rightBlocks: [
        { label: 'What We Found', isText: true, text: "Users weren't confused by the steps. They didn't see themselves in the assumptions the design made about them." },
        { label: 'Key Insight', isText: true, text: "The cognitive load wasn't in the number of steps — it was in the mismatch between the system's assumptions and the user's lived experience. Simplification alone wouldn't have solved it. Reframing the entry points did." },
        { label: 'Frameworks Used', isText: true, text: '', tags: ['Heuristic Evaluation', 'Think-Aloud Protocol', 'Task Analysis', 'Affinity Mapping'] }
      ]
    },
    {
      id: 'zendmv',
      category: 'AI-Assisted Design · Interaction Design · Figma Make',
      categoryColor: '#5c7a5a',
      blockColor: '#97B094',
      rotate: 'rotate(0.8deg)',
      title: 'Zen DMV',
      cardCopy: 'What if a government service started from calm instead of convention? I used Figma Make and AI prototyping to find out.',
      stat: null,
      displayTitle: '04 — Zen DMV',
      titleWeight: 500,
      titleSize: '30px',
      washColor: 'rgba(151,176,148,0.35)',
      leftBlocks: [
        { label: 'The Challenge', text: 'DMV experiences are a universal stress point. What if a government service started from calm instead of convention?' },
        { label: 'What I Did', text: 'Using Figma Make and AI-assisted prototyping, I designed a quieter, more intuitive DMV interface — informed by cognitive load theory and biophilic design principles.', tags: ['AI-assisted prototyping', 'Biophilic design', 'Multilingual UX', 'Cognitive load reduction', 'Figma Make'] }
      ],
      rightBlocks: [
        { label: 'Design Principles', isText: true, text: 'Show only what the user needs right now. Use visual hierarchy instead of written instructions wherever possible. Treat waiting as a designed moment, not dead time.' },
        { label: 'Frameworks Used', isText: true, text: '', tags: ['Progressive Disclosure', 'Plain Language Design', 'Accessibility-first', 'AI-Assisted Iteration'] }
      ],
      extraLink: { label: 'View prototype →', url: 'https://count-pitch-70585443.figma.site' }
    },
    {
      id: 'nih',
      category: 'Healthcare · Discovery Research',
      categoryColor: '#a5842e',
      blockColor: '#D6A48C',
      rotate: 'rotate(-0.6deg)',
      title: 'NIH I-Corps',
      cardCopy: 'A pharmaceutical company needed to know if their product had a real market. We had seven weeks and 100 interviews to find out.',
      stat: '🏆 Best in Show — NIH I-Corps',
      displayTitle: '05 — NIH I-Corps',
      titleWeight: 700,
      titleSize: '36px',
      washColor: 'rgba(214,164,140,0.4)',
      leftBlocks: [
        { label: 'The Problem', text: 'DMK Pharmaceuticals needed to know whether their product had a real market — or whether they were solving the wrong problem entirely.' },
        { label: 'What I Did', text: 'Over roughly seven weeks, I conducted ~100 stakeholder interviews with payers, physicians, and decision-makers — mapping workflows and listening for where adoption was actually breaking down.', tags: ['Discovery research', 'Clinical settings', 'Payer + patient + physician', '7-week sprint'] }
      ],
      rightBlocks: [
        { label: 'Recognition', isRecognition: true, cards: [
          { icon: '🏆', headline: 'Best in Show', subcaption: 'NIH I-Corps Program' },
          { icon: '~100', headline: 'Stakeholder interviews', subcaption: null }
        ] },
        { label: 'The Insight', isText: true, text: "The barrier wasn't the drug. It was the workflow around it. That reframe changed how the product positioned itself — and earned Best in Show at the NIH I-Corps program." },
        { label: 'Frameworks Used', isText: true, text: '', tags: ['Discovery Interviews', 'Lean Startup Validation', 'Stakeholder Mapping', 'Journey Mapping', 'Thematic Analysis', 'I-Corps Methodology'] }
      ]
    }
  ];

  var methods = [
    { numeral: 'I', title: 'Open-Ended Interviews', body: "I don't lead witnesses. I create conditions where people tell you what they actually think — not what they think you want to hear. Practiced across healthcare, tech, and social contexts." },
    { numeral: 'II', title: 'Participatory Design', body: "The best insights come when users are co-designers. I've used this method in live events, digital products, and field settings — adapting the format to what the context demands." },
    { numeral: 'III', title: 'Secondary Research', body: 'Industry benchmarks, academic literature, and competitive analysis ground my research in evidence. I triangulate qualitative findings against published data to sharpen recommendations.' }
  ];

  var philosophy = [
    { numeral: '01', title: 'Designing for Joy', body: 'Inspired by Ingrid Fetell Lee and biophilic principles, I believe good UX should leave people feeling better than before. Engagement metrics matter — so does delight. The two aren\'t in conflict.' },
    { numeral: '02', title: 'Avoid Cognitive Load', body: 'I studied cognitive science before I studied design. That order matters. Every insight I surface gets filtered through how people actually process information.' },
    { numeral: '03', title: 'Method Matters', body: "I've done research in parking lots in Portugal, and on remote video calls. The method always follows the constraint. A brilliant research plan that can't survive contact with reality is just a plan." }
  ];

  var contactLinksBase = [
    { key: 'email', label: 'Email', display: 'smrpl777@gmail.com', value: 'smrpl777@gmail.com' },
    { key: 'linkedin', label: 'LinkedIn', display: 'linkedin.com/in/smerapatil', value: 'https://linkedin.com/in/smerapatil' },
    { key: 'calendly', label: 'Book a Call', display: 'calendly.com/smrpl777/30min', value: 'https://calendly.com/smrpl777/30min' }
  ];

  // ============ HELPERS ============

  function el(tag, className, html) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  // ============ RENDER: CREDENTIALS ============

  function renderCredentials() {
    var list = document.getElementById('credentials-list');
    credentials.forEach(function (c) {
      var li = el('li', 'credential-row');
      li.innerHTML =
        '<div class="credential-row__logo"><img src="' + c.logo + '" alt="' + escapeHtml(c.name) + '" loading="lazy"></div>' +
        '<div class="credential-row__text">' +
          '<div class="credential-row__group">' + escapeHtml(c.group) + '</div>' +
          '<div class="credential-row__name-line">' +
            '<span class="credential-row__dot" style="background:' + c.dot + ';"></span>' +
            '<span class="credential-row__name">' + escapeHtml(c.name) + '</span>' +
          '</div>' +
        '</div>';
      list.appendChild(li);
    });
  }

  // ============ RENDER: WORK GRID ============

  function renderWorkGrid() {
    var grid = document.getElementById('work-grid');
    projects.forEach(function (p) {
      var wrap = el('div', 'project-card-wrap reveal' + (p.fullWidth ? ' project-card-wrap--full' : ''));

      var block = el('div', 'project-card__block');
      block.style.background = p.blockColor;
      wrap.appendChild(block);

      var card = el('div', 'project-card');
      card.style.transform = p.rotate;

      var category = el('div', 'project-card__category', escapeHtml(p.category));
      category.style.color = p.categoryColor;
      card.appendChild(category);

      card.appendChild(el('h3', 'project-card__title', escapeHtml(p.title)));
      card.appendChild(el('p', 'project-card__copy', escapeHtml(p.cardCopy)));

      if (p.stat) {
        card.appendChild(el('div', 'project-card__stat', escapeHtml(p.stat)));
      }

      var btn = el('button', 'project-card__btn', 'View case study →');
      btn.type = 'button';
      btn.addEventListener('click', function (e) { openProject(p, e.currentTarget); });
      card.appendChild(btn);

      wrap.appendChild(card);
      grid.appendChild(wrap);
    });
  }

  // ============ RENDER: METHODS ============

  function renderMethods() {
    var grid = document.getElementById('methods-grid');
    methods.forEach(function (m) {
      var item = el('div', 'reveal');
      item.innerHTML =
        '<div class="method-numeral">' + escapeHtml(m.numeral) + '</div>' +
        '<h3 class="method-title">' + escapeHtml(m.title) + '</h3>' +
        '<p class="method-body">' + escapeHtml(m.body) + '</p>';
      grid.appendChild(item);
    });
  }

  // ============ RENDER: PHILOSOPHY ============

  function renderPhilosophy() {
    var list = document.getElementById('philosophy-list');
    philosophy.forEach(function (ph) {
      var item = el('div', 'philosophy-item reveal');
      item.innerHTML =
        '<div class="philosophy-item__numeral">' + escapeHtml(ph.numeral) + '</div>' +
        '<div>' +
          '<h3 class="philosophy-item__title">' + escapeHtml(ph.title) + '</h3>' +
          '<p class="philosophy-item__body">' + escapeHtml(ph.body) + '</p>' +
        '</div>';
      list.appendChild(item);
    });
  }

  // ============ RENDER: CONTACT LINKS ============

  var copiedTimer = null;

  function renderContactLinks() {
    var container = document.getElementById('contact-links');
    container.innerHTML = '';
    contactLinksBase.forEach(function (c) {
      var wrap = el('div', 'contact-link');
      var btn = el('button', 'contact-link__btn', escapeHtml(c.label) + ': ' + escapeHtml(c.display));
      btn.addEventListener('click', function () {
        if (c.key === 'email') {
          copyText(c);
        } else {
          window.open(c.value, '_blank', 'noopener');
        }
      });
      wrap.appendChild(btn);
      wrap.dataset.key = c.key;
      container.appendChild(wrap);
    });
  }

  function copyText(c) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(c.value).catch(function () {});
    }
    var wraps = document.querySelectorAll('#contact-links .contact-link');
    wraps.forEach(function (w) {
      var existing = w.querySelector('.contact-link__copied');
      if (existing) existing.remove();
    });
    var target = document.querySelector('#contact-links .contact-link[data-key="' + c.key + '"]');
    if (target) {
      var tip = el('div', 'contact-link__copied', 'Copied ✓');
      target.appendChild(tip);
    }
    clearTimeout(copiedTimer);
    copiedTimer = setTimeout(function () {
      if (target) {
        var tip2 = target.querySelector('.contact-link__copied');
        if (tip2) tip2.remove();
      }
    }, 1800);
  }

  // ============ CASE STUDY MODAL ============

  var modalRoot = document.getElementById('modal-root');
  var lastTrigger = null;
  var closeTimer = null;
  var dialogEl = null;
  var isClosing = false;

  function renderBlockContent(b, side) {
    var html = '';
    html += '<div class="cs-block-label-row"><span class="cs-block-dot"></span><div class="cs-block-label">' + escapeHtml(b.label) + '</div></div>';

    if (b.isStat) {
      html += '<div class="cs-stat-wrap"><div class="cs-stat-glow"></div>' +
        '<div class="cs-stat-value">' + escapeHtml(b.statValue) + '</div>' +
        '<div class="cs-stat-label">' + escapeHtml(b.statLabel) + '</div></div>';
      return html;
    }

    if (b.isTestimonial) {
      html += '<p class="cs-testimonial-quote">&ldquo;' + escapeHtml(b.quote) + '&rdquo;</p>' +
        '<div class="cs-testimonial-author">' + escapeHtml(b.author) + '</div>';
      return html;
    }

    if (b.isRecognition) {
      html += '<div class="cs-recognition-row">';
      b.cards.forEach(function (card) {
        html += '<div class="cs-recognition-card">' +
          '<div class="cs-recognition-icon">' + escapeHtml(card.icon) + '</div>' +
          '<div class="cs-recognition-headline">' + escapeHtml(card.headline) + '</div>' +
          (card.subcaption ? '<div class="cs-recognition-sub">' + escapeHtml(card.subcaption) + '</div>' : '') +
          '</div>';
      });
      html += '</div>';
      return html;
    }

    if (b.text) {
      html += '<p class="cs-block-text">' + escapeHtml(b.text) + '</p>';
    }
    if (b.tags) {
      html += '<div class="cs-tag-row">';
      b.tags.forEach(function (t) {
        html += '<span class="cs-tag cs-tag--' + side + '">' + escapeHtml(t) + '</span>';
      });
      html += '</div>';
    }
    return html;
  }

  function buildModal(p) {
    var overlay = el('div', 'cs-modal-overlay is-opening');
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeProject();
    });

    var container = el('div', 'cs-modal-container is-opening');
    container.setAttribute('role', 'dialog');
    container.setAttribute('aria-modal', 'true');
    container.setAttribute('aria-labelledby', 'cs-modal-title');
    container.tabIndex = -1;
    container.addEventListener('click', function (e) { e.stopPropagation(); });

    var wash = el('div', 'cs-modal-wash');
    wash.style.background = 'radial-gradient(circle, ' + p.washColor + ', transparent 70%)';
    container.appendChild(wash);

    var inner = el('div', 'cs-modal-inner');

    var closeBtn = el('button', 'cs-modal-close', '✕');
    closeBtn.setAttribute('aria-label', 'Close case study');
    closeBtn.addEventListener('click', closeProject);
    inner.appendChild(closeBtn);

    var title = el('h2', 'cs-modal-title', escapeHtml(p.displayTitle));
    title.id = 'cs-modal-title';
    title.style.fontWeight = p.titleWeight;
    title.style.fontSize = p.titleSize;
    inner.appendChild(title);

    var divider = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    divider.setAttribute('width', '100%');
    divider.setAttribute('height', '10');
    divider.setAttribute('viewBox', '0 0 800 10');
    divider.setAttribute('preserveAspectRatio', 'none');
    divider.setAttribute('class', 'cs-divider');
    divider.innerHTML = '<path d="M0,5 Q100,0 200,5 T400,5 T600,5 T800,5" stroke="#B0654A" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.55"></path>';
    inner.appendChild(divider);

    var body = el('div', 'cs-modal-body');

    var leftCol = el('div', 'cs-modal-col');
    p.leftBlocks.forEach(function (b) {
      leftCol.appendChild(el('div', '', renderBlockContent(b, 'left')));
    });
    body.appendChild(leftCol);

    var rightCol = el('div', 'cs-modal-col');
    p.rightBlocks.forEach(function (b) {
      rightCol.appendChild(el('div', '', renderBlockContent(b, 'right')));
    });
    if (p.extraLink) {
      var link = el('a', 'cs-extra-link', escapeHtml(p.extraLink.label));
      link.href = p.extraLink.url;
      link.target = '_blank';
      link.rel = 'noopener';
      rightCol.appendChild(link);
    }
    body.appendChild(rightCol);

    inner.appendChild(body);
    container.appendChild(inner);
    overlay.appendChild(container);

    return { overlay: overlay, container: container };
  }

  function openProject(p, triggerEl) {
    lastTrigger = triggerEl;
    clearTimeout(closeTimer);
    isClosing = false;

    modalRoot.innerHTML = '';
    var built = buildModal(p);
    modalRoot.appendChild(built.overlay);
    dialogEl = built.container;

    document.body.style.overflow = 'hidden';
    requestAnimationFrame(function () {
      if (dialogEl) dialogEl.focus();
    });
  }

  function closeProject() {
    if (isClosing || !dialogEl) return;
    isClosing = true;

    var overlay = modalRoot.querySelector('.cs-modal-overlay');
    var container = modalRoot.querySelector('.cs-modal-container');
    if (overlay) { overlay.classList.remove('is-opening'); overlay.classList.add('is-closing'); }
    if (container) { container.classList.remove('is-opening'); container.classList.add('is-closing'); }

    clearTimeout(closeTimer);
    closeTimer = setTimeout(function () {
      modalRoot.innerHTML = '';
      dialogEl = null;
      isClosing = false;
      document.body.style.overflow = '';
      if (lastTrigger) lastTrigger.focus();
    }, 270);
  }

  document.addEventListener('keydown', function (e) {
    if (!dialogEl || isClosing) return;

    if (e.key === 'Escape') {
      closeProject();
      return;
    }

    if (e.key === 'Tab') {
      var focusables = dialogEl.querySelectorAll(
        'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables.length) return;
      var list = Array.prototype.slice.call(focusables);
      var first = list[0];
      var last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  // ============ INIT ============

  renderCredentials();
  renderWorkGrid();
  renderMethods();
  renderPhilosophy();
  renderContactLinks();
})();
