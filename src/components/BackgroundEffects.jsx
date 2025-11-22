import React from 'react';

const BackgroundEffects = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
      {/* Subtle top spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-teal-400/5 blur-[120px] rounded-full opacity-50"></div>
      
      {/* Subtle bottom accent */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-zinc-800/20 blur-[100px] rounded-full opacity-30"></div>
    </div>
  );
};

export default BackgroundEffects;
