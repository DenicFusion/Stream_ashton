import React, { useState } from "react";
import { FaTachometerAlt, FaBoxOpen, FaUsers, FaDiamond, FaListAlt, FaTicketAlt, FaWallet, FaGift, FaStore, FaPuzzlePiece, FaCog } from "react-icons/fa";

const mockUser = {
  name: "STREAM AFRICA",
  premium: true,
  country: "NG",
  profilePic: "/placeholder-avatar.png",
  balance: 12000,
  currency: "NGN",
};

export default function Dashboard() {
  const [showActivate, setShowActivate] = useState(true);

  return (
    <div className="flex min-h-screen bg-[#FFFCEA] font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-[#f5f4e9] border-r border-green-800/10 flex flex-col py-6 px-2 min-h-screen">
        <div className="flex items-center mb-8 px-4">
          <span className="text-2xl font-bold text-[#214433] mr-2">
            {/* Logo (SVG or Image) */}
            <svg className="inline w-7 h-7" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="11" stroke="#185A44" strokeWidth={2}/>
              <path d="M7 10h10M7 14h10" stroke="#185A44" strokeWidth={2}/>
            </svg>
          </span>
          <span className="text-xl font-bold text-[#214433]">Stream</span>
        </div>
        <nav className="flex flex-col gap-2">
          <SidebarItem icon={<FaTachometerAlt />} label="Dashboard" active />
          <SidebarItem icon={<FaBoxOpen />} label="Stream Box" />
          <SidebarItem icon={<FaUsers />} label="Stream Partners" />
          <SidebarItem icon={<FaDiamond />} label="Tiktok Creators Network" />
          <SidebarItem icon={<FaListAlt />} label="Income Log" />
          <SidebarItem icon={<FaTicketAlt />} label="StreamPass" />
          <SidebarItem icon={<FaWallet />} label="Withdrawal" />
          <SidebarItem icon={<FaGift />} label="WishHub" />
          <SidebarItem icon={<FaStore />} label="Marketplace" />
          <SidebarItem icon={<FaPuzzlePiece />} label="Skills Centre" />
          <SidebarItem icon={<FaCog />} label="Settings" />
        </nav>
        <div className="mt-auto text-[11px] text-gray-400 px-4 py-2 flex items-center gap-1">
          <span className="bg-[#d1ede7] px-2 rounded-lg text-green-900">streamafrica.org</span>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 min-h-screen">
        {/* Top Bar */}
        <header className="bg-[#FFFCEA] flex justify-between items-center border-b border-green-900/5 px-8 py-5">
          <div>
            <div className="text-xs text-[#12402e] font-regular">Dashboard</div>
            <div className="text-lg font-semibold text-[#233c23]">Welcome {mockUser.name}</div>
          </div>
          <div className="flex items-center gap-4">
            {/* Picture */}
            <div className="rounded-full w-10 h-10 bg-gray-300 border overflow-hidden">
              {/* Placeholder picture */}
              <img
                src={mockUser.profilePic}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Badge */}
            <div className="flex items-center gap-1 bg-[#e8faf4] text-[#167554] px-3 py-1 rounded-md text-xs font-bold">
              <span className="fi fi-ng rounded"></span>
              PREMIUM
            </div>
            <select className="text-[#214433] text-xs bg-transparent focus:outline-none">
              <option>USD</option>
              <option>NGN</option>
            </select>
            <button>
              <span className="sr-only">Menu</span>
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#2e4c36]">
                <rect x="4" y="7" width="16" height="2" fill="currentColor"/>
                <rect x="4" y="15" width="16" height="2" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </header>

        {/* Balance and earnings cards */}
        <div className="p-8 pt-6 space-y-8">
          {/* Earnings Card Stack */}
          <div className="relative w-full max-w-lg mx-auto">
            <div className="absolute left-0 right-0 top-0 z-0 translate-y-2">
              <div className="rounded-xl bg-[#ede8cd] shadow px-6 py-2 text-[#897025] font-bold text-sm w-4/5 mx-auto mb-1">
                COLLABORATION EARNINGS &nbsp; <span className="float-right">$17.90</span>
              </div>
              <div className="rounded-xl bg-[#e6edfa] shadow px-6 py-2 text-[#4174b2] font-bold text-sm w-11/12 mx-auto mb-1">
                PARTNER EARNINGS &nbsp; <span className="float-right">$1070.00</span>
              </div>
            </div>
            <div className="relative bg-[#274932] text-white rounded-2xl p-7 z-10 shadow-xl mt-12">
              <div className="text-xs opacity-75 mb-1">TOTAL STREAM INCOME</div>
              <div className="text-3xl font-bold mb-2">${mockUser.balance.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
              <div className="flex gap-3">
                <StatusBadge color="yellow">Demo Mode</StatusBadge>
                <span className="bg-green-800/10 text-green-700 text-xs px-3 py-1 rounded-full">Unactivated</span>
              </div>
            </div>
          </div>

          {/* Music player mock */}
          <div className="rounded-xl bg-gradient-to-br from-green-200/80 to-green-500/90 p-6 flex items-center gap-5 max-w-lg mx-auto shadow border border-green-200">
            <img src="/spotify-album.jpg" alt="album" className="w-16 h-16 rounded shadow-lg border" />
            <div className="flex-1">
              <div className="text-xs text-green-800">Spotify</div>
              <div className="text-lg font-bold text-green-900 leading-tight">Awake</div>
              <div className="text-green-800 text-sm">Snoop Dogg</div>
              <div className="flex items-center gap-2 mt-2">
                <div className="h-2 w-28 bg-green-300 rounded-full overflow-hidden">
                  <div className="h-full bg-green-700" style={{width: "40%"}}></div>
                </div>
                <span className="text-xs text-green-900">01:34 / 03:04</span>
                <button>
                  <svg className="w-5 h-5 text-green-800" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <polygon points="10,8 16,12 10,16" fill="currentColor"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Call to action - Activate Modal */}
          {showActivate && (
            <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
              <div className="bg-white rounded-2xl shadow-xl w-full max-w-xs p-8 border border-yellow-300 text-center relative">
                <div className="absolute top-3 right-4 text-gray-500 cursor-pointer text-2xl" onClick={()=>setShowActivate(false)}>
                  ×
                </div>
                <div className="mx-auto w-14 h-14 bg-yellow-200 flex items-center justify-center rounded-full text-yellow-600 text-3xl mb-4 shadow-inner">
                  <FaWallet />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#233c23]">Activate Your Account</h3>
                <p className="mb-6 text-gray-700 text-sm">
                  You are currently in <b>Demo Mode</b>.<br />
                  To withdraw your <b>₦12,000</b> cashbox and unlock earning features, please activate your account.
                </p>
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg py-3 shadow font-bold text-base">
                  Activate Now - ₦12,000
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, active }: {icon: React.ReactNode, label: string, active?:boolean}) {
  return (
    <div className={`flex items-center gap-3 px-5 py-2 rounded-lg cursor-pointer ${active ? "bg-[#31522e]/20 font-bold text-[#244727]" : "text-[#273c2e] hover:bg-[#e3fcd2]"}`}>
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

function StatusBadge({color, children}:{color:"yellow"|"green", children:React.ReactNode}) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
      ${color==="yellow"?"bg-yellow-100 text-yellow-700":"bg-green-100 text-green-700"}`}>
      {children}
    </span>
  );
}
