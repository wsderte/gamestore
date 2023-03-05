import React, { useEffect } from 'react'
import styles from '../styles/Card.module.css'
import Gamecard from './gamecard'
import { items } from '../../public/Items.json'
import { IgameCard } from '@/interface/game.interface'

interface Iitems {
    bootstrap: IgameCard[]
}

const Cards: React.FC = () => {
    const { bootstrap }: Iitems = items
    return (
        <div className={styles.cardsWrap}>
            <div className={styles.cardsFlexBox}>
                {bootstrap.map((item) => (
                    <div key={item.id} className={styles.itemWrap}>
                        <Gamecard arr={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default React.memo(Cards)
