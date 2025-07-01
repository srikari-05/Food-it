import React, { useState } from 'react';
import { Utensils, Star, MapPin, Phone, Clock, Award, Filter } from 'lucide-react';

const DiningGuidePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRating, setSelectedRating] = useState<string>('all');

  const restaurants = [
    {
      id: 1,
      name: 'Spice Garden',
      category: 'Traditional',
      cuisine: 'Regional Indian',
      rating: 4.8,
      reviews: 234,
      address: '123 Main Street, Downtown',
      phone: '(555) 123-4567',
      hours: '11:00 AM - 10:00 PM',
      specialties: ['Biryani', 'Tandoor Items', 'Traditional Sweets'],
      certifications: ['Food Handler Certified', 'Organic Options'],
      priceRange: '$$',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Fresh Market Cafe',
      category: 'Healthy',
      cuisine: 'Contemporary',
      rating: 4.6,
      reviews: 189,
      address: '456 Green Avenue, Midtown',
      phone: '(555) 234-5678',
      hours: '8:00 AM - 9:00 PM',
      specialties: ['Organic Salads', 'Fresh Juices', 'Grain Bowls'],
      certifications: ['Organic Certified', 'Locally Sourced'],
      priceRange: '$$$',
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Street Food Corner',
      category: 'Street Food',
      cuisine: 'Local Street Food',
      rating: 4.4,
      reviews: 312,
      address: '789 Food Street, Old Town',
      phone: '(555) 345-6789',
      hours: '6:00 PM - 12:00 AM',
      specialties: ['Chaat', 'Dosa', 'Local Snacks'],
      certifications: ['Food Handler Certified'],
      priceRange: '$',
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      name: 'Heritage Kitchen',
      category: 'Fine Dining',
      cuisine: 'Fusion',
      rating: 4.9,
      reviews: 156,
      address: '321 Heritage Plaza, Uptown',
      phone: '(555) 456-7890',
      hours: '6:00 PM - 11:00 PM',
      specialties: ['Tasting Menu', 'Wine Pairing', 'Seasonal Dishes'],
      certifications: ['Fine Dining Certified', 'Sommelier Available'],
      priceRange: '$$$$',
      image: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const markets = [
    {
      name: 'Central Farmers Market',
      address: '100 Market Square',
      hours: 'Saturdays 8:00 AM - 2:00 PM',
      specialties: ['Fresh Produce', 'Local Honey', 'Organic Vegetables']
    },
    {
      name: 'Spice Bazaar',
      address: '200 Spice Lane',
      hours: 'Daily 9:00 AM - 7:00 PM',
      specialties: ['Traditional Spices', 'Dried Fruits', 'Herbs']
    }
  ];

  const categories = ['all', 'Traditional', 'Healthy', 'Street Food', 'Fine Dining'];
  const ratings = ['all', '4.5+', '4.0+', '3.5+'];

  const filteredRestaurants = restaurants.filter(restaurant => {
    const categoryMatch = selectedCategory === 'all' || restaurant.category === selectedCategory;
    const ratingMatch = selectedRating === 'all' || 
      (selectedRating === '4.5+' && restaurant.rating >= 4.5) ||
      (selectedRating === '4.0+' && restaurant.rating >= 4.0) ||
      (selectedRating === '3.5+' && restaurant.rating >= 3.5);
    return categoryMatch && ratingMatch;
  });

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
        <div className="text-center mb-12">
          <Utensils className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Dining Guide</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the best restaurants, markets, and local food specialties in our city
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <Filter className="h-5 w-5 text-gray-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Filter Options</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Rating</label>
              <select
                value={selectedRating}
                onChange={(e) => setSelectedRating(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {ratings.map(rating => (
                  <option key={rating} value={rating}>
                    {rating === 'all' ? 'All Ratings' : `${rating} Stars`}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Restaurants */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Restaurants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredRestaurants.map((restaurant) => (
              <div key={restaurant.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{restaurant.name}</h3>
                    <span className="text-lg font-bold text-blue-600">{restaurant.priceRange}</span>
                  </div>
                  <p className="text-gray-600 mb-2">{restaurant.cuisine}</p>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex mr-2">
                      {renderStars(restaurant.rating)}
                    </div>
                    <span className="text-sm font-medium text-gray-900">{restaurant.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({restaurant.reviews} reviews)</span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {restaurant.address}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="h-4 w-4 mr-2" />
                      {restaurant.phone}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {restaurant.hours}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {restaurant.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {restaurant.certifications.map((cert, index) => (
                      <span
                        key={index}
                        className="flex items-center px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                      >
                        <Award className="h-3 w-3 mr-1" />
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Markets */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Local Markets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {markets.map((market, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{market.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {market.address}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    {market.hours}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Available Items</h4>
                  <div className="flex flex-wrap gap-2">
                    {market.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiningGuidePage;