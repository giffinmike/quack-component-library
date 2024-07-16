import React from 'react';
import Card from '../Card/Card';
import ProgressBar from '../ProgressBar/ProgressBar';
import Alert from '../Alert/Alert';
import Table from '../Table/Table';
import Button from '../Button/Button';
import './Dashboard.module.css';
const Dashboard = () => {
    const tableData = [
        ['1', 'John Doe', 'Active'],
        ['2', 'Jane Smith', 'Inactive'],
    ];
    return (React.createElement("div", { className: "dashboard" },
        React.createElement(Alert, { message: "Welcome to the Dashboard", type: "success" }),
        React.createElement("div", { className: "dashboard-cards" },
            React.createElement(Card, { title: "Card 1", description: "This is the content of card 1.", imageUrl: "" },
                React.createElement("h3", null, "Card 1"),
                React.createElement("p", null, "This is the content of card 1.")),
            React.createElement(Card, { title: "Card 2", description: "Progress Bar", imageUrl: "" },
                React.createElement("h3", null, "Card 2"),
                React.createElement(ProgressBar, { progress: 70 }))),
        React.createElement(Button, { onClick: () => console.log('Button clicked') }, "Click me"),
        React.createElement(Table, { data: tableData, columns: ['ID', 'Name', 'Status'] })));
};
export default Dashboard;
//# sourceMappingURL=Dashboard.js.map