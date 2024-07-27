import React from 'react'
// import Styles from "@/styles/PrivacyPolicy/privacyPolicy.module.css"
import Information from '../Shared/information';

const policy = () => {
    const policyContent = [
      {
        content:
          'This Privacy Policy describes how S K Technosys ("we," "us," or "our") collects, uses, and discloses your personal information when you use our website (sktechnosys.in) or purchase our products from our authorized retailers.Information We Collect We collect several types of information for various purposes to improve our services to you.',
        list: true,
        listContent: [
          "Personal Information: We may collect personal information, such as your name, contact information (including email address and phone number), and billing details, when you purchase our products from our authorized retailers.",
          "Non-Personal Information: We may also collect non-personal information, such as your browser type, operating system, IP address, browsing preferences, and information collected through cookies and other tracking technologies.",
        ],
      },
      {
        title: "Use of Collected Information",
        content: "We use the information we collect to:",
        list: true,
        listContent: [
          "Process your orders and deliver the products you purchase.",
          "Send you important information about your orders, including order confirmations, invoices, and updates.",
          "Respond to your inquiries and requests.",
          "Send you marketing communications, such as newsletters and promotional offers (with your consent).",
          "Analyze website traffic and usage patterns to improve our website and your experience.",
        ],
      },
      {
        title: "Disclosure of Collected Information",
        content:
          "We may disclose your information to third-party vendors and service providers who assist us in operating our business and website, fulfilling your orders, processing payments, and providing customer service. These third parties are obligated to keep your information confidential and use it only for the purposes we have disclosed. We may also disclose your information if required by law or to protect our rights or safety.",
        list: false,
      },
      {
        title: "Data Retention",
        content:
          "We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.",
        list: false,
      },
      {
        title: "Your Rights",
        content: "You have certain rights regarding your personal information:",
        list: true,
        listContent: [
          "Access: You have the right to access your personal information that we hold.",
          "Correction: You have the right to request that we correct any inaccurate or incomplete personal information.",
          "Objection: You have the right to object to the processing of your personal information.",
          "Erasure: You have the right to request that we erase your personal information.",
        ],
        desc: [
          "To exercise any of these rights, please contact us using the contact information below. Security",
          "We take reasonable steps to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission or electronic storage method is completely secure.",
        ],
      },
      {
        title: "Children's Privacy",
        content:
          "Our website and products are not directed to children under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and you believe your child has provided us with personal information, please contact us so we can delete it.",
        list: false,
      },
      {
        title: "Changes to this Privacy Policy",
        content:
          "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website.",
        list: false,
      },
      {
        title: "Contact Us",
        content:
          "If you have any questions about this Privacy Policy, please contact us at:",
        list: true,
        listContent: [
          "Email: support@sktechnosys.in",
          "Phone: 81056 25375",
          "Address: No.25, 1st floor, Behind ICICI Bank, Bikasipura BDA Layout, Vasanthapura Main Rd, Banashankari 5th Stage, Bengaluru, Karnataka 560062",
        ],
      },
    ];
  return (
    <>
    <Information data={policyContent} header={"Privacy policy"} />
    </>
  )
}

export default policy