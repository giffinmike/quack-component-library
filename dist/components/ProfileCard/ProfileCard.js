import React from 'react';
import Avatar from '../Avatar/Avatar';
import Badge from '../Badge/Badge';
import Card from '../Card/Card';
import Button from '../Button/Button';
import './ProfileCard.module.css';
const ProfileCard = ({ name, status, avatarUrl, onMessageClick }) => {
    return (React.createElement(Card, null,
        React.createElement("div", { className: "profile-card" },
            React.createElement(Avatar, { src: avatarUrl, alt: name, size: 100 }),
            React.createElement("h3", null, name),
            React.createElement(Badge, { label: status }),
            React.createElement(Button, { label: "Message", onClick: onMessageClick }))));
};
export default ProfileCard;
//# sourceMappingURL=ProfileCard.js.map