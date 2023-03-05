import React, { useState } from 'react'
import { items } from '../../public/Items.json'
import styles from '../styles/Home.module.css'
import Carousel from 'nuka-carousel'
import Image from 'next/image'
import router from 'next/router'

const CustomCarousel = () => {
    const { bootstrap } = items

    const handleClick = (title: string) => {
        router.push('/game/' + title)
    }

    return (
        <div className={styles.carouselWrapper}>
            <Carousel
                defaultControlsConfig={{
                    pagingDotsStyle: {
                        fill: 'white',
                        width: 20,
                        height: 60,
                    },
                }}
            >
                {bootstrap.map((item) => (
                    <div key={item.id} className={styles.carouselWrapper}>
                        <Image
                            className={styles.imageUrl}
                            src={item.imageUrl}
                            alt={'slides'}
                            key={item.id}
                            width={2000}
                            height={1000}
                        />

                        <div className={styles.corouselTextWrap}>
                            <div className={styles.corouselBox}>
                                <h3 className={styles.carouselTitle}>
                                    {item.title}
                                </h3>
                                <p className={styles.carouselText}>
                                    {item.body}
                                </p>
                                <div
                                    className={styles.carouselButton}
                                    onClick={() => {
                                        handleClick(item.title)
                                    }}
                                >
                                    Buy Now
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default CustomCarousel
