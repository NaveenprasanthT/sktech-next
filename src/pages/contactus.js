import React from 'react'
import Navbar from '@/components/Shared/Navbar';
import Footer from '@/components/Shared/Footer';
import ContactUsMain from '@/components/ContactUs/ContactUsMain';
import Head from 'next/head';

const ContactUsPage = () => {
  return (
    <>
      <Head>
        <title>S K Technosys || Contact Us</title>
        <meta name="title" content="Contact Us - S K Technosys" />
        <meta name="description" content="Get in touch with SK Technosys!  Questions about SK-POS? We're here to help. Contact us at sktechnosys.in" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <ContactUsMain />
        <Footer />
      </div>
    </>
  );
}

export default ContactUsPage;