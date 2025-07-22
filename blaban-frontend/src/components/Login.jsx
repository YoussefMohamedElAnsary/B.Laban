import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';
import Footer from './Footer';

function Login() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError(t('Please fill in all fields.'));
      return;
    }
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, form.email, form.password);
      
      // Check if user has admin role
      const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));
      const userData = userDoc.data();
      const isAdmin = userData?.role === 'admin';
      
      console.log('Login Debug:', { 
        email: form.email, 
        userData, 
        isAdmin, 
        uid: userCredential.user.uid 
      });
      
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('isAdmin', isAdmin.toString());
      localStorage.setItem('userEmail', form.email);
      
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-coral mb-6">{t('Sign In')}</h2>
        {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">{t('Email')}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent transition-colors"
              placeholder={t('Enter your email')}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">{t('Password')}</label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent transition-colors"
              placeholder={t('Enter your password')}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-coral text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
          >
            {t('Sign In')}
          </button>
        </form>
        <div className="mt-6 text-center">
          <span className="text-gray-600">{t("Don't have an account?")} </span>
          <Link to="/register" className="text-coral font-semibold hover:underline">{t('Register')}</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login; 