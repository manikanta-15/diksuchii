import React from 'react';
import { Mail, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-gray-300 mb-8">
            I'm always interested in hearing about new opportunities and collaborations.
            Feel free to reach out!
          </p>
          <div className="space-y-4">
            <a
              href="mailto:vmanu0029@gmail.com"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5" />
              vmanu0029@gmail.com
            </a>
            <div className="flex items-center justify-center gap-2 text-gray-300">
              <Phone className="w-5 h-5" />
              <span>+91 8008034615</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}