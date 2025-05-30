import React from 'react';
import '../styles/Dashboard.css';
import Header from './Header';
import DoctorSection from './DoctorSection';
import MedicationSection from './MedicationSection';
import ProductSection from './ProductSection';
import HealthPackageSection from './HealthPackageSection';
import ConsultationSection from './ConsultationSection';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <Header />
      
<div className="dashboard-content">
    <div className="dashboard-main">
        <DoctorSection/>
        <div className="product-health-row">
            <ProductSection/>
            <HealthPackageSection/>
        </div>
    </div>
    <div className="dashboard-side">
       <MedicationSection/>
       <ConsultationSection/>
    </div>

</div>
    </div>
  );
};

export default Dashboard;