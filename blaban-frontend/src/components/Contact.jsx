import React, { useState } from 'react'
import Navbar from './Navbar'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Footer from './Footer'
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Store form submission in Firestore
    try {
      await addDoc(collection(db, 'contactMessages'), formData);
      // Optionally, show a success message or reset form
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      alert(t('Your message has been sent!'));
    } catch (error) {
      alert(t('There was an error sending your message.'));
    }
  };

  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-400 to-blue-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('Contact Us')}</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            {t('Get in touch with us for orders, reservations, or any questions')}
          </p>
        </div>
      </div>

      {/* Contact Information and Form */}
      <div className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">{t('Get In Touch')}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t("We'd love to hear from you. Send us a message and we'll respond as soon as possible.")}
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-coral rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faPhone} className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{t('Phone')}</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-coral rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faEnvelope} className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{t('Email')}</h3>
                    <p className="text-gray-600">info@blaban.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-coral rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{t('Address')}</h3>
                    <p className="text-gray-600">123 Main Street, City, State 12345</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-coral rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faClock} className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{t('Opening Hours')}</h3>
                    <p className="text-gray-600">{t('Mon-Sat: 9:00 AM - 10:00 PM')}</p>
                    <p className="text-gray-600">{t('Sunday: 10:00 AM - 9:00 PM')}</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{t('Follow Us')}</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-coral rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                    <FontAwesomeIcon icon={faFacebookF} className="text-white text-lg" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-coral rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                    <FontAwesomeIcon icon={faInstagram} className="text-white text-lg" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-coral rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                    <FontAwesomeIcon icon={faTwitter} className="text-white text-lg" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('Send us a Message')}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('Full Name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent transition-colors"
                      placeholder={t('Enter your full name')}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('Email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent transition-colors"
                      placeholder={t('Enter your email')}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('Phone Number')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent transition-colors"
                      placeholder={t('Enter your phone number')}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('Subject')} *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent transition-colors"
                    >
                      <option value="">{t('Select a subject')}</option>
                      <option value="order">{t('Order Inquiry')}</option>
                      <option value="reservation">{t('Reservation')}</option>
                      <option value="feedback">{t('Feedback')}</option>
                      <option value="complaint">{t('Complaint')}</option>
                      <option value="other">{t('Other')}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('Message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral focus:border-transparent transition-colors resize-none"
                    placeholder={t('Enter your message here...')}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-coral text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
                >
                  {t('Send Message')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('Find Us')}</h2>
            <div className="w-24 h-1 bg-coral mx-auto"></div>
          </div>
          
          {/* Embedded Google Map */}
          <div className="bg-gray-200 rounded-lg h-96 flex flex-col items-center justify-center overflow-hidden">
            <iframe
              title="B.Laban Location"
              src="https://www.google.com/maps?q=81+El-Sayed+El-Marghany,+Curve+Landscape,+6th+Floor,+79+El-Sayed+El-Marghany,+Al+Golf,+Nasr+City,+Cairo+Governorate&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '350px', width: '100%' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('Frequently Asked Questions')}</h2>
            <div className="w-24 h-1 bg-coral mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('Do you offer delivery?')}</h3>
              <p className="text-gray-600">{t('Yes, we offer fast delivery to all areas within our service radius.')}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('Can I make a reservation?')}</h3>
              <p className="text-gray-600">{t('Absolutely! You can make reservations by phone or through our contact form.')}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('Do you have vegetarian options?')}</h3>
              <p className="text-gray-600">{t('Yes, we offer a variety of vegetarian and vegan options on our menu.')}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('What are your payment methods?')}</h3>
              <p className="text-gray-600">{t('We accept cash, credit cards, and digital payments for your convenience.')}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
