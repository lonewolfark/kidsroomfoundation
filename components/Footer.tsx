'use client'

import { Heart, Github, Twitter, MessageCircle, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="text-xl font-bold text-white">
                Kids Room Foundation
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              Building a transparent future for charitable giving. Every crypto 
              donation is tracked on the blockchain, ensuring your contribution 
              reaches children in need.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: MessageCircle, href: '#', label: 'Discord' },
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Mail, href: 'mailto:hello@kidsroomfoundation.com', label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Donate', href: '#donate' },
                { name: 'Impact', href: '#impact' },
                { name: 'About', href: '#about' },
                { name: 'Transparency Report', href: '#' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {[
                { name: 'How to Donate Crypto', href: '#' },
                { name: 'Tax Information', href: '#' },
                { name: 'FAQ', href: '#' },
                { name: 'Partnerships', href: '#' },
                { name: 'Contact Us', href: '#' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © 2024 Kids Room Foundation. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
