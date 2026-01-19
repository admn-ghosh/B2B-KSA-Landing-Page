// Fix for Module '"firebase/app"' has no exported member 'initializeApp'
import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDldazqAxxj_4uyYQk3UdEUtdt60s0y0xs",
  authDomain: "helpful-topic-482712-p8.firebaseapp.com",
  projectId: "helpful-topic-482712-p8",
  storageBucket: "helpful-topic-482712-p8.firebasestorage.app",
  messagingSenderId: "427548918732",
  appId: "1:427548918732:web:94fe39ac8c21a65f841369"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Export serverTimestamp for consistent date handling in documents
export { serverTimestamp };
