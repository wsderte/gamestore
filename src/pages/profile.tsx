import styles from '../styles/Profile.module.css'
import Image from 'next/image'

import SignOutButton from './../components/signElements/signOutButton'

const Profile = () => {
    return (
        <div className={styles.profileWrapper}>
            <div className={styles.profileBox}>
                <h2>Profile Account</h2>
                <h2 className={styles.profileBalance}>Current Balance: 0 </h2>
                <div className={styles.profileButton} onClick={() => {}}>
                    Replenish Balance
                </div>
                <SignOutButton />
            </div>
        </div>
    )
}

export default Profile
