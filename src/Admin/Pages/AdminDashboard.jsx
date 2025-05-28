import React from "react";
import {
  TrendingUp,
  TrendingDown,
  Users,
  Package,
  ShoppingCart,
  DollarSign,
  ChevronDown,
} from "lucide-react";
import Sidebar from "../Components/Sidebar";
import HeaderAdmin from "../Components/HeaderAdmin";
import productImage from "/src/assets/product.jpg";

function AdminDashboard() {
  const statsCards = [
    {
      title: "Total Customers",
      value: "40,689",
      change: "8.5% Up from yesterday",
      trend: "up",
      icon: Users,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Total Orders",
      value: "10293",
      change: "1.3% Up from past week",
      trend: "up",
      icon: Package,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      title: "Recent Orders",
      value: "10293",
      change: "4.3% Down from yesterday",
      trend: "down",
      icon: ShoppingCart,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      title: "Total Earnings",
      value: "$89,000",
      change: "4.3% Down from yesterday",
      trend: "down",
      icon: DollarSign,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
  ];

  const recentOrders = [
    {
      id: 1,
      productName: "Stylish Crop Top",
      location: "6098 Marjolaine Landing",
      date: "12.09.2019 - 12:53 PM",
      price: 423,
      amount: "$34,295",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-700",
    },
    {
      id: 2,
      productName: "Stylish Crop Top",
      location: "6098 Marjolaine Landing",
      date: "12.09.2019 - 12:53 PM",
      price: 423,
      amount: "$34,295",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-700",
    },
    {
      id: 3,
      productName: "Stylish Crop Top",
      location: "6098 Marjolaine Landing",
      date: "12.09.2019 - 12:53 PM",
      price: 423,
      amount: "$34,295",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-700",
    },
    {
      id: 4,
      productName: "Stylish Crop Top",
      location: "6098 Marjolaine Landing",
      date: "12.09.2019 - 12:53 PM",
      price: 423,
      amount: "$34,295",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-700",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Left */}
      <div className="w-64 bg-white border-r border-gray-200">
        <Sidebar />
      </div>

      {/* Right Content */}
      <div className="flex-1 flex flex-col text-sm">
        {/* Header */}
        <div className="w-full">
          <HeaderAdmin />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 bg-gray-50 space-y-4">
          {/* Title */}
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {statsCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div key={index} className="bg-white rounded p-4 border border-gray-200 text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className={`w-10 h-10 ${card.iconBg} rounded flex items-center justify-center`}
                    >
                      <Icon className={`w-5 h-5 ${card.iconColor}`} />
                    </div>
                  </div>
                  <div className="mb-1">
                    <h3 className="text-xs text-gray-600">{card.title}</h3>
                    <p className="text-lg font-semibold text-gray-900">{card.value}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    {card.trend === "up" ? (
                      <TrendingUp className="w-3 h-3 text-green-500" />
                    ) : (
                      <TrendingDown className="w-3 h-3 text-red-500" />
                    )}
                    <span
                      className={card.trend === "up" ? "text-green-600" : "text-red-600"}
                    >
                      {card.change}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sales Details */}
          <div className="bg-white rounded border border-gray-200 p-4 space-y-2 text-sm">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold text-gray-900 text-base">Sales Details</h2>
              <div className="flex gap-2">
                <button className="flex items-center gap-1 px-2 py-1 text-gray-600 hover:text-gray-900 text-xs">
                  <span>October</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                <button className="flex items-center gap-1 px-2 py-1 text-gray-600 hover:text-gray-900 text-xs">
                  <span>October</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
              </div>
            </div>
            <div className="h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded relative overflow-hidden">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 300">
                <polyline
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  points="50,250 100,200 150,180 200,160 250,140 300,80 350,120 400,100 450,110 500,90 550,100 600,120 650,140 700,130 750,150"
                />
                <polygon
                  fill="url(#gradient)"
                  points="50,250 100,200 150,180 200,160 250,140 300,80 350,120 400,100 450,110 500,90 550,100 600,120 650,140 700,130 750,150 750,300 50,300"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                <circle cx="300" cy="80" r="4" fill="#3B82F6" />
                <rect x="270" y="50" width="60" height="18" fill="#3B82F6" rx="4" />
                <text x="300" y="63" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">
                  $1,659,437
                </text>
              </svg>
              <div className="absolute bottom-3 left-0 right-0 flex justify-between px-6 text-[10px] text-gray-500">
                <span>5k</span>
                <span>10k</span>
                <span>15k</span>
                <span>20k</span>
                <span>25k</span>
                <span>30k</span>
                <span>35k</span>
                <span>40k</span>
                <span>45k</span>
                <span>50k</span>
                <span>55k</span>
                <span>60k</span>
              </div>
              <div className="absolute left-2 top-4 bottom-4 flex flex-col justify-between text-[10px] text-gray-500">
                <span>100k</span>
                <span>80k</span>
                <span>60k</span>
                <span>40k</span>
                <span>20k</span>
                <span>0</span>
              </div>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded border border-gray-200 text-sm">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="font-semibold text-gray-900 text-base">Recent Orders</h2>
              <button className="flex items-center gap-1 px-2 py-1 text-gray-600 hover:text-gray-900 text-xs">
                <span>October</span>
                <ChevronDown className="w-3 h-3" />
              </button>
            </div>
            <div className="grid grid-cols-6 gap-2 p-4 bg-gray-50 font-semibold text-gray-700 text-xs">
              <div>Product Name</div>
              <div>Location</div>
              <div>Date - Time</div>
              <div>Piece</div>
              <div>Amount</div>
              <div>Status</div>
            </div>
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="grid grid-cols-6 gap-2 p-4 border-t border-gray-100 items-center"
              >
                <div className="flex items-center gap-2">
                  <img
  src={productImage}
  alt={order.productName}
  className="w-8 h-8 object-cover rounded"
/>
                  <span className="text-xs font-medium text-gray-900">{order.productName}</span>
                </div>
                <div className="text-xs text-gray-600">{order.location}</div>
                <div className="text-xs text-gray-600">{order.date}</div>
                <div className="text-xs font-semibold text-gray-900">{order.price}</div>
                <div className="text-xs font-semibold text-gray-900">{order.amount}</div>
                <div>
                  <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-semibold ${order.statusColor}`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
