import React, { useState } from 'react';
import { Settings, Users, FileText, BarChart3, AlertTriangle, MessageSquare, Calendar, TrendingUp } from 'lucide-react';
import { Page } from '../App';

interface AdminDashboardProps {
  onNavigate: (page: Page) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<string>('overview');

  const stats = [
    { label: 'Total Users', value: '2,341', change: '+12%', icon: Users, color: 'text-blue-600' },
    { label: 'Safety Reports', value: '23', change: '+3', icon: AlertTriangle, color: 'text-red-600' },
    { label: 'Illness Reports', value: '8', change: '-2', icon: FileText, color: 'text-orange-600' },
    { label: 'Suggestions', value: '127', change: '+15%', icon: MessageSquare, color: 'text-green-600' }
  ];

  const recentReports = [
    {
      id: 1,
      type: 'Safety',
      establishment: 'Spice Garden',
      description: 'Temperature control issues reported',
      date: '2024-01-15',
      status: 'Under Investigation',
      priority: 'High'
    },
    {
      id: 2,
      type: 'Illness',
      establishment: 'Street Food Corner',
      description: 'Multiple customers reported stomach issues',
      date: '2024-01-14',
      status: 'Resolved',
      priority: 'Medium'
    },
    {
      id: 3,
      type: 'Suggestion',
      establishment: 'N/A',
      description: 'Request for mobile app development',
      date: '2024-01-13',
      status: 'Under Review',
      priority: 'Low'
    }
  ];

  const pendingActions = [
    {
      id: 1,
      title: 'Follow up on Heritage Kitchen inspection',
      dueDate: '2024-01-20',
      priority: 'High',
      type: 'Inspection'
    },
    {
      id: 2,
      title: 'Update food safety guidelines',
      dueDate: '2024-01-25',
      priority: 'Medium',
      type: 'Content Update'
    },
    {
      id: 3,
      title: 'Review new restaurant applications',
      dueDate: '2024-01-18',
      priority: 'Medium',
      type: 'Review'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Resolved':
        return 'bg-green-100 text-green-800';
      case 'Under Investigation':
        return 'bg-yellow-100 text-yellow-800';
      case 'Under Review':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'text-red-600';
      case 'Medium':
        return 'text-yellow-600';
      case 'Low':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'content', label: 'Content Management', icon: FileText },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change} from last month
                  </p>
                </div>
                <div className={`p-3 rounded-lg bg-gray-50`}>
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Reports</h3>
          <div className="space-y-4">
            {recentReports.map((report) => (
              <div key={report.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center mb-1">
                    <span className="font-medium text-gray-900">{report.type}</span>
                    <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                      {report.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{report.establishment}</p>
                  <p className="text-sm text-gray-500">{report.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">{report.date}</p>
                  <p className={`text-sm font-medium ${getPriorityColor(report.priority)}`}>
                    {report.priority}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Pending Actions</h3>
          <div className="space-y-4">
            {pendingActions.map((action) => (
              <div key={action.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{action.title}</p>
                  <p className="text-sm text-gray-600">{action.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">{action.dueDate}</p>
                  <p className={`text-sm font-medium ${getPriorityColor(action.priority)}`}>
                    {action.priority}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderContentManagement = () => (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Content Management</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 border border-gray-200 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Education Content</h4>
          <p className="text-sm text-gray-600 mb-4">Manage educational resources and guidelines</p>
          <button
            onClick={() => onNavigate('education')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Edit Content
          </button>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Restaurant Listings</h4>
          <p className="text-sm text-gray-600 mb-4">Update restaurant information and certifications</p>
          <button
            onClick={() => onNavigate('dining')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Manage Listings
          </button>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Safety Guidelines</h4>
          <p className="text-sm text-gray-600 mb-4">Update food safety protocols and procedures</p>
          <button
            onClick={() => onNavigate('safety')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Update Guidelines
          </button>
        </div>
      </div>
    </div>
  );

  const renderUserManagement = () => (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">User Management</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <p className="font-medium text-gray-900">Active Users</p>
            <p className="text-sm text-gray-600">2,341 registered users</p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            View Details
          </button>
        </div>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <p className="font-medium text-gray-900">Role Management</p>
            <p className="text-sm text-gray-600">Manage user roles and permissions</p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Manage Roles
          </button>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">System Settings</h3>
      <div className="space-y-6">
        <div>
          <h4 className="font-medium text-gray-900 mb-2">Notification Settings</h4>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              <span className="text-sm text-gray-700">Email notifications for new reports</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              <span className="text-sm text-gray-700">SMS alerts for critical issues</span>
            </label>
          </div>
        </div>
        <div>
          <h4 className="font-medium text-gray-900 mb-2">Data Export</h4>
          <div className="flex space-x-4">
            <button
              onClick={() => onNavigate('reports')}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Generate Reports
            </button>
            <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
              Export Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'content':
        return renderContentManagement();
      case 'users':
        return renderUserManagement();
      case 'settings':
        return renderSettings();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Settings className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Admin Dashboard</h1>
          <p className="text-xl text-gray-600">
            Manage your city's food information portal
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="h-5 w-5 mr-2" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;