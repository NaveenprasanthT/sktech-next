import Enquiry from '@/components/Home/Enquiry';
import ProductBanner from '@/components/Product/ProductBanner';
import ProductFAQ from '@/components/Product/ProductFAQ';
import ProductView from '@/components/Product/ProductView';
import Footer from '@/components/Shared/Footer';
import Navbar from '@/components/Shared/Navbar';
import Head from 'next/head';
import React from 'react'

const thermalPrinters = () => {
  const handleBannerButtonClick = () => {
    console.log("Banner Button");
  };

  const bannerContent = {
    imagePath: '/assets/Home/aboutUs.png',
    smallTitle: 'Thermal Printers',
    title: 'STOUT ultra speed Thermal printer- S300U',
    description: 'A point of sale, or point of purchase, is where you ring up customers and accept payments. When customers check out online, walk up to your checkout counter, or pick out an item from your stand or booth, they’re at the point of sale. You can even do this on existing hardware you already use for your business—your computer.',
    buttonLabel: 'Send Enquiry',
    buttonClick: handleBannerButtonClick,
  };

  const productData = {
    productTypes: [
      {
        id: 1,
        label: 'Ultra speed thermal printer- S300u',
      },
      {
        id: 2,
        label: 'High speed thermal printer- S250H',
      },
    ],
    productDetails: [
      {
        id: 1,
        title: ' STOUT Ultra Speed Thermal Printer - S300U.',
        description: 'The STOUT Ultra Speed Thermal Printer - S300U is a high-performance printing device that combines speed and reliability, ideal for fast-paced printing needs in various professional environments.',
        features: [
          'Print Speed :- 300MM/Sec',
          'Head Life 160 Kms',
          'Interface :- Serial + USB + Ethernet',
          'Printing Width :- 80mm',
          'Auto Cutter',
          'Print Alarm / Buzzer',
          'Cash Drawer Connectivity',
          'Logo Printing',
          'QR Code Printing',
          'VESA Mount',
        ],
        productImages: [
          '/assets/Home/aboutUs.png',
          '/assets/Home/productService.png',
          '/assets/Home/aboutUs.png',
          '/assets/Home/productService.png',
        ],
      },
      {
        id: 2,
        title: 'STOUT High Speed Thermal Printer - S250H',
        description: '',
        features: [
          'Print Speed :- 250MM/Sec ',
          'Head Life 150 Kms',
          'Interface :- USB/ USB + Ethernet (Wifi/ BT)',
          'Printing Width :- 80mm',
          'Auto Cutter',
          'Print Alarm / Buzzer',
          'Cash Drawer Connectivity',
          'Logo Printing',
          'QR Code Printing',
          'VESA Mount',
        ],
        productImages: [
          '/assets/Home/aboutUs.png',
          '/assets/Home/productService.png',
          '/assets/Home/aboutUs.png',
          '/assets/Home/productService.png',
        ],
      },
    ],
  };

  const productFAQ = {
    question: 'What Is a POS System and How Does It Work?',
    answer: 'Researching your POS options? This overview can help you put together the right setup for your business, no matter where you sell.',
    points: [
      'Entertainment',
      'Hospitality',
      'Parking',
      'Tool Gate',
      'Apparel',
      'Reatils',
      'Healthcare',
    ],
    faqImages: [
      '/assets/Home/aboutUs.png',
      '/assets/Home/productService.png',
    ],
    description: "When it comes to building a business, there’s no one route to success. As you scale and strive for profitability, having the right tools and resources to guide you as you navigate the operational ins and outs can make all of the difference. From setting up your back office to pivoting and scaling, discover the tools you need to operate your business today and grow into the future.",
  };

  return (
    <>
      <Head>
        <title>Product</title>
        <meta name="description" content="Product." />

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
        <ProductBanner bannerContent={bannerContent} />
        <ProductView productData={productData} />
        <ProductFAQ productFAQ={productFAQ} />
        <Enquiry />
        <Footer />
      </div>
    </>
  )
}

export default thermalPrinters;