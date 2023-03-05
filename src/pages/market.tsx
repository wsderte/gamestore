import React, { useEffect, useState } from 'react'
import styles from '../styles/Card.module.css'
import Gamecard from '../components/gamecard'
import { items } from '../../public/Items.json'
import { IgameCard } from '@/interface/game.interface'

export async function getStaticProps() {
    const { bootstrap } = items

    return {
        props: {
            bootstrap,
        },
    }
}

interface Imarket {
    bootstrap: IgameCard[]
}

const Market = ({ bootstrap }: Imarket) => {
    const [filtered, setFiltered] = useState(bootstrap)

    const handleRating = () => {
        console.log('Rating')
        let filter = [...filtered].sort(
            (a: { rating: number }, b: { rating: number }) =>
                b.rating - a.rating
        )

        setFiltered(filter)
    }
    const handleBigPrice = () => {
        let filter = [...filtered].sort(
            (a: { price: number }, b: { price: number }) => b.price - a.price
        )
        setFiltered(filter)
    }
    const handleLowPrice = () => {
        let filter = [...filtered].sort(
            (a: { price: number }, b: { price: number }) => a.price - b.price
        )
        setFiltered(filter)
    }

    return (
        <div className={styles.cardsWrapper}>
            <div className={styles.switchBox}>
                <label className={styles.switchWrap}>
                    <div className={styles.button} onClick={handleRating}>
                        Filter rating
                    </div>
                </label>
                <label className={styles.switchWrap}>
                    <div className={styles.button} onClick={handleBigPrice}>
                        Filter Big Price
                    </div>
                </label>
                <label className={styles.switchWrap}>
                    <div className={styles.button} onClick={handleLowPrice}>
                        Filter Low Price
                    </div>
                </label>
            </div>
            <div className={styles.cardsFlexBox}>
                {filtered.map((item: any) => (
                    <div key={item.id} className={styles.itemWrap}>
                        <Gamecard arr={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Market
