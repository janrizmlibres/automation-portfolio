import React from 'react';
import profileImage from '../assets/janriz_portrait.jpg';

const ProfileSection = () => {
  return (
    <section className="flex flex-col md:flex-row gap-12 items-start max-w-5xl mx-auto py-12 border-b border-zinc-800">
      <div className="flex-shrink-0">
        <div className="w-48 h-48 rounded-2xl overflow-hidden border-2 border-zinc-800 relative grayscale hover:grayscale-0 transition-all duration-500">
          <img 
            src={profileImage} 
            alt="Janriz Mathew Libres" 
            className="w-full h-full object-cover scale-125"
          />
        </div>
      </div>
      
      <div className="flex-1 text-left">
        <h2 className="text-3xl font-bold mb-4 text-zinc-100">
          Janriz Mathew Libres
        </h2>
        <p className="text-zinc-400 text-lg leading-relaxed mb-8">
          Empowering businesses through intelligent automation. I specialize in building custom solutions 
          that save time, reduce errors, and scale operations seamlessly using AI and leading automation platforms.
        </p>
        
        <div className="flex flex-wrap gap-3">
          {['n8n', 'Make', 'OpenAI', 'AI Integration', 'API Development'].map((tool) => (
            <span key={tool} className="px-4 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm rounded-full hover:border-teal-400/50 hover:text-teal-400 transition-colors duration-300 cursor-default">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
