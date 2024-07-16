import React from 'react';
import Card from '../Card/Card';
import ProgressBar from '../ProgressBar/ProgressBar';
import Alert from '../Alert/Alert';
import Table from '../Table/Table';
import Button from '../Button/Button';
import './Dashboard.module.css';

const Dashboard: React.FC = () => {
  const tableData = [
    ['1', 'John Doe', 'Active'],
    ['2', 'Jane Smith', 'Inactive'],
  ];

  return (
    <div className="dashboard">
      <Alert message="Welcome to the Dashboard" type="success" />
      <div className="dashboard-cards">
        <Card title="Card 1" description="This is the content of card 1." imageUrl="">
          <h3>Card 1</h3>
          <p>This is the content of card 1.</p>
        </Card>
        <Card title="Card 2" description="Progress Bar" imageUrl="">
          <h3>Card 2</h3>
          <ProgressBar progress={70} />
        </Card>
      </div>
      <Button onClick={() => console.log('Button clicked')}>Click me</Button>
      <Table data={tableData} columns={['ID', 'Name', 'Status']} />
    </div>
  );
};

export default Dashboard;
