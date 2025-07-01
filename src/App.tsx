import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import EducationPage from './pages/EducationPage';
import DiningGuidePage from './pages/DiningGuidePage';
import FoodSafetyPage from './pages/FoodSafetyPage';
import ReportIllnessPage from './pages/ReportIllnessPage';
import ReportSafetyPage from './pages/ReportSafetyPage';
import SuggestionsPage from './pages/SuggestionsPage';
import MapViewPage from './pages/MapViewPage';
import AdminDashboard from './pages/AdminDashboard';
import ReportsPage from './pages/ReportsPage';

export type Page = 
  | 'home' 
  | 'education' 
  | 'dining' 
  | 'safety' 
  | 'report-illness' 
  | 'report-safety' 
  | 'suggestions' 
  | 'map' 
  | 'admin' 
  | 'reports';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'education':
        return <EducationPage />;
      case 'dining':
        return <DiningGuidePage />;
      case 'safety':
        return <FoodSafetyPage />;
      case 'report-illness':
        return <ReportIllnessPage />;
      case 'report-safety':
        return <ReportSafetyPage />;
      case 'suggestions':
        return <SuggestionsPage />;
      case 'map':
        return <MapViewPage />;
      case 'admin':
        return <AdminDashboard onNavigate={setCurrentPage} />;
      case 'reports':
        return <ReportsPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="pt-16">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;