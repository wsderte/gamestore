import React, { useState } from 'react'
import { items } from '../../../public/Items.json'
// import styles from '../styles/Home.module.css'
import styles from '../../styles/Game.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { AiFillHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { setItemInCart } from '../../redux/cart/reducer'
import { IgameCard } from '@/interface/game.interface'

const GamePage = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const { bootstrap } = items
    const { title } = router.query

    const filtered = bootstrap.filter((item) => item.title === title)

    const addToCart = (item: IgameCard) => {
        dispatch(setItemInCart(item))
        // console.log(item)
    }

    return (
        <div className={styles.gameWrapper}>
            {filtered.map((item) => (
                <div key={item.id} className={styles.gameWrapper}>
                    {/* <img
                        src={item.imageUrl}
                        alt="slides"
                        className={styles.imageUrl}
                    /> */}
                    <Image
                        className={styles.imageUrl}
                        src={item.imageUrl}
                        alt={'slides'}
                        width={2000}
                        height={1000}
                    />

                    <div className={styles.gameTextWrap}>
                        <div className={styles.gameBox}>
                            <h3 className={styles.gameTitle}>{item.title}</h3>
                            <div className={styles.gameFields}>
                                <p className={styles.gameText}>
                                    Платформа: {item.body}
                                </p>
                                <p className={styles.gameText}>
                                    Издатель: {item.developer}
                                </p>
                                <p className={styles.gameText}>
                                    Цена: {item.price + ' ₴'}
                                </p>
                                <p className={styles.gameText}>
                                    Дата релиза: {item.date}
                                </p>
                            </div>
                            <div className={styles.rating}>
                                <AiFillHeart />
                                {item.rating}{' '}
                                <span className={styles.exists}>
                                    {'Есть в наличии'}
                                </span>
                            </div>
                            <div
                                className={styles.gameButton}
                                onClick={() => {
                                    addToCart(item)
                                }}
                            >
                                Add to cart
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default GamePage
