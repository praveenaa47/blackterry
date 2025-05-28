import React from 'react'
import { 
  LayoutDashboard, 
  Package, 
  Megaphone, 
  FileText, 
  Tag, 
  Users, 
  Receipt 
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();

    const menuItems = [
    {
      name: 'Dashboard',
      icon: LayoutDashboard,
      path: '/admin/dashboard'
    },
    {
      name: 'Products',
      icon: Package,
      path: '/admin/product'
    },
    {
      name: 'Advertisement',
      icon: Megaphone,
      path: '/admin/advertisement'
    },
     {
      name: 'Subcategory',
      icon: Receipt,
      path: '/admin/subcategory'
    },
    {
      name: 'Order List',
      icon: FileText,
      path: '/admin/orderlist'
    },
    {
      name: 'Coupons',
      icon: Tag,
      path: '/admin/coupons'
    },
    {
      name: 'Users List',
      icon: Users,
      path: '/admin/userlist'
    },
    {
      name: 'Invoice',
      icon: Receipt,
      path: '/admin/invoice'
    },
   
  ];

  return (
<div className="w-64 bg-white shadow-sm h-screen fixed top-0 left-0 z-40 overflow-y-auto">
        {/* Logo */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center">
          <div className="flex items-center ms-4 mt-3 justify-end">
            <span className="text-black font-bold text-2xl">BLACKTERRY</span>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="mt-8">
        <ul className="space-y-2 px-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
const isActive = location.pathname === item.path;            
            return (
             <li key={item.name}>
 <Link
  to={item.path}
  style={{textDecoration:"none"}}
  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 no-underline ${
    isActive
      ? 'bg-amber-900 text-white shadow-sm'
      : 'text-black font-semibold hover:bg-gray-50'
  }`}
>
  <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-500'}`} />
  <span className="text-sm">{item.name}</span>
</Link>
</li>
            );
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
