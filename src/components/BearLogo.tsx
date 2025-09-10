export default function BearLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className="w-10 h-10 fill-black dark:fill-white"
    >
      {/* Bear Head */}
      <circle cx="100" cy="100" r="60" />
      
      {/* Hoodie */}
      <path d="M40 140 Q100 190 160 140" stroke="currentColor" strokeWidth="12" fill="none" />
      
      {/* Chain */}
      <circle cx="100" cy="160" r="15" stroke="currentColor" strokeWidth="8" fill="none" />
      <text
        x="100"
        y="166"
        textAnchor="middle"
        fontSize="14"
        fontWeight="bold"
        fill="currentColor"
      >
        B
      </text>
    </svg>
  );
}