import React from 'react';

const ServicesSection = () => {
  const services = [
    { icon: "⚡", title: "Workflow Automation", desc: "Eliminate manual tasks by connecting your apps and automating repetitive processes." },
    { icon: "🤖", title: "AI Integration", desc: "Integrate powerful AI models for intelligent document processing and content generation." },
    { icon: "🔗", title: "System Integration", desc: "Connect your CRM, databases, and tools to create a unified automated ecosystem." },
    { icon: "📊", title: "Data Automation", desc: "Automate data collection, processing, and reporting for real-time insights." },
    { icon: "🛠️", title: "Custom Solutions", desc: "Build bespoke automation solutions tailored to your unique business needs." },
    { icon: "📚", title: "Training & Support", desc: "Comprehensive training and ongoing support to maximize your automation ROI." }
  ];

  return (
    <section className="py-20">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl font-bold text-zinc-100">
          Services
        </h2>
        <div className="h-px bg-zinc-800 flex-1 ml-8"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-xl hover:border-teal-400/30 hover:-translate-y-1 transition-all duration-300 group h-full">
            <div className="text-3xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-300">
              {service.icon}
            </div>
            <h3 className="text-zinc-100 text-xl font-semibold mb-3 group-hover:text-teal-400 transition-colors">{service.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
