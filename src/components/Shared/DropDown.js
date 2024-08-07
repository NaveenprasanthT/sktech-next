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
  const handleClick = (event, menu) => {
    if (menu?.subMenu?.length > 0) {  
      setAnchorEl(event.currentTarget);
    }
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
      >
        <h3
          onMouseEnter={(e) => handleClick(e, menu)}
        >{menu.title}</h3>
        <Menu
          id={`basic-menu${menu?.id}`}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          className={styles.subMenuWrap}
          sx={{
            '& .MuiPaper-root': {
              backgroundColor: '#101010',
            },
          }}
        >
          {menu?.subMenu?.map((item, subIndex) => (
            <MenuItem
              disabled={item?.disabled}
            >
              <p
                style={{ color: 'rgb(156 156 156)' }}
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
    </div>
  );
}

export default DropDown;
