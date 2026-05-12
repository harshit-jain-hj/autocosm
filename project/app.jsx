/* global React, window, MeSlide, VerissimusSlide, DyeusSlide, WorldviewSlide, MusicSlide, MoodboardSlide */
const { useState, useEffect, useCallback, useRef } = React;
const { TweaksPanel, useTweaks, TweakSection, TweakRadio, TweakToggle } = window;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "typeface": "serif",
  "hud": true
}/*EDITMODE-END*/;

const SLIDES = [
  { id: "me",         label: "Me",          Comp: () => window.MeSlide        && <window.MeSlide /> },
  { id: "verissimus", label: "Verissimus",  Comp: () => window.VerissimusSlide && <window.VerissimusSlide /> },
  { id: "dyeus",      label: "Dyeus",       Comp: () => window.DyeusSlide      && <window.DyeusSlide /> },
  { id: "worldview",  label: "Worldview",   Comp: () => window.WorldviewSlide  && <window.WorldviewSlide /> },
  { id: "music",      label: "Music",       Comp: () => window.MusicSlide      && <window.MusicSlide /> },
  { id: "moodboard",  label: "Moodboard",   Comp: () => window.MoodboardSlide  && <window.MoodboardSlide /> },
];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [i, setI] = useState(0);
  const slide = SLIDES[i];

  const stepBy = useCallback((d) => {
    setI((cur) => (cur + d + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.target && /input|textarea/i.test(e.target.tagName)) return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " " || e.key === "j") {
        stepBy(1); e.preventDefault();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "k") {
        stepBy(-1); e.preventDefault();
      } else if (/^[1-6]$/.test(e.key)) {
        setI(parseInt(e.key, 10) - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [stepBy]);

  // expose HUD toggle on body so styles can react
  useEffect(() => {
    document.body.classList.toggle("hud-off", !t.hud);
  }, [t.hud]);

  // expose typeface choice
  const typefaceClass = "tf-" + (t.typeface || "serif");

  return (
    <div className={"deck " + typefaceClass}>
      <div className="deck__viewport">
        <div className="deck__slide" key={slide.id}>
          {slide.Comp()}
        </div>
      </div>

      <DeckNav i={i} count={SLIDES.length} slides={SLIDES} onPick={setI} onPrev={() => stepBy(-1)} onNext={() => stepBy(1)} />

      <TweaksPanel>
        <TweakSection label="Typeface">
          <TweakRadio
            label="Body type"
            value={t.typeface}
            onChange={(v) => setTweak("typeface", v)}
            options={[
              { value: "serif", label: "Serif" },
              { value: "sans",  label: "Sans" },
              { value: "mono",  label: "Mono" },
            ]}
          />
        </TweakSection>
        <TweakSection label="Atmosphere">
          <TweakToggle label="Surveillance HUD" value={t.hud} onChange={(v) => setTweak("hud", v)} />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

function DeckNav({ i, count, slides, onPick, onPrev, onNext }) {
  return (
    <div className="dn">
      <button className="dn__arrow" onClick={onPrev} aria-label="Previous">‹</button>
      <div className="dn__dots">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            className={"dn__dot " + (idx === i ? "is-active" : "")}
            onClick={() => onPick(idx)}
            aria-label={"Go to " + s.label}
            title={s.label}
          >
            <span className="dn__dot-bar" />
            <span className="dn__dot-label">{s.label}</span>
          </button>
        ))}
      </div>
      <button className="dn__arrow" onClick={onNext} aria-label="Next">›</button>
      <div className="dn__count">{String(i + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}</div>
    </div>
  );
}

window.App = App;
