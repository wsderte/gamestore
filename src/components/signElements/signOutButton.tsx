import { signOut } from 'firebase/auth'
import { auth } from '../../firebase/clientApp'
import Image from 'next/image'
import styles from '@/styles/Sign.module.css'
import router from 'next/router'

const SignOutButton = () => {
    const signOut_ = () => {
        signOut(auth)
            .then(() => {
                if (!auth.currentUser) {
                    // console.log(localStorage.tokens, 'REMOVE')
                    localStorage.removeItem('tokens')
                    router.push('/')
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className={styles.signOutBox} onClick={() => signOut_()}>
            Sign Out
        </div>
    )
}

export default SignOutButton
