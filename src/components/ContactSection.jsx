import React from 'react';

const ContactSection = () => {
  return (
    <section className="py-24 border-t border-zinc-800">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-zinc-100 mb-6">
          Ready to automate your workflow?
        </h2>
        <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
          Let's discuss how I can help you save time and scale your business efficiently with custom automation solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="mailto:libres.janriz@gmail.com" 
            className="px-8 py-4 bg-teal-400 text-zinc-950 font-bold rounded-lg hover:bg-teal-500 transition-colors text-center"
          >
            Email Me
          </a>
          <a 
            href="https://calendly.com/libres-janriz/automation-consultation" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-8 py-4 bg-transparent border border-zinc-700 text-zinc-100 font-bold rounded-lg hover:border-zinc-500 hover:bg-zinc-900 transition-all text-center"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
