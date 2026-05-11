import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "@/components/Icons";
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon, CheckLarge } from "@/components/Icons";

gsap.registerPlugin(ScrollTrigger);

export const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.innerWidth < 768) return;

    const leftCol = section.querySelector(".contact-left");
    const rightCol = section.querySelector(".contact-right");
    if (leftCol && rightCol) {
      gsap.set(leftCol, { opacity: 0, x: -30 });
      gsap.set(rightCol, { opacity: 0, x: 30 });

      const triggers: ScrollTrigger[] = [];
      const st1 = ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        onEnter: () => gsap.to(leftCol, { opacity: 1, x: 0, duration: 0.7, ease: "expo.out" }),
        once: true,
      });
      triggers.push(st1);

      const st2 = ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        onEnter: () => gsap.to(rightCol, { opacity: 1, x: 0, duration: 0.7, ease: "expo.out", delay: 0.2 }),
        once: true,
      });
      triggers.push(st2);

      return () => triggers.forEach(t => t.kill());
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    try {
      const formData = new FormData(formRef.current);
      
      const response = await fetch('https://formsubmit.co/ssktianode@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('There was an error submitting the form. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting the form. Please try again or contact us directly.');
    }
  };

  interface ContactLine {
    text: string;
    href?: string;
    primary?: boolean;
  }

  const contactBlocks: { icon: React.FC<{ size?: number }>; label: string; lines: ContactLine[] }[] = [
    { icon: PhoneIcon, label: "Phone", lines: [{ text: "+91 63696 58869", href: "tel:+916369658869", primary: true }, { text: "+91 98412 10203", href: "tel:+919841210203" }] },
    { icon: EnvelopeIcon, label: "Email", lines: [{ text: "ssktianode@gmail.com", href: "mailto:ssktianode@gmail.com" }] },
    { icon: MapPinIcon, label: "Address", lines: [{ text: "10/35, Vembuli Amman Koil Street, Opp. Vembuli Amman Koil, Gowrivakkam, Chennai \u2013 600073, Tamil Nadu, India" }] },
    { icon: ClockIcon, label: "Business Hours", lines: [
      { text: "Monday \u2013 Friday: 9:00 AM \u2013 6:00 PM" },
      { text: "Saturday: 10:00 AM \u2013 4:00 PM" },
      { text: "Sunday: Closed" },
    ]},
  ];

  return (
    <section ref={sectionRef} id="contact" className="bg-deep-navy section-padding">
      <div className="container-main">
        <h2 className="contact-left text-h2 text-white mb-2">Start with a free water quality assessment</h2>
        <p className="contact-left text-body text-white/70 mb-10">
          Our engineers will visit your site, test your water, and recommend the right AquaRedox solution — at no cost.
        </p>

        <div className="grid lg:grid-cols-[55%_45%] gap-12">
          {/* Form */}
          <div className="contact-left">
            {!submitted ? (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                {/* Formsubmit.co configuration fields */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="New Water Assessment Request - SSK TI ANODE" />
                <input type="hidden" name="_next" value={window.location.href} />
                
                <div>
                  <label className="block text-body-sm text-white/70 mb-1.5 font-medium">Full Name *</label>
                  <input type="text" name="name" required placeholder="Your full name" className="input-dark" />
                </div>
                <div>
                  <label className="block text-body-sm text-white/70 mb-1.5 font-medium">Company / Property Name</label>
                  <input type="text" name="company" placeholder="Company or property name" className="input-dark" />
                </div>
                <div>
                  <label className="block text-body-sm text-white/70 mb-1.5 font-medium">City *</label>
                  <input type="text" name="city" required placeholder="e.g., Chennai" className="input-dark" />
                </div>
                <div>
                  <label className="block text-body-sm text-white/70 mb-1.5 font-medium">Phone Number *</label>
                  <input type="tel" name="phone" required placeholder="+91XXXXXXXXXX" pattern="[\+]?[0-9\s\-]{10,15}" className="input-dark" />
                </div>
                <div>
                  <label className="block text-body-sm text-white/70 mb-1.5 font-medium">Type of Water Problem *</label>
                  <select name="problem_type" required className="input-dark appearance-none cursor-pointer" defaultValue="">
                    <option value="" disabled>Select a problem type</option>
                    <option value="scale">Scale / Hardness</option>
                    <option value="boiler">Boiler Protection</option>
                    <option value="sewage">Sewage Treatment</option>
                    <option value="effluent">Effluent Treatment</option>
                    <option value="not-sure">Not Sure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-body-sm text-white/70 mb-1.5 font-medium">Message (optional)</label>
                  <textarea name="message" rows={4} placeholder="Tell us more about your water problem..." className="input-dark resize-y" />
                </div>
                <button type="submit" className="btn-primary w-full mt-2">
                  Request Free Assessment <ArrowRight size={16} />
                </button>
                <p className="text-body-sm text-white/50 text-center mt-3">We respond within 4 business hours.</p>
              </form>
            ) : (
              <div className="flex flex-col items-center text-center py-12">
                <CheckLarge size={64} />
                <h3 className="text-h3 text-white font-semibold mt-4 mb-3">Thank you!</h3>
                <p className="text-body text-white/70 max-w-md mb-6">
                  We've received your request. Our team will contact you within 4 business hours. For urgent queries, call us or WhatsApp.
                </p>
                <a href="https://wa.me/916369658869" target="_blank" rel="noopener noreferrer" className="btn-secondary-white">
                  Chat on WhatsApp
                </a>
              </div>
            )}
          </div>

          {/* Contact Details */}
          <div className="contact-right">
            {contactBlocks.map((block, i) => (
              <div key={block.label} className={`flex gap-4 py-4 ${i < contactBlocks.length - 1 ? "border-b border-white/[0.08]" : ""}`}>
                <div className="flex-shrink-0 w-8 text-electric-teal mt-0.5">
                  <block.icon size={20} />
                </div>
                <div>
                  <p className="text-body-sm text-white/50 font-semibold">{block.label}</p>
                  {block.lines.map((line, j) =>
                    line.href ? (
                      <a key={j} href={line.href} className={`block ${line.primary ? "text-body text-white font-medium" : "text-body-sm text-white/70"} hover:text-electric-teal transition-colors`}>
                        {line.text}
                      </a>
                    ) : (
                      <p key={j} className="text-body-sm text-white/80">{line.text}</p>
                    )
                  )}
                </div>
              </div>
            ))}

            {/* Google Maps */}
            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d80.1986!3d12.9116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzQxLjgiTiA4MMKwMTEnNTUuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: "8px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SSK TI ANODE Engineering Location"
                className="border border-white/10"
              />
              <a
                href="https://www.google.com/maps/search/?api=1&query=12.9116,80.1986"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-electric-teal text-body-sm mt-2 hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
