import React, { useMemo, useState } from "react";

const MODES = ["Letters", "Numbers", "Conundrum"];

export default function App() {
  const [mode, setMode] = useState("Letters");

  const content = useMemo(() => {
    switch (mode) {
      case "Letters":
        return <Letters />;
      case "Numbers":
        return <Numbers />;
      case "Conundrum":
        return <Conundrum />;
      default:
        return null;
    }
  }, [mode]);

  return (
    <div className="page">
      <h1>Countdown</h1>

      <div className="nav">
        {MODES.map((m) => (
          <button
            key={m}
            className={m === mode ? "active" : ""}
            onClick={() => setMode(m)}
            type="button"
          >
            {m}
          </button>
        ))}
      </div>

      <div className="card">{content}</div>
    </div>
  );
}

function Letters() {
  return (
    <div>
      <h2>Letters</h2>
      <p>Next: we’ll add letter selection, tile animation, timer, and word checking.</p>
    </div>
  );
}

function Numbers() {
  return (
    <div>
      <h2>Numbers</h2>
      <p>Next: we’ll add number selection, target generation, and solution checking.</p>
    </div>
  );
}

function Conundrum() {
  return (
    <div>
      <h2>Conundrum</h2>
      <p>Next: we’ll add 9-letter scramble and reveal logic.</p>
    </div>
  );
}