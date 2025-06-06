import React from 'react';
import '../styles/HealthPackageSection.css';

interface PackageProps {
  name: string;
  description: string;
  icon: string;
}

const PackageItem: React.FC<PackageProps> = ({ name, description, icon }) => {
  return (
    <div className="package-item">
      <div className="package-icon">{icon}</div>
      <div className="package-details">
        <div className="package-header">
          <div className="package-name">{name}</div>
          <div className="more-options">•••</div>
        </div>
        <div className="package-description">{description}</div>
      </div>
    </div>
  );
};
const HealthPackageSection: React.FC = () => {
    const packages = [
      {
        name: 'Basic Health Package',
        description: 'Ideal for individuals aged 21- 40...',
        icon: 'F',
      },
      {
        name: 'Fever Panel',
        description: 'Ideal for individuals aged 21- 40...',
        icon: 'F',
      },
    ];
    return (
        <div className="package-section">
          <div className="section-header">
            <h2>Health Package</h2>
            <a href="#" className="view-all">
              View all →
            </a>
          </div>
          <div className="package-list">
            {packages.map((pkg, index) => (
              <PackageItem key={index} {...pkg} />
            ))}
          </div>
        </div>
      );
    };
    
    export default HealthPackageSection;