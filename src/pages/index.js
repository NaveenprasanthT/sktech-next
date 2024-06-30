import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home/home.module.css";
import Navbar from "@/components/Shared/Navbar.js"
import HomeBanner from "@/components/Home/HomeBanner";
import AboutUs from "@/components/Home/AboutUs";
import ProductAndService from "@/components/Home/ProductService";
import OurClients from "@/components/Home/OurClients";
import Media from "@/components/Home/Media";
import Enquiry from "@/components/Home/Enquiry";
import Footer from "@/components/Shared/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>S K Technosys || Build to Conqure your Workload</title>
        <meta name="title" content="S K Technosys - Powerhouse Performance for your Business." />
        <meta name="description" content="Upgrade your IT operations with SK-POS. Powerful Point-of-Sale solutions by SK Technosys. Visit sktechnosys.in to learn more!" />
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
      <div className={styles.homePage}>
        <Navbar />
        <HomeBanner />
        <AboutUs />
        <ProductAndService />
        <OurClients />
        <Media />
        <Enquiry />
        <Footer />
      </div>
    </>
  );
}
