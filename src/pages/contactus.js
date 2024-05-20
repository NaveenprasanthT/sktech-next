import React from 'react'
import Navbar from '@/components/Shared/Navbar';
import Footer from '@/components/Shared/Footer';
import ContactUsMain from '@/components/ContactUs/ContactUsMain';

const ContactUsPage = () => {
  return (
    <div>
      <Navbar />
      <ContactUsMain />
      <Footer />
    </div>
  );
}

export default ContactUsPage;