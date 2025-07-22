import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Banner1 from '../assets/Banner1.jpg';
import Banner2 from '../assets/Banner2.jpg';
import Banner3 from '../assets/Banner3.jpg';
import Banner4 from '../assets/Banner4.jpg';
import Banner5 from '../assets/Banner5.jpg';

const banners = [Banner1, Banner2, Banner3, Banner4, Banner5];

const angles = ['-rotate-6', '-rotate-3', 'rotate-0', 'rotate-3', 'rotate-6'];
const offsetsLTR = ['-ml-10 z-10', '-ml-16 z-20', '-ml-20 z-30', '-ml-16 z-20', '-ml-10 z-10'];
const offsetsRTL = ['-mr-10 z-10', '-mr-16 z-20', '-mr-20 z-30', '-mr-16 z-20', '-mr-10 z-10'];

function Banner() {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const offsets = isRTL ? offsetsRTL : offsetsLTR;

  // Responsive logic: show 3 images on mobile, 5 on md+
  const isMobile = window.innerWidth < 768;
  const visibleBanners = isMobile ? banners.slice(1, 4) : banners;
  const visibleAngles = isMobile ? angles.slice(1, 4) : angles;
  const visibleOffsets = isMobile ? offsets.slice(1, 4) : offsets;

  // Animation logic
  const bannerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={bannerRef}
      className={`w-screen overflow-hidden flex items-center justify-center bg-gradient-to-b py-0 m-0 transition-all duration-1000
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.90)),rgba(255, 183, 94, 0.2)`
      }}
    >
      <div className="flex flex-row items-end w-full h-40 sm:h-56 md:h-72 lg:h-80 justify-center relative">
        {banners.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Banner ${idx + 1}`}
            className={`rounded-2xl shadow-xl object-cover border-4 border-white transition-transform duration-300
              ${angles[idx]} ${offsets[idx]}
              flex-1 h-full min-w-[20vw] max-w-none
            `}
            style={{ position: 'relative', zIndex: 10 + idx }}
          />
        ))}
      </div>
    </div>
  );
}

export default Banner; 