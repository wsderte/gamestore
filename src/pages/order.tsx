import styles from '../styles/Profile.module.css'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { IgameCard } from './../interface/game.interface'

interface GamesState {
    itemsInCart: IgameCard[]
}

interface CartState {
    cart: GamesState
}

const Order = () => {
    let items: IgameCard[] = useSelector(
        (state: CartState) => state.cart.itemsInCart
    )
    
    let fullPrice: number = items.reduce((acc: number, item: IgameCard) => {
        return (acc += item.price)
    }, 0)

    return (
        <div className={styles.profileWrapper}>
            <div className={styles.orderBox}>
                {items.map((item: any) => (
                    <div key={item.id + item.title}>
                        <div className={styles.orderElement}>
                            {item.title}{' '}
                            <span className={styles.orderPrice}>
                                {item.price + ' ₴'}
                            </span>
                        </div>
                    </div>
                ))}
                <div className={styles.profileButton} onClick={() => {}}>
                    Buy for {fullPrice + ' ₴'}
                </div>
            </div>
        </div>
    )
}

export default Order
