import React from 'react';
import Avatar from '@mui/material/Avatar';
import './profileContentStyles.css';

const ProfileContent = () => {
  const user = {
    name: 'Rajib Mondal',
    avatar: 'assets/person/mydp.jpeg', // Replace with the actual path to the avatar image
    followers: 500,
    following: 300,
    posts: 50,
    bio: 'Software Developer | Nature Lover | Travel Enthusiast',
  };

  return (
    <div className="profile">
      <div className="profile-header">
      <Avatar alt={user.name} src={user.avatar} className="profile-avatar" style={{ width: '150px', height: '150px' }} /> 
        <div className="profile-header-details">
          <h2 className="profile-name">{user.name}</h2>
          <div className="profile-stats">
            <span className="profile-stat">
              {user.posts} Posts
            </span>
            <span className="profile-stat">
              {user.followers} Followers
            </span>
            <span className="profile-stat">
              {user.following} Following
            </span>
          </div>
        </div>
      </div>
      <p className="profile-bio">{user.bio}</p>
      <button className="edit-profile-button">Follow</button>
    </div>
  );
};

export default ProfileContent;
