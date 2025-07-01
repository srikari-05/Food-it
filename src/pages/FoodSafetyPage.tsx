import React from 'react';
import { Shield, Thermometer, Clock, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const FoodSafetyPage: React.FC = () => {
  const temperatureGuidelines = [
    { food: 'Poultry', temp: '165°F (74°C)', color: 'text-red-600' },
    { food: 'Ground Meat', temp: '160°F (71°C)', color: 'text-red-600' },
    { food: 'Whole Cuts of Beef/Pork', temp: '145°F (63°C)', color: 'text-orange-600' },
    { food: 'Fish & Shellfish', temp: '145°F (63°C)', color: 'text-orange-600' },
    { food: 'Eggs', temp: '160°F (71°C)', color: 'text-red-600' },
    { food: 'Leftovers', temp: '165°F (74°C)', color: 'text-red-600' }
  ];

  const storageGuidelines = [
    {
      category: 'Refrigerated Foods',
      temp: '40°F (4°C) or below',
      items: ['Dairy products', 'Cooked meats', 'Prepared foods', 'Cut fruits & vegetables'],
      duration: '3-7 days (varies by item)'
    },
    {
      category: 'Frozen Foods',
      temp: '0°F (-18°C) or below',
      items: ['Raw meats', 'Prepared meals', 'Bread', 'Ice cream'],
      duration: '1-12 months (varies by item)'
    },
    {
      category: 'Pantry Items',
      temp: 'Cool, dry place',
      items: ['Canned goods', 'Dry grains', 'Spices', 'Oils'],
      duration: '6 months to 2 years'
    }
  ];

  const safetyTips = [
    {
      title: 'Clean',
      description: 'Wash hands, utensils, and surfaces often',
      icon: CheckCircle,
      color: 'text-green-600',
      tips: [
        'Wash hands for 20 seconds with soap and warm water',
        'Clean surfaces with hot, soapy water',
        'Rinse fresh fruits and vegetables',
        'Clean can lids before opening'
      ]
    },
    {
      title: 'Separate',
      description: 'Keep raw meat away from other foods',
      icon: AlertTriangle,
      color: 'text-yellow-600',
      tips: [
        'Use separate cutting boards for raw meat',
        'Store raw meat on bottom shelf of refrigerator',
        'Never place cooked food on surfaces that held raw meat',
        'Use separate plates for raw and cooked foods'
      ]
    },
    {
      title: 'Cook',
      description: 'Heat foods to proper temperatures',
      icon: Thermometer,
      color: 'text-red-600',
      tips: [
        'Use a food thermometer to check temperatures',
        'Cook food to safe minimum internal temperatures',
        'Bring sauces and soups to a rolling boil',
        'Heat leftovers to 165°F (74°C)'
      ]
    },
    {
      title: 'Chill',
      description: 'Refrigerate foods promptly',
      icon: Clock,
      color: 'text-blue-600',
      tips: [
        'Refrigerate perishable foods within 2 hours',
        'Keep refrigerator at 40°F (4°C) or below',
        'Thaw food safely in refrigerator or cold water',
        'Divide large amounts of food into smaller containers'
      ]
    }
  ];

  const dangerZone = {
    tempRange: '40°F - 140°F (4°C - 60°C)',
    description: 'Bacteria multiply rapidly in this temperature range',
    timeLimit: '2 hours maximum (1 hour if temperature is above 90°F/32°C)'
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Food Safety Guidelines</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Essential food safety practices to prevent foodborne illness and ensure safe food handling
          </p>
        </div>

        {/* Four Basic Principles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Four Basic Food Safety Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyTips.map((tip) => {
              const Icon = tip.icon;
              return (
                <div key={tip.title} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg mr-4 ${tip.color.replace('text-', 'bg-').replace('-600', '-100')}`}>
                      <Icon className={`h-6 w-6 ${tip.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{tip.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{tip.description}</p>
                  <ul className="space-y-2">
                    {tip.tips.map((tipItem, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {tipItem}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Temperature Danger Zone */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Temperature Danger Zone</h2>
          <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
              <div>
                <h3 className="text-xl font-semibold text-red-800">Danger Zone: {dangerZone.tempRange}</h3>
                <p className="text-red-700">{dangerZone.description}</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 mt-4">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-red-500 mr-2" />
                <span className="font-semibold text-gray-900">Time Limit: </span>
                <span className="text-gray-700 ml-1">{dangerZone.timeLimit}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Cooking Temperatures */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Safe Cooking Temperatures</h2>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {temperatureGuidelines.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">{item.food}</span>
                  <span className={`font-bold ${item.color}`}>{item.temp}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center">
                <Thermometer className="h-5 w-5 text-blue-600 mr-2" />
                <span className="font-semibold text-blue-800">
                  Always use a food thermometer to verify internal temperatures
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Storage Guidelines */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Food Storage Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {storageGuidelines.map((guideline, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{guideline.category}</h3>
                <div className="mb-4">
                  <span className="font-medium text-blue-600">Temperature: </span>
                  <span className="text-gray-700">{guideline.temp}</span>
                </div>
                <div className="mb-4">
                  <span className="font-medium text-blue-600">Duration: </span>
                  <span className="text-gray-700">{guideline.duration}</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Common Items:</h4>
                  <ul className="space-y-1">
                    {guideline.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Emergency Contacts */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Emergency Contacts</h2>
          <div className="bg-red-50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-red-800 mb-4">Food Poisoning Emergency</h3>
                <div className="space-y-2 text-red-700">
                  <p className="flex items-center">
                    <XCircle className="h-4 w-4 mr-2" />
                    If severe symptoms: Call 911
                  </p>
                  <p>Poison Control: 1-800-222-1222</p>
                  <p>City Health Department: (555) 123-4567</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-800 mb-4">Food Safety Reporting</h3>
                <div className="space-y-2 text-red-700">
                  <p>Health Department: (555) 123-4567</p>
                  <p>Email: foodsafety@city.gov</p>
                  <p>Online Portal: Available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FoodSafetyPage;