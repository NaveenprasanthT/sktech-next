import Enquiry from '@/components/Home/Enquiry';
import ProductBanner from '@/components/Product/ProductBanner';
import ProductFAQ from '@/components/Product/ProductFAQ';
import ProductView from '@/components/Product/ProductView';
import Footer from '@/components/Shared/Footer';
import Navbar from '@/components/Shared/Navbar';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

function POSSystem() {
  const router = useRouter();
  const handleBannerButtonClick = () => {
    router.push('/contactus');
  };

  const bannerContent = {
    imagePath: '/assets/Product/pos/skPosBanner.jpg',
    smallTitle: 'POS systems',
    title: 'Power your business with flexible POS system.',
    description: 'A point of sale, or point of purchase, is where you ring up customers and accept payments. When customers check out online, walk up to your checkout counter, or pick out an item from your stand or booth, they’re at the point of sale. You can even do this on existing hardware you already use for your business—your computer.',
    buttonLabel: 'Send Enquiry',
    buttonClick: handleBannerButtonClick,
  };

  const productData = {
    productTypes: [
      {
        id: 1,
        label: 'SK-POS Mighty Series',
      },
      {
        id: 2,
        label: 'SK-POS Extreme Series',
      },
      {
        id: 3,
        label: 'SK-POS Andriod Series',
      },
      {
        id: 4,
        label: 'SK-POS Compact Series',
      },
    ],
    productDetails: [
      {
        id: 1,
        title: <>SK-POS Mighty Series (M<span className="poppins-font">6412</span>)</>,
        description: 'Powerful PCAP Touch POS System with Latest Generation J6412 Elkhart Lake Quadcore Processor and 8GB RAM with NVMe SSD for hasselfree operations in Retail and Hospitality Industry',
        features: [
          'Compact and Roboust Design for Durability',
          'Extremely Powerful & Future-Proof Intel latest Gen Processors',
          '8GB RAM & 128GB M.2/NVMe SSD for high speed Operations',
          '15.1” Bezel-Free True-Flat Water/Dust Proof PCAP',
          'Touch Screen',
          'Wall Mounting for different applications',
          'Sleek and Compact Design upto 180 Monitor Tilting',
          'Multiple I/O Interfaces for Peripherals.',
          'Designed for Easy Installation and Service',
        ],
        productImages: [
          '/assets/Product/pos/pos01.png',
          '/assets/Product/pos/pos02.png',
          '/assets/Product/pos/pos03.png',
          '/assets/Product/pos/pos04.png',
        ],
      },
      {
        id: 2,
        title: <>SK-POS Extreme Series <span className="poppins-font">(E1115, E1135)</span></>,
        description: 'Powerful PCAP Touch POS System With Latest Generation Core i3/ Core i5 Processor and 8GB Ram with NVMe SSD For Hasslefree Operations in Retail and Hospitality Industry.',
        features: [
          'Compact and Roboust Design for Durability',
          'Extremely Powerful & Future-Proof Intel latest Gen Processors',
          '8GB RAM & 128GB M.2/NVMe SSD for high speed Operations',
          '15.1” Bezel-Free True-Flat Water/Dust Proof PCAP',
          'Touch Screen',
          'Wall Mounting for different applications',
          'Sleek and Compact Design upto 180 Monitor Tilting',
          'Multiple I/O Interfaces for Peripherals.',
          'Designed for Easy Installation and Service',
        ],
        productImages: [
          '/assets/Product/pos/extreme03.png',
          '/assets/Product/pos/extreme01.png',
          '/assets/Product/pos/extreme02.png',
          '/assets/Product/pos/extreme04.png',
        ],
      },
      {
        id: 3,
        title: <>SK-POS Andriod Series <span className="poppins-font">(A1564)</span></>,
        description: 'Powerful Android PCAP Touch POS System With Latest Generation RK3566 Processor and 4GB Ram with 32GB EMCC For Hasslefree Operations in Retail and Hospitality Industry.',
        features: [
          'Compact and Roboust Design for Durability',
          'Extremely Powerful & Future-Proof',
          'Latest Gen Processors',
          '4GB RAM & 32GB EMCC',
          '15.6” Bezel-Free True-Flat Water/Dust Proof PCAP Touch Screen',
          'Android 11',
          'Wall Mounting for different applications',
          'Sleek and Compact Design upto 180 Monitor Tilting',
          'Multiple I/O Interfaces for Peripherals.',
          'Designed for Easy Installation and Service',
        ],
        productImages: [
          '/assets/Product/pos/android01.png',
          '/assets/Product/pos/android02.png',
          '/assets/Product/pos/android03.png',
          '/assets/Product/pos/android04.png',
        ],
      },
      {
        id: 4,
        title: <>SK-POS Andriod Series <span className="poppins-font">(A1564)</span></>,
        description: 'Powerful & Compact all in one Touch POS System With Latest Generation Windows/ Android Processor with built - in High speed thermal Printer with optional Peripherals For Hasslefree Operations in Retail and Hospitality Industry.',
        features: [
          'Compact and Roboust Design for Durability',
          'Extremely Powerful & Future-Proof',
          'Latest Generation J4125 Windows / RK 3566 Android Processors',
          '8GB RAM (Windows) / 4GB RAM (Android)',
          '128 GB NVMe SSD (Windows) / 32GB EMCC (ANdroid)',
          '17.6” Bezel-Free True-Flat Water/Dust Proof PCAP Touch Screen',
          'Windows 10 / IoT / Android 11',
          '200mm High Speed Inbuilt Thermal Printer with auto cutter.',
          'Multiple I/O Interfaces for Peripherals.',
          'Designed for Easy Installation and Service'
        ],
        productImages: [
          '/assets/Product/pos/compact01.png',
          '/assets/Product/pos/compact02.png',
          '/assets/Product/pos/compact03.png',
          '/assets/Product/pos/compact04.png',
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
      '/assets/Product/pos/posBottom02.jpg',
      '/assets/Product/pos/posBottom01.jpg',
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
        <ProductBanner
          bannerContent={bannerContent}
        />
        <ProductView
          productData={productData}
        />
        <ProductFAQ
          productFAQ={productFAQ}
        />
        <Enquiry />
        <Footer />
      </div>
    </>
  );
}

export default POSSystem;
