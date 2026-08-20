import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Drag divider between the two x-ray frames, as on vivobarefoot.com/whybarefoot.
 * Pointer drag moves the split; the range input underneath keeps it operable by
 * keyboard and readable by screen readers.
 */
export default function CompareSlider() {
  const [pct, setPct] = useState(50);
  const frame = useRef(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX) => {
    const el = frame.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const next = ((clientX - r.left) / r.width) * 100;
    setPct(Math.min(100, Math.max(0, next)));
  }, []);

  useEffect(() => {
    const move = (e) => {
      if (!dragging.current) return;
      e.preventDefault();
      setFromClientX(e.touches ? e.touches[0].clientX : e.clientX);
    };
    const stop = () => {
      dragging.current = false;
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', stop);
    window.addEventListener('touchmove', move, { passive: false });
    window.addEventListener('touchend', stop);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', stop);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('touchend', stop);
    };
  }, [setFromClientX]);

  const start = (e) => {
    dragging.current = true;
    setFromClientX(e.touches ? e.touches[0].clientX : e.clientX);
  };

  return (
    <div className="compare">
      <div
        className="compare__frame"
        ref={frame}
        onPointerDown={start}
        onTouchStart={start}
      >
        <img className="compare__img" src="/img/compare-normal.jpg" alt="X-ray of a foot inside a conventional cushioned shoe" />
        <p className="compare__label">
          <span className="compare__eyebrow">Shoe-shaped problem</span>
          <span className="compare__title">Normal shoe</span>
        </p>

        <div className="compare__top" style={{ clipPath: `inset(0 0 0 ${pct}%)` }}>
          <img className="compare__img" src="/img/compare-vivo.jpg" alt="X-ray of a foot inside a Vivobarefoot shoe" />
          <p className="compare__label compare__label--vivo">
            <span className="compare__eyebrow">Shoe-shaped solution</span>
            <span className="compare__title">Vivobarefoot</span>
          </p>
        </div>

        <div className="compare__divider" style={{ left: `${pct}%` }} aria-hidden="true">
          <span className="compare__handle">
            <span className="compare__arrow">‹</span>
            Drag
            <span className="compare__arrow">›</span>
          </span>
        </div>
      </div>

      <label className="compare__range">
        <span>Compare a conventional shoe with a Vivobarefoot shoe</span>
        <input
          type="range"
          min="0"
          max="100"
          value={Math.round(pct)}
          onChange={(e) => setPct(Number(e.target.value))}
        />
      </label>
    </div>
  );
}
