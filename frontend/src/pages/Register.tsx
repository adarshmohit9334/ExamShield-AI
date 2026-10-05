import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authService } from '../services/authService';
import { Shield } from 'lucide-react';

export const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', role: 'STUDENT' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await authService.register(formData);
      setSuccess(true);
      setTimeout(() => navigate('/login'), 2000);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <div className="flex flex-col items-center">
          <div className="bg-indigo-600 p-3 rounded-full">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create an Account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
          {error && <div className="text-red-500 text-sm text-center p-2 bg-red-50 rounded">{error}</div>}
          {success && <div className="text-green-500 text-sm text-center p-2 bg-green-50 rounded">Registration successful! Redirecting...</div>}
          
          <div className="space-y-4">
            <input type="text" required placeholder="Username"
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={(e) => setFormData({...formData, username: e.target.value})} />
            
            <input type="email" required placeholder="Email address"
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={(e) => setFormData({...formData, email: e.target.value})} />
            
            <input type="password" required placeholder="Password"
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={(e) => setFormData({...formData, password: e.target.value})} />
              
            <select
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
            >
              <option value="STUDENT">Student</option>
              <option value="EXAMINER">Examiner</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>
          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Register
            </button>
          </div>
          <div className="text-center text-sm">
            Already have an account? <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
