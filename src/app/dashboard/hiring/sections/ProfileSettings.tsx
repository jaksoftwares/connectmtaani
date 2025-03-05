import React, { useState } from 'react';
import Image from 'next/image';

type SocialLinks = {
  twitter: string;
  facebook: string;
  linkedin: string;
  instagram: string;
};

type ProfileData = {
  fullName: string;
  username: string;
  bio: string;
  location: string;
  dateOfBirth: string;
  profilePicture: string;
  coverPhoto: string;
  socialLinks: SocialLinks;
};

const ProfileSettings: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileData>({
    fullName: '',
    username: '',
    bio: '',
    location: '',
    dateOfBirth: '',
    profilePicture: '',
    coverPhoto: '',
    socialLinks: {
      twitter: '',
      facebook: '',
      linkedin: '',
      instagram: '',
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSocialLinkChange = (platform: keyof SocialLinks, value: string) => {
    setProfileData((prev) => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [platform]: value,
      },
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof ProfileData) => {
    if (e.target.files && e.target.files[0]) {
      const fileURL = URL.createObjectURL(e.target.files[0]);
      setProfileData((prev) => ({
        ...prev,
        [field]: fileURL,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updated Profile Data:', profileData);
    alert('Profile updated successfully!');
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Profile Settings</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Profile Picture */}
        <div className="flex items-center space-x-4">
          <label className="block text-gray-700">Profile Picture</label>
          <div>
            <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, 'profilePicture')} />
            {profileData.profilePicture && (
              <div className="relative w-16 h-16 mt-2">
                <Image
                  src={profileData.profilePicture}
                  alt="Profile Preview"
                  className="rounded-full object-cover"
                  fill
                  priority
                />
              </div>
            )}
          </div>
        </div>

        {/* Cover Photo */}
        <div className="flex flex-col space-y-2">
          <label className="block text-gray-700">Cover Photo</label>
          <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, 'coverPhoto')} />
          {profileData.coverPhoto && (
            <div className="relative w-full h-32 mt-2">
              <Image
                src={profileData.coverPhoto}
                alt="Cover Preview"
                className="rounded-lg object-cover"
                fill
                priority
              />
            </div>
          )}
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={profileData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none"
            placeholder="Enter your full name"
          />
        </div>

        {/* Username */}
        <div>
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            value={profileData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none"
            placeholder="Enter your username"
          />
        </div>

        {/* Bio */}
        <div>
          <label className="block text-gray-700">Bio</label>
          <textarea
            name="bio"
            value={profileData.bio}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none"
            placeholder="Tell us about yourself"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={profileData.location}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none"
            placeholder="Enter your location"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-gray-700">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={profileData.dateOfBirth}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none"
          />
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Social Links</h3>
          {Object.keys(profileData.socialLinks).map((platform) => (
            <div key={platform} className="mb-4">
              <label className="block text-gray-700 capitalize">{platform}</label>
              <input
                type="url"
                value={profileData.socialLinks[platform as keyof SocialLinks]}
                onChange={(e) => handleSocialLinkChange(platform as keyof SocialLinks, e.target.value)}
                className="w-full px-4 py-2 border rounded focus:outline-none"
                placeholder={`Enter your ${platform} profile URL`}
              />
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfileSettings;
