import Enquiry from '@/components/Home/Enquiry';
import ProductBanner from '@/components/Product/ProductBanner';
import ProductFAQ from '@/components/Product/ProductFAQ';
import ProductView from '@/components/Product/ProductView';
import Footer from '@/components/Shared/Footer';
import Navbar from '@/components/Shared/Navbar';
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
              '/assets/Product/peripheral/cashdrawer01.png',
              '/assets/Product/peripheral/cashdrawer02.png',
              '/assets/Product/peripheral/cashdrawer03.png',
              '/assets/Product/peripheral/cashdrawer04.png',
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
              '/assets/Product/peripheral/monitor01.png',
              '/assets/Product/peripheral/monitor02.png',
              '/assets/Product/peripheral/monitor03.png',
              '/assets/Product/peripheral/monitor04.png',
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
              '/assets/Product/peripheral/msr01.png',
              '/assets/Product/peripheral/msr02.png',
              '/assets/Product/peripheral/msr03.png',
              '/assets/Product/peripheral/msr04.png',
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
              '/assets/Product/peripheral/vfd01.png',
              '/assets/Product/peripheral/vfd02.png',
              '/assets/Product/peripheral/vfd03.png',
              '/assets/Product/peripheral/vfd04.png',
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

export default peripheral;