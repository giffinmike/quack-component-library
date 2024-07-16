import React from 'react';
import Avatar from '../Avatar/Avatar';
import Badge from '../Badge/Badge';
import Card from '../Card/Card';
import Button from '../Button/Button';
import './ProfileCard.module.css';

interface ProfileCardProps {
  name: string;
  status: string;
  avatarUrl: string;
  onMessageClick: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, status, avatarUrl, onMessageClick }) => {
  return (
    <Card>
      <div className="profile-card">
        <Avatar src={avatarUrl} alt={name} size={100} />
        <h3>{name}</h3>
        <Badge label={status} />
        <Button label="Message" onClick={onMessageClick} />
      </div>
    </Card>
  );
};

export default ProfileCard;
