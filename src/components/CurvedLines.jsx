const CurvedLines = () => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#3a8fffb7" strokeWidth="0.7" fill="none" opacity="0.5">
          <path d="M-100 700 C 200 620, 500 420, 800 380 S 1200 440, 1540 320" />
          <path d="M-100 780 C 150 700, 420 520, 720 470 S 1150 510, 1540 400" />
          <path d="M-100 860 C 100 780, 350 620, 650 560 S 1100 590, 1540 480" />
        </g>
        <g stroke="#3a8fffb7" strokeWidth="0.5" fill="none" opacity="0.3">
          <path d="M-100 580 C 250 530, 520 360, 850 320 S 1250 360, 1540 240" />
          <path d="M-100 940 C 80 870, 300 720, 580 650 S 1050 670, 1540 560" />
          <path d="M-100 1020 C 50 950, 240 820, 500 740 S 990 750, 1540 630" />
        </g>
        <g stroke="#3a8fffb7" strokeWidth="0.5" fill="none" opacity="0.1">
          <path d="M-100 460 C 300 440, 580 280, 900 250 S 1300 290, 1540 180" />
          <path d="M-100 1100 C 30 1030, 220 900, 460 820 S 940 830, 1540 700" />
        </g>
      </svg>
    </div>
  );
};

export default CurvedLines;
