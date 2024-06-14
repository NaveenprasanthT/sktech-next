import React from 'react'
import Navbar from '@/components/Shared/Navbar';
import AboutUsMain from '@/components/AboutUs/AboutUsMain';
import Footer from '@/components/Shared/Footer';
import Head from 'next/head';

const AboutUsPage = () => {
  return (
    <>
      <Head>
        <title>S K Technosys || About Us</title>
        <meta name="title" content="About Us - S K Technosys" />
        <meta name="description" content="Meet the team behind SK-POS! Learn about SK Technosys' dedication to IT Point-of-Sale solutions. Visit sktechnosys.in" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <AboutUsMain />
        <Footer />
      </div>
    </>
  );
}

export default AboutUsPage;