import React from 'react';
import { useTranslation } from 'react-i18next';

function MenuItem({ item, t, onEdit, onDelete, isAdmin }) {
  const { i18n } = useTranslation();
  // Check for admin privileges
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const isAdminUser = localStorage.getItem('isAdmin') === 'true';

  // Language-aware display
  const isArabic = i18n.language === 'ar';
  const displayName = isArabic ? (item.name_ar || item.name_en) : (item.name_en || item.name_ar);
  const displayDescription = isArabic ? (item.description_ar || item.description_en) : (item.description_en || item.description_ar);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
      {/* Item Image */}
      <div className="h-32 bg-gray-100 flex items-center justify-center">
        <img className="w-full h-full object-cover" src={item.image || '🍽️'} alt={displayName}/>
      </div>
      {/* Item Details */}
      <div className="p-3 flex flex-col h-full">
        <div className="flex justify-between items-start mb-1 gap-2 flex-wrap">
          <h3 className="text-sm font-bold text-gray-800 flex-1 min-w-0 break-words">{displayName}</h3>
          <span className="text-lg font-bold text-coral flex-shrink-0 whitespace-nowrap">{item.price} {t('EGP')}</span>
        </div>
        <p className="text-gray-600 leading-tight mb-2 break-words flex-1 text-xs">
          {displayDescription}
        </p>
        <button className="w-full bg-coral text-white py-1 px-3 rounded font-semibold hover:bg-orange-600 transition-colors duration-300 mt-auto text-sm">
          {t('Add to Order')}
        </button>
        {/* Admin buttons - only show for admin users */}
        {isAuthenticated && isAdminUser && (
          <div className="flex gap-1 mt-2">
            <button onClick={() => onEdit(item)} className="flex-1 bg-blue-500 text-white py-1 px-2 rounded text-xs hover:bg-blue-600 transition-colors">Edit</button>
            <button onClick={() => onDelete(item)} className="flex-1 bg-red-500 text-white py-1 px-2 rounded text-xs hover:bg-red-600 transition-colors">Delete</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MenuItem; 