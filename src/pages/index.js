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
