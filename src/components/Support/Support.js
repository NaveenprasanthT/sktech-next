import React, { useState } from 'react'
import Styles from '@/styles/Support/support.module.css'
import Image from 'next/image';

const Support = () => {

  const [items,setItems] = useState({
    category:"",
    model:"",
    subcategory:""
  })

  return (
    <div className={Styles.Scontainer}>
      <div className={Styles.SImgwrapper}>
        <Image src="/assets/Support/supportimg.png" width={1000} height={1000} className={Styles.Supportimage}/>
      </div>
      <div className={Styles.SdownloadCon}>
        <div className={Styles.SItemsContainer}>
            <div className={Styles.SItemsDescription}>
              <h2>POS Systems</h2>
              <p>Download details by selecting appropriate Machine, Model & Category</p>
            </div>
            <div className={Styles.SItemSelectorCon}>
              <div className={Styles.eachSelector}>
              <h4>Select the category</h4>
              <select>
              <option value="" selected disabled hidden className={Styles.selectedOption}>Category</option>
                <option>Mownika</option>
                <option>Nithya</option>
                <option>lavanya</option>
              </select>
              </div>
              <div className={Styles.eachSelector}>
              <h4>Select Model</h4>
              <select>
              <option value="" selected disabled hidden className={Styles.selectedOption}>Modal</option>
                <option>Mownika</option>
                <option>Nithya</option>
                <option>lavanya</option>
              </select>
              </div>
              <div className={Styles.eachSelector}>
              <h4>Select subcategory</h4>
              <select>
                <option value="" selected disabled hidden className={Styles.selectedOption}>Sub category</option>
                <option>Mownika</option>
                <option>Nithya</option>
                <option>lavanya</option>
              </select>
              </div>
            </div>
            <div className={Styles.downloadBtn}>
              <button>Download</button>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Support;