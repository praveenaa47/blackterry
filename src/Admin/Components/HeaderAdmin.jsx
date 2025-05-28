import React, { useState } from 'react'
import { Search, Bell, ChevronDown } from 'lucide-react';

function HeaderAdmin() {
    const [searchQuery, setSearchQuery] = useState('');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  return (
<header className="bg-white border-b border-gray-200 px-6 py-4 fixed top-0 left-64 right-0 z-30">
        <div className="flex items-center justify-between">
        {/* Search Bar */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>
        </div>

        {/* Right Side Items */}
        <div className="flex items-center gap-4">
          {/* Notification Bell */}
          <div className="relative">
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
            </button>
          
          </div>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="w-5 h-3 bg-gradient-to-r from-blue-500 via-white to-red-500 rounded-sm border border-gray-200"></div>
              <span className="text-sm font-medium">English</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* Language Dropdown */}
            {isLanguageOpen && (
              <>
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setIsLanguageOpen(false)}
                ></div>
                <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 min-w-[120px]">
                  <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors flex items-center gap-2">
                    <div className="w-4 h-3 bg-gradient-to-r from-blue-500 via-white to-red-500 rounded-sm border border-gray-200"></div>
                    English
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors flex items-center gap-2">
                    <div className="w-4 h-3 bg-gradient-to-r from-green-500 via-white to-red-500 rounded-sm border border-gray-200"></div>
                    Hindi
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">MR</span>
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-gray-900">Moni Roy</div>
                <div className="text-xs text-gray-500">Admin</div>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>

            {/* Profile Dropdown Menu */}
            {isProfileOpen && (
              <>
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setIsProfileOpen(false)}
                ></div>
                <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 min-w-[160px]">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="text-sm font-semibold text-gray-900">Moni Roy</div>
                    <div className="text-xs text-gray-500">Admin</div>
                  </div>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                    Profile Settings
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                    Account Settings
                  </button>
                  <hr className="border-gray-100" />
                  <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50 transition-colors">
                    Sign Out
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderAdmin
