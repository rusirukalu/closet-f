import { useEffect, useState } from 'react';
import api from '../utils/api';

const UserDashboard = () => {
  const [preferences, setPreferences] = useState({ style: '', color: '', occasion: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchPreferences = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await api.get("/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        setPreferences(response.data.preferences || {
          style: "",
          color: "",
          occasion: "",
        });
      } catch (error) {
        console.error("Error fetching preferences:", error);
        // Consider handling the error, e.g., by setting an error message in state
      }
    };
  
    fetchPreferences();
  }, []);

  const handleChange = (e) => {
    setPreferences({ ...preferences, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put('/user/profile', { preferences });
      setMessage('Preferences updated');
    } catch (error) {
      setMessage('Error updating preferences');
      console.error('Error:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">User Dashboard</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <label className="block text-gray-700 mb-2">Style</label>
        <input type="text" name="style" value={preferences.style} onChange={handleChange} className="w-full px-3 py-2 border rounded" />

        <label className="block text-gray-700 mb-2 mt-4">Color</label>
        <input type="text" name="color" value={preferences.color} onChange={handleChange} className="w-full px-3 py-2 border rounded" />

        <label className="block text-gray-700 mb-2 mt-4">Occasion</label>
        <input type="text" name="occasion" value={preferences.occasion} onChange={handleChange} className="w-full px-3 py-2 border rounded" />

        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Update Preferences</button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default UserDashboard;
