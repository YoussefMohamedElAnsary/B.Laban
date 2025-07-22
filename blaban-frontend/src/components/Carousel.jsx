import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    image: 'https://tse3.mm.bing.net/th/id/OIP.ocXx8up16LJtFOzy4uUfYQHaHa?pid=ImgDet&w=474&h=474&rs=1&o=7&rm=3',
    titleKey: 'carousel.slide1.title',
    dateKey: 'carousel.slide1.date',
    categoryKey: 'carousel.slide1.category',
  },
  {
    image: 'https://tse3.mm.bing.net/th/id/OIP.ozUxgOiBg5ebZpFfHmCnqwHaHa?pid=ImgDet&w=474&h=474&rs=1&o=7&rm=3',
    titleKey: 'carousel.slide2.title',
    dateKey: 'carousel.slide2.date',
    categoryKey: 'carousel.slide2.category',
  },
  {
    image: 'https://tse3.mm.bing.net/th/id/OIP.GL9I7CoxZfUgQGX31mcEZAHaHa?pid=ImgDet&w=474&h=474&rs=1&o=7&rm=3',
    titleKey: 'carousel.slide3.title',
    dateKey: 'carousel.slide3.date',
    categoryKey: 'carousel.slide3.category',
  },
  {
    image: 'https://tse3.mm.bing.net/th/id/OIP.23BDPnb42tIM__Iyol7jTgHaHa?pid=ImgDet&w=474&h=474&rs=1&o=7&rm=3',
    titleKey: 'carousel.slide4.title',
    dateKey: 'carousel.slide4.date',
    categoryKey: 'carousel.slide4.category',
  },
  {
    image: 'https://tse1.mm.bing.net/th/id/OIP.KUAWNHpbYYD-lK95dIntrwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
    titleKey: 'carousel.slide5.title',
    dateKey: 'carousel.slide5.date',
    categoryKey: 'carousel.slide5.category',
  }
];

export default function BlogCarousel() {
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="py-12 bg-gray-50 w-full relative" dir={isRTL ? 'rtl' : 'ltr'}>
      <Swiper
        key={i18n.language}
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="w-full"
        style={{ paddingBottom: '60px' }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 3 }
        }}
        dir={isRTL ? 'rtl' : 'ltr'}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className={`flex flex-col items-center relative transition-all duration-300
              ${activeIndex === idx ? '' : 'opacity-40 blur-sm'}`}>
              <img src={slide.image} alt="" className="w-full h-96 object-cover rounded-xl" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Fixed overlay text box */}
      <div className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 z-20 w-11/12 md:w-2/3">
        <div
          className="bg-white p-8 rounded-xl shadow-lg text-center mb-12 transition-all duration-500"
          style={{ position: 'relative' }}
        >
          <div key={activeIndex} className="animate-fade-in">
            <div className="text-coral text-sm mb-2 font-semibold">
              ({t(slides[activeIndex].categoryKey)}) • {t(slides[activeIndex].dateKey)}
            </div>
            <h2 className="text-3xl font-semibold mb-2">{t(slides[activeIndex].titleKey)}</h2>
          </div>
        </div>
      </div>
      {/* Swiper pagination dots (already enabled, but style for visibility) */}
      <style>{`
        .swiper-pagination-bullets {
          bottom: 24px !important;
        }
        .swiper-pagination-bullet {
          background: #3b82f6;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in {
          animation: fade-in 0.5s;
        }
      `}</style>
    </div>
  );
} 