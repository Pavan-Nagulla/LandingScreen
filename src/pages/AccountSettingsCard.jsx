import React from 'react';
import './AccountSettingsCard.css';

const AccountSettingsCard = () => {
  return (
    <div className="account-container">
      <div className="account-content">
        <div className="account-card">
          <h4 className="title">Account Settings</h4>
          <div className="profile-section">
            <div className="avatar-wrapper">
              <img
                src="https://i.pravatar.cc/150?img=47"
                alt="Profile"
                className="avatar"
              />
              <div className="camera-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#fff"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.5 2a.5.5 0 0 1 .5.5V3h1.5A1.5 1.5 0 0 1 14 4.5v7A1.5 1.5 0 0 1 12.5 13h-9A1.5 1.5 0 0 1 2 11.5v-7A1.5 1.5 0 0 1 3.5 3H5v-.5a.5.5 0 0 1 1 0V3h4v-.5a.5.5 0 0 1 .5-.5zM3.5 4A.5.5 0 0 0 3 4.5v7a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-9z"/>
                  <path d="M8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
                </svg>
              </div>
            </div>
            <div className="user-info">
              <div className="name">Marry Doe</div>
              <div className="email">Marry@Gmail.Com</div>
            </div>
          </div>
          <p className="description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsCard;