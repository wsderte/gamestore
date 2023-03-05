import React, { useEffect, useState } from 'react'
import styles from '../styles/Card.module.css'
import Link from 'next/link'
import { Modal } from 'antd'

import router from 'next/router'
import { AiFillHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { setItemInCart } from '../redux/cart/reducer'
import Image from 'next/image'
import { IgameCard } from '@/interface/game.interface'

interface ICard {
    arr: IgameCard
}

const GameCard = ({ arr }: ICard) => {
    const [flag, setflag] = useState<boolean>(false)
    const dispatch = useDispatch()
    const getFromStorage = (): string | boolean | undefined | null => {
        if (typeof window !== 'undefined') {
            if (window.localStorage.tokens) {
                return window.localStorage.getItem('tokens')
            } else {
                return false
            }
        }
    }
    const routeOnClick = ({ arr }: ICard): void => {
        router.push('/game/' + arr.title)
    }

    const handleClick = ({ arr }: ICard): void => {
        if (getFromStorage()) {
            dispatch(setItemInCart(arr))
        } else {
            setflag(true)
        }
    }
    const handleModalOk = (): void => {
        setflag(false)
    }

    const handleModalCancel = (): void => {
        setflag(false)
    }

    return (
        <div className={styles.cardWrap}>
            {!getFromStorage() && (
                <Modal
                    open={flag}
                    onOk={handleModalOk}
                    onCancel={handleModalCancel}
                >
                    <p>
                        Чтобы добавить товар в корзину, Вам нужно{' '}
                        <Link href="/signin">авторизоваться</Link>
                    </p>
                </Modal>
            )}
            <div className={styles.cardBox}>
                <div
                    className={styles.cardUp}
                    onClick={() => routeOnClick({ arr })}
                >
                    <Image
                        className={styles.cardImg}
                        src={arr.imageUrl}
                        alt={'slides'}
                        key={arr.id}
                        width={400}
                        height={300}
                    />
                </div>
                <p className={styles.price}>{arr.price + ' ₴'}</p>
                <p className={styles.title}>
                    {arr.title} {arr.body}
                </p>
                <div className={styles.rating}>
                    <AiFillHeart />
                    {arr.rating}{' '}
                    <span className={styles.exists}>{'Есть в наличии'}</span>
                </div>
                <div className={styles.cardDown}>
                    <div
                        className={styles.cardButton}
                        onClick={() => handleClick({ arr })}
                    >
                        {'Add to cart'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(GameCard)
