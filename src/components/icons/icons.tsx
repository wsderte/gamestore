import Link from 'next/link'
import React from 'react'
// import { IconType } from 'react-icons'
import styles from '../../styles/Footer.module.css'

interface ImageI {
    image: JSX.Element
    link: string
    // image: IconType  // problems with major version
}

const Icons: React.FC<ImageI> = ({ image, link }: ImageI) => {
    return (
        <div className={styles.socialImageWrap}>
            <Link href={link} className={styles.socialImage}>
                {image}
            </Link>
        </div>
    )
}

export default React.memo(Icons)
