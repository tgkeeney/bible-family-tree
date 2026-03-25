"use client";

import {
  useState,
  useCallback,
  useMemo,
  useRef,
  useEffect,
  Fragment,
  type CSSProperties,
} from "react";
import { data, branchMeta, keyFigureIds, type TreePerson } from "@/lib/data";
import { personImages } from "@/lib/images";

/* ═══════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════ */

function flattenTree(node: TreePerson): TreePerson[] {
  const result: TreePerson[] = [node];
  if (node.children) {
    for (const child of node.children) result.push(...flattenTree(child));
  }
  return result;
}

function findPath(root: TreePerson, targetId: string): TreePerson[] | null {
  if (root.id === targetId) return [root];
  if (root.children) {
    for (const child of root.children) {
      const p = findPath(child, targetId);
      if (p) return [root, ...p];
    }
  }
  return null;
}

/** Find the deepest descendant (longest path) from a node */
function findDeepestLeaf(node: TreePerson): string {
  if (!node.children || node.children.length === 0) return node.id;
  let deepestId = node.id;
  let maxDepth = 0;
  function walk(n: TreePerson, depth: number) {
    if (depth > maxDepth) { maxDepth = depth; deepestId = n.id; }
    if (n.children) for (const c of n.children) walk(c, depth + 1);
  }
  walk(node, 0);
  return deepestId;
}

/** Get the name of the last person in a lineage for display */
function getLineageLabel(lineage: TreePerson[]): string {
  if (lineage.length === 0) return "";
  const last = lineage[lineage.length - 1];
  return last.name.replace(/[^a-zA-Z\s()]/g, "").trim();
}

function toRoman(n: number): string {
  const vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const syms = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  let result = "";
  let r = n;
  for (let i = 0; i < vals.length; i++) {
    while (r >= vals[i]) { result += syms[i]; r -= vals[i]; }
  }
  return result;
}

function getBrief(info: string, maxLen = 150): string {
  const sections = info.split(/\s*───\s*/);
  let text = sections[0].trim();

  // If intro is too short, pull the first sentence from the first section body
  if (text.length < 80 && sections.length > 1) {
    const sec = sections[1];
    const colon = sec.indexOf(":");
    if (colon > 0 && colon < 100) {
      const body = sec.slice(colon + 1).trim();
      const first = body.match(/^[^.]+\./);
      if (first) text += " " + first[0];
    }
  }

  // Strip scripture references for a cleaner card
  text = text.replace(/\s*\([^)]*\d+[:.]\d+[^)]*\)/g, "");
  // Collapse whitespace and fix double periods
  text = text.replace(/\s{2,}/g, " ").replace(/\.{2,}/g, ".").trim();

  if (text.length > maxLen) {
    text = text.slice(0, maxLen).replace(/\s+\S*$/, "") + "\u2026";
  }
  return text;
}

function countDescendants(node: TreePerson): number {
  if (!node.children || node.children.length === 0) return 0;
  return node.children.reduce((sum, c) => sum + 1 + countDescendants(c), 0);
}

function extractAge(info: string): string | null {
  const m = info.match(/[Ll]ived?\s+(\d+)\s+years/);
  return m ? `${m[1]} years` : null;
}

function extractMeaning(info: string): string | null {
  const m = info.match(/[Nn]ame\s+(?:means?|may mean)\s+['\u2018]([^'\u2019]+)['\u2019]/);
  return m ? `\u201C${m[1]}\u201D` : null;
}

function getMeta(branch: string) {
  return branchMeta[branch] || branchMeta.seth;
}

function highlightRefs(text: string): string {
  return text
    .replace(/\(([^)]*\d[^)]*)\)/g, '<span class="scripture-ref">($1)</span>')
    .replace(/✦\s*/g, '<span class="info-callout-mark">&#x2726; </span>');
}

function formatInfoHtml(info: string): string {
  const parts = info.split(/\s*───\s*/);

  if (parts.length <= 1) {
    return highlightRefs(info);
  }

  // First part is the intro
  let html = `<p class="info-intro">${highlightRefs(parts[0])}</p>`;

  for (let i = 1; i < parts.length; i++) {
    const section = parts[i];
    const colonIdx = section.indexOf(":");
    if (colonIdx > 0 && colonIdx < 100) {
      const title = section.slice(0, colonIdx).trim();
      const body = section.slice(colonIdx + 1).trim();
      html += `<div class="info-section"><h5 class="info-section-title">${title}</h5><p>${highlightRefs(body)}</p></div>`;
    } else {
      html += `<div class="info-section"><p>${highlightRefs(section)}</p></div>`;
    }
  }

  return html;
}

/* ═══════════════════════════════════════════
   CHAPTER BUILDING
   ═══════════════════════════════════════════ */

const FEATURED_IDS = new Set([
  "adam", "enoch-s", "noah", "shem", "abraham", "isaac", "jacob", "judah", "boaz", "david",
]);

const CHAIN_META: Record<string, [string, string]> = {
  seth: [
    "The Antediluvian Patriarchs",
    "Five generations maintaining the godly line, each living over 890 years",
  ],
  methuselah: [
    "The Longest-Lived",
    "The oldest man in Scripture and the father who named Noah",
  ],
  arphaxad: [
    "From the Flood to Ur",
    "Eight generations spanning the ancient Near East",
  ],
  perez: [
    "The Line of Judah",
    "Six generations carrying the promise toward Bethlehem",
  ],
  obed: [
    "To Bethlehem",
    "The final steps to the throne of Israel",
  ],
};

type FeatureSection = {
  type: "feature";
  person: TreePerson;
  gen: number;
  nextOnLine?: string;
};

type ChainSection = {
  type: "chain";
  people: { person: TreePerson; gen: number }[];
  title: string;
  subtitle: string;
};

type Section = FeatureSection | ChainSection;

function buildSections(lineage: TreePerson[], isDefaultLineage: boolean): Section[] {
  const sections: Section[] = [];
  let chain: { person: TreePerson; gen: number }[] = [];
  const shouldFeature = (id: string) => !isDefaultLineage || FEATURED_IDS.has(id);

  const flushChain = () => {
    if (chain.length === 0) return;
    const key = chain[0].person.id;
    const [title, subtitle] = CHAIN_META[key] || [
      `${chain[0].person.name} to ${chain[chain.length - 1].person.name}`,
      "",
    ];
    sections.push({ type: "chain", people: [...chain], title, subtitle });
    chain = [];
  };

  for (let i = 0; i < lineage.length; i++) {
    const person = lineage[i];
    const gen = i + 1;
    const nextId = i < lineage.length - 1 ? lineage[i + 1].id : undefined;
    if (shouldFeature(person.id)) {
      flushChain();
      sections.push({ type: "feature", person, gen, nextOnLine: nextId });
    } else {
      chain.push({ person, gen });
    }
  }
  flushChain();
  return sections;
}

/* ═══════════════════════════════════════════
   HERO — Video background with HLS support
   ═══════════════════════════════════════════ */

function DivineLuminance() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;
    type Mote = {
      x: number; y: number; vy: number; vx: number;
      radius: number; life: number; maxLife: number; phase: number;
      hue: number; drift: number;
    };
    const motes: Mote[] = [];

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spawn golden firefly motes — more numerous, varied sizes
      if (motes.length < 35 && Math.random() < 0.04) {
        const edge = Math.random();
        motes.push({
          x: edge < 0.5
            ? Math.random() * canvas.width
            : (edge < 0.75 ? -10 : canvas.width + 10),
          y: edge < 0.5
            ? canvas.height + 10
            : Math.random() * canvas.height,
          vy: -(Math.random() * 0.18 + 0.04),
          vx: (Math.random() - 0.5) * 0.08,
          radius: Math.random() * 25 + 8,
          life: 0,
          maxLife: 800 + Math.random() * 1200,
          phase: Math.random() * Math.PI * 2,
          hue: 35 + Math.random() * 20,       // warm gold–amber range
          drift: (Math.random() - 0.5) * 0.3,  // gentle horizontal wander
        });
      }

      for (let i = motes.length - 1; i >= 0; i--) {
        const m = motes[i];
        m.x += m.vx + Math.sin(m.life * 0.002 + m.phase) * m.drift;
        m.y += m.vy + Math.cos(m.life * 0.0015 + m.phase) * 0.03;
        m.life++;

        const progress = m.life / m.maxLife;
        // Gentle pulse
        const pulse = 0.85 + 0.15 * Math.sin(m.life * 0.008 + m.phase);
        let alpha = progress < 0.15 ? progress / 0.15 : progress > 0.65 ? (1 - progress) / 0.35 : 1;
        alpha *= 0.055 * pulse;

        if (m.life > m.maxLife || m.y < -60 || m.x < -60 || m.x > canvas.width + 60) {
          motes.splice(i, 1); continue;
        }

        const grad = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, m.radius);
        grad.addColorStop(0, `hsla(${m.hue}, 65%, 55%, ${alpha * 1.8})`);
        grad.addColorStop(0.35, `hsla(${m.hue}, 55%, 45%, ${alpha})`);
        grad.addColorStop(1, `hsla(${m.hue}, 45%, 35%, 0)`);
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.radius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} className="divine-luminance" />;
}

function Hero({ onEnter, totalPeople }: { onEnter: () => void; totalPeople: number }) {
  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
      />
      <div className="hero-video-overlay" />

      <div className="hero-content">
        <p className="hero-eden-label hero-stagger" style={{ animationDelay: "0.3s" }}>From the Garden of Eden</p>

        <h1 className="hero-title">
          <span className="hero-title-the hero-stagger" style={{ animationDelay: "0.6s" }}>The</span>
          <span className="hero-title-main hero-stagger" style={{ animationDelay: "0.8s" }}>Lineage</span>
        </h1>

        <p className="hero-subtitle hero-stagger" style={{ animationDelay: "1.2s" }}>
          An interactive journey through the biblical genealogy<br />
          from Adam to King David
        </p>

        <div className="hero-stats hero-stagger" style={{ animationDelay: "1.8s" }}>
          <div className="hero-stat">
            <span className="hero-stat-value">{totalPeople}</span>
            <span className="hero-stat-label">Figures</span>
          </div>
          <div className="hero-stat-dot" />
          <div className="hero-stat">
            <span className="hero-stat-value">13</span>
            <span className="hero-stat-label">Branches</span>
          </div>
          <div className="hero-stat-dot" />
          <div className="hero-stat">
            <span className="hero-stat-value">20+</span>
            <span className="hero-stat-label">Generations</span>
          </div>
        </div>

        <button className="hero-cta hero-stagger hero-stagger-slow" style={{ animationDelay: "3s" }} onClick={onEnter}>
          Enter the Chronicle<span className="hero-cta-arrow">&rarr;</span>
        </button>
      </div>

      <div className="hero-scroll-hint">
        <span className="scroll-hint-line" />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   TIMELINE SIDEBAR
   ═══════════════════════════════════════════ */

function Timeline({
  sections,
  activeId,
  onNavigate,
}: {
  sections: Section[];
  activeId: string;
  onNavigate: (id: string) => void;
}) {
  const features = sections.filter((s): s is FeatureSection => s.type === "feature");

  return (
    <nav className="timeline-rail" aria-label="Lineage timeline">
      <div className="timeline-track">
        {features.map((s, i) => (
          <Fragment key={s.person.id}>
            {i > 0 && <div className="timeline-segment" />}
            <button
              className={`timeline-dot${activeId === s.person.id ? " active" : ""}${s.person.id === "david" ? " david-dot" : ""}`}
              onClick={() => onNavigate(s.person.id)}
              aria-label={s.person.name}
              data-name={s.person.name}
            />
          </Fragment>
        ))}
      </div>
    </nav>
  );
}

/* ═══════════════════════════════════════════
   CHILD CARD
   ═══════════════════════════════════════════ */

function ChildCard({
  child,
  isLineage,
  isExpanded,
  onClick,
}: {
  child: TreePerson;
  isLineage: boolean;
  isExpanded?: boolean;
  onClick: () => void;
}) {
  const meta = getMeta(child.branch);
  const brief = getBrief(child.info);
  const desc = countDescendants(child);
  const hasChildren = child.children && child.children.length > 0;

  return (
    <button
      className={`child-card${isLineage ? " lineage-child" : ""}${isExpanded ? " child-card-expanded" : ""}`}
      style={{ "--branch-color": meta.color, "--branch-bg": meta.bg } as CSSProperties}
      onClick={onClick}
    >
      <span className="child-card-name">{child.name}</span>
      <span className="child-card-brief">{brief}</span>
      {isLineage && (
        <span className="child-card-lineage">Continues the lineage &darr;</span>
      )}
      {!isLineage && hasChildren && (
        <span className="child-card-explore">
          {isExpanded ? "Collapse" : `Explore ${desc} descendant${desc > 1 ? "s" : ""}`}
          <span className={`child-card-chevron${isExpanded ? " child-card-chevron-up" : ""}`}>&#x25BE;</span>
        </span>
      )}
    </button>
  );
}

/* ═══════════════════════════════════════════
   BRANCH TREE — Recursive inline expansion
   ═══════════════════════════════════════════ */

function BranchTree({
  person,
  depth,
  expandedBranches,
  onToggle,
  onSelectLeaf,
}: {
  person: TreePerson;
  depth: number;
  expandedBranches: Set<string>;
  onToggle: (id: string) => void;
  onSelectLeaf: (p: TreePerson) => void;
}) {
  const meta = getMeta(person.branch);
  const image = personImages[person.id];
  const infoHtml = formatInfoHtml(person.info);
  const hasChildren = person.children && person.children.length > 0;
  const isExpanded = expandedBranches.has(person.id);
  const desc = countDescendants(person);

  return (
    <div className="branch-node" id={`branch-${person.id}`}>
      {/* The person entry */}
      <div
        className={`branch-entry${isExpanded ? " branch-entry-open" : ""}${image ? " branch-entry-with-art" : ""}`}
        style={{ "--depth": depth } as CSSProperties}
      >
        {image && (
          <div className="branch-entry-thumb">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image.url} alt={person.name} loading="lazy" />
          </div>
        )}
        <div className="branch-entry-content">
          <div className="branch-entry-header">
            <h4 className="branch-entry-name">{person.name}</h4>
            <span className="branch-entry-badge" style={{ color: meta.color }}>{meta.label}</span>
          </div>
          <div className="branch-entry-info" dangerouslySetInnerHTML={{ __html: infoHtml }} />
        </div>
        {hasChildren ? (
          <button
            className={`branch-entry-toggle${isExpanded ? " branch-entry-toggle-open" : ""}`}
            onClick={() => onToggle(person.id)}
            aria-label={isExpanded ? "Collapse" : "Expand"}
          >
            <span className="branch-toggle-count">{desc}</span>
            <span className="branch-toggle-arrow">&#x25BE;</span>
          </button>
        ) : (
          <button
            className="branch-entry-view"
            onClick={() => onSelectLeaf(person)}
            aria-label="View details"
          >
            &#x2192;
          </button>
        )}
      </div>

      {/* Expanded children */}
      {isExpanded && hasChildren && (
        <div className="branch-children">
          {person.children!.map((child) => (
            <BranchTree
              key={child.id}
              person={child}
              depth={depth + 1}
              expandedBranches={expandedBranches}
              onToggle={onToggle}
              onSelectLeaf={onSelectLeaf}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════
   FEATURE CHAPTER
   ═══════════════════════════════════════════ */

function FeatureChapter({
  section,
  onSelectPerson,
  expandedBranches,
  onToggleBranch,
}: {
  section: FeatureSection;
  onSelectPerson: (p: TreePerson) => void;
  expandedBranches: Set<string>;
  onToggleBranch: (id: string) => void;
}) {
  const { person, gen, nextOnLine } = section;
  const meta = getMeta(person.branch);
  const isDavid = person.id === "david";

  const infoHtml = formatInfoHtml(person.info);
  const image = personImages[person.id];

  const hasOnlyLineageChild = person.children?.length === 1 && nextOnLine;
  const visibleChildren = person.children
    ? (hasOnlyLineageChild ? [] : person.children)
    : [];

  const descendants = visibleChildren.length > 0 && (
    <div className="chapter-descendants">
      <h3 className="descendants-title">
        {visibleChildren.length === 1 ? "Descendant" : `Descendants (${visibleChildren.length})`}
      </h3>
      <div className="descendants-grid">
        {visibleChildren.map((child) => {
          const hasChildren = child.children && child.children.length > 0;
          const isExpanded = expandedBranches.has(child.id);
          return (
            <ChildCard
              key={child.id}
              child={child}
              isLineage={child.id === nextOnLine}
              isExpanded={isExpanded}
              onClick={() => {
                if (child.id === nextOnLine) {
                  onSelectPerson(child);
                } else if (hasChildren) {
                  onToggleBranch(child.id);
                } else {
                  onSelectPerson(child);
                }
              }}
            />
          );
        })}
      </div>

      {/* Inline branch expansions */}
      {visibleChildren.filter(c => expandedBranches.has(c.id) && c.children && c.children.length > 0).map(child => (
        <div key={child.id} className="branch-expansion">
          <div className="branch-expansion-header">
            <span className="branch-expansion-label">
              Descendants of {child.name}
            </span>
            <button className="branch-expansion-close" onClick={() => onToggleBranch(child.id)}>
              Collapse &#x2715;
            </button>
          </div>
          <div className="branch-tree-root">
            {child.children!.map(grandchild => (
              <BranchTree
                key={grandchild.id}
                person={grandchild}
                depth={0}
                expandedBranches={expandedBranches}
                onToggle={onToggleBranch}
                onSelectLeaf={onSelectPerson}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section
      id={`chapter-${person.id}`}
      className={`chapter-feature${isDavid ? " chapter-david" : ""}${image ? " chapter-with-image" : ""}`}
    >
      {/* ── Ambient glow zone for this chapter ── */}
      <div className="chapter-glow" />

      {image ? (
        <>
          {/* Full-bleed painting — becomes the environment */}
          <div className="chapter-painting">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.url}
              alt={`${image.title} by ${image.artist}`}
              loading="lazy"
              style={image.focus ? { objectPosition: image.focus } : undefined}
            />
            <div className="chapter-painting-fog chapter-painting-fog-top" />
            <div className="chapter-painting-fog chapter-painting-fog-bottom" />
            <div className="chapter-painting-fog chapter-painting-fog-sides" />
          </div>

          {/* Content floating over the painting's world */}
          <div className="chapter-glass">
            <span className="gen-number">{toRoman(gen)}</span>
            <h2 className="chapter-name">{person.name}</h2>
            <span className="chapter-branch-badge">{meta.label}</span>
            <span className="chapter-art-credit">{image.title} &mdash; {image.artist}</span>
            <div className="chapter-divider" />
            <div className="chapter-info" dangerouslySetInnerHTML={{ __html: infoHtml }} />
            {descendants}
          </div>
        </>
      ) : (
        <>
          <div className="chapter-glass chapter-glass-plain">
            <div className="chapter-gen">
              <span className="gen-number">{toRoman(gen)}</span>
            </div>
            <h2 className="chapter-name">{person.name}</h2>
            <span className="chapter-branch-badge">{meta.label}</span>
            <div className="chapter-divider" />
            <div className="chapter-info" dangerouslySetInnerHTML={{ __html: infoHtml }} />
            {descendants}
          </div>
        </>
      )}
    </section>
  );
}

/* ═══════════════════════════════════════════
   CHAIN CHAPTER
   ═══════════════════════════════════════════ */

function ChainChapter({
  section,
  onSelectPerson,
}: {
  section: ChainSection;
  onSelectPerson: (p: TreePerson) => void;
}) {
  return (
    <section id={`chain-${section.people[0].person.id}`} className="chapter-chain">
      <div className="chain-header">
        <h3 className="chain-title">{section.title}</h3>
        {section.subtitle && <p className="chain-subtitle">{section.subtitle}</p>}
      </div>
      <div className="chain-flow">
        {section.people.map((entry, i) => {
          const detail = extractAge(entry.person.info) || extractMeaning(entry.person.info);
          const isLast = i === section.people.length - 1;
          return (
            <Fragment key={entry.person.id}>
              {i > 0 && <span className="chain-arrow">&rarr;</span>}
              <button className={`chain-person${isLast ? " chain-person-father" : ""}`} onClick={() => onSelectPerson(entry.person)}>
                <span className="chain-person-gen">{toRoman(entry.gen)}</span>
                <span className="chain-person-name">{entry.person.name}</span>
                {detail && <span className="chain-person-detail">{detail}</span>}
                {isLast && <span className="chain-person-continues">&#x25BC;</span>}
              </button>
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   DETAIL MODAL
   ═══════════════════════════════════════════ */

function DetailModal({
  person,
  path,
  onClose,
  onNavigate,
}: {
  person: TreePerson;
  path: TreePerson[];
  onClose: () => void;
  onNavigate: (p: TreePerson) => void;
}) {
  const meta = getMeta(person.branch);
  const image = personImages[person.id];
  const infoHtml = formatInfoHtml(person.info);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&#x2715;</button>

        {image && (
          <>
            <div className="modal-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image.url} alt={`${image.title} by ${image.artist}`} loading="lazy" />
              <div className="modal-image-overlay" />
            </div>
            <span className="modal-image-credit">{image.title} &mdash; {image.artist}</span>
          </>
        )}

        <div className="modal-path">
          {path.map((ancestor, i) => (
            <span key={ancestor.id}>
              {i > 0 && <span className="path-sep">&rarr;</span>}
              <button className="path-link" onClick={() => onNavigate(ancestor)}>
                {ancestor.name}
              </button>
            </span>
          ))}
        </div>

        <div className="modal-header">
          <div className="modal-branch-bar" style={{ background: meta.color }} />
          <h2 className="modal-name">{person.name}</h2>
          <span
            className="modal-branch-badge"
          >
            {meta.label}
          </span>
        </div>

        <div className="modal-info" dangerouslySetInnerHTML={{ __html: infoHtml }} />

        {person.children && person.children.length > 0 && (
          <div className="modal-family">
            <h3 className="modal-section-title">Children ({person.children.length})</h3>
            <div className="modal-children-grid">
              {person.children.map((child) => {
                const cm = getMeta(child.branch);
                return (
                  <button
                    key={child.id}
                    className="modal-child-card"
                    style={{ "--branch-color": cm.color, "--branch-bg": cm.bg } as CSSProperties}
                    onClick={() => onNavigate(child)}
                  >
                    <span className="child-dot" style={{ background: cm.color }} />
                    {child.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SEARCH OVERLAY
   ═══════════════════════════════════════════ */

function SearchOverlay({
  allPeople,
  onSelect,
  onClose,
}: {
  allPeople: TreePerson[];
  onSelect: (p: TreePerson) => void;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => { inputRef.current?.focus(); }, []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return allPeople
      .filter((p) => p.name.toLowerCase().includes(q) || p.info.toLowerCase().includes(q))
      .slice(0, 20);
  }, [query, allPeople]);

  return (
    <div className="search-backdrop" onClick={onClose}>
      <div className="search-panel" onClick={(e) => e.stopPropagation()}>
        <div className="search-input-wrap">
          <span className="search-icon">&#x2315;</span>
          <input
            ref={inputRef}
            className="search-input"
            placeholder="Search by name, tribe, or keyword\u2026"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape") onClose();
              if (e.key === "Enter" && results.length > 0) onSelect(results[0]);
            }}
          />
          <kbd className="search-kbd">ESC</kbd>
        </div>
        {results.length > 0 && (
          <div className="search-results">
            {results.map((person) => {
              const m = getMeta(person.branch);
              return (
                <button key={person.id} className="search-result-item" onClick={() => onSelect(person)}>
                  <span className="result-dot" style={{ background: m.color }} />
                  <div className="result-info">
                    <span className="result-name">{person.name}</span>
                    <span className="result-branch">{m.label}</span>
                  </div>
                </button>
              );
            })}
          </div>
        )}
        {query.trim() && results.length === 0 && (
          <div className="search-empty">No figures found matching &ldquo;{query}&rdquo;</div>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════ */

export default function Page() {
  const [phase, setPhase] = useState<"hero" | "fading" | "chronicle">("hero");
  const [selectedPerson, setSelectedPerson] = useState<TreePerson | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("adam");
  const [lineageTargetId, setLineageTargetId] = useState("david");
  const [expandedBranches, setExpandedBranches] = useState<Set<string>>(new Set());

  const allPeople = useMemo(() => flattenTree(data), []);
  const isDefaultLineage = lineageTargetId === "david";
  const lineage = useMemo(() => findPath(data, lineageTargetId) || [data], [lineageTargetId]);
  const sections = useMemo(() => buildSections(lineage, isDefaultLineage), [lineage, isDefaultLineage]);

  /* ─── Intersection observers ─── */
  useEffect(() => {
    if (phase !== "chronicle") return;

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.08 }
    );

    const trackObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id.startsWith("chapter-")) {
            setActiveSection(entry.target.id.replace("chapter-", ""));
          }
        });
      },
      { rootMargin: "-30% 0px -55% 0px" }
    );

    requestAnimationFrame(() => {
      document.querySelectorAll(".chapter-feature, .chapter-chain").forEach((el) => {
        revealObserver.observe(el);
      });
      document.querySelectorAll(".chapter-feature").forEach((el) => {
        trackObserver.observe(el);
      });
    });

    return () => {
      revealObserver.disconnect();
      trackObserver.disconnect();
    };
  }, [phase, sections]);

  useEffect(() => {
    if (phase !== "chronicle") return;
    const onScroll = () => {
      const images = document.querySelectorAll<HTMLImageElement>(".chapter-hero-image img");
      for (const img of images) {
        const rect = img.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const viewCenter = window.innerHeight / 2;
        const offset = (center - viewCenter) * 0.04;
        img.style.transform = `scale(1.08) translateY(${offset}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [phase]);

  /* ─── Keyboard shortcuts ─── */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape") {
        if (searchOpen) setSearchOpen(false);
        else if (selectedPerson) setSelectedPerson(null);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [searchOpen, selectedPerson]);

  /* ─── Navigation helpers ─── */
  const scrollToSection = useCallback((id: string) => {
    document.getElementById(`chapter-${id}`)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const navigateTo = useCallback((person: TreePerson) => {
    setSelectedPerson(person);
  }, []);

  const switchLineage = useCallback((person: TreePerson) => {
    const deepest = findDeepestLeaf(person);
    setLineageTargetId(deepest);
  }, []);

  const toggleBranch = useCallback((id: string) => {
    setExpandedBranches(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
        // After expansion, scroll to it
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            document.getElementById(`branch-${id}`)?.scrollIntoView({ behavior: "smooth", block: "nearest" });
          });
        });
      }
      return next;
    });
  }, []);

  const resetLineage = useCallback(() => {
    setLineageTargetId("david");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const path = useMemo(() => selectedPerson ? findPath(data, selectedPerson.id) || [] : [], [selectedPerson]);

  const handleEnterChronicle = useCallback(() => {
    setPhase("fading");
    setTimeout(() => setPhase("chronicle"), 1200);
  }, []);

  useEffect(() => {
    if (phase === "hero") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [phase]);

  if (phase === "hero") {
    return <Hero onEnter={handleEnterChronicle} totalPeople={allPeople.length} />;
  }

  /* ─── Chronicle (also renders during "fading" phase, hidden behind overlay) ─── */
  return (
    <div className="app">
      {/* Living atmospheric background layers */}
      <div className="ambient-layer" />
      <DivineLuminance />

      <header className="top-bar">
        <div className="top-bar-left">
          <h1 className="top-title" onClick={() => setPhase("hero")}>THE LINEAGE</h1>
          <span className="top-subtitle">
            Adam &rarr; {getLineageLabel(lineage)}
          </span>
          {!isDefaultLineage && (
            <button className="top-reset" onClick={resetLineage}>
              &larr; Back to David
            </button>
          )}
        </div>
        <div className="top-bar-right">
          <button className="top-btn" onClick={() => setSearchOpen(true)}>
            <span>&#x2315;</span>
            <span className="top-btn-label">Search</span>
            <kbd>&#x2318;K</kbd>
          </button>
        </div>
      </header>

      <Timeline sections={sections} activeId={activeSection} onNavigate={scrollToSection} />

      <div className="chronicle-vignette" />

      <main className="chronicle">
        <div className="chronicle-start">
          <div className="start-ornament">&#x2727; &#x2726; &#x2727;</div>
          <p className="start-text">
            The lineage from the first man<br />to the king after God&apos;s own heart
          </p>
          <div className="start-ornament start-ornament-below">&#x2727; &#x2726; &#x2727;</div>
        </div>

        {sections.map((section, i) => (
          <Fragment key={i}>
            {i > 0 && (
              <div className="section-connector">
                <div className="connector-line" />
              </div>
            )}
            {section.type === "feature" ? (
              <FeatureChapter section={section} onSelectPerson={navigateTo} expandedBranches={expandedBranches} onToggleBranch={toggleBranch} />
            ) : (
              <ChainChapter section={section} onSelectPerson={navigateTo} />
            )}
          </Fragment>
        ))}

        <div className="chronicle-end">
          <div className="end-ornament" />
          <p className="end-text">
            &ldquo;The scepter shall not depart from Judah,<br />
            nor the ruler&apos;s staff from between his feet,<br />
            until he comes to whom it belongs.&rdquo;
          </p>
          <p className="end-ref">Genesis 49:10</p>
        </div>
      </main>

      {selectedPerson && (
        <DetailModal
          person={selectedPerson}
          path={path}
          onClose={() => setSelectedPerson(null)}
          onNavigate={navigateTo}
        />
      )}

      {searchOpen && (
        <SearchOverlay
          allPeople={allPeople}
          onSelect={(person) => { navigateTo(person); setSearchOpen(false); }}
          onClose={() => setSearchOpen(false)}
        />
      )}

      {phase === "fading" && <div className="page-transition" />}
    </div>
  );
}
