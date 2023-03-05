import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/clientApp'

import { useEffect, useState } from 'react'
import styles from '@/styles/Sign.module.css'

import GoogleButton from '@/components/signElements/googlebutton'
import { MdAccountBox } from 'react-icons/md'
import { AiFillLock } from 'react-icons/ai'
import { BsSignpostSplitFill } from 'react-icons/bs'
import Link from 'next/link'
import router from 'next/router'

function SignIn() {
    const [userf, setUserf] = useState<any>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const getFromStorage = (): string | null | undefined => {
        if (typeof window !== 'undefined') {
            if (localStorage.tokens) {
                return localStorage.getItem('tokens')
            } else {
                return ''
            }
        }
    }

    useEffect(() => {
        setUserf(getFromStorage())
    }, [])

    const signInEmail = (): void => {
        if (!email && !password) return
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                setUserf(user)
                localStorage.setItem('tokens', JSON.stringify(user))
                router.push('/')
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
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
                {userf ? 'Welcome ' : 'Login '}

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
                        onClick={() => signInEmail()}
                    >
                        Log in
                    </div>
                </div>

                <GoogleButton handleUser={setUserf} />
                <p className={styles.linkText}>
                    Not a member?{' '}
                    <Link href={'/signup'} className={styles.link}>
                        Sign up
                    </Link>{' '}
                    <BsSignpostSplitFill size={12} />
                </p>
            </div>
        </div>
    )
}

export default SignIn
