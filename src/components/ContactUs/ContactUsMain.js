import React, { useState } from 'react';
import styles from '@/styles/ContactUs/contactUsMain.module.css';
import SectionHeader from '../Shared/SectionHeader';
import InputField from '../Shared/InputField';
import { EnquiryCallIcon, EnquiryLocationIcon, EnquiryMailIcon } from '../Shared/SvgIcon';
import SharedButton from '../Shared/Button';
import emailjs from 'emailjs-com';

function ContactUsMain() {
  const [buttonDisable, setButtonDisable] = useState(false);
  const [formData, setFormData] = useState({});
  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = async (e) => {
    setButtonDisable(true);
    e.preventDefault();

    try {
      const result = await emailjs.send(
        'service_wr4az9p', // replace with your service ID
        'template_wdjpi1h', // replace with your template ID
        formData,
        'ygUVr97Cj9AQfo7fx' // replace with your user ID
      );

      console.error('Send successfully', result);
      setButtonDisable(false);
      setFormData({});
    } catch (error) {
      setButtonDisable(false);
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className={styles.enquiryWrap}>
      <SectionHeader
        title="Hi. How can we help?"
        subTitle="For assistance or inquiries, please reach out to us via email at info@sktechnosys.com. We're here to help!"
      />
      <div className={styles.enquiryContainer}>
        <div className={styles.enquiryFormContainer}>
          <div className={styles.enquiryForm}>
            <div className={styles.singleRow}>
              <InputField
                type="text"
                name="name"
                value={formData?.name}
                placeholder="Your name"
                onValueChange={handleChange}
              />
              <InputField
                type="text"
                name="company"
                value={formData?.company}
                placeholder="Your company"
                onValueChange={handleChange}
              />
            </div>
            <div className={styles.singleRow}>
              <InputField
                type="number"
                name="phone_number"
                value={formData?.phone_number}
                placeholder="Your phone number"
                onValueChange={handleChange}
              />
              <InputField
                type="email"
                name="email"
                value={formData?.email}
                placeholder="Your email id"
                onValueChange={handleChange}
              />
            </div>
            <InputField
              type="text"
              name="interest"
              value={formData?.interest}
              placeholder="Interested Products/Service"
              onValueChange={handleChange}
            />
          </div>
          <SharedButton
            label="Submit"
            buttonClick={handleSubmit}
            disable={buttonDisable}
          />
        </div>
        <div className={styles.enquiryDetails}>
          <div className={styles.locationDetails}>
            <div className={styles.eachLocation}>
              <span><EnquiryCallIcon /></span>
              <h2 className={styles.sansFont}>+918105625375</h2>
            </div>
            <div className={styles.eachLocation}>
              <span><EnquiryMailIcon /></span>
              <h2>info@sktechnosys.com</h2>
            </div>
            <div className={styles.eachLocation}>
              <span><EnquiryLocationIcon /></span>
              <div className={styles.locationWrap}>
                <div className={styles.location}>
                  <h2> <span>Registered Office: </span> No.25, 1st floor, Behind ICICI Bank, Bikasipura BDA Layout, Vasanthapura Main Rd, Banashankari 5th Stage, Bengaluru, Karnataka 560062,</h2>
                  <div className={styles.circleInRound}>
                    <div className={styles.round}></div>
                  </div>
                </div>
                <div className={styles.location}>
                  <h2><span>Corporate Office: </span>No.004, Ground Floor, Sri Temple Vallabha, 1st Main Road, 1st Block, Vasantha Vallabha Nagar, Vasanthapura Main Road, Bangalore - 560061,</h2>
                  <div className={styles.circleInRound}>
                    <div className={styles.round}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mapWrap}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.227315467572!2d77.55200857507509!3d12.893099687415097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f5163291d61%3A0x1a9a93a88c28c6be!2sSRI%20TEMPLE%20VALLABHA!5e0!3m2!1sen!2sin!4v1716042420184!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsMain;
