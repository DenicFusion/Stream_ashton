import React, { useState, useEffect } from 'react';

// --- Simplified Mock Types (So you don't get import errors) ---
interface LocalUserData {
  username: string;
  name: string;
  avatar?: string;
}

export const NewUserDashboard = () => {
  // 1. State Management
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [balance] = useState(12000.00); // Your 12k Cashbox Logic
  
  const userData: LocalUserData = {
    username: "STREAM AFRICA",
    name: "Stream User",
    avatar: "https://i.imgur.com/8Km9tLL.png" // Replace with your actual path
  };

  // 2. Auto-trigger the Activation Modal
  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  // 3. Helper Components for Scannability
  const SidebarLink = ({ label, icon, isActive = false }: any) => (
    <div className={`flex items-center gap-4 p-4 rounded-r-none ${isActive ? 'bg-[#1D2B28] text-white' : 'text-gray-500'}`}>
      <span className="text-xl">{icon}</span>
      <span className="font-semibold text-sm">{label}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F9F7E8] font-sans relative overflow-x-hidden">
      
      {/* --- SIDEBAR (Screenshot 1) --- */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-[#F9F7E8] z-50 transform transition-transform duration-300 border-r border-gray-200 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-10">
            <div className="w-8 h-8 bg-[#2D433D] rounded-md flex items-center justify-center text-white">S</div>
            <h1 className="text-[#2D433D] text-2xl font-bold">Stream</h1>
          </div>
          <div className="space-y-1">
            <SidebarLink label="Dashboard" icon="⊞" isActive={true} />
            <SidebarLink label="Stream Box" icon="📋" />
            <SidebarLink label="Stream Partners" icon="👥" />
            <SidebarLink label="TikTok Creators" icon="💎" />
            <SidebarLink label="Income Log" icon="📄" />
            <SidebarLink label="Withdrawal" icon="💳" />
          </div>
        </div>
      </div>

      {/* --- HEADER (Screenshot 2) --- */}
      <header className="p-6 flex justify-between items-start">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-[60] text-[#2D433D]">
          {isMenuOpen ? '✕' : '☰'}
        </button>
        
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="flex items-center gap-1 justify-end">
              <span className="text-[9px] font-bold text-gray-500 uppercase tracking-tighter">Premium</span>
              <div className="w-4 h-3 bg-green-700 rounded-sm overflow-hidden flex">
                <div className="w-1/3 h-full bg-green-600"></div>
                <div className="w-1/3 h-full bg-white"></div>
                <div className="w-1/3 h-full bg-green-600"></div>
              </div>
            </div>
            <p className="text-[#2D433D] font-bold text-sm">USD ↕</p>
          </div>
          <img src={userData.avatar} className="w-12 h-12 rounded-full border-2 border-white shadow-md" alt="profile" />
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="px-6">
        <div className="mb-8">
          <h2 className="text-[#2D433D] text-xl font-bold">Dashboard</h2>
          <p className="text-gray-400 text-sm">Welcome {userData.username}</p>
        </div>

        {/* --- CASHBOX CARDS --- */}
        <div className="relative pt-12">
          {/* Card Stack effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-20 bg-[#B5A169] rounded-t-3xl opacity-80 px-5 pt-3 flex justify-between text-white text-[10px] font-bold">
            <span>COLLABORATION EARNINGS</span>
            <span>$17.90</span>
          </div>
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[92%] h-20 bg-[#8FA1B3] rounded-t-3xl shadow-sm px-5 pt-3 flex justify-between text-white text-[10px] font-bold">
            <span>PARTNER EARNINGS</span>
            <span>$1070.00</span>
          </div>

          {/* Main Wallet Card */}
          <div className="relative z-10 bg-[#1D2B28] rounded-[32px] p-8 shadow-2xl">
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-2">Total Stream Income</p>
            <h3 className="text-white text-4xl font-black mb-10">₦{balance.toLocaleString()}.00</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <button onClick={() => setShowModal(true)} className="bg-[#2D433D] text-white py-3.5 rounded-2xl font-bold border border-gray-700 active:scale-95 transition-all">
                Withdraw
              </button>
              <button onClick={() => setShowModal(true)} className="bg-white text-[#1D2B28] py-3.5 rounded-2xl font-bold shadow-xl active:scale-95 transition-all">
                Activate
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* --- ACTIVATION MODAL (The Paywall) --- */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-[#1D2B28]/90 backdrop-blur-md"></div>
          <div className="relative bg-[#F9F7E8] rounded-[40px] p-8 w-full max-w-sm text-center shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 bg-[#1D2B28] rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
              🔓
            </div>
            <h2 className="text-[#1D2B28] text-2xl font-black mb-3">Locked Cashbox</h2>
            <p className="text-gray-600 text-sm mb-8">
              We've credited your account with <strong>₦12,000.00</strong> registration bonus! 
              Complete your one-time lifetime activation to withdraw these funds instantly.
            </p>
            <button 
              className="w-full bg-[#1D2B28] text-white py-4 rounded-2xl font-bold shadow-lg shadow-black/20"
              onClick={() => window.location.href = '/pay'} // Replace with your link
            >
              Activate Now - ₦12,000
            </button>
            <button onClick={() => setShowModal(false)} className="mt-4 text-gray-400 text-xs font-bold uppercase tracking-widest">
              Maybe Later
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
