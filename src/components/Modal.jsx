import { useEffect, useRef } from 'react';

/**
 * Backdrop dialog. Clicking anywhere that is not the panel closes it, as does
 * Escape — the panel itself stops the click from reaching the backdrop.
 */
export default function Modal({ open, onClose, label, children, wide = false, image = false }) {
  const panel = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onClick={onClose}
    >
      <div
        className={`modal__panel${wide ? ' modal__panel--wide' : ''}${
          image ? ' modal__panel--image' : ''
        }`}
        ref={panel}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__close" onClick={onClose} aria-label="Close">
          <span />
          <span />
        </button>
        {children}
      </div>
    </div>
  );
}
