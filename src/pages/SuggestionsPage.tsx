import React, { useState } from 'react';
import { MessageSquare, Lightbulb, ThumbsUp, Users, TrendingUp } from 'lucide-react';

const SuggestionsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    title: '',
    description: '',
    priority: 'medium',
    implementation: '',
    benefits: ''
  });

  const categories = [
    'Website/Portal Improvements',
    'New Features',
    'Food Safety Programs',
    'Educational Content',
    'Restaurant/Market Services',
    'Reporting System',
    'Community Outreach',
    'Other'
  ];

  const recentSuggestions = [
    {
      id: 1,
      title: 'Mobile App Development',
      category: 'New Features',
      description: 'Create a mobile app for easier reporting and information access',
      votes: 24,
      status: 'Under Review',
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Multilingual Support',
      category: 'Website/Portal Improvements',
      description: 'Add support for multiple languages to serve diverse communities',
      votes: 18,
      status: 'Planned',
      date: '2024-01-12'
    },
    {
      id: 3,
      title: 'Food Allergy Alerts',
      category: 'Food Safety Programs',
      description: 'System to alert users about allergen information at restaurants',
      votes: 31,
      status: 'In Progress',
      date: '2024-01-10'
    },
    {
      id: 4,
      title: 'Virtual Food Safety Training',
      category: 'Educational Content',
      description: 'Online training modules for food handlers and managers',
      votes: 15,
      status: 'Completed',
      date: '2024-01-08'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your suggestion! We will review it and consider it for future improvements.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      category: '',
      title: '',
      description: '',
      priority: 'medium',
      implementation: '',
      benefits: ''
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Planned':
        return 'bg-yellow-100 text-yellow-800';
      case 'Under Review':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <MessageSquare className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Submit Suggestions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us improve our food information portal by sharing your ideas and suggestions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Suggestion Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Lightbulb className="h-6 w-6 mr-2" />
                Share Your Idea
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Priority Level
                  </label>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="low">Low - Nice to have</option>
                    <option value="medium">Medium - Would be helpful</option>
                    <option value="high">High - Important improvement</option>
                    <option value="critical">Critical - Essential feature</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Suggestion Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Brief, descriptive title for your suggestion"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Detailed Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Describe your suggestion in detail. What problem does it solve? How would it work?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Implementation Ideas
                </label>
                <textarea
                  name="implementation"
                  value={formData.implementation}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Do you have ideas on how this could be implemented? Any technical considerations?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Benefits
                </label>
                <textarea
                  name="benefits"
                  value={formData.benefits}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="What benefits would this provide to users, the city, or the community?"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Submit Suggestion
                </button>
              </div>
            </form>
          </div>

          {/* Recent Suggestions */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Recent Suggestions
              </h3>
              <div className="space-y-4">
                {recentSuggestions.map((suggestion) => (
                  <div key={suggestion.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900 text-sm">{suggestion.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(suggestion.status)}`}>
                        {suggestion.status}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{suggestion.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center">
                        <ThumbsUp className="h-3 w-3 mr-1" />
                        {suggestion.votes} votes
                      </span>
                      <span>{suggestion.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Community Impact
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-green-700">Total Suggestions</span>
                  <span className="font-bold text-green-800">127</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-700">Implemented</span>
                  <span className="font-bold text-green-800">23</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-700">In Progress</span>
                  <span className="font-bold text-green-800">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-700">Under Review</span>
                  <span className="font-bold text-green-800">15</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-blue-800 mb-3">Suggestion Guidelines</h3>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li>• Be specific and detailed in your suggestions</li>
                <li>• Consider the feasibility and resources required</li>
                <li>• Focus on improvements that benefit the community</li>
                <li>• Check if similar suggestions have been made</li>
                <li>• Provide constructive feedback and solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestionsPage;