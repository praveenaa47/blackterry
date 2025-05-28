import React, { useState } from "react";
import { Search, Upload, Edit2, Trash2 } from "lucide-react";
import HeaderAdmin from "../Components/HeaderAdmin";
import Sidebar from "../Components/Sidebar";

function Advertisement() {
  const [categoryTitle, setCategoryTitle] = useState("Other Accessories");
  const [description, setDescription] = useState(
    "For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words."
  );
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    {
      title: "Kurti",
      items: ["Kurti", "Kurti Set", "Ethnic Wear", "Dress"],
    },
    {
      title: "Kurti Set",
      items: ["Top & Bottom Set", "Top , Bottom Dupatta Set"],
    },
    {
      title: "Bottom",
      items: ["Pants", "Leggings", "Palazzo", "Jeans"],
    },
    {
      title: "Maternity Wear",
      items: ["Pre Maternity", "Post Maternity", "Maternity Nighty"],
    },
    {
      title: "Night wear",
      items: ["Nighty", "Short Nighty", "Top & Bottom", "Kaftan"],
    },
    {
      title: "Running Material",
      items: ["Kurti", "Kurti Set", "Ethnic Wear", "Dress"],
    },
    {
      title: "Churidar Materials",
      items: ["Kurti"],
    },
    {
      title: "Offer Zone",
      items: ["Kurti"],
    },
  ];

  const filteredCategories = categories.filter((cat) =>
    cat.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">
              Categories
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Create Categories Form */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h2 style={{color:"black", fontSize:"20px", fontWeight:"500px", padding:"6px"}}>
                    Create Subcategories
                  </h2>

                  <div className="space-y-7">
                    {/* Category Title */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category Title<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter category title"
                      />
                    </div>

                    {/* Image Upload */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Image<span className="text-red-500">*</span>
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                            <Upload className="w-8 h-8 text-blue-500" />
                          </div>
                          <p className="text-sm text-gray-600">
                            Browse Files to upload
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder="Enter description"
                      />
                    </div>

                    {/* Submit Button */}
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-4 rounded-md transition-colors">
                      SUBMIT
                    </button>
                  </div>
                </div>
              </div>

              {/* Categories List */}
              <div className="lg:col-span-2">
                  <div className="p-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Search Category"
                        className="w-[500px] pl-10 pr-4 py-2 border border-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                <div className="bg-white rounded-lg shadow-sm border">
                  {/* Search Bar */}
                

                  {/* Categories Grid */}
                  <div className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {filteredCategories.map((category, index) => (
                        <div
                          key={index}
                          className="border border-gray-200 rounded-lg p-4"
                        >
                          {/* Category Header */}
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-medium text-gray-900">
                              {category.title}
                            </h3>
                            <div className="flex items-center space-x-2">
                              <button className="text-blue-500 hover:text-blue-600 text-sm font-medium p-2">
                                Edit
                              </button>
                              <button className="text-red-500 hover:text-red-600 text-sm font-medium">
                                Delete
                              </button>
                            </div>
                          </div>

                          {/* Category Items */}
                          <div className="space-y-1 mb-3">
                            {category.items.map((item, itemIndex) => (
                              <p
                                key={itemIndex}
                                className="text-sm text-gray-600"
                              >
                                {item}
                              </p>
                            ))}
                          </div>

                          {/* Read More */}
                          <button className="text-blue-500 hover:text-blue-600 text-sm font-medium flex items-center">
                            Read More
                            <svg
                              className="w-4 h-4 ml-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advertisement;
