import React, { useState } from "react";
import { Search, ChevronLeft, ChevronRight, MoreVertical } from "lucide-react";
import HeaderAdmin from "../Components/HeaderAdmin";
import Sidebar from "../Components/Sidebar";

function Coupons() {
  //   const [searchTerm, setSearchTerm] = useState('');
  // const [filterDate, setFilterDate] = useState('14 Feb 2019');
  // const [paymentStatus, setPaymentStatus] = useState('Payment Status');

  const CouponData = [
    {
      discount: "40%",
      coupontitle: "Summer Sale",
      code: "summer 40",
      startdate: "05 Oct, 2024",
      enddate: "25 Oct, 2024",
      status: "Expired",
    },
    {
      discount: "40%",
      coupontitle: "Summer Sale",
      code: "summer 40",
      startdate: "05 Oct, 2024",
      enddate: "25 Oct, 2024",
      status: "Active",
    },
    {
      discount: "40%",
      coupontitle: "Summer Sale",
      code: "summer 40",
      startdate: "05 Oct, 2024",
      enddate: "25 Oct, 2024",
      status: "Expired",
    },
    {
      discount: "40%",
      coupontitle: "Summer Sale",
      code: "summer 40",
      startdate: "05 Oct, 2024",
      enddate: "25 Oct, 2024",
      status: "Expired",
    },
    {
      discount: "40%",
      coupontitle: "Summer Sale",
      code: "summer 40",
      startdate: "05 Oct, 2024",
      enddate: "25 Oct, 2024",
      status: "Expired",
    },
  ];

  const [menuOpenIndex, setMenuOpenIndex] = useState(null);

  const toggleMenu = (index) => {
    setMenuOpenIndex(menuOpenIndex === index ? null : index);
  };

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState(null);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Left */}
      <div className="w-64 bg-white border-r border-gray-200">
        <Sidebar />
      </div>

      {/* Right Content */}
      <div className="flex-1 flex flex-col">
        {/* Header Top */}
        <div className="w-full">
          <HeaderAdmin />
        </div>
        <div className="min-h-screen bg-gray-50 p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-6">
             <h1 style={{ color: 'black', fontSize: '1.875rem' }}>Coupons</h1>

              {/* Search and Filters */}
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                {/* Search Bar */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search By Coupon code & name"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm font-medium text-gray-700"
                  />
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead className=" bg-blue-100 border-b border-gray-200">
                    <tr>
                      <th className="text-left py-4 px-6 text-sm font-semibold text-black-700">
                        DISCOUNT
                      </th>
                      <th className="text-left py-4 px-6 text-sm font-semibold text-black-700">
                        COUPON TITLE
                      </th>
                      <th className="text-left py-4 px-6 text-sm font-semibold text-black-700">
                        CODE
                      </th>
                      <th className="text-left py-4 px-6 text-sm font-semibold text-black-700">
                        Start Date
                      </th>
                      <th className="text-left py-4 px-6 text-sm font-semibold text-black-700">
                        End Date
                      </th>
                      <th className="text-left py-4 px-6 text-sm font-semibold text-black-700">
                        Status
                      </th>
                      <th className="text-left py-4 px-6 text-sm font-semibold text-black-700">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {CouponData.map((coupon, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="py-4 px-6 text-sm font-semibold text-gray-900">
                          {coupon.discount}
                        </td>
                        <td className="py-4 px-6 text-sm font-semibold text-gray-700">
                          {coupon.coupontitle}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-600">
                          {coupon.code}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-600">
                          {coupon.startdate}
                        </td>
                        <td className="py-4 px-6 text-sm font-semibold text-gray-700">
                          {coupon.enddate}
                        </td>
                        <td className="py-4 px-6 text-sm">
                          <span
                            className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                              coupon.status === "Active"
                                ? "bg-green-100 text-green-700"
                                : coupon.status === "Expired"
                                ? "bg-orange-100 text-orange-700"
                                : "bg-gray-100 text-gray-600" // fallback color
                            }`}
                          >
                            {coupon.status}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex gap-2">
                            <button
                              className="text-blue-600 bg-blue-100 px-3 py-1 rounded text-sm font-medium"
                              onClick={() => {
                                setSelectedCoupon(coupon);
                                setIsEditModalOpen(true);
                              }}
                            >
                              Edit
                            </button>

                            <button className="px-3 py-1 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded">
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden">
                {CouponData.map((coupon, index) => (
                  <div
                    key={index}
                    className="p-4 border-b border-gray-100 last:border-b-0"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="text-sm font-semibold text-gray-900 mb-1">
                          {coupon.discount}
                        </div>
                        <div className="text-sm font-semibold text-gray-700">
                          {coupon.coupontitle}
                        </div>
                      </div>
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${coupon.statusColor}`}
                      >
                        {coupon.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                      <div>
                        <span className="text-gray-500 font-medium">
                          Mobile:{" "}
                        </span>
                        <span className="text-gray-700 font-medium">
                          {coupon.code}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500 font-medium">
                          Date:{" "}
                        </span>
                        <span className="text-gray-700 font-medium">
                          {coupon.startdate}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500 font-medium">
                          Size:{" "}
                        </span>
                        <span className="text-gray-700 font-semibold">
                          {coupon.enddate}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500 font-medium">
                          Amount:{" "}
                        </span>
                        <span className="text-gray-900 font-semibold">
                          {coupon.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-sm font-medium text-blue-700 bg-blue-100 hover:bg-blue-200 px-3 py-1 rounded">
                        Edit
                      </button>
                      <button className="text-sm font-medium text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded">
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                <ChevronLeft className="w-4 h-4" />
                Prev. Page
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Next Page
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isEditModalOpen && selectedCoupon && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-xl p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Edit Coupon</h2>

            {/* Coupon Title */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Coupon Title
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm"
              />
            </div>

            {/* Code & Category */}
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Code</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Category
                </label>
                <select className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm">
                  <option value="">Select</option>
                  <option value="summer">Summer</option>
                  <option value="winter">Winter</option>
                  <option value="festival">Festival</option>
                </select>
              </div>
            </div>

            {/* Start & End Dates */}
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm"
                />
              </div>
            </div>

            {/* Amount & Status */}
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Amount (%)
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Status</label>
                <select
                  className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm"
                >
                  <option value="Active">Active</option>
                  <option value="Expired">Expired</option>
                </select>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Perform update logic here
                  setIsEditModalOpen(false);
                }}
                className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Coupons;
