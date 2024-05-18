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

export default function Home() {
  return (
    <>
      <Head>
        <title>SK Technosys</title>
        <meta name="description" content="sk-technosys" />
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
      </div>
    </>
  );
}
