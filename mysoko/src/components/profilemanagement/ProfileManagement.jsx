import React, { useState } from 'react';
import Button from '../button';

const ProfileManagement = () => {
  const [profile, setProfile] = useState({
    name: 'Retailer Name',
    email: 'retailer@example.com',
    password: '',
    profilePicture: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleFileChange = (e) => {
    setProfile({ ...profile, profilePicture: URL.createObjectURL(e.target.files[0]) });
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    // Handle profile update (e.g., send data to backend)
    console.log(profile);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Profile Management</h2>
      <form onSubmit={handleUpdateProfile}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="profilePicture">Profile Picture</label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
          />
          {profile.profilePicture && (
            <img
              src={profile.profilePicture}
              alt="Profile"
              className="mt-4 w-32 h-32 rounded-full object-cover"
            />
          )}
        </div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={profile.name}
          onChange={handleInputChange}
          className="mb-2 p-2 border rounded w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={profile.email}
          onChange={handleInputChange}
          className="mb-2 p-2 border rounded w-full"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={profile.password}
          onChange={handleInputChange}
          className="mb-2 p-2 border rounded w-full"
        />
        <Button type="submit" isLoading={false}>
          Update Profile
        </Button>
      </form>
    </div>
  );
};

export default ProfileManagement;