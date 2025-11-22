import React from 'react';
import ugcSoraImage from '../assets/ugc_sora.png';
import clientOnboardingImage from '../assets/client_onboarding.png';
import initialLeadImage from '../assets/initial_lead.png';

const PortfolioSection = () => {
  const projects = [
    {
      title: "UGC Ads Generator w/ Sora 2",
      subtitle: "n8n Workflow",
      description: "A form-triggered n8n workflow that takes a product image and description, then automatically generates an 8-second realistic UGC-style talking-head video using OpenAI's Sora 2 via Kie.ai.",
      image: ugcSoraImage,
      link: "https://www.loom.com/share/3fa8683fbc7a4d219d9925adb2a91fa3"
    },
    {
      title: "Client Onboarding Workflow",
      subtitle: "Make.com Scenario",
      description: "Watches Google Forms, instantly sends a personalized welcome email with Calendly link, creates a client Trello board from a template, and notifies the team via email and Telegram.",
      image: clientOnboardingImage,
      link: "https://www.loom.com/share/fe728e3c9a574e289208eb2f8bf7d46d"
    },
    {
      title: "Lead Follow-Up System",
      subtitle: "Make.com Scenario",
      description: "Monitors Google Sheets, sends an initial outreach email to new leads, updates the tracker, schedules calendar reminders, and automatically dispatches timed follow-up emails.",
      image: initialLeadImage,
      link: "https://www.loom.com/share/28e410388aa240b687ae392df2515cb7"
    }
  ];

  return (
    <section className="py-20">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl font-bold text-zinc-100">
          Selected Work
        </h2>
        <div className="h-px bg-zinc-800 flex-1 ml-8"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group bg-zinc-900/30 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all duration-300">
            <div className="h-48 w-full overflow-hidden bg-zinc-800 relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            
            <div className="p-6">
              <div className="text-teal-400 text-xs font-mono uppercase tracking-wider mb-2">{project.subtitle}</div>
              <h3 className="text-zinc-100 text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed line-clamp-3">
                {project.description}
              </p>
              
              <a 
                href={project.link} 
                className="inline-flex items-center gap-2 text-zinc-100 text-sm font-medium hover:text-teal-400 transition-colors"
              >
                Watch Demo
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
