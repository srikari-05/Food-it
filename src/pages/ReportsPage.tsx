import React, { useState } from 'react';
import { BarChart3, Download, Calendar, Filter, TrendingUp, Users, AlertTriangle, FileText } from 'lucide-react';

const ReportsPage: React.FC = () => {
  const [selectedReport, setSelectedReport] = useState<string>('usage');
  const [dateRange, setDateRange] = useState<string>('30days');

  const reportTypes = [
    { id: 'usage', label: 'Website Usage', icon: TrendingUp },
    { id: 'restaurants', label: 'Restaurant Reviews', icon: FileText },
    { id: 'illness', label: 'Food Illness Reports', icon: AlertTriangle },
    { id: 'suggestions', label: 'User Suggestions', icon: Users }
  ];

  const usageData = {
    totalVisits: 15678,
    uniqueVisitors: 8934,
    pageViews: 42156,
    avgSessionDuration: '4m 32s',
    popularPages: [
      { page: 'Home', visits: 5234, percentage: 33.4 },
      { page: 'Dining Guide', visits: 3456, percentage: 22.1 },
      { page: 'Food Safety', visits: 2789, percentage: 17.8 },
      { page: 'Education', visits: 2134, percentage: 13.6 },
      { page: 'Map View', visits: 1567, percentage: 10.0 }
    ],
    deviceBreakdown: [
      { device: 'Desktop', percentage: 45.2 },
      { device: 'Mobile', percentage: 38.7 },
      { device: 'Tablet', percentage: 16.1 }
    ]
  };

  const restaurantData = {
    totalReviews: 234,
    averageRating: 4.3,
    reviewsByMonth: [
      { month: 'Oct', reviews: 18 },
      { month: 'Nov', reviews: 25 },
      { month: 'Dec', reviews: 32 },
      { month: 'Jan', reviews: 28 }
    ],
    topRatedRestaurants: [
      { name: 'Heritage Kitchen', rating: 4.9, reviews: 156 },
      { name: 'Spice Garden', rating: 4.8, reviews: 234 },
      { name: 'Fresh Market Cafe', rating: 4.6, reviews: 189 },
      { name: 'Street Food Corner', rating: 4.4, reviews: 312 }
    ]
  };

  const illnessData = {
    totalReports: 8,
    resolvedReports: 6,
    pendingReports: 2,
    reportsByType: [
      { type: 'Stomach Issues', count: 4 },
      { type: 'Food Poisoning', count: 2 },
      { type: 'Allergic Reaction', count: 1 },
      { type: 'Other', count: 1 }
    ],
    reportsByMonth: [
      { month: 'Oct', reports: 3 },
      { month: 'Nov', reports: 2 },
      { month: 'Dec', reports: 1 },
      { month: 'Jan', reports: 2 }
    ]
  };

  const suggestionsData = {
    totalSuggestions: 127,
    implemented: 23,
    inProgress: 8,
    underReview: 15,
    categorizedSuggestions: [
      { category: 'Website Improvements', count: 42 },
      { category: 'New Features', count: 35 },
      { category: 'Food Safety', count: 28 },
      { category: 'Educational Content', count: 22 }
    ]
  };

  const renderUsageReport = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900">Total Visits</h3>
          <p className="text-3xl font-bold text-blue-600">{usageData.totalVisits.toLocaleString()}</p>
          <p className="text-green-600 text-sm">+12% from last month</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900">Unique Visitors</h3>
          <p className="text-3xl font-bold text-green-600">{usageData.uniqueVisitors.toLocaleString()}</p>
          <p className="text-green-600 text-sm">+8% from last month</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900">Page Views</h3>
          <p className="text-3xl font-bold text-purple-600">{usageData.pageViews.toLocaleString()}</p>
          <p className="text-green-600 text-sm">+15% from last month</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900">Avg. Session</h3>
          <p className="text-3xl font-bold text-orange-600">{usageData.avgSessionDuration}</p>
          <p className="text-green-600 text-sm">+5% from last month</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Most Popular Pages</h3>
          <div className="space-y-3">
            {usageData.popularPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-semibold text-sm">{index + 1}</span>
                  </div>
                  <span className="font-medium">{page.page}</span>
                </div>
                <div className="text-right">
                  <div className="font-semibold">{page.visits.toLocaleString()}</div>
                  <div className="text-sm text-gray-500">{page.percentage}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Breakdown</h3>
          <div className="space-y-4">
            {usageData.deviceBreakdown.map((device, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{device.device}</span>
                  <span className="text-sm text-gray-500">{device.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${device.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderRestaurantReport = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900">Total Reviews</h3>
          <p className="text-3xl font-bold text-blue-600">{restaurantData.totalReviews}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900">Average Rating</h3>
          <p className="text-3xl font-bold text-green-600">{restaurantData.averageRating}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900">This Month</h3>
          <p className="text-3xl font-bold text-purple-600">28</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Rated Restaurants</h3>
        <div className="space-y-3">
          {restaurantData.topRatedRestaurants.map((restaurant, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-semibold">{restaurant.name}</div>
                <div className="text-sm text-gray-600">{restaurant.reviews} reviews</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-yellow-600">{restaurant.rating}</div>
                <div className="text-sm text-gray-500">★★★★★</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderIllnessReport = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900">Total Reports</h3>
          <p className="text-3xl font-bold text-red-600">{illnessData.totalReports}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900">Resolved</h3>
          <p className="text-3xl font-bold text-green-600">{illnessData.resolvedReports}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900">Pending</h3>
          <p className="text-3xl font-bold text-orange-600">{illnessData.pendingReports}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Reports by Type</h3>
        <div className="space-y-3">
          {illnessData.reportsByType.map((type, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">{type.type}</span>
              <span className="font-bold text-red-600">{type.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSuggestionsReport = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900">Total</h3>
          <p className="text-3xl font-bold text-blue-600">{suggestionsData.totalSuggestions}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900">Implemented</h3>
          <p className="text-3xl font-bold text-green-600">{suggestionsData.implemented}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900">In Progress</h3>
          <p className="text-3xl font-bold text-orange-600">{suggestionsData.inProgress}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900">Under Review</h3>
          <p className="text-3xl font-bold text-purple-600">{suggestionsData.underReview}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Suggestions by Category</h3>
        <div className="space-y-3">
          {suggestionsData.categorizedSuggestions.map((category, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">{category.category}</span>
              <span className="font-bold text-blue-600">{category.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderReport = () => {
    switch (selectedReport) {
      case 'usage':
        return renderUsageReport();
      case 'restaurants':
        return renderRestaurantReport();
      case 'illness':
        return renderIllnessReport();
      case 'suggestions':
        return renderSuggestionsReport();
      default:
        return renderUsageReport();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Reports & Analytics</h1>
          <p className="text-xl text-gray-600">
            Comprehensive insights into your food portal's performance
          </p>
        </div>

        {/* Report Controls */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-600" />
              <select
                value={selectedReport}
                onChange={(e) => setSelectedReport(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {reportTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.label}</option>
                ))}
              </select>
              <Calendar className="h-5 w-5 text-gray-600" />
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="7days">Last 7 days</option>
                <option value="30days">Last 30 days</option>
                <option value="90days">Last 90 days</option>
                <option value="1year">Last year</option>
              </select>
            </div>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </button>
          </div>
        </div>

        {/* Report Navigation */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6" aria-label="Report tabs">
              {reportTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => setSelectedReport(type.id)}
                    className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm ${
                      selectedReport === type.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="h-5 w-5 mr-2" />
                    {type.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Report Content */}
        {renderReport()}
      </div>
    </div>
  );
};

export default ReportsPage;