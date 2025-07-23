import React from 'react'
import Banner from './Banner'
import BlogCarousel from './Carousel'
import Footer from './Footer'
import Dessert from '../assets/Dessert.png'
import Dessert1 from '../assets/Dessert1.png'
import Dessert2 from '../assets/Dessert2.png'
import Dessert3 from '../assets/Dessert3.jpeg'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import CoreValues from './CoreValues';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const dessert1Class = `absolute bottom-0 md:bottom-0 left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 ${isRTL ? 'md:left-32' : 'md:right-32'} w-150 z-20`;
  const navigate = useNavigate();
  return (
    <>
      {/* <Navbar /> */}
      <div className="flex flex-col lg:flex-row relative">
        {/* XL+ absolute, above text */}
        <div className="hidden xl:block absolute left-1/2 top-20 text-xl px-4 py-3 -translate-x-1/2 z-10 rounded-3xl shadow-2xl bg-white text-dark-blue hover:scale-110 duration-300 ease-in-out transition-all font-bold whitespace-nowrap"
          style={{ boxShadow: '0 10px 40px 0 rgba(0,0,0,0.25)' }}>
          <img src={Dessert2} className="w-12 h-9 inline-block align-middle" alt="" />
          <span className="ml-3 align-middle">{t('Fast Delivery')}</span>
        </div>
        <div className="hidden xl:block absolute left-1/2 top-40 text-xl px-4 py-3 -translate-x-1/2 z-10 rounded-3xl shadow-2xl bg-white text-dark-blue hover:scale-110 duration-300 ease-in-out transition-all font-bold whitespace-nowrap"
          style={{ boxShadow: '0 10px 40px 0 rgba(0,0,0,0.25)' }}>
          <FontAwesomeIcon icon={faTruckFast} style={{ color: "#0074d9" }} className="w-12 h-12 inline-block align-middle" />
          <span className="ml-3 align-middle">{t('Quality Food')}</span>
        </div>
        {/* Text Section - Full width on mobile, half on desktop */}
        <section className="bg-white flex flex-col w-full lg:w-[50%] h-auto px-6 md:px-35 py-12 md:py-20 text-xl md:text-3xl text-gray-500 font-bold break-words mb-8">
          <span className="leading-relaxed">
            <span className='text-2xl md:text-4xl text-dark-blue'> {t('Discover')} </span>
            {t('a world of')}
            <span className='text-2xl md:text-4xl text-dark-blue'> {t('creamy')} </span>
            {t('dairy products and')}
            <span className='text-2xl md:text-4xl text-dark-blue'> {t('luscious')} </span>
            {t('confections with our brand.')}
          </span>
          <span className='text-lg md:text-2xl text-gray-500 font-medium mt-3 mb-8 md:mb-10 leading-relaxed'>
            {t('Indulge in the finest dairy products, made with love and fresh ingredients')}
          </span>
          {/* In-flow cards ONLY here, below the text */}
          <div className="block xl:hidden flex flex-col space-y-4 mb-6 w-full px-2 mt-4">
            <div className="flex items-center justify-center h-12 text-lg px-4 py-2 rounded-3xl shadow-lg bg-white text-dark-blue font-bold border border-gray-200">
              <img src={Dessert2} className="w-8 h-8" alt="" />
              <span className="ml-3 ">{t('Fast Delivery')}</span>
            </div>
            <div className="flex items-center justify-center h-12 text-lg px-4 py-2 rounded-3xl shadow-lg bg-white text-dark-blue font-bold border border-gray-200">
              <FontAwesomeIcon icon={faTruckFast} style={{ color: "#0074d9" }} className="w-8 h-8" />
              <span className="ml-3">{t('Quality Food')}</span>
            </div>
          </div>
          
          <Link
            to="/menu"
            className="bg-coral px-6 md:px-2 py-3 md:py-2 rounded-4xl text-white text-lg md:text-2xl text-nowrap w-full md:w-3xs transition-all duration-300 hover:scale-110 text-center font-medium"
          >
            {t('See our products')}
          </Link>
        </section>

        {/* Image Section - Full width on mobile, half on desktop */}
        <section className="w-full lg:w-[50%] h-80 md:h-160 relative py-10">
          <img className={dessert1Class} src={Dessert} alt="" style={{ pointerEvents: 'none' }} />
        </section>
      </div>
      <Banner />
      <CoreValues />
      <BlogCarousel />
      <Footer />
    </>
  )
}

export default Home
