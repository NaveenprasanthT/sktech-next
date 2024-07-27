import React, { useState } from 'react';
import styles from '@/styles/ContactUs/contactUsMain.module.css';
import SectionHeader from '../Shared/SectionHeader';
import InputField from '../Shared/InputField';
import { EnquiryCallIcon, EnquiryLocationIcon, EnquiryMailIcon } from '../Shared/SvgIcon';
import SharedButton from '../Shared/Button';
import emailjs from 'emailjs-com';
import { Alert, CircularProgress, Snackbar } from '@mui/material';

function ContactUsMain() {
  const [buttonDisable, setButtonDisable] = useState(false);
  const [formData, setFormData] = useState({});
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('')

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = async (e) => {
    if (formData.name && formData.email) {
      setButtonDisable(true);
      e.preventDefault();
      setLoading(true)
      try {
        const result = await emailjs.send(
          'service_wr4az9p', // replace with your service ID
          'template_wdjpi1h', // replace with your template ID
          formData,
          'ygUVr97Cj9AQfo7fx' // replace with your user ID
        );
        setMsg("Email sent successfully")
        setButtonDisable(false);
        setFormData({});
        setLoading(false)
        setOpen(true);
      } catch (error) {
        setButtonDisable(false);
        console.error('Error sending email:', error);
      }
    } else {
      setOpen(true)
      setMsg("Please enter your email and name")
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
            label={loading ? <CircularProgress /> : "Submit"}
            buttonClick={handleSubmit}
            disable={buttonDisable}
          />
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity={msg === "Email sent successfully" ? "success" : "error"}
              variant="filled"
              sx={{ width: '100%' }}
            >
              {msg}
            </Alert>
          </Snackbar>
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.227360332082!2d77.55458469999999!3d12.893096799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f54c77bc615%3A0xca7501414d5465f6!2sS%20K%20TECHNOSYS!5e0!3m2!1sen!2sin!4v1720342938658!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsMain;
