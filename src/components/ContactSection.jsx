import React, { useState } from 'react';
import { Send, Building, Mail, User, MessageSquare, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#002147] mb-6">Partner with BharatChain</h2>
            <p className="text-lg text-gray-600 mb-8">
              Whether you are a government department looking to migrate services or a developer building dApps, our team is here to support your integration.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Building, title: "Government Integration", desc: "Dedicated support for state and central departments." },
                { icon: Mail, title: "Official Correspondence", desc: "support@bharatchain.gov.in" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-[#002147]/5 border border-[#002147]/10">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <item.icon className="w-6 h-6 text-[#FF9933]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#002147]">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-[#002147] mb-2">Message Received</h3>
                <p className="text-gray-600">Our technical team will reach out within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#002147] flex items-center gap-2">
                    <User className="w-4 h-4" /> Full Name
                  </label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none" placeholder="D K Gautam" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#002147] flex items-center gap-2">
                    <Building className="w-4 h-4" /> Organization
                  </label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none" placeholder="Department / Startup Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#002147] flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" /> Message
                  </label>
                  <textarea required rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none resize-none" placeholder="How can we help you?" />
                </div>
                <Button type="submit" className="w-full bg-[#002147] hover:bg-[#003366] text-white py-6 text-lg rounded-xl">
                  Send Inquiry <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;