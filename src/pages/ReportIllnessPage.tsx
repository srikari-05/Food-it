import React, { useState } from 'react';
import { AlertTriangle, Calendar, Clock, MapPin, User, Phone, Mail } from 'lucide-react';

const ReportIllnessPage: React.FC = () => {
  const [formData, setFormData] = useState({
    reporterName: '',
    reporterEmail: '',
    reporterPhone: '',
    relationship: 'self',
    patientName: '',
    patientAge: '',
    symptomsStartDate: '',
    symptomsStartTime: '',
    symptoms: [] as string[],
    severity: 'mild',
    establishmentName: '',
    establishmentAddress: '',
    mealDate: '',
    mealTime: '',
    foodsEaten: '',
    others: '',
    additionalInfo: ''
  });

  const symptoms = [
    'Nausea', 'Vomiting', 'Diarrhea', 'Stomach cramps', 'Fever', 'Headache', 
    'Muscle aches', 'Dehydration', 'Loss of appetite', 'Fatigue'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSymptomChange = (symptom: string) => {
    setFormData(prev => ({
      ...prev,
      symptoms: prev.symptoms.includes(symptom)
        ? prev.symptoms.filter(s => s !== symptom)
        : [...prev.symptoms, symptom]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your report. We will review it and follow up if necessary.');
    // Reset form
    setFormData({
      reporterName: '',
      reporterEmail: '',
      reporterPhone: '',
      relationship: 'self',
      patientName: '',
      patientAge: '',
      symptomsStartDate: '',
      symptomsStartTime: '',
      symptoms: [],
      severity: 'mild',
      establishmentName: '',
      establishmentAddress: '',
      mealDate: '',
      mealTime: '',
      foodsEaten: '',
      others: '',
      additionalInfo: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <AlertTriangle className="h-12 w-12 text-red-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Report Food-Related Illness</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us track and prevent foodborne illnesses by reporting your experience
          </p>
        </div>

        {/* Emergency Notice */}
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-8">
          <div className="flex items-center">
            <AlertTriangle className="h-6 w-6 text-red-500 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-red-800">Medical Emergency?</h3>
              <p className="text-red-700">
                If you are experiencing severe symptoms such as persistent vomiting, high fever, 
                severe dehydration, or difficulty breathing, please call 911 or visit the nearest 
                emergency room immediately.
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          {/* Reporter Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <User className="h-6 w-6 mr-2" />
              Reporter Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="reporterName"
                  value={formData.reporterName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="reporterEmail"
                  value={formData.reporterEmail}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="reporterPhone"
                  value={formData.reporterPhone}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Relationship to Patient *
                </label>
                <select
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="self">Reporting for myself</option>
                  <option value="family">Family member</option>
                  <option value="friend">Friend</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </section>

          {/* Patient Information */}
          {formData.relationship !== 'self' && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Patient Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Patient Name *
                  </label>
                  <input
                    type="text"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Patient Age
                  </label>
                  <input
                    type="number"
                    name="patientAge"
                    value={formData.patientAge}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </section>
          )}

          {/* Illness Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Calendar className="h-6 w-6 mr-2" />
              Illness Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  When did symptoms start? *
                </label>
                <input
                  type="date"
                  name="symptomsStartDate"
                  value={formData.symptomsStartDate}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time symptoms started
                </label>
                <input
                  type="time"
                  name="symptomsStartTime"
                  value={formData.symptomsStartTime}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Symptoms experienced (select all that apply) *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {symptoms.map((symptom) => (
                  <label key={symptom} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.symptoms.includes(symptom)}
                      onChange={() => handleSymptomChange(symptom)}
                      className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">{symptom}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Severity of illness *
              </label>
              <select
                name="severity"
                value={formData.severity}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="mild">Mild - Symptoms manageable at home</option>
                <option value="moderate">Moderate - Interfered with daily activities</option>
                <option value="severe">Severe - Required medical attention</option>
              </select>
            </div>
          </section>

          {/* Food Establishment */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <MapPin className="h-6 w-6 mr-2" />
              Food Establishment Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Restaurant/Establishment Name
                </label>
                <input
                  type="text"
                  name="establishmentName"
                  value={formData.establishmentName}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="establishmentAddress"
                  value={formData.establishmentAddress}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of meal
                </label>
                <input
                  type="date"
                  name="mealDate"
                  value={formData.mealDate}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time of meal
                </label>
                <input
                  type="time"
                  name="mealTime"
                  value={formData.mealTime}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Foods eaten (be as specific as possible)
              </label>
              <textarea
                name="foodsEaten"
                value={formData.foodsEaten}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="List all foods and beverages consumed..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Did others eat the same food and get sick?
              </label>
              <textarea
                name="others"
                value={formData.others}
                onChange={handleInputChange}
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe if others were affected..."
              />
            </div>
          </section>

          {/* Additional Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Information</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Any additional details that might be helpful
              </label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Include any other relevant information..."
              />
            </div>
          </section>

          {/* Privacy Notice */}
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="font-semibold text-blue-800 mb-2">Privacy Notice</h3>
            <p className="text-blue-700 text-sm">
              This information will be used by the Health Department to investigate potential 
              foodborne illness outbreaks. Your personal information will be kept confidential 
              and used only for public health purposes.
            </p>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportIllnessPage;