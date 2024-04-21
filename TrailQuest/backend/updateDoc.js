import { FIREBASE_AUTH, FIREBASE_DB } from './FirebaseConfig.ts'; // import firebase
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, updateDoc, arrayUnion } from 'firebase/firestore';


export const updateDocument = async (collectionName, docId, fieldsToUpdate) => {
    const docRef = doc(FIREBASE_DB, collectionName, docId); // get document reference
  
    try {
      await updateDoc(docRef, {
        questData: arrayUnion(fieldsToUpdate)
      });
      console.log('Document successfully updated!');
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };

export const updateDocument2 = async (collectionName, docId, newFriendEmail) => {
  const docRef = doc(FIREBASE_DB, collectionName, docId); // get document reference
  
  try {
    await updateDoc(docRef, {
      friends: arrayUnion(newFriendEmail)
    });
    console.log('Document successfully updated!');
  } catch (error) {
    console.error('Error updating document: ', error);
  }
}