import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import HeaderAdmin from "../Components/HeaderAdmin";

function UserDetails() {
  const { state } = useLocation();
  const user = state?.user;
  const [modalType, setModalType] = useState(null);

  if (!user) {
    return <div className="p-8 text-gray-500">No user selected.</div>;
  }

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
<div className="flex-1 bg-gray-50 space-y-4 mt-[100px] p-7 h-[calc(100vh-100px)] overflow-y-auto">
                          <h1 style={{ color: 'black', fontSize: '1.875rem' }}>Users Management</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-6xl pt-4">
            {/* Left: User Details */}
            <div className="bg-white p-6 rounded-lg shadow-xl/30">
                          <h1 style={{ color: 'black', fontSize: "20px",fontWeight:"250px" }}>Users Details</h1>
              <div className="space-y-4 p-2 ">
                <div>
                  <label className="block text-sm  font-medium text-gray-700">
                    User Name
                  </label>
                  <input
                    className="w-full mt-1 p-2.5 rounded border border-gray-300 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    className="w-full mt-1 p-2.5 rounded border border-gray-300 text-sm"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <input
                      
                      className="w-full mt-1 p-2.5 rounded border border-gray-300 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      State
                    </label>
                    <input
                      
                      className="w-full mt-1 p-2.5 rounded border border-gray-300 text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <textarea
                    
                    rows="3"
                    className="w-full mt-1 p-2.5 rounded border border-gray-300 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Right: Profile Image + Orders */}
            <div className="flex flex-col gap-6">
              {/* Profile Image & Buttons */}
              <div className="bg-white p-5 rounded-lg shadow-sm flex flex-col items-center w-[800px]">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="User"
                  className="w-45 h-45 rounded-xl object-cover mb-4"
                />
                <div className="flex gap-3 mt-2">
                  <button
                    onClick={() => setModalType("suspend")}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white text-sm font-medium px-4 py-2 rounded"
                  >
                    Suspend
                  </button>

                  <button
                    onClick={() => setModalType("reactivate")}
                    className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded"
                  >
                    Reactivate
                  </button>

                  <button
                    onClick={() => setModalType("delete")}
                    className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>

              {/* Orders Table */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Orders</h2>
                <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden w-[800px]">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-3 px-4 text-left">Product</th>
                        <th className="py-3 px-4 text-left">Payment</th>
                        <th className="py-3 px-4 text-left">Status</th>
                        <th className="py-3 px-4 text-left">Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        "Pending",
                        "Processing",
                        "Cancelled",
                        "Shipped",
                        "Delivered",
                      ].map((status, i) => (
                        <tr key={i}>
                          <td className="py-3 px-4">KURTI SET</td>
                          <td className="py-3 px-4">
                            {
                              [
                                "Credit Card",
                                "UPI",
                                "COD",
                                "Credit Card",
                                "Credit Card",
                              ][i]
                            }
                          </td>
                          <td className="py-3 px-4">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                {
                                  Pending: "bg-purple-100 text-purple-700",
                                  Processing: "bg-yellow-100 text-yellow-800",
                                  Cancelled: "bg-red-100 text-red-600",
                                  Shipped: "bg-green-100 text-green-600",
                                  Delivered: "bg-blue-100 text-blue-600",
                                }[status]
                              }`}
                            >
                              {status}
                            </span>
                          </td>
                          <td className="py-3 px-4">2099 Rs</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Suspend modal */}
      {modalType === "suspend" && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 w-[400px] text-center shadow-md">
            <div className="flex justify-center mb-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <span className="text-orange-500 text-2xl">✖</span>
              </div>
            </div>
           <h2 style={{fontSize:"20px", fontWeight:"200", color:"black"}}>
                    Do you want to Suspend this ?
                  </h2>
            <p className="text-sm text-gray-500 mb-5">
              You can reactivate it later
            </p>
            <div className="flex justify-between">
              <button
                className="bg-gray-100 text-gray-800 px-4 py-2 rounded w-[45%] text-sm font-medium"
                onClick={() => setModalType(null)}
              >
                Close
              </button>
              <button
                className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded w-[45%] text-sm font-medium"
                onClick={() => setModalType(null)}
              >
                Suspend
              </button>
            </div>
          </div>
        </div>
      )}

      {modalType === "reactivate" && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 w-[400px] text-center shadow-md">
            <div className="flex justify-center mb-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <span className="text-green-500 text-2xl">✖</span>
              </div>
            </div>
           <h2 style={{fontSize:"20px", fontWeight:"200", color:"black"}}>
                    Do you want to reactivate this?
                  </h2>
            <p className="text-sm text-gray-500 mb-5">
              All permission will be restored
            </p>
            <div className="flex justify-between">
              <button
                className="bg-gray-100 text-gray-800 px-4 py-2 rounded w-[45%] text-sm font-medium"
                onClick={() => setModalType(null)}
              >
                Close
              </button>
              <button
                className="bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded w-[45%] text-sm font-medium"
                onClick={() => setModalType(null)}
              >
                Reactivate
              </button>
            </div>
          </div>
        </div>
      )}

      {modalType === "delete" && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 w-[400px] text-center shadow-md">
            <div className="flex justify-center mb-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <span className="text-red-500 text-2xl">✖</span>
              </div>
            </div>
           <h2 style={{fontSize:"20px", fontWeight:"200", color:"black"}}>
                    Do you really want to delete this order?
                  </h2>
            <p className="text-sm text-gray-500 mb-5">
              This action is permanent and cannot be undone
            </p>
            <div className="flex justify-between">
              <button
                className="bg-gray-100 text-gray-800 px-4 py-2 rounded w-[45%] text-sm font-medium"
                onClick={() => setModalType(null)}
              >
                Close
              </button>
              <button
                className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded w-[45%] text-sm font-medium"
                onClick={() => setModalType(null)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserDetails;
