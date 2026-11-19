import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, ExternalLink, Github, Linkedin, Send, Sparkles, MessageSquare, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SectionHeading } from '../components/SectionHeading';
import { personalData } from '../data/personal';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'needs-activation' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.socials.email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#527BFF', '#FF827A', '#A78BFA']
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setStatusMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalData.socials.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `Portfolio Message from ${formData.name}: ${formData.subject || 'New Contact'}`,
          message: formData.message,
          _replyto: formData.email,
          _captcha: 'false',
          _template: 'table'
        })
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success !== 'false') {
        setStatus('success');
        setStatusMessage('Your message has been sent directly to Jayakrishna\'s inbox!');
        confetti({
          particleCount: 70,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#527BFF', '#FF827A', '#A78BFA', '#10B981']
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else if (result?.message && result.message.toLowerCase().includes('activation')) {
        // FormSubmit first-time activation notification
        setStatus('needs-activation');
        setStatusMessage(
          'Email service connected! A one-time activation email was sent to Jayakrishna\'s inbox (jayakrishnamanikandan51@gmail.com). Once confirmed, all future messages route straight to inbox.'
        );
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      } else {
        // Fallback: trigger direct mailto or show error with direct Gmail button
        setStatus('error');
        setStatusMessage(result?.message || 'Could not send directly via API. You can still send via Gmail Web or mail client below.');
      }
    } catch {
      setStatus('error');
      setStatusMessage('Network request failed. You can use the direct Gmail button below to send your message instantly.');
    }
  };

  const getGmailWebUrl = () => {
    const su = encodeURIComponent(formData.subject || `Message from ${formData.name || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${personalData.socials.email}&su=${su}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-ivory relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-electric/10 via-lavender/10 to-coral/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          number="07"
          tag="GET IN TOUCH"
          title="Have an idea? Let's build something meaningful."
          subtitle="Whether you'd like to discuss software engineering, AI exploration, collaborate on a project, or just say hello."
          accent="blue"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Contact & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Copy Email Spotlight Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-electric/30 shadow-soft-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-electric-light flex items-center justify-center text-electric">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-electric block">
                    Direct Email
                  </span>
                  <span className="text-xs text-ink-muted">Always open for inquiries</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-ivory border border-ink/10 flex items-center justify-between gap-3">
                <span className="text-xs sm:text-sm font-mono font-semibold text-ink truncate">
                  {personalData.socials.email}
                </span>
                
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white hover:bg-slate-50 text-ink border border-ink/15 shadow-soft flex items-center gap-1.5 transition-colors flex-shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-electric" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                <a
                  href={`mailto:${personalData.socials.email}`}
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-xs font-semibold bg-electric hover:bg-electric-hover text-white transition-all shadow-soft hover:shadow-glow-blue"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Mail Client</span>
                </a>

                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalData.socials.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-xs font-semibold bg-white hover:bg-slate-50 text-ink border border-ink/15 transition-all shadow-soft"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-coral" />
                  <span>Gmail Web</span>
                </a>
              </div>
            </motion.div>

            {/* Social Profiles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* GitHub */}
              <motion.a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-5 rounded-3xl bg-white border border-ink/10 shadow-soft hover:shadow-soft-lg hover:border-electric/40 transition-all duration-300 group flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-ivory flex items-center justify-center text-ink group-hover:text-electric transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-ink-muted uppercase block">GitHub</span>
                    <span className="text-sm font-bold text-ink">Jayakrishna-2007</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-ink-muted group-hover:text-electric transition-colors" />
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-5 rounded-3xl bg-white border border-ink/10 shadow-soft hover:shadow-soft-lg hover:border-coral/40 transition-all duration-300 group flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-ivory flex items-center justify-center text-ink group-hover:text-coral transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-ink-muted uppercase block">LinkedIn</span>
                    <span className="text-sm font-bold text-ink">Jayakrishna M</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-ink-muted group-hover:text-coral transition-colors" />
              </motion.a>
            </div>

            {/* Quick status notice */}
            <div className="p-4 rounded-2xl bg-white border border-ink/10 text-xs text-ink-muted space-y-1">
              <div className="flex items-center gap-2 text-ink font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-lavender" />
                <span>Response Time:</span>
              </div>
              <p>Typically replies within 24–48 hours for academic, technical, or project inquiries.</p>
            </div>

          </div>

          {/* Right Column: Real Email Message Dispatcher */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-ink/10 shadow-soft-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-electric" />
                  <h3 className="text-xl font-heading font-extrabold text-ink">
                    Compose Message
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Direct to Inbox
                </span>
              </div>

              {/* Status Alert Banners */}
              {status === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-sm">Message Delivered!</span>
                    <p className="mt-0.5 leading-relaxed">{statusMessage}</p>
                  </div>
                </div>
              )}

              {status === 'needs-activation' && (
                <div className="mb-6 p-4 rounded-2xl bg-blue-50 border border-electric/30 text-ink text-xs flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-electric flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-sm text-electric">Activation Email Sent!</span>
                    <p className="mt-0.5 text-ink-muted leading-relaxed">{statusMessage}</p>
                    <a
                      href="https://mail.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-electric text-white text-[11px] font-semibold hover:bg-electric-hover transition-colors"
                    >
                      <span>Check Gmail Inbox</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-2xl bg-coral-light/60 border border-coral/30 text-ink text-xs flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
                  <div className="space-y-2 flex-grow">
                    <span className="font-bold block text-sm text-coral">Notice</span>
                    <p className="leading-relaxed text-ink-muted">{statusMessage}</p>
                    <a
                      href={getGmailWebUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-coral hover:bg-coral-hover text-white text-xs font-semibold transition-colors"
                    >
                      <Send className="w-3 h-3" />
                      <span>Send with Gmail Web Tab</span>
                    </a>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono font-medium text-ink-muted mb-1.5 uppercase">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. JK"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-ivory border border-ink/10 text-sm text-ink focus:outline-none focus:border-electric transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono font-medium text-ink-muted mb-1.5 uppercase">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. sender@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-ivory border border-ink/10 text-sm text-ink focus:outline-none focus:border-electric transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono font-medium text-ink-muted mb-1.5 uppercase">
                    Subject / Discussion Topic
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    placeholder="e.g. Collab / Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-ivory border border-ink/10 text-sm text-ink focus:outline-none focus:border-electric transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono font-medium text-ink-muted mb-1.5 uppercase">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-ivory border border-ink/10 text-sm text-ink focus:outline-none focus:border-electric transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-[11px] font-mono text-ink-muted">
                    Delivered to: <strong className="text-ink">jayakrishnamanikandan51@gmail.com</strong>
                  </span>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <a
                      href={getGmailWebUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-2xl bg-ivory hover:bg-slate-100 text-ink border border-ink/10 text-xs font-semibold transition-colors"
                      title="Open in Gmail Web with these fields pre-filled"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-coral" />
                      <span>Gmail Web</span>
                    </a>

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-electric hover:bg-electric-hover disabled:bg-electric/60 text-white font-semibold text-xs shadow-soft-xl hover:shadow-glow-blue transition-all duration-300"
                    >
                      {status === 'sending' ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
