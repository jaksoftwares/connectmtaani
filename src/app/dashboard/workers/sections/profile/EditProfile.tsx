import React, { useState } from 'react';

const EditProfile: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    profession: 'Software Developer',
    location: 'Nairobi, Kenya',
    about: 'Experienced developer passionate about creating impactful software.',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profile updated:', formData);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full px-4 py-2 border rounded-md focus:ring-blue-600"
        />
        <input
          type="text"
          name="profession"
          value={formData.profession}
          onChange={handleChange}
          placeholder="Profession"
          className="w-full px-4 py-2 border rounded-md focus:ring-blue-600"
        />
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          className="w-full px-4 py-2 border rounded-md focus:ring-blue-600"
        />
        <textarea
          name="about"
          value={formData.about}
          onChange={handleChange}
          placeholder="About You"
          className="w-full px-4 py-2 border rounded-md focus:ring-blue-600"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
