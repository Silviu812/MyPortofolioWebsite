"use client";

import { useEffect, useRef, useState } from "react";

type Project = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  technologies: string[];
  featured?: boolean;
  liveUrl?: string;
  sourceUrl?: string;
  problem: string;
  built: string;
  contribution: string;
  decisions: string;
  lessons: string;
};

const researchProcess = [
  ["01", "Context", "Identify the market regime, volatility and relevant macro conditions."],
  ["02", "Liquidity", "Examine available liquidity, imbalance, absorption and potential market impact."],
  ["03", "Hypothesis", "Define expected behavior and the conditions that would invalidate it."],
  ["04", "Risk", "Establish exposure, drawdown and scenario constraints before execution."],
  ["05", "Review", "Compare outcomes with the original thesis and update the process."],
];

const researchThemes = [
  {
    code: "MICROSTRUCTURE",
    title: "Market microstructure",
    text: "Order-book behavior, liquidity, aggressive versus passive participation, imbalance, slippage and adverse selection.",
  },
  {
    code: "PROBABILITY",
    title: "Probability & statistics",
    text: "Expected value, sample-size limitations, outcome distributions, drawdown analysis and avoidance of overfitting.",
  },
  {
    code: "RISK",
    title: "Risk discipline",
    text: "Predefined exposure, strict drawdown constraints, scenario invalidation and preservation of capital.",
  },
  {
    code: "TOOLING",
    title: "Research tooling",
    text: "Python, Codex and Claude support structured analysis, scenario comparison and faster iteration—always with human review.",
  },
];

const performance = [
  { firm: "FundingPips", amount: "$25,257.60", note: "Verified performance payout", url: "https://app.fundingpips.com/certificates/verify/f31ed372-3bb4-4514-9212-60f7382e4a2c" },
  { firm: "Alpha Capital", amount: "$11,265", note: "Lifetime payouts" },
  { firm: "FundedNext", amount: "$25K+", note: "Cumulative performance payouts" },
];

const projects: Project[] = [
  {
    id: "voxel",
    eyebrow: "Bachelor’s thesis · 10/10",
    title: "3D Procedural Voxel Sandbox",
    summary: "A flexible voxel engine built from scratch in C# and Unity, with deterministic terrain generation, chunk-based world management, face culling, mesh construction and real-time block interaction.",
    technologies: ["C#", "Unity", "OOP", "Algorithms", "Data structures"],
    featured: true,
    sourceUrl: "https://github.com/Silviu812/PASCraft",
    problem: "Build an extensible voxel engine capable of generating, rendering and modifying a large 3D sandbox world without treating millions of blocks as one monolithic structure.",
    built: "A deterministic Perlin Noise terrain pipeline, 16×16×128 chunks, queued world generation, face culling, runtime mesh construction, texture-atlas mapping, raycast interaction and an eight-slot inventory.",
    contribution: "Designed and implemented the complete project as a Computer Science bachelor’s thesis, from the data architecture and rendering pipeline to the playable prototype.",
    decisions: "Separated voxel data, mesh construction and rendering responsibilities; retained chunk data while unloading its visual representation; exposed terrain and resource parameters for iteration without architectural changes.",
    lessons: "Large procedural systems become tractable when generation, representation, rendering and player interaction are explicit, independent concerns.",
  },
  {
    id: "fleetops",
    eyebrow: "Deployed product",
    title: "FleetOps",
    summary: "A fleet-management product pairing a customer-facing React experience with data-backed forms and a companion Python administrative workflow.",
    technologies: ["React", "Cloudflare", "Python", "Database"],
    liveUrl: "https://fleetops.ro",
    problem: "Bring customer data collection and day-to-day fleet administration into one reliable operational flow.",
    built: "A deployed React website with database-backed customer forms, plus a separate Python administrative application for records, validation, fleet management and alerts.",
    contribution: "Built and iterated on both product surfaces using Codex and Claude as implementation and debugging accelerators, with developer review of important output.",
    decisions: "Separated the public web experience from internal administrative workflows while keeping the data lifecycle clear.",
    lessons: "Operational products need careful validation and legible states more than ornamental complexity.",
  },
  {
    id: "florance",
    eyebrow: "Deployed commerce experience",
    title: "Florance",
    summary: "An online-store experience with a motion-focused React interface and a database-backed product catalogue.",
    technologies: ["React", "Motion Primitives", "Cloudflare", "Database"],
    liveUrl: "https://byflorance.ro",
    problem: "Present a product catalogue through a polished, expressive browsing experience that remains clear and responsive.",
    built: "A deployed React interface with motion-led transitions and a database-backed product catalogue.",
    contribution: "Implemented and refined the experience with Codex and Claude supporting iteration, debugging and research.",
    decisions: "Used motion to clarify browsing hierarchy and product focus, while keeping catalogue data separate from presentation.",
    lessons: "Animation is most effective when it explains relationship and continuity rather than competing with content.",
  },
  {
    id: "auction",
    eyebrow: "Smart-contract prototype",
    title: "Decentralized NFT Auction Marketplace",
    summary: "A decentralized auction marketplace prototype with smart-contract-based auction logic and a React transaction interface.",
    technologies: ["React", "JavaScript", "Solidity", "Hardhat"],
    sourceUrl: "https://github.com/Silviu812/NFTRealm-Blockchain-Project",
    problem: "Model an auction lifecycle in smart contracts and make blockchain interactions understandable in a web interface.",
    built: "A prototype combining Solidity auction logic, Hardhat development tooling and a React interface for transactions.",
    contribution: "Developed the application flow across smart-contract and frontend layers.",
    decisions: "Kept contract actions explicit in the interface so transaction intent remains visible to the user.",
    lessons: "Distributed application interfaces must communicate pending, confirmed and failed states with unusual precision.",
  },
];

const skillGroups = [
  ["Languages", "C# · C/C++ · Python · Java · JavaScript · SQL"],
  ["Foundations", "Data structures and algorithms · Object-oriented programming · Relational databases · Operating systems · Threads, locks and race conditions · Virtual memory · Testing and debugging"],
  ["Product & web", "React · Git · REST APIs · Cloudflare · Solidity · Hardhat"],
  ["AI-assisted development", "OpenAI Codex · Claude · Implementation, debugging and research support · Critical output reviewed and validated"],
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function SystemsVisual() {
  const bars = [42, 68, 31, 78, 55, 88, 36, 64, 47, 74, 29, 58];
  const voxels = Array.from({ length: 30 }, (_, index) => index);
  const codeSignals = ["chunk.Generate(seed)", "if (risk <= limit)", "observe → model → test"];
  const orderFlow = ["BID 28", "ASK 17", "BID 41", "ASK 22"];

  return (
    <div className="systems-visual" aria-label="Abstract visualization connecting a voxel grid with market depth">
      <div className="visual-head">
        <span>SYSTEM / 01</span>
        <span>DETERMINISTIC STUDY</span>
      </div>
      <div className="visual-stage">
        <div className="software-field" aria-hidden="true">
          <div className="code-rail">
            {codeSignals.map((signal, index) => <span key={signal}><i>0{index + 1}</i>{signal}</span>)}
          </div>
          <div className="voxel-field">
            {voxels.map((index) => (
              <span key={index} style={{ "--delay": `${(index % 7) * 0.08}s` } as React.CSSProperties} />
            ))}
          </div>
        </div>
        <div className="visual-axis"><span>MODEL</span><span>MEASURE</span></div>
        <div className="market-field" aria-hidden="true">
          <div className="order-tape">
            {orderFlow.map((tick, index) => <span key={tick} style={{ "--tick-delay": `${index * 1.25}s` } as React.CSSProperties}>{tick}</span>)}
          </div>
          <div className="depth-field">
            {bars.map((height, index) => (
              <span key={index} className={index < 6 ? "bid" : "ask"} style={{ "--bar": `${height}%`, "--delay": `${index * 0.06}s` } as React.CSSProperties} />
            ))}
          </div>
          <span className="market-sweep" />
        </div>
        <div className="signal-flow" aria-hidden="true">
          {Array.from({ length: 6 }, (_, index) => <i key={index} style={{ "--flow-delay": `${index * 0.72}s` } as React.CSSProperties} />)}
        </div>
      </div>
      <div className="visual-foot">
        <span><i className="dot cyan" /> SOFTWARE STRUCTURE</span>
        <span><i className="dot amber" /> SIMULATED ORDER FLOW</span>
      </div>
    </div>
  );
}

function CaseStudyDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (project && dialog && !dialog.open) dialog.showModal();
    if (!project && dialog?.open) dialog.close();
  }, [project]);

  if (!project) return null;

  const rows = [
    ["01 / Goal", project.problem],
    ["02 / What was built", project.built],
    ["03 / Personal contribution", project.contribution],
    ["04 / Technical decisions", project.decisions],
    ["05 / Challenges & lessons", project.lessons],
  ];

  return (
    <dialog
      ref={ref}
      className="case-dialog"
      onClose={onClose}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
    >
      <div className="dialog-inner">
        <button className="dialog-close" onClick={onClose} aria-label="Close case study">Close <span aria-hidden="true">×</span></button>
        <p className="eyebrow">CASE STUDY / {project.eyebrow}</p>
        <h2>{project.title}</h2>
        <div className="dialog-tags">{project.technologies.map((item) => <span key={item}>{item}</span>)}</div>
        <div className="case-rows">
          {rows.map(([label, text]) => (
            <div className="case-row" key={label}>
              <p>{label}</p>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <div className="dialog-actions">
          {project.liveUrl && <a className="button primary" href={project.liveUrl} target="_blank" rel="noreferrer">View live project <Arrow diagonal /></a>}
          {project.sourceUrl && <a className="button ghost" href={project.sourceUrl} target="_blank" rel="noreferrer">View source on GitHub <Arrow diagonal /></a>}
        </div>
      </div>
    </dialog>
  );
}

export default function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <main>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`} aria-label="Primary navigation">
        <a className="wordmark" href="#overview">Silviu Popa <span>SP / 26</span></a>
        <div className="nav-links">
          <a href="#engineering">Engineering</a>
          <a href="#trading">Trading</a>
          <a href="#about">About</a>
          <a href="https://github.com/Silviu812" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>
        </div>
      </nav>

      <section className="hero section-shell" id="overview">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">SOFTWARE ENGINEERING · COMPUTER SCIENCE · QUANTITATIVE RESEARCH</p>
            <h1>Engineering systems for <em>uncertain environments.</em></h1>
            <p className="hero-lede">Computer Science graduate combining software engineering with independent quantitative research, market experience and disciplined risk management.</p>
            <div className="hero-actions">
              <a className="button primary" href="#engineering">Explore engineering work <Arrow /></a>
              <a className="button ghost" href="#trading">Explore trading research <Arrow /></a>
            </div>
            <div className="hero-secondary">
              <a href="https://github.com/Silviu812" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>
            </div>
          </div>
          <figure className="hero-portrait">
            <img src="/profile/silviu-popa-great-wall.webp" alt="Silviu Popa at the Great Wall of China" width="1200" height="1600" fetchPriority="high" />
            <figcaption><span>SILVIU POPA</span><span>ENGINEER / RESEARCHER</span></figcaption>
          </figure>
        </div>
        <div className="hero-systems"><SystemsVisual /></div>
        <div className="status-strip">
          <span><small>BASE</small> Constanța, Romania</span>
          <span><small>MOBILITY</small> Open to international relocation</span>
          <span><small>STATUS</small> EU work authorization</span>
        </div>
      </section>

      <section className="thesis section-shell section-pad" aria-labelledby="thesis-title">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">PROFILE THESIS / 001</p><h2 id="thesis-title">Two disciplines.<br />One way of thinking.</h2></div>
          <p>In both domains, the process is the same: <strong>observe, model, test, measure and improve.</strong></p>
        </div>
        <div className="discipline-grid">
          <article className="discipline-card market-card">
            <div className="card-index">M / 02</div>
            <h3>Markets</h3>
            <p>Studying liquidity, order flow, probability and risk to form and test market hypotheses under uncertainty.</p>
            <ul>
              <li>Market context and regime awareness</li><li>Order-flow and liquidity analysis</li><li>Probability and expected-value thinking</li><li>Drawdown and position-risk constraints</li><li>Scenario analysis and post-trade review</li>
            </ul>
          </article>
          <article className="discipline-card engineering-card">
            <div className="card-index">E / 01</div>
            <h3>Engineering</h3>
            <p>Turning ambiguous ideas into working systems through algorithms, data structures, object-oriented design and iterative development.</p>
            <ul>
              <li>Data structures and algorithms</li><li>Object-oriented programming</li><li>Databases and data-backed applications</li><li>Debugging and validation</li><li>AI-assisted implementation with human review</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="trading section-pad" id="trading">
        <div className="section-shell">
          <div className="section-heading split-heading">
            <div><p className="eyebrow amber-text">MARKET RESEARCH / 003</p><h2>Quantitative research<br />& trading</h2></div>
            <p>Independent research into how macro context, liquidity and order flow affect execution and short-term price behavior—evaluated through scenario analysis, probability, statistics and strict risk constraints.</p>
          </div>

          <div className="allocation-statement">
            <span className="allocation-mark">∑</span>
            <p>Operated multiple <strong>sim-funded trading accounts</strong> with aggregate <strong>nominal allocations exceeding €200K</strong>, generating more than <strong>$50K in cumulative performance payouts</strong> under strict risk and drawdown constraints.</p>
          </div>

          <div className="process" aria-label="Research process">
            {researchProcess.map(([number, title, text]) => (
              <article key={number} className="process-step">
                <div><span>{number}</span><i /></div>
                <h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>

          <div className="theme-grid">
            {researchThemes.map((theme) => (
              <article className="theme-card" key={theme.code}>
                <p>{theme.code}</p><h3>{theme.title}</h3><p>{theme.text}</p>
              </article>
            ))}
          </div>

          <div className="performance-block">
            <div className="performance-intro">
              <p className="eyebrow">EVIDENCE / SELECTED</p>
              <h3>Selected verified performance</h3>
              <p>A selection of performance payouts from simulated proprietary trading programs. Figures represent program payouts, not assets under management or guaranteed future returns.</p>
            </div>
            <div className="performance-list">
              {performance.map((item) => (
                <article className="performance-row" key={item.firm}>
                  <div><span>{item.firm}</span><small>{item.note}</small></div>
                  <strong>{item.amount}</strong>
                  {item.url ? <a href={item.url} target="_blank" rel="noreferrer" aria-label={`View ${item.firm} verification`}><Arrow diagonal /></a> : <span className="verified-mark" aria-label="Evidence supplied">●</span>}
                </article>
              ))}
            </div>
          </div>
          <p className="disclaimer">Past performance is presented only as professional background and is not investment advice or a guarantee of future results.</p>
        </div>
      </section>

      <section className="engineering section-shell section-pad" id="engineering">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">ENGINEERING / 002</p><h2>Selected<br />engineering work</h2></div>
          <p>Deployed products, procedural systems and technical prototypes—each shaped around a real problem, explicit constraints and iterative validation.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.featured ? "featured" : ""}`} key={project.id}>
              {project.featured && (
                <div className="project-visual" aria-label="Images from the procedural voxel sandbox bachelor thesis">
                  <img className="project-visual-main" src="/projects/voxel-thesis/procedural-terrain.png" alt="Procedurally generated voxel terrain with plains, water, beach and mountains" width="1097" height="502" loading="lazy" />
                  <div className="project-visual-pair">
                    <img src="/projects/voxel-thesis/chunk-mesh.png" alt="Generated voxel chunk mesh showing only visible faces" width="1103" height="502" loading="lazy" />
                    <img src="/projects/voxel-thesis/gameplay-inventory.png" alt="Voxel sandbox gameplay with editable blocks and inventory" width="1158" height="651" loading="lazy" />
                  </div>
                  <div className="pipeline-foot"><span>Extracted from the bachelor thesis</span><span>C# / Unity</span></div>
                </div>
              )}
              <div className="project-content">
                <p className="eyebrow">{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="tag-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
                <div className="project-actions">
                  <button onClick={() => setActiveProject(project)}>View case study <Arrow /></button>
                  {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live site <Arrow diagonal /></a>}
                  {project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>}
                </div>
              </div>
            </article>
          ))}
        </div>
        <a className="additional-work" href="https://github.com/Silviu812/142-POPA-SILVIU-ANDREI-PROIECT-POO" target="_blank" rel="noreferrer"><span>ADDITIONAL WORK</span><strong>F1 Management Application</strong><span>C++ · Object-oriented programming <Arrow diagonal /></span></a>
      </section>

      <section className="foundation section-pad" id="about">
        <div className="section-shell">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">FOUNDATION / 004</p><h2>Technical foundation</h2></div>
            <div className="education"><span>2022—2026</span><strong>BSc in Computer Science</strong><p>University of Bucharest<br />Faculty of Mathematics and Computer Science</p><small>Bachelor’s thesis grade: 10/10</small></div>
          </div>
          <div className="skill-list">
            {skillGroups.map(([title, skills], index) => (
              <div className="skill-row" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{skills}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="about section-shell section-pad">
        <div className="about-grid">
          <div><p className="eyebrow">ABOUT / 005</p><h2>Careful with claims.<br />Curious about systems.</h2></div>
          <div className="about-copy">
            <p>I am a Computer Science graduate from the University of Bucharest. My work has developed across two demanding environments: building software systems and researching financial markets.</p>
            <p>I enjoy problems where the rules are clear but the outcome is uncertain—systems that require careful observation, structured reasoning, testing and continuous iteration.</p>
            <p>I am currently looking for junior software engineering, quantitative trading and trading-systems opportunities, and I am open to international relocation.</p>
            <span>Outside work, I am deeply interested in strategy games and the systems behind them.</span>
          </div>
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <p className="eyebrow">CONTACT / 006</p>
        <h2>Let’s build something that has to work <em>in the real world.</em></h2>
        <div className="contact-row">
          <div><span>LOCATION</span><strong>Constanța, Romania</strong></div>
          <div><span>EMAIL</span><strong><a href="mailto:silviuandrei1056@gmail.com">silviuandrei1056@gmail.com</a></strong></div>
          <a className="button primary" href="mailto:silviuandrei1056@gmail.com">Start a conversation <Arrow diagonal /></a>
        </div>
      </section>

      <footer>
        <span>© 2026 Silviu Andrei Popa</span>
        <div><a href="mailto:silviuandrei1056@gmail.com">Email</a><a href="https://github.com/Silviu812" target="_blank" rel="noreferrer">GitHub</a><a href="#overview">Back to top ↑</a></div>
        <span>Built with React · Deployed on Cloudflare</span>
      </footer>

      <CaseStudyDialog project={activeProject} onClose={() => setActiveProject(null)} />
    </main>
  );
}
