import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '../../firebase/clientApp'
import Image from 'next/image'
import styles from '@/styles/Sign.module.css'
import router from 'next/router'
import { IgameCard } from './../../interface/game.interface'

const provider = new GoogleAuthProvider()

interface IGButton {
    handleUser: (data: IgameCard) => void
}

const GoogleButton = ({ handleUser }: IGButton) => {
    const signWithGoogle = () => {
        console.log('signWithGoogle')
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential =
                    GoogleAuthProvider.credentialFromResult(result)
                const token = credential?.accessToken
                const user = result.user
                router.push('/')
                // handleUser(user)
                localStorage.setItem('tokens', JSON.stringify(user))
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                const email = error.customData.email

                const credential = GoogleAuthProvider.credentialFromError(error)
                console.error(errorCode, errorMessage, email)
            })
    }

    return (
        <div className={styles['google-btn']} onClick={() => signWithGoogle()}>
            <div className={styles['google-icon-wrapper']}>
                <Image
                    className={styles['google-icon']}
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt={''}
                    width={18}
                    height={18}
                />
            </div>
            <p className={styles['google-text']}>Sign in with google</p>
        </div>
    )
}

export default GoogleButton
