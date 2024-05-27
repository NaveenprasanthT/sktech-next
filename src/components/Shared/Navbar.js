import React, { useState } from 'react';
import styles from '@/styles/Shared/navbar.module.css';
import Image from 'next/image';
import { MessageIcon, NavbarDropDownArrow } from './SvgIcon';
import Link from 'next/link';

import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const [productMenuData, setProductMenuData] = useState([
    {
      id: 1,
      title: 'POS Software',
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
      title: 'Thermal Printers',
      showDropDown: false,
      subMenu: [
        {
          title: 'Ultra speed thermal printer',
          url: '/product/',
        },
        {
          title: 'High speed thermal printer',
          url: '/product/',
        },
      ],
    },
    {
      id: 3,
      title: 'PERIPHERAL',
      showDropDown: false,
      subMenu: [
        {
          title: 'SK-POS Heavy Duty Cash Drawer',
          url: '/product/',
        },
        {
          title: 'Monitors',
          url: '/product/',
        },
        {
          title: 'Magnetic Stripe Readers (MSR)',
          url: '/product/',
        },
        {
          title: 'VFD & POLE DISPLAY',
          url: '/product/',
        },
      ],
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
      }
      return finalMenu;
    }));
  };

  return (
    <>
      <div className={styles.navbarWrap}>
        <div className={styles.navbarLeft}>
          <Image
            src='/assets/Shared/logo.png'
            alt='logo'
            className={styles.logoImage}
            width={1000}
            height={1000}
          />
        </div>
        <div className={styles.navbarRight}>
          <ul>
            <Link href="/" style={{ textDecoration: "none" }}><li>Home</li></Link>
            <div>
              <li
                ref={anchorRef}
                onClick={handleToggle}
              >
                <span>Products & Services</span>
                <span className={styles.menuDropDownArrow}><NavbarDropDownArrow /></span>
              </li>
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
                        <div className={styles.navbarProductWrap}>
                          {productMenuData?.map((menu, index) => (
                            <div className={styles.menuContainer} key={index}>
                              <div
                                onClick={() => handleDorpDownMenu(menu.id)}
                                className={styles.menuHeader}
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
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
            <Link href="/aboutus" style={{ textDecoration: "none" }}><li>About us</li></Link>
            <li>Support</li>
            <Link href="/contactus" style={{ textDecoration: "none" }}><li><span>Contact us</span> <span><MessageIcon /></span> </li></Link>
          </ul>
        </div>
      </div>
      <div className={styles.emptyDiv} />
    </>
  );
}

export default Navbar;
