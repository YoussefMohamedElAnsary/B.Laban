import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';

function AdminMenuForm({ onItemAdded }) {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name_en: '',
    description_en: '',
    name_ar: '',
    description_ar: '',
    price: '',
    category: '',
    image: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  // Basic auth check (replace with real admin logic)
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  if (!isAuthenticated) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!form.name_en || !form.name_ar || !form.price || !form.category) {
      setError(t('English and Arabic name, price, and category are required.'));
      return;
    }
    setLoading(true);
    try {
      await addDoc(collection(db, 'menuItems'), {
        ...form,
        price: parseFloat(form.price),
        createdAt: new Date()
      });
      setSuccess(t('Menu item added!'));
      setForm({ name_en: '', description_en: '', name_ar: '', description_ar: '', price: '', category: '', image: '' });
      if (onItemAdded) onItemAdded();
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8 my-8">
      <h2 className="text-2xl font-bold mb-4 text-coral">{t('Add New Menu Item')}</h2>
      {error && <div className="mb-4 text-red-500">{error}</div>}
      {success && <div className="mb-4 text-green-600">{success}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">{t('Name (English)')} *</label>
          <input type="text" name="name_en" value={form.name_en} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
        </div>
        <div>
          <label className="block mb-1 font-semibold">{t('Description (English)')}</label>
          <textarea name="description_en" value={form.description_en} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block mb-1 font-semibold">{t('Name (Arabic)')} *</label>
          <input type="text" name="name_ar" value={form.name_ar} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
        </div>
        <div>
          <label className="block mb-1 font-semibold">{t('Description (Arabic)')}</label>
          <textarea name="description_ar" value={form.description_ar} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block mb-1 font-semibold">{t('Price (EGP)')} *</label>
          <input type="number" name="price" value={form.price} onChange={handleChange} className="w-full border px-3 py-2 rounded" required min="0" step="0.01" />
        </div>
        <div>
          <label className="block mb-1 font-semibold">{t('Category')} *</label>
          <input type="text" name="category" value={form.category} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
        </div>
        <div>
          <label className="block mb-1 font-semibold">{t('Image (emoji or URL)')}</label>
          <input type="text" name="image" value={form.image} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        </div>
        <button type="submit" className="w-full bg-coral text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors" disabled={loading}>
          {loading ? t('Adding...') : t('Add Menu Item')}
        </button>
      </form>
    </div>
  );
}

export default AdminMenuForm; 