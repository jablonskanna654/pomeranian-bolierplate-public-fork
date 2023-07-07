import React, { useState, useEffect } from 'react';

const Mole = ({ onHit }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 1000);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleMoleClick = () => {
    if (visible) {
      onHit();
      setVisible(false);
    }
  };

  return (
    <div className={`mole ${visible ? 'visible' : ''}`} onClick={handleMoleClick}>
      Kret
    </div>
  );
};

export default Mole;