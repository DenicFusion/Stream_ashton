import React from 'react';
import { Button } from './Button';

export const Hero: React.FC<{ onSignup: () => void }> = ({ onSignup }) => {
  return (
    <div className="relative overflow-hidden bg-stream-dark pt-24 pb-20 sm:pb-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-stream-dark to-slate-900"></div>
        <img 
          src="image1.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stream-dark via-transparent to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-stream-green mr-3 animate-pulse"></span>
          <span className="text-gray-300 text-sm font-medium tracking-wide uppercase">The Wait Is Over</span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
          Life in Motion. <br />
          <span className="text-stream-green">
            Income in Continuous Flow.
          </span>
        </h1>
        
        <p className="mt-2 max-w-2xl text-xl text-gray-400 mb-10 leading-relaxed">
          This is more than a brand. This is the movement redefining the digital economy in 2026. 
          Welcome to the future. Welcome to Stream Africa.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
          <Button onClick={onSignup} className="text-lg px-10 py-4 shadow-emerald-500/20">
            Start Earning Now
          </Button>
          <Button variant="outline" onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})} className="text-lg px-10 py-4">
            Learn More
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4 w-full max-w-5xl border-t border-white/5 pt-12">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">CAC Verified</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">Fully Registered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">Global Access</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">No Borders</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">Daily Flow</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">Continuous Earnings</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">Secure</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">Trusted Platform</div>
          </div>
        </div>
      </div>
    </div>
  );
};