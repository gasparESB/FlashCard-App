import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {CgChevronLeft} from 'react-icons/Cg'

import { sideBarOptions } from './SideBarOptions'

import styles from './styles.module.scss'

const LeftSideBar = () => {
  const [isOpen, setIsOpen] = React.useState<Boolean>(false)

  return (
    <>
      <aside className={`${styles.sideBar} ${!isOpen && styles.closed}`}>
        <button className={styles.button} onClick={()=>setIsOpen(prev=> !prev)}>
          <span className={styles.button__icon}><CgChevronLeft/></span>
          </button>
        <nav className={styles.navBar}>
          <ul className={styles.sideBar__list}>
            {sideBarOptions.map((item) => (
              <Link to={item.PATH} className={styles.sideBar__link}>
                <div className={styles.sideBar__list__item}>
                  <span className={styles.sideBar__icon}>{item.ICON}</span>
                  <p className={styles.sideBar__list__word}>{item.SESSION}</p>
                </div>
              </Link>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default LeftSideBar
