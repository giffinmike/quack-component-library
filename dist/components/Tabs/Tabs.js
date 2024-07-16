import React, { useState } from 'react';
import './Tabs.module.css';
const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);
    return (React.createElement("div", null,
        React.createElement("div", { style: { display: 'flex', cursor: 'pointer' } }, tabs.map((tab, index) => (React.createElement("div", { key: index, onClick: () => setActiveTab(index), style: { padding: '10px', borderBottom: activeTab === index ? '2px solid #333' : 'none' } }, tab.label)))),
        React.createElement("div", null, tabs[activeTab].content)));
};
export default Tabs;
//# sourceMappingURL=Tabs.js.map