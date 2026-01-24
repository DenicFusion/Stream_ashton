import React from 'react';

interface CustomAlertProps {
  isOpen: boolean;
  title: string;
  message: string;
  onClose: () => void;
  type?: 'success' | 'error' | 'info';
}

export const CustomAlert: React.FC<CustomAlertProps> = ({ isOpen, title, message, onClose, type = 'info' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-[#1e293b] border border-white/10 rounded-2xl p-6 max-w-sm w-full shadow-2xl transform transition-all animate-in fade-in zoom-in duration-200">
        <div className="flex flex-col items-center text-center">
            {/* Icon based on type */}
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                type === 'error' ? 'bg-red-500/10 text-red-500' : 
                type === 'success' ? 'bg-emerald-500/10 text-emerald-500' : 
                'bg-blue-500/10 text-blue-500'
            }`}>
                {type === 'error' && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                )}
                {type === 'success' && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                )}
                {type === 'info' && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                )}
            </div>

            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">{message}</p>
            
            <button 
                onClick={onClose}
                className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-colors border border-white/5"
            >
                OK
            </button>
        </div>
      </div>
    </div>
  );
};