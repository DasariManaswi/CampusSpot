import React from 'react';
import { Compass, GraduationCap, Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="header-bar">
      <div className="logo-group">
        <div className="logo-icon-bg">
          <Compass size={24} />
        </div>
        <div>
          <h1 className="logo-title">CampusSpot</h1>
        </div>
      </div>

      <div className="campus-badge">
        <GraduationCap size={15} />
        <span>Central Campus</span>
      </div>
    </header>
  );
}
