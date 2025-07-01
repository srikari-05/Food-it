import React from 'react';
import { Book, Award, CheckCircle, AlertCircle, Info } from 'lucide-react';

const EducationPage: React.FC = () => {
  const certifications = [
    {
      name: 'Food Handler Certification',
      description: 'Basic food safety training for restaurant staff',
      requirements: ['Complete 4-hour online course', 'Pass certification exam', 'Renew every 2 years'],
      icon: Award
    },
    {
      name: 'Manager Certification',
      description: 'Advanced food safety management training',
      requirements: ['Complete 8-hour training program', 'Pass comprehensive exam', 'Renew every 3 years'],
      icon: CheckCircle
    },
    {
      name: 'Organic Certification',
      description: 'Certification for organic food establishments',
      requirements: ['Meet organic standards', 'Annual inspection', 'Maintain detailed records'],
      icon: Info
    }
  ];

  const safetyGuidelines = [
    {
      title: 'Temperature Control',
      description: 'Keep hot foods hot (above 140°F) and cold foods cold (below 40°F)',
      priority: 'high'
    },
    {
      title: 'Hand Washing',
      description: 'Wash hands for at least 20 seconds with soap and warm water',
      priority: 'high'
    },
    {
      title: 'Cross Contamination',
      description: 'Use separate cutting boards for raw meat and vegetables',
      priority: 'high'
    },
    {
      title: 'Storage Guidelines',
      description: 'Store food in appropriate containers and locations',
      priority: 'medium'
    },
    {
      title: 'Cleaning Schedules',
      description: 'Maintain regular cleaning and sanitizing schedules',
      priority: 'medium'
    }
  ];

  const localSpecialties = [
    {
      name: 'Regional Grain Dishes',
      description: 'Traditional dishes made with locally grown grains and pulses',
      healthBenefits: 'High in protein and fiber'
    },
    {
      name: 'Seasonal Vegetables',
      description: 'Fresh vegetables grown in local farms during peak seasons',
      healthBenefits: 'Rich in vitamins and minerals'
    },
    {
      name: 'Traditional Fermented Foods',
      description: 'Locally prepared fermented foods with probiotic benefits',
      healthBenefits: 'Supports digestive health'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Book className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Food Education Center</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about food safety, certifications, and local culinary traditions
          </p>
        </div>

        {/* Certifications Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Food Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert) => {
              const Icon = cert.icon;
              return (
                <div key={cert.name} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{cert.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{cert.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Requirements:</h4>
                    <ul className="space-y-1">
                      {cert.requirements.map((req, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Safety Guidelines */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Food Safety Guidelines</h2>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {safetyGuidelines.map((guideline, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-l-4 ${
                    guideline.priority === 'high'
                      ? 'border-red-500 bg-red-50'
                      : 'border-yellow-500 bg-yellow-50'
                  }`}
                >
                  <div className="flex items-center mb-2">
                    <AlertCircle
                      className={`h-5 w-5 mr-2 ${
                        guideline.priority === 'high' ? 'text-red-500' : 'text-yellow-500'
                      }`}
                    />
                    <h3 className="font-semibold text-gray-900">{guideline.title}</h3>
                  </div>
                  <p className="text-gray-700">{guideline.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Food Culture */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Local Food Culture & Nutrition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {localSpecialties.map((specialty, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{specialty.name}</h3>
                <p className="text-gray-600 mb-4">{specialty.description}</p>
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-1">Health Benefits</h4>
                  <p className="text-green-700 text-sm">{specialty.healthBenefits}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Educational Resources */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Additional Resources</h2>
          <div className="bg-blue-50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Training Materials</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Food Handler Training Videos
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Safety Protocol Handbooks
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Certification Practice Tests
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-2 text-gray-700">
                  <p>Food Safety Department: (555) 123-4567</p>
                  <p>Certification Office: (555) 123-4568</p>
                  <p>Email: foodsafety@city.gov</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EducationPage;