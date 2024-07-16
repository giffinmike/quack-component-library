import React, { useState } from 'react';
import './Tabs.module.css';

interface TabsProps {
  tabs: { label: string; content: React.ReactNode }[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div style={{ display: 'flex', cursor: 'pointer' }}>
        {tabs.map((tab, index) => (
          <div key={index} onClick={() => setActiveTab(index)} style={{ padding: '10px', borderBottom: activeTab === index ? '2px solid #333' : 'none' }}>
            {tab.label}
          </div>
        ))}
      </div>
      <div>{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
