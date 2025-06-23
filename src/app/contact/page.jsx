"use client";

import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaYoutube, FaTwitter } from 'react-icons/fa';
import {
  Mail, Phone, MapPin, Send, MessageCircle,
  Clock, CheckCircle, GraduationCap, BookOpen, Users
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const { theme } = useTheme();

  const classes = {
    light: {
      bg: 'bg-gradient-to-br from-slate-50 via-white to-blue-50/20',
      text: 'text-slate-900',
      subText: 'text-slate-600',
      muted: 'text-slate-500',
      inputBg: 'bg-white',
      inputBorder: 'border-slate-300',
      placeholder: 'placeholder-slate-400',
      inputText: 'text-slate-900',
      cardBg: 'bg-white/90',
      border: 'border-slate-200',
      heading: 'text-slate-900',
      successBg: 'bg-green-50',
      successBorder: 'border-green-200',
      successText: 'text-green-700',
      primary: 'bg-blue-600',
      primaryHover: 'hover:bg-blue-700',
      focusRing: 'focus:ring-blue-500',
      socialBg: 'bg-slate-100',
      socialHover: 'hover:bg-slate-200',
      socialText: 'text-slate-700',
      accent: 'text-blue-600',
      iconBg: 'bg-blue-600',
    },
    dark: {
      bg: 'bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800',
      text: 'text-slate-100',
      subText: 'text-slate-300',
      muted: 'text-slate-400',
      inputBg: 'bg-slate-800',
      inputBorder: 'border-slate-600',
      placeholder: 'placeholder-slate-400',
      inputText: 'text-slate-100',
      cardBg: 'bg-slate-800/90',
      border: 'border-slate-700',
      heading: 'text-slate-100',
      successBg: 'bg-green-900/20',
      successBorder: 'border-green-700',
      successText: 'text-green-300',
      primary: 'bg-amber-500',
      primaryHover: 'hover:bg-amber-600',
      focusRing: 'focus:ring-amber-400',
      socialBg: 'bg-slate-700',
      socialHover: 'hover:bg-slate-600',
      socialText: 'text-slate-300',
      accent: 'text-amber-400',
      iconBg: 'bg-amber-500',
    }
  }[theme];

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    status: "",
    message: ""
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    if (!formData.email || !formData.message || !formData.name || !formData.subject) {
      setSubmitStatus(prev => ({ ...prev, status: "error", message: "Please fill in all the required fields." }));
      return
    }

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(
        'service_z5cvqp2',
        'template_l844hfg',
        templateParams,
        'R_HfTZcPVfKJL0nhW'
      );
      setSubmitStatus(prev => ({ ...prev, status: "success", message: "Thanks! I'll get back to you soon." }));
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email sending error:', error);
      setSubmitStatus(prev => ({ ...prev, status: "error", message: "Sorry, there was an issue sending your message. Please try again later." }));
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'himadrikaran516@gmail.com',
      description: 'Best way to reach me'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7585046672',
      description: 'Available evenings & weekends'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'South Dum Dum, Kolkata, West Bengal',
      description: 'Open to remote opportunities'
    }
  ];

  const socialMediaLinks = [
    { icon: FaLinkedin, name: 'LinkedIn', url: 'https://linkedin.com/in/himadrikaran', color: '#0077B5' },
    { icon: FaGithub, name: 'GitHub', url: 'https://github.com/karanhimadri', color: '#181717' },
    { icon: FaYoutube, name: 'YouTube', url: 'https://youtube.com/@himadrikaran', color: '#FF0000' },
    { icon: FaTwitter, name: 'Twitter', url: 'https://twitter.com/himadrikaran', color: '#1DA1F2' },
  ];

  return (
    <div className={`min-h-screen ${classes.bg} transition-colors duration-300`}>
      {/* Header */}
      <div className="py-16 px-4 pt-24 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className={`p-3 ${classes.iconBg} rounded-xl`}>
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className={`text-4xl sm:text-5xl font-bold mb-4 ${classes.text}`}>
          Let's <span className={classes.accent}>Connect</span>
        </h1>
        <p className={`text-xl max-w-2xl mx-auto ${classes.subText}`}>
          I'm always excited to discuss new opportunities, collaborate on projects, or simply chat about technology.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className={`${classes.cardBg} rounded-xl border ${classes.border} p-6 shadow-lg backdrop-blur-sm`}>
          <div className="flex items-center gap-3 mb-6">
            <MessageCircle className={`w-6 h-6 ${classes.accent}`} />
            <h2 className={`text-2xl font-semibold ${classes.heading}`}>Send a Message</h2>
          </div>

          {submitStatus.status === 'success' && (
            <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${classes.successBg} border ${classes.successBorder}`}>
              <CheckCircle className="w-5 h-5 text-green-600" />
              <p className={`${classes.successText}`}>{submitStatus.message}</p>
            </div>
          )}

          {submitStatus.status === 'error' && (
            <div className="mb-6 p-4 rounded-lg flex items-center gap-3 bg-red-50 border border-red-200">
              <CheckCircle className="w-5 h-5 text-red-600" />
              <p className="text-red-700">{submitStatus.message}</p>
            </div>
          )}

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['name', 'email'].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className={`block text-sm font-medium mb-2 ${classes.subText}`}>
                    {field.charAt(0).toUpperCase() + field.slice(1)} *
                  </label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${classes.inputBorder} ${classes.inputBg} ${classes.inputText} ${classes.placeholder} focus:outline-none focus:ring-2 ${classes.focusRing} focus:border-transparent transition-all`}
                    placeholder={field === 'name' ? 'Your name' : 'your.email@example.com'}
                  />
                </div>
              ))}
            </div>

            <div>
              <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${classes.subText}`}>
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-3 rounded-lg border ${classes.inputBorder} ${classes.inputBg} ${classes.inputText} focus:outline-none focus:ring-2 ${classes.focusRing} focus:border-transparent transition-all`}
              >
                <option value="">Select a topic...</option>
                <option value="internship">Internship Opportunity</option>
                <option value="job">Job Opportunity</option>
                <option value="collaboration">Project Collaboration</option>
                <option value="mentorship">Mentorship</option>
                <option value="networking">Networking</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className={`block text-sm font-medium mb-2 ${classes.subText}`}>
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className={`w-full px-4 py-3 resize-none rounded-lg border ${classes.inputBorder} ${classes.inputBg} ${classes.inputText} ${classes.placeholder} focus:outline-none focus:ring-2 ${classes.focusRing} focus:border-transparent transition-all`}
                placeholder="Tell me about the opportunity, project, or how I can help..."
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center gap-2 px-6 py-3 ${classes.primary} ${classes.primaryHover} text-white font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          {/* Contact Methods */}
          <div className={`${classes.cardBg} rounded-xl border ${classes.border} p-6 shadow-lg backdrop-blur-sm`}>
            <h2 className={`text-xl font-semibold mb-4 ${classes.heading}`}>Contact Information</h2>
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`p-3 ${classes.socialBg} rounded-lg`}>
                    <method.icon className={`w-5 h-5 ${classes.accent}`} />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${classes.heading}`}>{method.title}</h3>
                    <p className={`${classes.subText}`}>{method.value}</p>
                    <p className={`${classes.muted} text-sm`}>{method.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className={`${classes.cardBg} rounded-xl border ${classes.border} p-6 shadow-lg backdrop-blur-sm`}>
            <h2 className={`text-xl font-semibold mb-4 ${classes.heading}`}>Connect on Social Media</h2>
            <div className="grid grid-cols-2 gap-3">
              {socialMediaLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-3 ${classes.socialBg} ${classes.socialHover} rounded-lg transition-all duration-200 transform hover:scale-105`}
                >
                  <social.icon className="w-5 h-5" style={{ color: social.color }} />
                  <span className={`${classes.socialText} font-medium`}>{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Response Time */}
          <div className={`${classes.cardBg} rounded-xl border ${classes.border} p-6 shadow-lg backdrop-blur-sm`}>
            <div className="flex items-center gap-3 mb-3">
              <Clock className={`w-5 h-5 ${classes.accent}`} />
              <h2 className={`text-xl font-semibold ${classes.heading}`}>Response Time</h2>
            </div>
            <p className={`${classes.subText}`}>
              I typically respond to messages within 24-48 hours. During busy periods, it might take a bit longer, but I'll always get back to you!
            </p>
          </div>

          {/* Current Status */}
          <div className={`${classes.cardBg} rounded-xl border ${classes.border} p-6 shadow-lg backdrop-blur-sm`}>
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className={`w-5 h-5 ${classes.accent}`} />
              <h2 className={`text-xl font-semibold ${classes.heading}`}>Current Status</h2>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className={classes.subText}>Academic Year</span>
                <span className={`font-medium ${classes.text}`}>Senior (4th Year)</span>
              </div>
              <div className="flex justify-between">
                <span className={classes.subText}>Graduation</span>
                <span className={`font-medium ${classes.text}`}>May 2026</span>
              </div>
              <div className="flex justify-between">
                <span className={classes.subText}>Seeking</span>
                <span className={`font-medium ${classes.text}`}>Full-time Opportunities</span>
              </div>
              <div className="flex justify-between">
                <span className={classes.subText}>Available for</span>
                <span className={`font-medium ${classes.text}`}>Internships & Projects</span>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className={`${classes.cardBg} rounded-xl border ${classes.border} p-6 shadow-lg backdrop-blur-sm`}>
            <div className="flex items-center gap-3 mb-4">
              <Users className={`w-5 h-5 ${classes.accent}`} />
              <h2 className={`text-xl font-semibold ${classes.heading}`}>I'm Interested In</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Web Development', 'Software Engineering', 'Spring Boot', 'Backend Developer', 'Java Developer', 'Startups', 'Internships'].map((interest) => (
                <span
                  key={interest}
                  className={`px-3 py-2 ${classes.socialBg} ${classes.socialText} text-sm rounded-full font-medium`}
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;