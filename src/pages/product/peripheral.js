import Enquiry from '@/components/Home/Enquiry';
import ProductBanner from '@/components/Product/ProductBanner';
import ProductFAQ from '@/components/Product/ProductFAQ';
import ProductView from '@/components/Product/ProductView';
import Footer from '@/components/Shared/Footer';
import Navbar from '@/components/Shared/Navbar';
import Head from 'next/head';
import React from 'react'

const peripheral = () => {
  const handleBannerButtonClick = () => {
    console.log("Banner Button");
  };

  const bannerContent = {
    imagePath: '/assets/Home/aboutUs.png',
    smallTitle: 'Peripherals',
    title: 'SK-POS Heavy Duty Cash Drawer',
    description: 'A peripheral is an external device or component connected to a computer or other system, expanding its functionality. Examples include printers, keyboards, mice, and external storage devices.',
    buttonLabel: 'Send Enquiry',
    buttonClick: handleBannerButtonClick,
  };

  const productData = {
    productTypes: [
      {
        id: 1,
        label: 'SK-POS Heavy Duty Cash Drawer',
      },
      {
        id: 2,
        label: 'MONITORS',
      },
      {
        id: 3,
        label: 'MAGNETIC STRIPE READERS (MSR)',
      },
      {
        id: 4,
        label: 'VFD & POLE DISPLAY',
      },
    ],
    productDetails: [
      {
        id: 1,
        title: 'SK-POS Heavy Duty Cash Drawer.',
        description: 'Heavy Duty metal Cash Drawer with auto openable function and bills and coin slots to manage cash and bills effectively',
        features: [
          'Auto Openable',
          'Manual Lock & Key',
          '5 Notes + 8 Coins',
          'Size - 450 x 470 x 146mm',
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
        title: '2ND MONITORS.',
        description: 'Rear View LCD MOnitor at customer side to speed up the customer rotation  and to run the promotions activity .',
        features: [
          "10.1’’  / 11.6 ‘’  True flat LCD monitor tilting angles",
          "System Mounted"
        ],
        productImages: [
          '/assets/Home/aboutUs.png',
          '/assets/Home/productService.png',
          '/assets/Home/aboutUs.png',
          '/assets/Home/productService.png',
        ],
      },
      {
        id: 3,
        title: ' MAGNETIC STRIPE READERS (MSR)',
        description: 'To Read magnetic stripe loyalty and login cards.',
        features: [
          '3 track magnetic stripe reader',
        ],
        productImages: [
          '/assets/Home/aboutUs.png',
          '/assets/Home/productService.png',
          '/assets/Home/aboutUs.png',
          '/assets/Home/productService.png',
        ],
      },
      {
        id: 4,
        title: 'VFD & POLE DISPLAY.',
        description: 'VFD DIsplay at customer side to show the billing details ',
        features: [
          '20 x 2 line VFD Display',
          'Systme mounted',
          'Pole display'
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
      'Tool gate',
      'Apparel',
      'Reatils',
      'Healthcare',
    ],
    faqImages: [
      '/assets/Home/aboutUs.png',
      '/assets/Home/productService.png',
    ],
    description: "When it comes to building a business, there's no one route to success. As you scale and strive for profitability, having the right tools and resources to guide you as you navigate the operational ins and outs can make all of the difference. From setting up your back office to pivoting and scaling, discover the tools you need to operate your business today and grow into the future.",
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

export default peripheral;