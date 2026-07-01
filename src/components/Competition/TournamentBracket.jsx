import TeamBox from "./TeamBox";


const TournamentBracket = () => {
  return (
    <div className="relative w-90 h-75">

      {/* SVG Lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 360 300"
        fill="none"
      >
        {/* ---------- Top Match ---------- */}

        <path
          d="M95 28 H115 V60 H140"
          stroke="#ff4d4f"
          strokeWidth="2"
        />

        <path
          d="M96 92 H115 V60"
          stroke="#ff4d4f"
          strokeWidth="2"
        />

        {/* ---------- Bottom Match ---------- */}

        <path
          d="M96 188 H115 V220 H140"
          stroke="#ff4d4f"
          strokeWidth="2"
        />

        <path
          d="M96 252 H115 V220"
          stroke="#ff4d4f"
          strokeWidth="2"
        />

        {/* ---------- Semi Final ---------- */}

        <path
          d="M240 60 H260 V140 H290"
          stroke="#ff4d4f"
          strokeWidth="2"
        />

        <path
          d="M240 220 H260 V140"
          stroke="#ff4d4f"
          strokeWidth="2"
        />

      </svg>

      {/* ---------- Round 1 ---------- */}

      <TeamBox className="top-4 left-0" />
      <TeamBox className="top-19 left-0" />
      <TeamBox className="top-43 left-0" />
      <TeamBox className="top-59 left-0" />

      {/* ---------- Round 2 ---------- */}

      <TeamBox className="top-12 left-34" />
      <TeamBox className="top-50 left-34" />

      {/* ---------- Final ---------- */}

      <TeamBox className="top-31 left-67" />

    </div>
  );
};

export default TournamentBracket;