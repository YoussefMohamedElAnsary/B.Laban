import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';
import Footer from './Footer';

function Register() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password || !form.confirmPassword) {
      setError(t('Please fill in all fields.'));
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError(t('Passwords do not match.'));
      return;
    }
    setError('');
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        email: form.email,
        createdAt: new Date()
      });
      navigate('/login');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-coral mb-6">{t('Register')}</h2>
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
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">{t('Confirm Password')}</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent transition-colors"
              placeholder={t('Confirm your password')}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-coral text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
          >
            {t('Register')}
          </button>
        </form>
        <div className="mt-6 text-center">
          <span className="text-gray-600">{t('Already have an account?')} </span>
          <Link to="/login" className="text-coral font-semibold hover:underline">{t('Sign In')}</Link>
        </div>
      </div>
    </div>
  );
}

export default Register; 