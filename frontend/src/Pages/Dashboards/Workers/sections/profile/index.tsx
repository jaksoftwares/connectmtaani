import React from 'react';
import ProfileOverview from './ProfileOverview';
import EditProfile from './EditProfile';
import ResumeManager from './ResumeManager';
import PrivacySettings from './PrivacySettings';

const Profile: React.FC = () => {
  return (
    <div className="space-y-6">
      <ProfileOverview />
      <EditProfile />
      <ResumeManager />
      <PrivacySettings />
    </div>
  );
};

export default Profile;
