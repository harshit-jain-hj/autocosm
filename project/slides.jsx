/* global React, window */
// ============================================================
// autocosm — six rooms, one deck.
// Each slide is a fully-composed page in its own aesthetic.
// ============================================================

const { useState } = React;

/* ──────────────────────────────────────────────────────────
   ME
   A quiet opening. "autocosm." stamped on the page like a
   colophon — definition, byline, the date.
   ────────────────────────────────────────────────────────── */
function MeSlide() {
  return (
    <section className="me" data-screen-label="01 Me">
      <header className="me__hdr">
        <span className="me__id">01 / 06 · ME</span>
        <span className="me__url">autocosm.xyz</span>
      </header>

      <div className="me__inner">
        <p className="me__kicker">a self-generating universe</p>
        <h1 className="me__title">autocosm.</h1>
        <p className="me__pron">/ˈɔː.tə.kɒz.əm/&nbsp;·&nbsp;<em>n.</em></p>
        <p className="me__defn">
          a private cosmology, generating itself out of the things its author keeps —
          capital, language, sound, image, and whatever else won't sit still.
        </p>
        <p className="me__sig">
          — and a personal site, in six rooms.
        </p>

        <div className="me__meta">
          <div className="me__meta-row"><span>WRITTEN BY</span><b>the author</b></div>
          <div className="me__meta-row"><span>FILED</span><b>{new Date().getFullYear()}</b></div>
          <div className="me__meta-row"><span>EDITION</span><b>I</b></div>
        </div>
      </div>

      <footer className="me__foot">
        <span>press ›&nbsp;or arrow keys to enter</span>
        <span className="me__rule" />
      </footer>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   VERISSIMUS
   Bloomberg-style capital journal. Mono everywhere. Bio,
   headline CAGR + FY split, full position ledger.
   ────────────────────────────────────────────────────────── */
function VerissimusSlide() {
  const fy2425 = [
    ["Olectra Greentech",   "8×",  "sold"],
    ["IREDA",               "5×",  "sold"],
    ["Kore Digital",        "8×",  "sold"],
    ["Eternal",             "6×",  "holding"],
    ["HAL",                 "5×",  "holding"],
    ["GMR Urban",           "5×",  "holding"],
    ["Bluestar",            "5×",  "holding"],
    ["BHEL",                "3.5×","holding"],
    ["Laurus Labs",         "4×",  "holding"],
    ["ZTech",               "3×",  "holding"],
    ["JSW Steel",           "2×",  "holding"],
    ["Vedanta",             "2×",  "holding"],
  ];
  const fy2526 = [
    ["HindCopper",          "2×",   "sold"],
    ["Chennai Petro",       "2×",   "sold"],
    ["RPSG",                "+35%", "sold"],
    ["HBL Engineering",     "2×",   "holding"],
    ["Alpex Solar",         "+30%", "holding"],
  ];
  const fy2627 = [
    ["MTAR Tech",           "2× / 3wk", "sold"],
    ["Gravita",             "+40%", "holding"],
    ["Praj Industries",     "+30%", "holding"],
    ["HPL Electric",        "+25%", "holding"],
  ];

  return (
    <section className="vr" data-screen-label="02 Verissimus">
      <header className="vr__hdr">
        <div className="vr__brand">
          <span className="vr__brand-mark">⌬</span>
          <span className="vr__brand-name">VERISSIMUS</span>
          <span className="vr__brand-sub">CAPITAL · JOURNAL</span>
        </div>
        <div className="vr__ticker">
          <span className="vr__ticker-dot" /> LIVE · NSE / BSE · IST
        </div>
      </header>

      <div className="vr__lede">
        <div className="vr__stat">
          <div className="vr__stat-num">32<span className="vr__stat-pct">%</span></div>
          <div className="vr__stat-cap">CAGR · last two years</div>
        </div>
        <div className="vr__split">
          <div className="vr__split-row">
            <span className="vr__split-label">FY24–25</span>
            <span className="vr__split-bar"><span style={{ width: "84%" }} /></span>
            <span className="vr__split-val">+42%</span>
          </div>
          <div className="vr__split-row">
            <span className="vr__split-label">FY25–26</span>
            <span className="vr__split-bar"><span style={{ width: "46%" }} /></span>
            <span className="vr__split-val">+23%</span>
          </div>
          <div className="vr__split-row vr__split-row--mini">
            <span className="vr__split-label">FY26–27</span>
            <span className="vr__split-bar"><span style={{ width: "8%" }} /></span>
            <span className="vr__split-val">one month in</span>
          </div>
        </div>
        <div className="vr__bio">
          <p>
            Ten years studying and investing in capital markets. At NYU I was part of
            <b> Stern IAG</b> — the only club allowed to invest Stern's endowment fund.
            Managing the fund <b>full-time since 2024</b>. Long-only India.
          </p>
        </div>
      </div>

      <div className="vr__ledger">
        <Ledger title="FY24–25 · Highlights"      rows={fy2425} wide />
        <Ledger title="FY25–26 · Highlights"      rows={fy2526} />
        <Ledger title="FY26–27 · Month 1"         rows={fy2627} />
      </div>

      <footer className="vr__foot">
        <span>all values · INR · multiples from cost</span>
        <span>sold ● &nbsp; holding ○</span>
        <span>vr.0{new Date().getFullYear()}</span>
      </footer>
    </section>
  );
}

function Ledger({ title, rows, wide }) {
  return (
    <div className={"vr__lcol" + (wide ? " vr__lcol--wide" : "")}>
      <div className="vr__lcol-h">{title}</div>
      <ol className="vr__lcol-rows">
        {rows.map(([name, mult, status], i) => (
          <li key={i} className={"vr__lcol-row vr__lcol-row--" + status}>
            <span className="vr__lcol-name">{name}</span>
            <span className="vr__lcol-mult">{mult}</span>
            <span className="vr__lcol-stat" aria-label={status}>{status === "sold" ? "●" : "○"}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   DYEUS
   Deep time. The oldest word. Dark, cosmic, serif.
   ────────────────────────────────────────────────────────── */
function DyeusSlide() {
  return (
    <section className="dy" data-screen-label="03 Dyeus">
      <div className="dy__stars" aria-hidden="true" />

      <header className="dy__hdr">
        <span>03 / 06 · DYEUS</span>
        <span>the sky-father</span>
      </header>

      <div className="dy__hero">
        <h1 className="dy__name">Dyḗus&nbsp;ph₂tḗr.</h1>
        <p className="dy__pron">*dyew-&nbsp;·&nbsp;Proto-Indo-European</p>
      </div>

      <div className="dy__body">
        <div className="dy__col">
          <p className="dy__lead">
            Six thousand years ago, somebody pointed at the sky and made a sound.
            We are still saying their word.
          </p>
        </div>
        <div className="dy__col dy__col--cognates">
          <div className="dy__cognate"><span className="dy__lang">Greek</span><b>Zeus</b></div>
          <div className="dy__cognate"><span className="dy__lang">Latin</span><b>Iūpiter</b></div>
          <div className="dy__cognate"><span className="dy__lang">Norse</span><b>Týr</b></div>
          <div className="dy__cognate"><span className="dy__lang">Sanskrit</span><b>Dyaús</b></div>
        </div>
      </div>

      <blockquote className="dy__quote">
        <span className="dy__qmark">“</span>
        The light hitting your eye now left its star before there were countries.
        <cite>— a thing I keep remembering.</cite>
      </blockquote>

      <footer className="dy__foot">
        <span>same root · different sky</span>
        <span>~6,000 years and counting</span>
      </footer>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   WORLDVIEW
   Editorial / zine layout. 4 Substack posts in a grid, then
   a tweets feed placeholder strip.
   ────────────────────────────────────────────────────────── */
function WorldviewSlide() {
  const posts = [
    {
      no: "I",
      title: "AI is the anti-bubble.",
      dek:   "On why the loudest 'bubble' call may be the most wrong — and what that means for the next decade.",
      url:   "https://intellectualdegen.substack.com/p/ai-is-the-anti-bubble",
    },
    {
      no: "II",
      title: "Authenticity is dead.",
      dek:   "On the strange economy that killed it — and what we should be honest about instead.",
      url:   "https://intellectualdegen.substack.com/p/authenticity-is-dead",
    },
    {
      no: "III",
      title: "Distribution is definitely not a moat.",
      dek:   "A reply to a thing everyone says. Distribution is a head start, not a wall.",
      url:   "https://intellectualdegen.substack.com/p/distribution-is-definitely-not-a",
    },
    {
      no: "IV",
      title: "Picasso's greatest mistake.",
      dek:   "On what 'output' costs — the difference between a body of work and a pile of paintings.",
      url:   "https://intellectualdegen.substack.com/p/picassos-greatest-mistake",
    },
  ];

  return (
    <section className="wv" data-screen-label="04 Worldview">
      <header className="wv__masthead">
        <div className="wv__masthead-l">
          <div className="wv__name">Worldview</div>
          <div className="wv__rule" />
          <div className="wv__tag">essays · half-formed thoughts · in public</div>
        </div>
        <div className="wv__masthead-r">
          <span>VOL. I</span>
          <span>·</span>
          <span>intellectualdegen.substack.com</span>
        </div>
      </header>

      <div className="wv__essays">
        <div className="wv__essays-h">
          <span>Essays</span>
          <span className="wv__essays-h-count">{posts.length} dispatches</span>
        </div>
        <div className="wv__essays-grid">
          {posts.map((p) => (
            <a key={p.no} href={p.url} target="_blank" rel="noreferrer" className="wv__post">
              <div className="wv__post-no">{p.no}.</div>
              <h3 className="wv__post-title">{p.title}</h3>
              <p className="wv__post-dek">{p.dek}</p>
              <div className="wv__post-cta">read on substack&nbsp;→</div>
            </a>
          ))}
        </div>
      </div>

      <div className="wv__tweets">
        <div className="wv__tweets-h">
          <span>Posts · half-formed, in public</span>
          <span className="wv__tweets-h-meta">— drop tweet embeds here —</span>
        </div>
        <div className="wv__tweets-row">
          {[0, 1, 2].map((j) => (
            <div key={j} className="wv__tweet">
              <div className="wv__tweet-head">
                <div className="wv__tweet-avatar" />
                <div className="wv__tweet-hand">
                  <b>autocosm</b>
                  <span>@autocosm · —</span>
                </div>
              </div>
              <p className="wv__tweet-text">[ tweet placeholder — paste a tweet here ]</p>
              <div className="wv__tweet-foot">
                <span>♡</span><span>↻</span><span>💬</span><span>↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   MUSIC
   Four playlists, 2×2 grid. Dark room, gentle lights.
   ────────────────────────────────────────────────────────── */
function MusicSlide() {
  const lists = [
    { id: "48cv127uqDzWKGE3R7mx6O", n: "I",   sub: "the first room." },
    { id: "4OOfsQAGlaCsSODy7okyDR", n: "II",  sub: "after midnight." },
    { id: "5NK7EE3BqQ8CX7cMYOXETi", n: "III", sub: "the long drive." },
    { id: "6oWLCwN317KUWQsNR8TNFL", n: "IV",  sub: "if you need a hand." },
  ];
  return (
    <section className="mu" data-screen-label="05 Music">
      <header className="mu__hdr">
        <div>
          <div className="mu__name">Music</div>
          <div className="mu__tag">four rooms · press play in any of them</div>
        </div>
        <div className="mu__nowplay">
          <span className="mu__bars"><i /><i /><i /><i /></span>
          <span>NOW SOUNDING</span>
        </div>
      </header>

      <div className="mu__grid">
        {lists.map((l) => (
          <article key={l.id} className="mu__cell">
            <header className="mu__cell-h">
              <span className="mu__cell-n">{l.n}.</span>
              <span className="mu__cell-sub">{l.sub}</span>
            </header>
            <div className="mu__cell-frame">
              <iframe
                src={`https://open.spotify.com/embed/playlist/${l.id}?utm_source=generator&theme=0`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={"Playlist " + l.n}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   MOODBOARD
   The conversation. Man's touch with infinity. Shedding of
   illusion. Becoming. Then — goodbye.
   ────────────────────────────────────────────────────────── */
function MoodboardSlide() {
  // ORDERED along the user's described arc.
  const wall = [
    { src: "images/moodboard/01-eavesdrop.jpg",       cap: "we're listening." },
    { src: "images/moodboard/04.jpg",                 cap: "" },
    { src: "images/moodboard/03.jpg",                 cap: "" },
    { src: "images/moodboard/05.jpg",                 cap: "" },
    { src: "images/moodboard/06-gone.jpg",            cap: "gone to a place without clocks." },
    { src: "images/moodboard/02.jpg",                 cap: "" },
    { src: "images/moodboard/15-no-higher-self.jpg",  cap: "no second, higher self." },
    { src: "images/moodboard/16-perpetuating-lie.jpg",cap: "perpetuating the lie." },
    { src: "images/moodboard/13-rochefoucauld.jpg",   cap: "rochefoucauld." },
    { src: "images/moodboard/07-infinite.jpg",        cap: "do you see how infinite you are?" },
    { src: "images/moodboard/18-blasphemy.jpg",       cap: "to name your calling a hobby is blasphemy." },
    { src: "images/moodboard/14.jpg",                 cap: "" },
    { src: "images/moodboard/17.png",                 cap: "" },
    { src: "images/moodboard/08.jpg",                 cap: "" },
    { src: "images/moodboard/09.jpg",                 cap: "" },
    { src: "images/moodboard/10.jpg",                 cap: "" },
    { src: "images/moodboard/11.jpg",                 cap: "" },
    { src: "images/moodboard/12.jpg",                 cap: "" },
    { src: "images/moodboard/19-goodbye.jpg",         cap: "this conversation can serve no purpose anymore. goodbye." },
  ];

  return (
    <section className="mb" data-screen-label="06 Moodboard">
      <header className="mb__hdr">
        <div className="mb__title">
          <span>Moodboard</span>
          <span className="mb__sep">·</span>
          <em>a conversation in pictures</em>
        </div>
        <nav className="mb__beats">
          <span>infinity</span>
          <span>·</span>
          <span>illusion</span>
          <span>·</span>
          <span>becoming</span>
          <span>·</span>
          <span>goodbye</span>
        </nav>
      </header>

      <div className="mb__scroll">
        <div className="mb__wall">
          {wall.map((it, i) => (
            <figure key={i} className="mb__cell" style={{ animationDelay: `${i * 0.025}s` }}>
              <img src={it.src} alt="" loading="lazy" />
              {it.cap && <figcaption>{it.cap}</figcaption>}
            </figure>
          ))}
        </div>
        <div className="mb__end">— fin —</div>
      </div>
    </section>
  );
}

Object.assign(window, {
  MeSlide, VerissimusSlide, DyeusSlide, WorldviewSlide, MusicSlide, MoodboardSlide, Ledger,
});
