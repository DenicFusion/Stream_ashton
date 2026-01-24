import React, { useState } from 'react';
import { Button } from './Button';
import { UserData } from '../types';

interface SignupFormProps {
  onSubmit: (data: UserData) => void;
  onBack: () => void;
  initialData?: UserData | null;
}

export const SignupForm: React.FC<SignupFormProps> = ({ onSubmit, onBack, initialData }) => {
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState<UserData>(initialData || {
    name: '',
    username: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Retrieve user from Local Storage
    const storedUserStr = localStorage.getItem('stream_user');
    
    if (!storedUserStr) {
      alert("Credentials not found. Please sign up first.");
      return;
    }

    try {
      const storedUser: UserData = JSON.parse(storedUserStr);
      
      // 2. Validate Credentials
      if (
        (storedUser.username === formData.username || storedUser.email === formData.username) && 
        storedUser.password === formData.password
      ) {
        // Success
        onSubmit(storedUser);
      } else {
        alert("Invalid username or password.");
      }
    } catch (err) {
      console.error(err);
      alert("Error reading user data. Please register again.");
    }
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    if(formData.name && formData.username && formData.email && formData.phone && formData.password) {
        // 1. Save to Local Storage
        const newUser = { ...formData, isActivated: false };
        localStorage.setItem('stream_user', JSON.stringify(newUser));
        
        // 2. Proceed
        onSubmit(newUser);
    } else {
        alert("Please fill in all fields to continue.");
    }
  };

  // Mock "Forgot Password" behavior: Redirect to Signup
  const handleForgotPassword = () => {
    alert("Redirecting to account creation...");
    setIsLoginMode(false);
  };

  return (
    <div className="min-h-screen bg-stream-dark flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 z-0">
          <img src="image1.jpg" className="w-full h-full object-cover opacity-5" alt="Background" />
      </div>
      
      <div className="max-w-md w-full space-y-8 bg-stream-card p-8 rounded-2xl shadow-2xl border border-stream-green/20 relative z-10 transition-all duration-300">
        <div>
          <button onClick={onBack} className="text-gray-400 hover:text-white mb-4 flex items-center gap-2">
            ← Back
          </button>
          <img className="mx-auto h-16 w-16 rounded-full border-2 border-stream-green object-cover" src="logo.jpg" alt="Stream Africa" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            {isLoginMode ? 'Welcome Back' : 'Create your account'}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            {isLoginMode ? 'Login to access your dashboard' : 'Join the movement. Start your earning journey.'}
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={isLoginMode ? handleLogin : handleSignup}>
          <div className="rounded-md shadow-sm space-y-4">
            
            {/* Fields for Signup Only */}
            {!isLoginMode && (
              <>
                <div className="animate-slideDown">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required={!isLoginMode}
                    className="appearance-none relative block w-full px-3 py-3 border border-gray-700 placeholder-gray-500 text-white bg-slate-800 rounded-lg focus:outline-none focus:ring-stream-green focus:border-stream-green sm:text-sm"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}

            {/* Username Field (Used for both) */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">
                {isLoginMode ? 'Username or Email' : 'Username'}
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-3 border border-gray-700 placeholder-gray-500 text-white bg-slate-800 rounded-lg focus:outline-none focus:ring-stream-green focus:border-stream-green sm:text-sm"
                placeholder={isLoginMode ? "username" : "streamer123"}
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            {/* More Signup Fields */}
            {!isLoginMode && (
              <>
                <div className="animate-slideDown" style={{animationDelay: '0.1s'}}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required={!isLoginMode}
                    className="appearance-none relative block w-full px-3 py-3 border border-gray-700 placeholder-gray-500 text-white bg-slate-800 rounded-lg focus:outline-none focus:ring-stream-green focus:border-stream-green sm:text-sm"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="animate-slideDown" style={{animationDelay: '0.2s'}}>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required={!isLoginMode}
                    className="appearance-none relative block w-full px-3 py-3 border border-gray-700 placeholder-gray-500 text-white bg-slate-800 rounded-lg focus:outline-none focus:ring-stream-green focus:border-stream-green sm:text-sm"
                    placeholder="+234..."
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">Password</label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-700 placeholder-gray-500 text-white bg-slate-800 rounded-lg focus:outline-none focus:ring-stream-green focus:border-stream-green sm:text-sm pr-10"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white focus:outline-none"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            {isLoginMode && (
              <div className="flex justify-end">
                 <button 
                   type="button" 
                   onClick={handleForgotPassword}
                   className="text-sm text-stream-green hover:text-emerald-400 font-medium"
                 >
                   Forgotten Password?
                 </button>
              </div>
            )}
          </div>

          <div>
            <Button type="submit" fullWidth>
              {isLoginMode ? 'Login' : 'Proceed to Payment'}
            </Button>
          </div>

          {/* Toggle Login/Signup */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-400">
              {isLoginMode ? "Don't have an account? " : "Already have an account? "}
              <button 
                type="button"
                onClick={() => {
                  setIsLoginMode(!isLoginMode);
                  // Reset password field on toggle for security
                  setFormData(prev => ({ ...prev, password: '' }));
                }}
                className="text-stream-green font-bold hover:underline"
              >
                {isLoginMode ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};