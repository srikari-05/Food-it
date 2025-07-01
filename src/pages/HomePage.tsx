import React from 'react';
import { Book, MapPin, AlertTriangle, MessageSquare, Shield, Utensils, Users, TrendingUp } from 'lucide-react';
import { Page } from '../App';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const quickActions = [
    {
      id: 'report-illness' as Page,
      title: 'Report Food Illness',
      description: 'Report non-life-threatening food-related illness',
      icon: AlertTriangle,
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600'
    },
    {
      id: 'report-safety' as Page,
      title: 'Report Safety Concern',
      description: 'Report food safety concerns at establishments',
      icon: Shield,
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600'
    },
    {
      id: 'suggestions' as Page,
      title: 'Submit Suggestions',
      description: 'Share ideas for improving food services',
      icon: MessageSquare,
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600'
    },
    {
      id: 'map' as Page,
      title: 'Find Restaurants',
      description: 'View restaurants and markets on the map',
      icon: MapPin,
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600'
    }
  ];

  const infoSections = [
    {
      id: 'education' as Page,
      title: 'Food Education',
      description: 'Learn about certifications, food handling, and safety standards',
      icon: Book,
      stats: '25+ Educational Resources'
    },
    {
      id: 'dining' as Page,
      title: 'Dining Guide',
      description: 'Discover local restaurants, markets, and food specialties',
      icon: Utensils,
      stats: '150+ Establishments Listed'
    },
    {
      id: 'safety' as Page,
      title: 'Food Safety',
      description: 'Guidelines for safe food handling and storage practices',
      icon: Shield,
      stats: 'Updated Safety Protocols'
    }
  ];

  const stats = [
    { label: 'Registered Restaurants', value: '847', icon: Utensils },
    { label: 'Safety Reports', value: '23', icon: Shield },
    { label: 'Active Users', value: '2,341', icon: Users },
    { label: 'Monthly Visits', value: '15,678', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your City's Food
            <span className="block text-blue-600">Information Hub</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover local dining, report safety concerns, and access comprehensive food-related 
            information for residents and visitors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('education')}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Explore Resources
            </button>
            <button
              onClick={() => onNavigate('map')}
              className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View Map
            </button>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.id}
                  onClick={() => onNavigate(action.id)}
                  className={`p-6 rounded-xl text-white ${action.color} ${action.hoverColor} transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
                >
                  <Icon className="h-8 w-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{action.title}</h3>
                  <p className="text-sm opacity-90">{action.description}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Information Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Information Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {infoSections.map((section) => {
              const Icon = section.icon;
              return (
                <div
                  key={section.id}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => onNavigate(section.id)}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                      <p className="text-sm text-blue-600 font-medium">{section.stats}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{section.description}</p>
                  <div className="flex items-center text-blue-600 font-medium hover:text-blue-700">
                    Learn More →
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-600 rounded-lg">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;