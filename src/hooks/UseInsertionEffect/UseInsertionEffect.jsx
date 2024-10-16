import React, { useInsertionEffect, useState } from 'react';

const UseInsertionEffectExample = () => {
  const [color, setColor] = useState('blue');

  useInsertionEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.textContent = `
      .dynamic-color {
        color: ${color};
      }
    `;
    document.head.appendChild(styleTag);

    // Cleanup: remove the style tag when component unmounts or the color changes
    return () => {
      document.head.removeChild(styleTag);
    };
  }, [color]);

  return (
    <div>
      <p className="dynamic-color">This text color changes dynamically.</p>
      <button onClick={() => setColor('red')}>Change Color to Red</button>
      <button onClick={() => setColor('green')}>Change Color to Green</button>
    </div>
  );
};

export default UseInsertionEffectExample;
