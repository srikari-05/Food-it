import React, { useState } from 'react';
import { Shield, MapPin, AlertTriangle, Camera, Clock } from 'lucide-react';

const ReportSafetyPage: React.FC = () => {
  const [formData, setFormData] = useState({
    reporterName: '',
    reporterEmail: '',
    reporterPhone: '',
    establishmentName: '',
    establishmentAddress: '',
    establishmentType: '',
    dateObserved: '',
    timeObserved: '',
    concernType: '',
    urgency: 'medium',
    description: '',
    actionTaken: '',
    followUp: 'yes'
  });

  const concernTypes = [
    'Poor food handling practices',
    'Unsanitary conditions',
    'Temperature control issues',
    'Pest infestation',
    'Improper food storage',
    'Contaminated surfaces',
    'Inadequate handwashing facilities',
    'Employee hygiene issues',
    'Expired or spoiled food',
    'Cross-contamination',
    'Other'
  ];

  const establishmentTypes = [
    'Restaurant',
    'Fast food establishment',
    'Food truck',
    'Grocery store',
    'Market/Vendor',
    'Catering service',
    'School cafeteria',
    'Hospital/Healthcare food service',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your report. We will investigate this matter and take appropriate action.');
    // Reset form
    setFormData({
      reporterName: '',
      reporterEmail: '',
      reporterPhone: '',
      establishmentName: '',
      establishmentAddress: '',
      establishmentType: '',
      dateObserved: '',
      timeObserved: '',
      concernType: '',
      urgency: 'medium',
      description: '',
      actionTaken: '',
      followUp: 'yes'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Report Food Safety Concern</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us maintain food safety standards by reporting violations or concerns
          </p>
        </div>

        {/* Information Box */}
        <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6 mb-8">
          <div className="flex items-center">
            <AlertTriangle className="h-6 w-6 text-orange-500 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-orange-800">When to Report</h3>
              <p className="text-orange-700">
                Report any food safety violations or concerns you observe at restaurants, 
                markets, or other food establishments. Anonymous reporting is available.
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          {/* Reporter Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Reporter Information (Optional)</h2>
            <p className="text-gray-600 mb-4">
              Providing your contact information helps us follow up if we need additional details. 
              This information is kept confidential.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="reporterName"
                  value={formData.reporterName}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="reporterEmail"
                  value={formData.reporterEmail}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="reporterPhone"
                  value={formData.reporterPhone}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>
          </section>

          {/* Establishment Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <MapPin className="h-6 w-6 mr-2" />
              Establishment Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Establishment Name *
                </label>
                <input
                  type="text"
                  name="establishmentName"
                  value={formData.establishmentName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type of Establishment *
                </label>
                <select
                  name="establishmentType"
                  value={formData.establishmentType}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Select type</option>
                  {establishmentTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address *
                </label>
                <input
                  type="text"
                  name="establishmentAddress"
                  value={formData.establishmentAddress}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Street address, city, state, zip code"
                />
              </div>
            </div>
          </section>

          {/* Incident Details */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Clock className="h-6 w-6 mr-2" />
              Incident Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date Observed *
                </label>
                <input
                  type="date"
                  name="dateObserved"
                  value={formData.dateObserved}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time Observed
                </label>
                <input
                  type="time"
                  name="timeObserved"
                  value={formData.timeObserved}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type of Concern *
                </label>
                <select
                  name="concernType"
                  value={formData.concernType}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Select concern type</option>
                  {concernTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Urgency Level *
                </label>
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="low">Low - Minor violation</option>
                  <option value="medium">Medium - Moderate concern</option>
                  <option value="high">High - Serious violation</option>
                  <option value="critical">Critical - Immediate risk</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Detailed Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Provide a detailed description of what you observed. Include specific locations, times, and behaviors if applicable."
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Action Taken (if any)
              </label>
              <textarea
                name="actionTaken"
                value={formData.actionTaken}
                onChange={handleInputChange}
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Did you speak with management? Did they address the issue? What was their response?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Would you like follow-up on this report?
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="followUp"
                    value="yes"
                    checked={formData.followUp === 'yes'}
                    onChange={handleInputChange}
                    className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300"
                  />
                  <span className="text-gray-700">Yes, please follow up</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="followUp"
                    value="no"
                    checked={formData.followUp === 'no'}
                    onChange={handleInputChange}
                    className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300"
                  />
                  <span className="text-gray-700">No follow-up needed</span>
                </label>
              </div>
            </div>
          </section>

          {/* Photo Upload Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Camera className="h-6 w-6 mr-2" />
              Supporting Evidence
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                If you have photos or other evidence that support your report, please describe them here. 
                You can submit physical evidence to the Health Department office.
              </p>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                rows={3}
                placeholder="Describe any photos, receipts, or other evidence you have..."
              />
            </div>
          </section>

          {/* Privacy Notice */}
          <div className="bg-orange-50 rounded-lg p-6">
            <h3 className="font-semibold text-orange-800 mb-2">Privacy & Follow-up</h3>
            <p className="text-orange-700 text-sm mb-2">
              Reports are investigated by the Health Department. Your identity will be kept confidential 
              unless disclosure is required by law or for enforcement purposes.
            </p>
            <p className="text-orange-700 text-sm">
              You will receive a case number via email (if provided) that you can use to check the status 
              of your report.
            </p>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Submit Safety Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportSafetyPage;