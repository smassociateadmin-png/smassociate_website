'use client';

import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  User,
  Activity,
  Zap,
} from 'lucide-react';

export default function ContactHero() {
  const messages = [
    {
      id: 1,
      text: 'How quickly can I get a loan?',
      sender: 'user',
      delay: 0,
    },
    {
      id: 2,
      text: 'We approve in just 5 minutes!',
      sender: 'bot',
      delay: 0.8,
    },
    {
      id: 3,
      text: 'What are the eligibility criteria?',
      sender: 'user',
      delay: 1.6,
    },
    {
      id: 4,
      text: '18+ years, valid ID, and steady income.',
      sender: 'bot',
      delay: 2.4,
    },
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      value: '+91 9790219874, +91 9047007720',
      desc: 'Mon-Sat, 9 AM - 6 PM',
      gradient: 'from-teal-500 to-cyan-500',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'smassociateadmin@gmail.com',
      desc: 'We reply within 2 hours',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: MessageCircle,
      title: 'Chat',
      value: 'Live Chat Support',
      desc: 'Available 24/7',
      gradient: 'from-blue-500 to-slate-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const messageVariants = {
    hidden: (isUser: boolean) => ({
      opacity: 0,
      x: isUser ? 50 : -50,
      scale: 0.8,
    }),
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-amber-950 to-slate-900 overflow-hidden pt-4 pb-2">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-1/3 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-amber-500 to-yellow-500" />
              <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
                Get in Touch
              </span>
              <div className="w-1 h-8 bg-gradient-to-b from-yellow-500 to-amber-500" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              We&apos;re Here to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400">
                Help You
              </span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Have questions? Our expert team is ready to assist you 24/7. Choose your preferred contact method.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Chat Messages */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Chat Container */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm min-h-96 flex flex-col">
              {/* Chat Header */}
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-700/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Support Agent</p>
                    <p className="text-xs text-teal-400 flex items-center gap-1">
                      <Activity className="w-3 h-3" />
                      Online
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-all" />
                  <button className="w-8 h-8 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-all" />
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 space-y-4 mb-6 overflow-y-auto">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    custom={msg.sender === 'user'}
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: msg.delay }}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-3 rounded-2xl ${msg.sender === 'user'
                        ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white'
                        : 'bg-slate-700/50 text-slate-200 border border-slate-600/50'
                        }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                    </div>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.2 }}
                  className="flex gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-teal-500 animate-bounce" />
                  <div className="w-2 h-2 rounded-full bg-teal-500 animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <div className="w-2 h-2 rounded-full bg-teal-500 animate-bounce" style={{ animationDelay: '0.2s' }} />
                </motion.div>
              </div>

              {/* Input */}
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600/50 text-white placeholder-slate-500 outline-none focus:border-teal-500/50 transition-all text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center text-white"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -top-4 right-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-semibold shadow-lg z-20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Chat Now
            </motion.div>
          </motion.div>

          {/* Right - Contact Methods */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all backdrop-blur-sm cursor-pointer overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  <div className="relative flex items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${method.gradient} flex items-center justify-center flex-shrink-0`}
                    >
                      <method.icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <div className="flex-1">
                      <p className="text-slate-300 text-sm font-semibold uppercase tracking-wider">
                        {method.title}
                      </p>
                      <p className="text-white font-bold text-lg mt-2">{method.value}</p>
                      <p className="text-slate-300 text-sm font-medium mt-1">{method.desc}</p>
                    </div>

                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-slate-400 group-hover:text-teal-400 transition-colors"
                    >
                      <Send className="w-5 h-5" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Additional Info */}
            <motion.div
              variants={itemVariants}
              className="space-y-3 pt-6 border-t border-slate-700/50"
            >
              <div className="flex items-center gap-3 text-slate-300">
                <Clock className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <span>Available 24/7 for your queries</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <User className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span>Dedicated account manager for you</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <span>Visit our office in your city</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
