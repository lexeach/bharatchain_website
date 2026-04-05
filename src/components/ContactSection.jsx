Now let me create the contact form, footer, header, and main landing page:
Action: file_editor create /app/frontend/src/components/ContactSection.jsx --file-text "import React, { useState } from 'react';
import { Send, Building, Mail, User, MessageSquare, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - backend will be integrated later
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', organization: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section className=\"py-20 bg-white\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
          <div className=\"max-w-2xl mx-auto text-center\">
            <div className=\"bg-gradient-to-br from-[#F4F7F9] to-white rounded-3xl p-16 border-2 border-[#22c55e]/20\">
              <div className=\"w-20 h-20 bg-[#22c55e] rounded-full flex items-center justify-center mx-auto mb-6\">
                <CheckCircle2 className=\"w-10 h-10 text-white\" />
              </div>
              <h3 className=\"text-3xl font-bold text-[#002147] mb-4\">Thank You!</h3>
              <p className=\"text-lg text-gray-700\">
                Your inquiry has been received. Our team will reach out to you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className=\"py-20 bg-white\" id=\"contact\">
      <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
        <div className=\"grid lg:grid-cols-2 gap-12 items-center\">
          {/* Left: Content */}
          <div className=\"space-y-6\">
            <div className=\"inline-flex items-center gap-2 px-4 py-2 bg-[#002147]/5 rounded-full\">
              <div className=\"w-2 h-2 bg-[#FF9933] rounded-full animate-pulse\"></div>
              <span className=\"text-sm font-medium text-[#002147]\">Get in Touch</span>
            </div>

            <h2 className=\"text-4xl lg:text-5xl font-bold text-[#002147]\">
              Ready to Build on BharatChain?
            </h2>
            <p className=\"text-lg text-gray-700 leading-relaxed\">
              Whether you're a government department, enterprise, or developer, we're here to help you leverage India's sovereign blockchain infrastructure.
            </p>

            <div className=\"space-y-4 pt-4\">
              <div className=\"flex items-start gap-4\">
                <div className=\"w-10 h-10 bg-[#002147]/10 rounded-lg flex items-center justify-center flex-shrink-0\">
                  <Building className=\"w-5 h-5 text-[#002147]\" />
                </div>
                <div>
                  <h4 className=\"font-bold text-[#002147] mb-1\">For Government Departments</h4>
                  <p className=\"text-sm text-gray-600\">Discuss pilot programs and integration pathways</p>
                </div>
              </div>

              <div className=\"flex items-start gap-4\">
                <div className=\"w-10 h-10 bg-[#002147]/10 rounded-lg flex items-center justify-center flex-shrink-0\">
                  <Mail className=\"w-5 h-5 text-[#002147]\" />
                </div>
                <div>
                  <h4 className=\"font-bold text-[#002147] mb-1\">For Enterprises</h4>
                  <p className=\"text-sm text-gray-600\">Explore private blockchain deployment options</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className=\"bg-gradient-to-br from-[#F4F7F9] to-white rounded-3xl p-8 lg:p-12 border-2 border-[#002147]/10 shadow-2xl\">
            <form onSubmit={handleSubmit} className=\"space-y-6\">
              {/* Name */}
              <div className=\"space-y-2\">
                <Label htmlFor=\"name\" className=\"text-[#002147] font-medium\">
                  Full Name *
                </Label>
                <div className=\"relative\">
                  <User className=\"absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400\" />
                  <Input
                    id=\"name\"
                    name=\"name\"
                    type=\"text\"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className=\"pl-12 h-12 border-2 border-[#002147]/20 focus:border-[#FF9933] transition-colors duration-300\"
                    placeholder=\"Your name\"
                  />
                </div>
              </div>

              {/* Organization */}
              <div className=\"space-y-2\">
                <Label htmlFor=\"organization\" className=\"text-[#002147] font-medium\">
                  Organization *
                </Label>
                <div className=\"relative\">
                  <Building className=\"absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400\" />
                  <Input
                    id=\"organization\"
                    name=\"organization\"
                    type=\"text\"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    className=\"pl-12 h-12 border-2 border-[#002147]/20 focus:border-[#FF9933] transition-colors duration-300\"
                    placeholder=\"Your organization\"
                  />
                </div>
              </div>

              {/* Email */}
              <div className=\"space-y-2\">
                <Label htmlFor=\"email\" className=\"text-[#002147] font-medium\">
                  Email Address *
                </Label>
                <div className=\"relative\">
                  <Mail className=\"absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400\" />
                  <Input
                    id=\"email\"
                    name=\"email\"
                    type=\"email\"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className=\"pl-12 h-12 border-2 border-[#002147]/20 focus:border-[#FF9933] transition-colors duration-300\"
                    placeholder=\"you@organization.gov.in\"
                  />
                </div>
              </div>

              {/* Message */}
              <div className=\"space-y-2\">
                <Label htmlFor=\"message\" className=\"text-[#002147] font-medium\">
                  Message *
                </Label>
                <div className=\"relative\">
                  <MessageSquare className=\"absolute left-3 top-3 w-5 h-5 text-gray-400\" />
                  <Textarea
                    id=\"message\"
                    name=\"message\"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className=\"pl-12 pt-3 border-2 border-[#002147]/20 focus:border-[#FF9933] transition-colors duration-300 resize-none\"
                    placeholder=\"Tell us about your use case...\"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                type=\"submit\"
                className=\"w-full bg-[#002147] hover:bg-[#003366] text-white h-12 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl\"
              >
                <Send className=\"w-5 h-5 mr-2\" />
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
"
Observation: Create successful: /app/frontend/src/components/ContactSection.jsx