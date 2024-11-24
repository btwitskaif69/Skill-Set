import React, { useState } from 'react';

function CustomAlert({ type, message, dismissible = true, duration = 5000, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  // Handle alert dismissal
  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose(); // Trigger callback if passed
  };

  // Auto hide alert after a specified duration
  if (isVisible && duration) {
    setTimeout(() => setIsVisible(false), duration);
  }

  if (!isVisible) return null;

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', height: '50px' }}>
      {type && message && (
        <div
          className={`alert alert-${type} alert-dismissible fade show text-center`}
          role="alert"
          style={{ transition: 'opacity 0.5s ease' }}
        >
          <strong>{capitalize(type)}</strong>: {message}

          {dismissible && (
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={handleClose}
            ></button>
          )}
        </div>
      )}
    </div>
  );
}

export default CustomAlert;
