import React, { useState } from 'react'
import AboutImage from '../assets/About.jpg'
import Footer from './Footer'
import { useTranslation } from 'react-i18next';
import Marquee from 'react-fast-marquee';

const marqueeData = [
  {
    label_en: 'Desserts Desserts Desserts Desserts Desserts Desserts Desserts Desserts Desserts Desserts Desserts Desserts',
    label_ar: 'حلويات حلويات حلويات حلويات حلويات حلويات حلويات حلويات حلويات حلويات حلويات حلويات',
    color: 'text-coral',
    card: {
      title_en: 'Delicious Desserts',
      title_ar: 'حلويات لذيذة',
      desc_en: 'Indulge in our wide variety of sweet treats and desserts, made fresh daily.',
      desc_ar: 'استمتع بمجموعة واسعة من الحلويات الطازجة يومياً.',
      img: 'https://images.deliveryhero.io/image/talabat/MenuItems/77D56D2E4FCB9DFDDB333684CB2B3155',
    },
  },
  {
    label_en: 'Fresh Dairy Products Fresh Dairy Products Fresh Dairy Products Fresh Dairy Products Fresh Dairy Products Fresh Dairy Products Fresh Dairy Products Fresh Dairy Products Fresh Dairy Products Fresh Dairy Products',
    label_ar: 'منتجات ألبان طازجة منتجات ألبان طازجة منتجات ألبان طازجة منتجات ألبان طازجة منتجات ألبان طازجة منتجات ألبان طازجة منتجات ألبان طازجة منتجات ألبان طازجة منتجات ألبان طازجة منتجات ألبان طازجة',
    color: 'text-coral',
    card: {
      title_en: 'Fresh Dairy Products',
      title_ar: 'منتجات ألبان طازجة',
      desc_en: 'Enjoy our selection of the freshest dairy products, sourced from local farms.',
      desc_ar: 'استمتع بأجود منتجات الألبان الطازجة من أفضل المزارع المحلية.',
      img: 'https://img2.gorafeeq.com/public/assets/restaurant_appimg/25468_banner_image_1734255266867.jpg',
    },
  },
  {
    label_en: 'Creamy Creamy Creamy Creamy Creamy Creamy Creamy Creamy Creamy Creamy Creamy Creamy Creamy Creamy',
    label_ar: 'كريمي كريمي كريمي كريمي كريمي كريمي كريمي كريمي كريمي كريمي كريمي كريمي كريمي كريمي',
    color: 'text-coral',
    card: {
      title_en: 'Creamy Specialties',
      title_ar: 'أطباق كريمية مميزة',
      desc_en: 'Discover our creamy specialties, perfect for every palate and occasion.',
      desc_ar: 'اكتشف أطباقنا الكريمية المميزة المناسبة لكل الأذواق والمناسبات.',
      img: 'https://www.thisisamman.com/wp-content/uploads/2024/01/Capturerrr.jpg',
    },
  },
];

function About() {
  const { t, i18n } = useTranslation();
  const [activeMarquee, setActiveMarquee] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const isArabic = i18n.language === 'ar';

  // Handle Marquee click
  const handleMarqueeClick = (idx) => {
    if (activeMarquee !== idx) {
      setFadeIn(false);
      setTimeout(() => {
        setActiveMarquee(idx);
        setFadeIn(true);
      }, 200); 
    }
  };

  return (
    <div>
      {/* Hero Section with Fixed Background */}
      <div 
        style={{
          width: '100%',
          height: '100vh',
          backgroundImage: `url(${AboutImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          position: 'relative'
        }}
      >
        {/* Overlay for better text readability */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">{t('About B.Laban')}</h1>
            <p className="text-xl max-w-2xl mx-auto">{t('Discover our story, passion, and commitment to bringing you the finest dining experience')}</p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="bg-white">
        {/* Our Story Section */}
        <section className="py-16 px-8 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('Our Story')}</h2>
            <div className="w-24 h-1 bg-coral mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {t('Founded in 2010, B.Laban began as a small family restaurant with a big dream: to serve authentic, delicious food that brings people together. What started as a humble kitchen has grown into one of the most beloved dining destinations in the region.')}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('Our journey has been driven by passion, tradition, and an unwavering commitment to quality. Every dish we serve tells a story of heritage, innovation, and love for food that transcends cultural boundaries.')}
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('Our Mission')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('To create memorable dining experiences through exceptional food, warm hospitality, and a commitment to preserving culinary traditions while embracing modern innovation.')}
              </p>
            </div>
          </div>
        </section>

        {/* Values Section replaced with Commitment to Quality */}
        <section className="py-16 px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {i18n.language === 'ar' ? 'الالتزام بالجودة' : 'Commitment to Quality'}
              </h2>
              <div className="w-24 h-1 bg-coral mx-auto"></div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl text-center">
                <p className="text-lg text-gray-700 mb-4">
                  {i18n.language === 'ar'
                    ? <span><span className="font-semibold text-coral">ب.لبن</span> تعمل تحت إدارة <span className="font-semibold text-coral">قسم ضمان الجودة</span> لضمان الاتساق والدقة والتميز.</span>
                    : <span><span className="font-semibold text-coral">B.Laban</span> operates under a robust <span className="font-semibold text-coral">Quality Assurance Department</span> to ensure consistency, precision, and excellence.</span>
                  }
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  {i18n.language === 'ar'
                    ? <span>ويشرف على هذا القسم <span className="font-semibold text-coral">د. مؤمن عمار</span> بخبرته البيطرية التي تركز على أدق التفاصيل.</span>
                    : <span>This focus is guided by the expertise of <span className="font-semibold text-coral">Dr. Moamen Ammar</span>, whose veterinary background emphasizes attention to detail.</span>
                  }
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Words Section */}
        <section className="relative w-full h-[500px] overflow-hidden bg-white flex items-center justify-center my-16">
          {/* Background Words */}
          <div className="absolute inset-0 flex flex-col justify-center space-y-4 select-none w-full">
            {marqueeData.map((row, idx) => (
              <div
                key={idx}
                className="cursor-pointer w-full"
                style={{ zIndex: 2 }}
                onClick={() => handleMarqueeClick(idx)}
              >
                {i18n.language === 'ar' ? (
                  <div className={`font-bold whitespace-nowrap transition-colors duration-300 ${activeMarquee === idx ? row.color : 'text-blue-100 opacity-40'} text-[8vw] md:text-[5vw]`}
                    style={{ direction: 'rtl', textAlign: 'right' }}
                  >
                    {row.label_ar}
                  </div>
                ) : (
                  <Marquee
                    key={i18n.language + '-' + idx}
                    direction="left"
                    speed={idx === 0 ? 40 : idx === 1 ? 30 : 35}
                    gradient={true}
                    gradientWidth={100}
                    className={`font-bold whitespace-nowrap transition-colors duration-300 ${activeMarquee === idx ? row.color : 'text-blue-100 opacity-40'} text-[8vw] md:text-[5vw]`}
                    dir="ltr"
                  >
                    {row.label_en}
                  </Marquee>
                )}
              </div>
            ))}
          </div>
          {/* Foreground Card */}
          <div className={`relative z-10 bg-blue-900 text-white p-8 rounded-lg shadow-lg w-[350px] transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
            style={{ pointerEvents: 'auto' }}
          >
            <h2 className="text-2xl font-bold mb-2">{i18n.language === 'ar' ? marqueeData[activeMarquee].card.title_ar : marqueeData[activeMarquee].card.title_en}</h2>
            <p className="mb-4">{i18n.language === 'ar' ? marqueeData[activeMarquee].card.desc_ar : marqueeData[activeMarquee].card.desc_en}</p>
            <img src={marqueeData[activeMarquee].card.img} alt={i18n.language === 'ar' ? marqueeData[activeMarquee].card.title_ar : marqueeData[activeMarquee].card.title_en} className="rounded-lg w-full h-32 object-cover" />
          </div>
        </section>

        {/* Team Section replaced with Blaban in Numbers */}
        <section className="py-16 px-8 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {i18n.language === 'ar' ? 'ب.لبن بالأرقام' : 'Blaban in Numbers'}
            </h2>
            <div className="w-24 h-1 bg-coral mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 text-center">
            <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
              <span className="text-5xl font-extrabold text-coral mb-2">2021</span>
              <p className="text-lg text-gray-700">
                {i18n.language === 'ar'
                  ? '22 فرعًا في جميع أنحاء مصر.'
                  : '22 branches across Egypt.'}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
              <span className="text-5xl font-extrabold text-coral mb-2">2023</span>
              <p className="text-lg text-gray-700">
                {i18n.language === 'ar'
                  ? '53 فرعًا (18 في صعيد مصر، 3 في السعودية).'
                  : '53 branches (18 in Upper Egypt, 3 in KSA).'}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
              <span className="text-5xl font-extrabold text-coral mb-2">2024</span>
              <p className="text-lg text-gray-700">
                {i18n.language === 'ar'
                  ? '87 فرعًا في مصر، 30 في السعودية، وفروع جديدة في عمان وقطر وليبيا والأردن والإمارات.'
                  : '87 branches in Egypt, 30 in KSA, and new branches in Oman, Qatar, Libya, Jordan, and UAE.'}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
              <span className="text-5xl font-extrabold text-coral mb-2">2025</span>
              <p className="text-lg text-gray-700">
                {i18n.language === 'ar'
                  ? 'التوسع إلى المغرب والكويت والبحرين والعراق وأوروبا والولايات المتحدة.'
                  : 'Expanding to Morocco, Kuwait, Bahrain, Iraq, Europe, and the USA.'}
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 px-8 bg-coral text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">{t('Ready to Experience B.Laban?')}</h2>
            <p className="text-xl mb-8">
              {t('Join us for an unforgettable dining experience that combines tradition with innovation.')}
            </p>
            <div className="space-x-4">
              <a 
                href="/menu" 
                className="inline-block bg-white text-coral px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {t('View Our Menu')}
              </a>
              <a 
                href="/contact" 
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-coral transition-colors"
              >
                {t('Contact Us')}
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default About
