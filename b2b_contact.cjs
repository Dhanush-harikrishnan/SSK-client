const fs = require('fs');
const path = require('path');

const contactCode = `import { useState } from "react";
import { Mail, Phone, WhatsApp, MapPin } from "@/components/Icons";

export const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    country: "India",
    product: "Electrolysis Scale Remover",
    requirement: "Full System",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Enquiry sent successfully! We will contact you shortly.");
    setFormState({ name: "", company: "", country: "India", product: "Electrolysis Scale Remover", requirement: "Full System", message: "" });
  };

  return (
    <section id="contact" className="bg-deep-navy section-padding text-white">
      <div className="container-main">
        <div className="text-center mb-16">
          <h2 className="text-h2 font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-body text-white/70 max-w-2xl mx-auto">
            Discuss your industrial water treatment needs or inquire about OEM titanium anode supply. We export globally.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Details */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            <div className="space-y-8 flex-1">
              <a href="tel:+916369658869" className="flex items-start gap-5 hover:text-electric-teal transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-electric-teal/20 transition-colors">
                  <Phone size={24} className="text-electric-teal" />
                </div>
                <div>
                  <p className="text-sm text-white/50 uppercase tracking-widest font-bold mb-1">Phone</p>
                  <p className="text-xl font-semibold">+91 63696 58869</p>
                </div>
              </a>
              
              <a href="mailto:info@ssktianode.com" className="flex items-start gap-5 hover:text-electric-teal transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-electric-teal/20 transition-colors">
                  <Mail size={24} className="text-electric-teal" />
                </div>
                <div>
                  <p className="text-sm text-white/50 uppercase tracking-widest font-bold mb-1">Email</p>
                  <p className="text-lg font-medium">info@ssktianode.com</p>
                  <p className="text-sm text-white/60">ssktianode@gmail.com</p>
                </div>
              </a>
              
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                  <MapPin size={24} className="text-electric-teal" />
                </div>
                <div>
                  <p className="text-sm text-white/50 uppercase tracking-widest font-bold mb-1">Headquarters & Manufacturing</p>
                  <p className="text-base font-medium leading-relaxed">
                    Gowrivakkam, <br />
                    Chennai, Tamil Nadu — 600073<br />
                    India
                  </p>
                </div>
              </div>
            </div>

            <a href="https://wa.me/916369658869" target="_blank" rel="noopener noreferrer" className="mt-12 flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 px-6 rounded-xl font-bold text-lg shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:scale-105 hover:bg-[#1EBE5A] transition-all">
              <WhatsApp size={24} /> Chat with Engineering Team
            </a>
          </div>

          {/* Form */}
          <div className="bg-white/5 border border-white/10 p-6 md:p-10 rounded-2xl backdrop-blur-md">
            <h3 className="text-2xl font-bold text-white mb-6">Send an Enquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-white/70 mb-2">Full Name *</label>
                  <input required type="text" placeholder="John Doe" className="input-dark" value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white/70 mb-2">Company Name *</label>
                  <input required type="text" placeholder="Acme Water Systems" className="input-dark" value={formState.company} onChange={e => setFormState({...formState, company: e.target.value})} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-white/70 mb-2">Country</label>
                <select className="input-dark bg-deep-navy appearance-none" value={formState.country} onChange={e => setFormState({...formState, country: e.target.value})}>
                  <option>India</option>
                  <option>Sri Lanka</option>
                  <option>Kenya</option>
                  <option>Nigeria</option>
                  <option>Saudi Arabia</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-white/70 mb-2">Product Interested In</label>
                <select className="input-dark bg-deep-navy appearance-none" value={formState.product} onChange={e => setFormState({...formState, product: e.target.value})}>
                  <option>Electrolysis Scale Remover</option>
                  <option>Electrochlorinator System</option>
                  <option>E-STP (Sewage Treatment)</option>
                  <option>E-ETP (Effluent Treatment)</option>
                  <option>Titanium Anode Manufacturing (OEM)</option>
                  <option>Automatic Scale Removal Anode</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-white/70 mb-3">Requirement Type</label>
                <div className="flex flex-wrap gap-4">
                  {['Full System', 'Anode Only (OEM)', 'Custom Fabrication'].map(type => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="reqType" 
                        value={type} 
                        checked={formState.requirement === type} 
                        onChange={e => setFormState({...formState, requirement: e.target.value})}
                        className="w-4 h-4 text-electric-teal bg-white/10 border-white/20 focus:ring-electric-teal" 
                      />
                      <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-white/70 mb-2">Message Details</label>
                <textarea rows={4} placeholder="Tell us about your flow rates, application, or OEM specs..." className="input-dark resize-none" value={formState.message} onChange={e => setFormState({...formState, message: e.target.value})}></textarea>
              </div>

              <button type="submit" className="w-full bg-electric-teal hover:bg-[#00A896] text-white font-bold py-4 rounded-xl transition-colors shadow-[0_4px_20px_rgba(0,194,168,0.3)]">
                Send Enquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};`;

fs.writeFileSync(path.join(__dirname, 'src/sections/ContactSection.tsx'), contactCode);
console.log("Contact Section Updated for B2B requirements!");
