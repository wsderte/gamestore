import React, { useEffect } from 'react'
import styles from '../styles/Header.module.css'
import Link from 'next/link'
import { BsCartCheck } from 'react-icons/bs'
import { VscAccount } from 'react-icons/vsc'
import { useSelector } from 'react-redux'
import { IgameCard } from '@/interface/game.interface'
// import { auth } from '../firebase/clientApp'

interface GamesState {
    itemsInCart: IgameCard[]
}

interface CartState {
    cart: GamesState
}

const Header: React.FC = () => {
    let stored: string | null | undefined = ''
    let items: IgameCard[] = useSelector(
        (state: CartState) => state.cart.itemsInCart
    )

    const getFromStorage = () => {
        if (typeof window !== 'undefined') {
            if (window.localStorage.tokens) {
                // console.log(window.localStorage.getItem('tokens'))
                return window.localStorage.getItem('tokens')
            } else {
                return ''
            }
        }
    }

    stored = getFromStorage()
    let signLink = stored ? '/profile' : '/signin'

    // const signLink = stored ? '/profile' : '/signin'

    return (
        <div className={styles.headerWrap}>
            <div className={styles.headerBox}>
                <div className={styles.headerLogoBox}>
                    <div className={styles.headerLogo}></div>
                </div>

                <div className={styles.headerNav}>
                    <Link href="/order" className={styles.headerCart}>
                        {items ? (
                            <div className={styles.cartNumber}>
                                {items.length}
                            </div>
                        ) : null}
                        <BsCartCheck size={25} />
                    </Link>
                    <Link href="/">
                        <div className={styles.headerBut}>HOME</div>
                    </Link>
                    <Link href="/market">
                        {' '}
                        <div className={styles.headerBut}>MARKET</div>
                    </Link>
                    <Link href={signLink}>
                        {' '}
                        <div className={styles.headerProfile}>
                            <VscAccount size={22} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
