"use client";

import { useEffect, useState } from "react";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function CountdownBar() {
  const [h, setH] = useState("00");
  const [m, setM] = useState("00");
  const [s, setS] = useState("00");

  useEffect(() => {
    const KEY = "bt_deadline";
    let deadline: number;
    const stored = localStorage.getItem(KEY);
    deadline = stored ? parseInt(stored, 10) : 0;
    if (!deadline || deadline < Date.now()) {
      deadline = Date.now() + 72 * 60 * 60 * 1000;
      localStorage.setItem(KEY, String(deadline));
    }

    function tick() {
      let diff = deadline - Date.now();
      if (diff <= 0) {
        deadline = Date.now() + 72 * 60 * 60 * 1000;
        localStorage.setItem(KEY, String(deadline));
        diff = 0;
      }
      setH(pad(Math.floor(diff / 3600000)));
      setM(pad(Math.floor((diff % 3600000) / 60000)));
      setS(pad(Math.floor((diff % 60000) / 1000)));
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mkt-announce" role="banner" aria-label="Limited time offer">
      <p className="mkt-announce-text">
        <strong>LIMITED OFFER:</strong> TRIAL CLASS RM 80 (WORTH RM 150) —
        SAVE 46%!
      </p>
      <p className="mkt-announce-timer">
        ENDS IN{" "}
        <span className="mkt-announce-boxes" aria-live="off" aria-label={`${h} hours ${m} minutes ${s} seconds`}>
          <span className="mkt-announce-box">{h}</span>
          <span className="mkt-announce-sep">:</span>
          <span className="mkt-announce-box">{m}</span>
          <span className="mkt-announce-sep">:</span>
          <span className="mkt-announce-box">{s}</span>
        </span>
      </p>
      <a href="#register" className="mkt-announce-cta">
        Register Now →
      </a>
    </div>
  );
}
