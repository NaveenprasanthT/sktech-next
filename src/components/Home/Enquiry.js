import React, { useState } from 'react';
import styles from '@/styles/Home/enquiry.module.css';
import SectionHeader from '../Shared/SectionHeader';
import InputField from '../Shared/InputField';
import { EnquiryCallIcon, EnquiryLocationIcon, EnquiryMailIcon } from '../Shared/SvgIcon';
import SharedButton from '../Shared/Button';

function Enquiry() {
  const [formData, setFormData] = useState({});
  const handleChange = (name, value) => {
    setFormData({
      ...value,
      [name]: value,
    });
  }
  return (
    <div className={styles.enquiryWrap}>
      <SectionHeader
        title="Send your enquiry"
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
                name="email_id"
                value={formData?.email_id}
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
            buttonClick={() => { }}
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

export default Enquiry;
