import { initializeApp, getApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCPlTNukvEJ_gCcWokI2F8asyJESTVAV6A',
  authDomain: 'prepwise-a4a7b.firebaseapp.com',
  projectId: 'prepwise-a4a7b',
  storageBucket: 'prepwise-a4a7b.firebasestorage.app',
  messagingSenderId: '629420768541',
  appId: '1:629420768541:web:3949f033acd6517a4335f4',
  measurementId: 'G-SPMXW2EG8D',
}

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()

export const auth = getAuth(app)
export const db = getFirestore(app)
