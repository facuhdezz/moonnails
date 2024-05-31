import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC7COD1ld60cdBmH9fLvPRAllX6g8t6TLs",
  authDomain: "moonnails-52b2b.firebaseapp.com",
  projectId: "moonnails-52b2b",
  storageBucket: "moonnails-52b2b.appspot.com",
  messagingSenderId: "147678827149",
  appId: "1:147678827149:web:eb75d968079028f4b348c4",
  measurementId: "G-ZL22EYWY31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
      <BrowserRouter>
            <App />
      </BrowserRouter>
)
