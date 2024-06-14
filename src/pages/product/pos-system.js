import Enquiry from '@/components/Home/Enquiry';
import ProductBanner from '@/components/Product/ProductBanner';
import ProductFAQ from '@/components/Product/ProductFAQ';
import ProductView from '@/components/Product/ProductView';
import Footer from '@/components/Shared/Footer';
import Navbar from '@/components/Shared/Navbar';
import { useRouter } from 'next/router';
import React from 'react';

function POSSystem() {
  const router = useRouter();
  const handleBannerButtonClick = () => {
    router.push('/contactus');
  };

  const bannerContent = {
    imagePath: '/assets/Product/pos/posBanner.jpeg',
    smallTitle: 'POS systems',
    title: 'Power your business with flexible POS software.',
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
        title: 'SK-POS Mighty Series (M6412)',
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
        title: 'SK-POS Extreme Series (E1115, E1135)',
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
        title: 'SK-POS Andriod Series (A1564)',
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
          '/assets/Home/aboutUs.png',
          '/assets/Home/productService.png',
          '/assets/Home/aboutUs.png',
          '/assets/Home/productService.png',
        ],
      },
      {
        id: 4,
        title: 'SK-POS Andriod Series (A1564)',
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
      '/assets/Product/pos/posBottom01.jpeg',
      '/assets/Product/pos/posBottom02.jpeg',
    ],
    description: "When it comes to building a business, there's no one route to success. As you scale and strive for profitability, having the right tools and resources to guide you as you navigate the operational ins and outs can make all of the difference. From setting up your back office to pivoting and scaling, discover the tools you need to operate your business today and grow into the future.",
  };

  return (
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
  );
}

export default POSSystem;
