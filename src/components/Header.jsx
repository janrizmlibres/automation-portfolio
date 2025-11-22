import React, { useState, useEffect, useMemo } from 'react';

const Header = () => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const phrases = useMemo(() => [
    "Streamlining Business Operations with Intelligent Automation",
    "Automating Workflows for Maximum Efficiency",
    "Integrating AI to Scale Your Business"
  ], []);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    
    if (!isDeleting && text === currentPhrase) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }
    
    if (isDeleting && text === '') {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 500);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setText(prev => isDeleting ? prev.slice(0, -1) : currentPhrase.slice(0, prev.length + 1));
    }, isDeleting ? 30 : 80);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases]);

  return (
    <header className="text-center py-20 px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-zinc-100 tracking-tight">
        AI Automation <span className="text-teal-400">Consultant</span>
      </h1>
      <div className="h-16 md:h-8 mb-4 flex items-center justify-center">
        <p className="text-xl md:text-2xl text-zinc-400 font-light">
          {text}<span className="animate-pulse text-teal-400">|</span>
        </p>
      </div>
      <p className="text-zinc-500 max-w-xl mx-auto">
        Transform your workflow with cutting-edge automation solutions that scale.
      </p>
    </header>
  );
};

export default Header;
