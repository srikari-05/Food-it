import React, { useState } from 'react';
import { MapPin, Filter, Star, Phone, Clock, Award, Navigation } from 'lucide-react';

const MapViewPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<any>(null);

  const locations = [
    {
      id: 1,
      name: 'Spice Garden',
      type: 'restaurant',
      category: 'Traditional',
      rating: 4.8,
      address: '123 Main Street',
      phone: '(555) 123-4567',
      hours: '11:00 AM - 10:00 PM',
      position: { x: 45, y: 30 },
      certifications: ['Food Handler Certified', 'Organic Options'],
      specialties: ['Biryani', 'Tandoor Items']
    },
    {
      id: 2,
      name: 'Fresh Market Cafe',
      type: 'restaurant',
      category: 'Healthy',
      rating: 4.6,
      address: '456 Green Avenue',
      phone: '(555) 234-5678',
      hours: '8:00 AM - 9:00 PM',
      position: { x: 25, y: 60 },
      certifications: ['Organic Certified'],
      specialties: ['Organic Salads', 'Fresh Juices']
    },
    {
      id: 3,
      name: 'Central Farmers Market',
      type: 'market',
      category: 'Market',
      rating: 4.5,
      address: '100 Market Square',
      phone: '(555) 345-6789',
      hours: 'Saturdays 8:00 AM - 2:00 PM',
      position: { x: 60, y: 45 },
      certifications: ['Certified Organic Vendors'],
      specialties: ['Fresh Produce', 'Local Honey']
    },
    {
      id: 4,
      name: 'Street Food Corner',
      type: 'restaurant',
      category: 'Street Food',
      rating: 4.4,
      address: '789 Food Street',
      phone: '(555) 456-7890',
      hours: '6:00 PM - 12:00 AM',
      position: { x: 70, y: 25 },
      certifications: ['Food Handler Certified'],
      specialties: ['Chaat', 'Dosa']
    },
    {
      id: 5,
      name: 'Heritage Kitchen',
      type: 'restaurant',
      category: 'Fine Dining',
      rating: 4.9,
      address: '321 Heritage Plaza',
      phone: '(555) 567-8901',
      hours: '6:00 PM - 11:00 PM',
      position: { x: 35, y: 75 },
      certifications: ['Fine Dining Certified'],
      specialties: ['Tasting Menu', 'Wine Pairing']
    },
    {
      id: 6,
      name: 'Spice Bazaar',
      type: 'market',
      category: 'Market',
      rating: 4.3,
      address: '200 Spice Lane',
      phone: '(555) 678-9012',
      hours: 'Daily 9:00 AM - 7:00 PM',
      position: { x: 15, y: 40 },
      certifications: ['Quality Assured'],
      specialties: ['Traditional Spices', 'Dried Fruits']
    }
  ];

  const categories = ['all', 'Traditional', 'Healthy', 'Street Food', 'Fine Dining', 'Market'];

  const filteredLocations = locations.filter(location => 
    selectedCategory === 'all' || location.category === selectedCategory
  );

  const getLocationIcon = (type: string) => {
    return type === 'market' ? '🏪' : '🍽️';
  };

  const getLocationColor = (category: string) => {
    switch (category) {
      case 'Traditional': return 'bg-orange-500';
      case 'Healthy': return 'bg-green-500';
      case 'Street Food': return 'bg-yellow-500';
      case 'Fine Dining': return 'bg-purple-500';
      case 'Market': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">City Food Map</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover restaurants and markets throughout the city
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">Interactive Map</h2>
                <div className="flex items-center space-x-4">
                  <Filter className="h-5 w-5 text-gray-600" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Simulated Map */}
              <div className="relative bg-green-100 rounded-lg h-96 overflow-hidden">
                {/* Map Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200">
                  {/* Simulated Streets */}
                  <div className="absolute top-1/3 left-0 right-0 h-2 bg-gray-300"></div>
                  <div className="absolute top-2/3 left-0 right-0 h-2 bg-gray-300"></div>
                  <div className="absolute left-1/4 top-0 bottom-0 w-2 bg-gray-300"></div>
                  <div className="absolute left-3/4 top-0 bottom-0 w-2 bg-gray-300"></div>
                  
                  {/* City Center */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold">
                    City
                  </div>
                </div>

                {/* Location Markers */}
                {filteredLocations.map((location) => (
                  <div
                    key={location.id}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 hover:scale-110 ${
                      selectedLocation?.id === location.id ? 'scale-125 z-10' : ''
                    }`}
                    style={{
                      left: `${location.position.x}%`,
                      top: `${location.position.y}%`,
                    }}
                    onClick={() => setSelectedLocation(location)}
                  >
                    <div className={`w-8 h-8 rounded-full ${getLocationColor(location.category)} flex items-center justify-center text-white text-lg shadow-lg`}>
                      {getLocationIcon(location.type)}
                    </div>
                    {selectedLocation?.id === location.id && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white rounded-lg shadow-lg p-2 whitespace-nowrap">
                        <div className="text-sm font-semibold">{location.name}</div>
                        <div className="text-xs text-gray-600">{location.address}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="mt-4 flex flex-wrap gap-4">
                {categories.slice(1).map((category) => (
                  <div key={category} className="flex items-center">
                    <div className={`w-4 h-4 rounded-full ${getLocationColor(category)} mr-2`}></div>
                    <span className="text-sm text-gray-600">{category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            {selectedLocation ? (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{selectedLocation.name}</h3>
                  <button
                    onClick={() => setSelectedLocation(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      {renderStars(selectedLocation.rating)}
                    </div>
                    <span className="text-sm font-medium text-gray-900">{selectedLocation.rating}</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {selectedLocation.address}
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="h-4 w-4 mr-2" />
                    {selectedLocation.phone}
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    {selectedLocation.hours}
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedLocation.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Certifications</h4>
                    <div className="space-y-1">
                      {selectedLocation.certifications.map((cert, index) => (
                        <div key={index} className="flex items-center text-sm text-green-700">
                          <Award className="h-3 w-3 mr-2" />
                          {cert}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <button className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Navigation className="h-4 w-4 mr-2" />
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Select a Location</h3>
                <p className="text-gray-600">
                  Click on any marker on the map to view detailed information about restaurants and markets.
                </p>
              </div>
            )}

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Map Statistics</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Locations</span>
                  <span className="font-semibold">{locations.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Restaurants</span>
                  <span className="font-semibold">{locations.filter(l => l.type === 'restaurant').length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Markets</span>
                  <span className="font-semibold">{locations.filter(l => l.type === 'market').length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Avg Rating</span>
                  <span className="font-semibold">
                    {(locations.reduce((sum, l) => sum + l.rating, 0) / locations.length).toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapViewPage;