import React, { useState, useEffect } from 'react';
import { UserData } from '../types';
import { THEME_COLOR } from '../config';

// Mocking some components for the demo
const Button = ({ children, onClick, className }: any) => (
  <button onClick={onClick} className={`w-full py-4 rounded-xl font-bold transition-all active:scale-95 ${className}`}>
    {children}
  </button>
);

export const StreamDashboard: React.FC<{ userData: UserData }> = ({ userData }) => {
  const [showModal, setShowModal] = useState(false);
  const [balance, setBalance] = useState(12000.00); // The 12k "Cashbox" you mentioned

  // Trigger modal after 3 seconds for the "New Account" experience
  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleAction = () => setShowModal(true);

  return (
    <div className="min-h-screen bg-[#F9F7E8] font-sans pb-10">
      {/* Header - Matching Screenshot 2 */}
      <header className="p-6 flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#2D433D] rounded-md flex items-center justify-center">
              <span className="text-white text-xs">S</span>
            </div>
            <h1 className="text-[#2D433D] text-2xl font-bold tracking-tight">Stream</h1>
          </div>
          <div className="mt-6">
            <h2 className="text-[#2D433D] text-lg font-semibold">Dashboard</h2>
            <p className="text-gray-500 text-sm">Welcome {userData.username}</p>
          </div>
        </div>
        
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-2">
             <div className="text-right">
                <div className="flex items-center gap-1 justify-end">
                    <span className="text-[10px] font-bold text-gray-500 uppercase">Premium</span>
                    <img src="https://flagcdn.com/w20/ng.png" alt="NG" className="w-4 h-3" />
                </div>
                <p className="text-[#2D433D] font-bold text-sm">USD ↕</p>
             </div>
             <img 
               src={userData.avatar || "https://i.imgur.com/8Km9tLL.png"} 
               className="w-12 h-12 rounded-full border-2 border-white shadow-sm" 
               alt="profile" 
             />
          </div>
        </div>
      </header>

      {/* Main Wallet Section - Matching Screenshot 1 & 2 */}
      <main className="px-6 space-y-6">
        <div className="relative pt-10">
          {/* Stacked Cards Effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-16 bg-[#A18C55] rounded-t-2xl opacity-90 flex justify-between px-4 pt-2 text-white text-[10px] font-bold">
            <span>COLLABORATION EARNINGS</span>
            <span>$0.00</span>
          </div>
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[92%] h-16 bg-[#7B8FA1] rounded-t-2xl shadow-sm flex justify-between px-4 pt-2 text-white text-[10px] font-bold">
            <span>PARTNER EARNINGS</span>
            <span>$0.00</span>
          </div>

          {/* Main Total Income Card */}
          <div className="relative z-10 bg-[#1D2B28] rounded-3xl p-8 shadow-2xl">
            <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">Total Stream Income</p>
            <h3 className="text-white text-4xl font-black mb-8">₦{balance.toLocaleString()}.00</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={handleAction}
                className="bg-[#2D433D] text-white py-3 rounded-xl border border-gray-600 font-bold hover:bg-[#3d5a52] transition-colors"
              >
                Withdraw
              </button>
              <button 
                onClick={handleAction}
                className="bg-white text-[#1D2B28] py-3 rounded-xl font-bold shadow-lg"
              >
                Activate
              </button>
            </div>
          </div>
        </div>

        {/* Music Feed Mock (Screenshot 2 bottom) */}
        <div className="bg-[#2D433D] rounded-2xl p-4 flex items-center gap-4 relative overflow-hidden">
             <div className="w-16 h-16 bg-green-900 rounded-lg flex-shrink-0">
                <img src="https://i.scdn.co/image/ab67616d0000b2737604471018c14f8a3e75e92a" className="rounded-lg" alt="album" />
             </div>
             <div className="flex-1">
                <p className="text-white font-bold">Awake</p>
                <p className="text-gray-400 text-xs">Snoop Dogg</p>
                <div className="w-full bg-gray-700 h-1 mt-3 rounded-full overflow-hidden">
                    <div className="bg-green-400 w-1/3 h-full"></div>
                </div>
             </div>
             <div className="text-white">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
             </div>
        </div>
      </main>

      {/* Activation Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>
          <div className="relative bg-white rounded-[32px] p-8 w-full max-w-sm text-center animate-in zoom-in duration-300">
             <div className="w-20 h-20 bg-[#F9F7E8] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🔐</span>
             </div>
             <h2 className="text-[#1D2B28] text-2xl font-black mb-4">Activation Required</h2>
             <p className="text-gray-600 mb-8 leading-relaxed">
                You have a pending <strong>₦12,000.00</strong> in your cashbox. To enable withdrawals and full access, please pay the one-time lifetime activation fee.
             </p>
             <Button 
               className="bg-[#1D2B28] text-white shadow-xl shadow-gray-300"
               onClick={() => alert("Redirecting to payment...")}
             >
               Pay ₦12,000 Now
             </Button>
             <button 
               onClick={() => setShowModal(false)}
               className="mt-4 text-gray-400 font-bold text-sm"
             >
               Dismiss
             </button>
          </div>
        </div>
      )}
    </div>
  );
};
