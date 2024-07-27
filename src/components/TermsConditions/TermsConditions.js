import React from 'react'
import Information from '../Shared/information'

const TermsConditions = () => {
    const TermsConditions = [
        {
           content:'These Terms and Conditions ("Terms") govern the sale of our products ("Products") to you ("Customer") by S K Technosys ("we," "us," or "our"). Please read these Terms carefully before purchasing our Products. By purchasing our Products, you agree to be bound by these Terms.',
           list:false,
        },
        {
            title:"Order Acceptance",
            content:"Your order for Products constitutes your offer to purchase and our acceptance of your order. We reserve the right to decline your order for any reason, including limited product availability, errors in product or pricing information, or other issues.",
            list:false,
        },
        {
            title:"Payment Terms",
            content:"Payment for all Products is due at the time of purchase. We accept the following payment methods:",
            list:true,
            listContent:[
                "[List accepted payment methods, e.g., credit card, debit card, net banking]"
            ],
            desc:["Prices are exclusive of any applicable taxes or duties. You are responsible for paying any such taxes or duties."]
        },
        {
            title:"Shipping and Delivery",
            content:"We will ship the Products to the address you specify during checkout. Shipping costs will be added to your order total at checkout. We will use commercially reasonable efforts to ship the Products within [number] business days of your order. However, we are not responsible for delays in shipping caused by factors beyond our control, such as weather events or carrier delays.",
            list: false,
        },
        {
            title:"Risk of Loss",
            content:"The risk of loss for the Products passes to you upon shipment from our facility.",
            list: false,
        },
        {
            title:"Return Policy",
            content:"We offer a 7 - Day return policy for all Products. If you are not satisfied with your purchase, you may return the Products within 7 days of receipt for a full refund. Returned Products must be in unused and original condition, with all packaging and manuals. You are responsible for the cost of return shipping.",
            list: false,
        },
        {
            title:"Warranty",
            content:"Our Products are covered by 1 Year warranty against defects in materials and workmanship. The warranty starts from the date of purchase. We will repair or replace, at our sole discretion, any Product that is found to be defective during the warranty period. This warranty does not cover defects caused by misuse, neglect, or unauthorized modifications. Limitation of Liability",
            list:false,
            info:"WE WILL NOT BE LIABLE FOR ANY DAMAGES ARISING OUT OF OR RELATED TO THE SALE OR USE OF OUR PRODUCTS, INCLUDING BUT NOT LIMITED TO DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR SPECIAL DAMAGES. OUR LIABILITY UNDER THESE TERMS WILL NOT EXCEED THE PURCHASE PRICE OF THE PRODUCTS."
        },
        {
            title:"Intellectual Property",
            content:"The Products and all intellectual property rights associated therewith (including copyrights, trademarks, and patents) are the property of S K Technosys or its licensors. You are granted a non-exclusive, non-transferable license to use the Products for your personal use only. You may not modify, copy, distribute, sell, or create derivative works of the Products without our express written permission.",
            list:false,
        },
        {
            title:"Termination",
            content:"We may terminate these Terms for any reason at any time. We will notify you of any termination by email or by posting a notice on our website. Upon termination, you will immediately cease all use of the Products.",
            list:false,
        },
        {
            title:"Governing Law and Dispute Resolution",
            content:"These Terms will be governed by and construed in accordance with the laws of India. Any dispute arising out of or relating to these Terms will be settled by arbitration in accordance with the rules of the arbitration institution.",
            list:false,
        },
        {
            title:"Entire Agreement",
            content:"These Terms constitute the entire agreement between you and us regarding the sale of the Products.",
            list:false,
        },
        {
            title: "Contact Us",
            content:
              "If you have any questions about these Terms, please contact us at:",
            list: true,
            listContent: [
              "Email: support@sktechnosys.in",
              "Phone: 81056 25375",
              "Address: No.25, 1st floor, Behind ICICI Bank, Bikasipura BDA Layout, Vasanthapura Main Rd, Banashankari 5th Stage, Bengaluru, Karnataka 560062",
            ],
          },
    ]
  return (
    <>
    <Information data={TermsConditions} header={"Terms and conditions"}/>
    </>
  )
}

export default TermsConditions