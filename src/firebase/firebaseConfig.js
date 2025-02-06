import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAeDMLt2wI8F3iSJtYVCFsVYFdIk8P8NRg",
  authDomain: "my-chat-d4b9e.firebaseapp.com",
  projectId: "my-chat-d4b9e",
  storageBucket: "my-chat-d4b9e.firebasestorage.app",
  messagingSenderId: "810955529351",
  appId: "1:810955529351:web:6c59ceb85691b9425a2c22",
};

const app = initializeApp(firebaseConfig);

export default app;
