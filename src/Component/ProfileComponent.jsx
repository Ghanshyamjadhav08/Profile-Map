import React, { useState } from 'react';

const Profile = ({ profile }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="profile" onClick={toggleDetails}>
      <img src={`./public/${profile.photo}`} style={{ width: '150px', height: '200px' }} alt={profile.name} />
      {showDetails && (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
          <p>{profile.address}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
