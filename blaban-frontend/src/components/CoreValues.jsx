import React from 'react';
import { useTranslation } from 'react-i18next';

export default function CoreValues() {
  const { t } = useTranslation();
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-blue-100 py-16 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-6 text-center drop-shadow-lg tracking-tight uppercase">
          {t('coreValues.title')}
        </h2>
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 w-full flex flex-col items-center mb-10 border border-blue-100">
          <ul className="mb-6 space-y-4 text-lg md:text-xl text-gray-700 w-full text-center">
            <li>
              <span className="inline-block font-bold text-blue-600 mr-2">1. {t('coreValues.peopleTitle')}</span>
              <span className="inline-block">{t('coreValues.people')}</span>
            </li>
            <li>
              <span className="inline-block font-bold text-blue-600 mr-2">2. {t('coreValues.innovationTitle')}</span>
              <span className="inline-block">{t('coreValues.innovation')}</span>
            </li>
            <li>
              <span className="inline-block font-bold text-blue-600 mr-2">3. {t('coreValues.qualityTitle')}</span>
              <span className="inline-block">{t('coreValues.quality')}</span>
            </li>
          </ul>
          <p className="text-center text-lg md:text-xl text-gray-800 font-medium mt-2">
            {t('coreValues.aim')}
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg px-8 py-6 min-w-[160px] border border-blue-100">
            <span className="text-5xl font-extrabold text-blue-700 mb-1 drop-shadow select-none" tabIndex="-1" aria-hidden="true">140+</span>
            <div className="text-base text-gray-500 mb-1">{t('coreValues.andMore')}</div>
            <div className="text-lg font-semibold text-blue-700">{t('coreValues.branch')}</div>
          </div>
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg px-8 py-6 min-w-[160px] border border-blue-100">
            <span className="text-5xl font-extrabold text-blue-700 mb-1 drop-shadow select-none" tabIndex="-1" aria-hidden="true">160+</span>
            <div className="text-base text-gray-500 mb-1">{t('coreValues.productsLabel')}</div>
            <div className="text-lg font-semibold text-blue-700">{t('coreValues.products')}</div>
          </div>
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg px-8 py-6 min-w-[160px] border border-blue-100">
            <span className="text-5xl font-extrabold text-blue-700 mb-1 drop-shadow select-none" tabIndex="-1" aria-hidden="true">3M+</span>
            <div className="text-base text-gray-500 mb-1">{t('coreValues.customersLabel')}</div>
            <div className="text-lg font-semibold text-blue-700">{t('coreValues.customers')}</div>
          </div>
        </div>
      </div>
    </section>
  );
} 