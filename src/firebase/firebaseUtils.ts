import { useEffect, useState, useCallback } from 'react';
import * as firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import { Category, CollectionData, Item } from 'types';

const config = {
  apiKey: "AIzaSyDq1MjpiZgmxiexsuHcaDALBblQEOrOmvo",
  authDomain: "qhairinc-885ad.firebaseapp.com",
  databaseURL: "https://qhairinc-885ad.firebaseio.com",
  projectId: "qhairinc-885ad",
  storageBucket: "qhairinc-885ad.appspot.com",
  messagingSenderId: "296068600807",
  appId: "1:296068600807:web:7f38808fd9ff3bcd1be342",
  measurementId: "G-WEBDYCQYY0"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export const useFirebase = () => {
  const [authUser, setAuthUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setAuthUser(user))
    return () => {
      unsubscribe()
    };
  }, []);

  const login = useCallback((email: string, password: string) => auth
    .signInWithEmailAndPassword(email, password), []);

  const logout = useCallback(() => auth.signOut(), [])

  return { login, authUser, logout }
}

export const createUserProfileDocument = async (authUser: firebase.User | null, otherProps?: any) => {
  if (!authUser) return;
  const userReference = firestore.doc(`users/${authUser.uid}`)
  const snapshot = await userReference.get()

  if (!snapshot.exists) {
    const { displayName, email, phoneNumber } = authUser
    const creationDate = new Date()
    try {
      await userReference.set({
        displayName,
        email,
        phoneNumber,
        creationDate,
        ...otherProps
      })
    } catch (error) {
      throw new Error("user cannot be created")
    }
  }
  return userReference
}

interface Collection {
  title: string,
  items: Array<Item>
}

export const addCollectionsAndDocuments = async (collectionKey: string, objectsToAdd: Array<Collection>) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch()
  objectsToAdd.forEach(e => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, e)
  })

  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections: firebase.firestore.QuerySnapshot) => {
    const transformedCollections: Array<Category> = collections.docs.map(doc => {
      const {title, items} = doc.data();
      return {
        routeUrl: encodeURI(`shop/${title.toLowerCase()}`),
        id: doc.id,
        items,
        title
      }

    })

    return transformedCollections.reduce<CollectionData>((acc, collection) => {
        acc[collection.title.toLowerCase() as keyof CollectionData] = collection
        return acc;
    }, {} as CollectionData)
}

export default firebase