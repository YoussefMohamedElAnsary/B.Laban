import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import MenuItem from './MenuItem';
import AdminMenuForm from './AdminMenuForm';
import Footer from './Footer';
import axios from 'axios';

function Menu() {
  const { t, i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [menuItems, setMenuItems] = useState([]);
  const [translatedMenuItems, setTranslatedMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const originalMenuItems = useRef([]);

  const fetchMenuItems = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, 'menuItems'));
    const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setMenuItems(items);
    originalMenuItems.current = items;
    setLoading(false);
  };

  // Translate a single string
  const translateText = async (text, targetLang = 'ar') => {
    if (!text) return '';
    try {
      const res = await axios.post('https://libretranslate.de/translate', {
        q: text,
        source: 'en',
        target: targetLang,
        format: 'text'
      }, {
        headers: { 'accept': 'application/json', 'Content-Type': 'application/json' }
      });
      return res.data.translatedText;
    } catch (err) {
      return text; // fallback to original if error
    }
  };

  // Translate all menu items
  const translateMenuItems = async (items) => {
    const translated = await Promise.all(items.map(async (item) => {
      const [name, description] = await Promise.all([
        translateText(item.name, 'ar'),
        translateText(item.description, 'ar')
      ]);
      return { ...item, name, description };
    }));
    setTranslatedMenuItems(translated);
  };

  // Listen for language change
  useEffect(() => {
    fetchMenuItems();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const handleLanguageChange = async (lng) => {
      if (lng === 'ar') {
        setLoading(true);
        await translateMenuItems(originalMenuItems.current);
        setLoading(false);
      } else {
        setTranslatedMenuItems([]);
      }
    };
    i18n.on('languageChanged', handleLanguageChange);
    // Initial check
    if (i18n.language === 'ar') {
      handleLanguageChange('ar');
    }
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
    // eslint-disable-next-line
  }, [i18n]);

  // Extract unique categories from menuItems
  const itemsToShow = i18n.language === 'ar' && translatedMenuItems.length > 0 ? translatedMenuItems : menuItems;
  const menuCategories = [
    { id: 'all', name: t('All Items') },
    ...Array.from(new Set(itemsToShow.map(item => item.category))).map(cat => ({ id: cat, name: t(cat) }))
  ];

  const filteredItems = activeCategory === 'all'
    ? itemsToShow
    : itemsToShow.filter(item => item.category === activeCategory);

  // Check for admin privileges
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  
  // Debug logging
  // console.log('Menu Component - Auth Status:', { isAuthenticated, isAdmin });

  return (
    <div>
      {/* <Navbar /> */}
      {/* Admin Add Menu Form - only show for admin users */}
      {isAuthenticated && isAdmin && <AdminMenuForm onItemAdded={fetchMenuItems} />}
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-400 to-blue-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('Our Menu')}</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            {t('Discover our delicious selection of dairy products, desserts, and traditional favorites')}
          </p>
        </div>
      </div>
      {/* Category Filter */}
      <div className="bg-white py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-coral text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Menu Items Grid */}
      <div className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="text-center text-xl text-coral py-12">{t('Loading menu...')}</div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filteredItems.map((item) => (
                <MenuItem key={item.id} item={item} t={t} isAdmin={isAdmin} />
              ))}
            </div>
          )}
          {/* Empty State */}
          {filteredItems.length === 0 && !loading && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{t('No menu items found')}</h3>
            </div>
          )}
        </div>
      </div>
      {/* Contact CTA */}
      <div className="bg-gray-800 text-white py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('Have Questions?')}
          </h2>
          <p className="text-xl mb-8">
            {t('Contact us for custom orders or dietary requirements')}
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-coral text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            {t('Contact Us')}
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Menu;
