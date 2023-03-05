import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/clientApp'

import { useState } from 'react'
import styles from '@/styles/Sign.module.css'
import GoogleButton from '@/components/signElements/googlebutton'

import { MdAccountBox } from 'react-icons/md'
import { AiFillLock } from 'react-icons/ai'
import { BsSignpostSplitFill } from 'react-icons/bs'
import Link from 'next/link'
import router from 'next/router'
import { IgameCard } from './../interface/game.interface'

function SignUp() {
    const [user, setUser] = useState<any>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const signUpEmail = () => {
        if (!email && !password) return
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                setUser(user)
                localStorage.setItem('tokens', JSON.stringify(user))
                router.push('/')
            })
            .catch((error) => {
                // const errorCode = error.code
                const errorMessage = error.message
                console.log(errorMessage)
            })
    }

    function handleEmailImput(event: { target: { value: string } }): void {
        setEmail(event.target.value)
    }

    function handlePasswordImput(event: { target: { value: string } }): void {
        setPassword(event.target.value)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {user ? 'Welcome ,' + user?.displayName : 'Login '}

                <div className={styles.inputBox}>
                    <div className={styles.inputIcon}>
                        <MdAccountBox className={styles.inputAccountIcon} />
                    </div>
                    <input
                        placeholder="Email"
                        type="text"
                        className={styles.input}
                        value={email}
                        onChange={handleEmailImput}
                    ></input>
                </div>

                <div className={styles.inputBox}>
                    <div className={styles.inputIcon}>
                        <AiFillLock className={styles.inputAccountIcon} />
                    </div>
                    <input
                        className={styles.input}
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordImput}
                    />
                </div>

                <div>
                    <div
                        className={styles.loginButton}
                        onClick={() => signUpEmail()}
                    >
                        Sign up
                    </div>
                </div>

                <GoogleButton handleUser={setUser} />
                <p className={styles.linkText}>
                    Already a member?{' '}
                    <Link href={'/signin'} className={styles.link}>
                        Sign In
                    </Link>{' '}
                    <BsSignpostSplitFill size={12} />
                </p>
            </div>
        </div>
    )
}

export default SignUp
