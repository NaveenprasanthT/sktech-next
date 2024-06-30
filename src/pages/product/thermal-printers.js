import Enquiry from '@/components/Home/Enquiry';
import ProductBanner from '@/components/Product/ProductBanner';
import ProductFAQ from '@/components/Product/ProductFAQ';
import ProductView from '@/components/Product/ProductView';
import Footer from '@/components/Shared/Footer';
import Navbar from '@/components/Shared/Navbar';
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
              '/assets/Product/printers/ultraprinters01.png',
              '/assets/Product/printers/ultraprinters04.png',
              '/assets/Product/printers/ultraprinters03.png',
              '/assets/Product/printers/ultraprinters02.png',
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
              '/assets/Product/printers/highprinters01.png',
              '/assets/Product/printers/highprinters02.png',
              '/assets/Product/printers/highprinters03.png',
              '/assets/Product/printers/highprinters04.png',
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
    <div>
        <Navbar />
        <ProductBanner bannerContent={bannerContent} />
        <ProductView productData={productData} />
        <ProductFAQ productFAQ={productFAQ} />
        <Enquiry />
        <Footer />
    </div>
  )
}

export default thermalPrinters;