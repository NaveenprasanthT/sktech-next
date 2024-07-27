import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import { MenuItem } from '@mui/material';
import Link from 'next/link';
import styles from '@/styles/Shared/navbar.module.css';

function DropDown(props) {
  const {
    menu,
  } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptionClick = (clickFunc, sendFullDetails, valueDetails) => {
    clickFunc(sendFullDetails ? valueDetails : valueDetails?.id);
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        role="presentation"
        className={styles.menuHeader}
        id={`basic-button${menu?.id}`}
        onClick={handleClick}
      >
        <h3>{menu.title}</h3>
      </div>
      <Menu
        id={`basic-menu${menu?.id}`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className={styles.subMenuWrap}
      >
        {menu?.subMenu?.map((item, subIndex) => (
          <MenuItem
            disabled={item?.disabled}
          >
            <p
              style={{ color: item?.labelColor || '#212B36' }}
              className={styles.submenu}
            >
              <Link href={item?.url} key={subIndex}>
                {item?.title}
              </Link>
            </p>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default DropDown;
