// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyB5VfbuZ8JhEH5uCSXSp4PDHMNOwncS-Kk',
    authDomain: 'market-d6641.firebaseapp.com',
    projectId: 'market-d6641',
    storageBucket: 'market-d6641.appspot.com',
    messagingSenderId: '293462428628',
    appId: '1:293462428628:web:2e391f58f5955c0455a441',
    measurementId: 'G-PJZ3FZGR6X',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
