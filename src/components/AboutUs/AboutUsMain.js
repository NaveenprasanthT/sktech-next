import React from 'react';
import Styles from '@/styles/Aboutus/aboutus.module.css';
import Image from 'next/image';
import CountUp from 'react-countup';

function AboutUsMain() {
  const numberCount = [
    {
      num: "36",
      title: "Products"
    },
    {
      num: "12",
      title: "Clients"
    },
    {
      num: "40",
      title: "Individual sales transactions",
    },
    {
      num: "12",
      title: "Cities serving across karnataka"
    },
  ];

  return (
    <div className={Styles.aboutUsWrapper}>
      <div className={Styles.abtUsContainer}>
        <h2 className={Styles.abtUsTitle}>About us</h2>
        <h1 className={Styles.abtUsHeader}>
          "Delivering Reliable IT Hardware Solutions for Your Business Needs"
        </h1>
        <Image src="/assets/Home/aboutImg.png" alt="AboutUs" height={1000} width={1000} className={Styles.abtUsImg} />
        <h1 className={Styles.abtUsDesc}>
          "SKTechnosys is a leading provider of innovative IT hardware
          solutions, specializing in delivering top-notch products and expert
          services tailored to meet the unique needs of businesses worldwide."
        </h1>
      </div>
      <div className={Styles.abtUsDetailsWrap}>
        <div className={Styles.abtUsline}></div>
        <div className={Styles.abtUsDetailContainer}>
          <div className={Styles.abtUsDetailTitle}>
            <h1>About SK TECHONOSYS</h1>
          </div>
          <div className={Styles.abtUsDetailDesc}>
            <p>
              S K Technosys is your trusted partner for comprehensive IT
              hardware solutions. With a commitment to excellence, we deliver a
              diverse range of cutting-edge products and services to meet the
              evolving needs of businesses globally. Our dedicated team combines
              expertise with a customer-centric approach, ensuring seamless
              integration and optimal performance for your IT infrastructure.
              Experience reliability, innovation, and unparalleled support with
              SKTechnosys.
            </p>
            <p>
              At S K Technosys, we pride ourselves on being at the forefront of
              the IT hardware industry. With a focus on innovation and
              reliability, we offer a comprehensive suite of solutions tailored
              to your business needs. Our team of experts is dedicated to
              providing exceptional service, ensuring smooth operations and
              maximum efficiency for your organization.
            </p>
          </div>
        </div>
        <div className={Styles.abtUsCountCon}>
          {numberCount.map((data) => (
            <div className={Styles.aboutEachCount}>
              <h1>
                <CountUp
                  start={0}
                  end={data.num}
                  duration={5}
                  enableScrollSpy
                  scrollSpyDelay={500}
                  scrollSpyOnce={true}
                >
                  {data.num}
                </CountUp>
                +
              </h1>
              <h3>{data.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUsMain;
