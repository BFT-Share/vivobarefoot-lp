import { STORE } from '../lib/nav';

// Floating "add us on LINE" button, as on the K Village store LP.
export default function LineButton() {
  return (
    <a
      className="line-float"
      href={STORE.lineUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Add our K Village store on LINE"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M12 3C6.48 3 2 6.62 2 11.08c0 4 3.55 7.35 8.35 7.98.33.07.77.22.88.5.1.25.07.65.03.9l-.14.85c-.04.25-.2.98.86.53 1.06-.45 5.73-3.37 7.82-5.78C21.24 14.5 22 12.88 22 11.08 22 6.62 17.52 3 12 3z"
        />
        <text x="12" y="13.4" textAnchor="middle" fontSize="5.6" fontWeight="700" fill="#06c755" fontFamily="Arial, sans-serif">
          LINE
        </text>
      </svg>
      <span>Add LINE friend</span>
    </a>
  );
}
