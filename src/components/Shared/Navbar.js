import React, { useState } from 'react';
import styles from '@/styles/Shared/navbar.module.css';
import Image from 'next/image';
import { CloseIcon, MessageIcon, NavbarDropDownArrow, ToggleIcon } from './SvgIcon';
import Link from 'next/link';
import { motion } from 'framer-motion';

import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import DropDown from './DropDown';

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [openNavbar, setOpenNavbar] = useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
    setOpenNavbar(false);
  };

  const [productMenuData, setProductMenuData] = useState([
    {
      id: 1,
      title: 'POS System',
      showDropDown: true,
      subMenu: [
        {
          title: 'SK-POS Mighty Series',
          url: '/product/pos-system?id=1',
        },
        {
          title: 'SK-POS Extreme Series',
          url: '/product/pos-system?id=2',
        },
        {
          title: 'SK-POS Andriod Series',
          url: '/product/pos-system?id=3',
        },
        {
          title: 'SK-POS Compact Series',
          url: '/product/pos-system?id=4',
        },
      ],
    },
    {
      id: 2,
      title: 'Barcode printers & Scanners',
      showDropDown: false,
      subMenu: [],
    },
    {
      id: 3,
      title: 'Weighing solutions',
      showDropDown: false,
      subMenu: [],
    },
    {
      id: 4,
      title: 'Consumables',
      showDropDown: false,
      subMenu: [],
    },
    {
      id: 5,
      title: 'Thermal Printers',
      showDropDown: false,
      subMenu: [
        {
          title: 'Ultra speed thermal printer',
          url: '/product/thermal-printers?id=1',
        },
        {
          title: 'High speed thermal printer',
          url: '/product/thermal-printers?id=2',
        },
      ],
    },
    {
      id: 6,
      title: 'Servers desktops & Laptops',
      showDropDown: false,
      subMenu: [],
    },
    {
      id: 7,
      title: 'Supermarket racks',
      showDropDown: false,
      subMenu: [],
    },
    {
      id: 8,
      title: 'Add-on-products',
      showDropDown: false,
      subMenu: [],
    },
    {
      id: 9,
      title: 'Peripheral',
      showDropDown: false,
      subMenu: [
        {
          title: 'SK-POS Heavy Duty Cash Drawer',
          url: '/product/peripheral?id=1',
        },
        {
          title: 'Monitors',
          url: '/product/peripheral?id=2',
        },
        {
          title: 'Magnetic Stripe Readers (MSR)',
          url: '/product/peripheral?id=3',
        },
        {
          title: 'VFD & Pole Display',
          url: '/product/peripheral?id=4',
        },
      ],
    },
    {
      id: 10,
      title: 'Office printers',
      showDropDown: false,
      subMenu: [],
    },
    {
      id: 11,
      title: 'Electronic cash registers (ECR)',
      showDropDown: false,
      subMenu: [],
    },
    {
      id: 12,
      title: 'Service & AMC',
      showDropDown: false,
      subMenu: [],
    },
    {
      id: 13,
      title: 'Kiosks',
      showDropDown: false,
      subMenu: [],
    },
    {
      id: 14,
      title: 'Retail & hospitality software',
      showDropDown: false,
      subMenu: [],
    },
    {
      id: 15,
      title: 'Sign boards',
      showDropDown: false,
      subMenu: [],
    },
  ]);

  const handleDorpDownMenu = (id) => {
    setProductMenuData((prevValue) => prevValue.map((menu) => {
      let finalMenu = menu;
      if (menu.id === id) {
        finalMenu = {
          ...menu,
          showDropDown: !menu.showDropDown,
        };
      } else {
        finalMenu = {
          ...menu,
          showDropDown: false,
        };
      }
      return finalMenu;
    }));
  };

  return (
    <div className={styles.navbar}>
      <div ref={anchorRef} className={styles.navbarWrap}>
        <motion.div
          initial={{ opacity: 0, x: -5 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className={styles.navbarLeft}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <Image
              src='/assets/logo.png'
              alt='logo'
              className={styles.logoImage}
              width={1000}
              height={1000}
            /></Link>
        </motion.div>
        <div className={styles.navbarRight}>
          <ul>
            <Link href="/" style={{ textDecoration: "none" }}>
              <motion.li
                initial={{ opacity: 0, x: 15, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                Home
              </motion.li>
            </Link>
            <div>
              <motion.li
                onMouseEnter={handleToggle}
                initial={{ opacity: 0, x: 15, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <span>Products & Services</span>
                {/* <span className={styles.menuDropDownArrow}><NavbarDropDownArrow /></span> */}
                <span style={{ display: 'none' }}></span>
              </motion.li>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === 'bottom-start' ? 'left top' : 'left bottom',
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <div className={styles.navbarProductWrapDesktop} onMouseLeave={() => setOpen(false)}>
                          {productMenuData?.map((menu, index) => (
                            <div className={styles.menuContainerDesktop} key={index}>
                              {/* <div
                                onClick={() => handleDorpDownMenu(menu.id)}
                                className={styles.menuHeader}
                              >
                                <h3>{menu.title}</h3>
                              </div> */}
                              <div className={styles.subMenus}>
                                <DropDown
                                  menu={menu}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
            <Link href="/aboutus" style={{ textDecoration: "none" }}>
              <motion.li
                initial={{ opacity: 0, x: 15, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                About us
              </motion.li>
            </Link>
            <Link href="/support" style={{ textDecoration: "none" }}>
              <motion.li
                initial={{ opacity: 0, x: 15, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                Support
              </motion.li>
            </Link>
            <Link href="/news" style={{ textDecoration: "none" }}>
              <motion.li
                initial={{ opacity: 0, x: 15, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                News
              </motion.li>
            </Link>
            <Link href="/contactus" style={{ textDecoration: "none" }}>
              <motion.li
                initial={{ opacity: 0, x: 15, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <span>Contact us</span> <span><MessageIcon /></span>
              </motion.li>
            </Link>
          </ul>
          <div className={styles.toggleWrap}>
            <span onClick={() => setOpenNavbar(true)}><ToggleIcon /></span>
          </div>
        </div>
        <div
          className={styles.mobileNavbarWrap}
          style={{ right: openNavbar ? '0' : '-70vw' }}
        >
          <div className={styles.navbarClose} onClick={() => setOpenNavbar(false)}><CloseIcon /></div>
          <ul>
            <Link href="/" style={{ textDecoration: "none" }}><li onClick={() => setOpenNavbar(false)}>Home</li></Link>
            <div className={styles.mobileNavbarProductWrap}>
              {productMenuData?.map((menu, index) => (
                <div className={styles.menuContainer} key={index}>
                  <div
                    onClick={() => handleDorpDownMenu(menu.id)}
                    className={styles.mobileMenuHeader}
                  >
                    <h3>{menu.title}</h3>
                    <span
                      style={{ transform: menu.showDropDown ? 'rotate(90deg)' : 'rotate(0deg)' }}
                    >
                      <NavbarDropDownArrow />
                    </span>
                  </div>
                  <div
                    style={{ height: menu.showDropDown ? `${menu.subMenu.length * 35}px` : '0px' }}
                    className={styles.subMenuContainer}
                  >
                    {menu?.subMenu?.map((subMenuItem, subIndex) => (
                      <Link href={subMenuItem?.url} key={subIndex}>
                        <p onClick={handleClose}>{subMenuItem?.title}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <Link href="/aboutus" style={{ textDecoration: "none" }}>
              <li>About us</li>
            </Link>
            <Link href="/support" style={{ textDecoration: "none" }}>
              <li onClick={() => setOpenNavbar(false)}>Support</li>
            </Link>
            <Link href="/news" style={{ textDecoration: "none" }}>
              <li>News</li>
            </Link>
            <Link href="/contactus" style={{ textDecoration: "none" }}>
              <li onClick={() => setOpenNavbar(false)}><span>Contact us</span> <span><MessageIcon /></span> </li>
            </Link>
          </ul >
        </div >
      </div>
      <div className={styles.emptyDiv} />
    </div>
  );
}

export default Navbar;
