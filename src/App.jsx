

import React from 'react';
import Profile from './Component/ProfileComponent';
import profilesData from '../Data/Profiles.json';

const App = () => {
  const profiles = profilesData.profiles;

  return (
    <div className="app">
      <h1>Profiles</h1>
      <div className="profiles">
        {profiles.map(profile => (
          <Profile key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default App;
