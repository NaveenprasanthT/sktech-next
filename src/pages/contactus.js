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
        {/* Google Tag Manager */}
        <script>
          {`(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5C6XHWN3');`}
        </script>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5C6XHWN3"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BECY9DEFVT"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-BECY9DEFVT');`}
        </script>

        {/* Facebook Pixel */}
        <script>
          {`!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '2002751796829218');
        fbq('track', 'PageView');`}
        </script>
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2002751796829218&ev=PageView&noscript=1" />
        </noscript>
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