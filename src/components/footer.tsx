import React from 'react'
import styles from '../styles/Footer.module.css'

import { FiMail, FiDribbble } from 'react-icons/fi'
import { FaBehance, FaLinkedinIn } from 'react-icons/fa'
import Image from 'next/image'

import Icons from './icons/icons'

const icons = [
    {
        icon: <FiMail size="25px" />,
        key: 4,
        link: 'https://www.google.com/intl/ru/gmail/about/',
    },
    {
        icon: <FaBehance size="25px" />,
        key: 1,
        link: 'https://www.behance.net/',
    },
    {
        icon: <FiDribbble size="25px" />,
        key: 2,
        link: 'https://dribbble.com/',
    },
    {
        icon: <FaLinkedinIn size="25px" />,
        key: 3,
        link: 'https://ua.linkedin.com/',
    },
]

const Footer: React.FC = () => {
    return (
        <div className={styles.footerWrap}>
            <div className={styles.footerContainer}>
                <div className={styles.footerHeader}>© 2023 Game store</div>

                <div className={styles.footerIconsBox}>
                    {icons.map((el) => (
                        <Icons image={el.icon} key={el.key} link={el.link} />
                    ))}
                </div>
                <div className={styles.footerEndText}>
                    <span className={styles.white}> Made by Ascella</span>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Footer)
