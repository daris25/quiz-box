import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import TebakGambarPage from "./pages/tebakgambar";
import reportWebVitals from "./reportWebVitals";

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC9_2dUZQHvSHxQ3-Isu4treDRJB1OSweg",
//   authDomain: "quiz-box-fd2da.firebaseapp.com",
//   projectId: "quiz-box-fd2da",
//   storageBucket: "quiz-box-fd2da.appspot.com",
//   messagingSenderId: "100439156319",
//   appId: "1:100439156319:web:9ed532fe3c9c3e59d89dea",
//   measurementId: "G-0DZL2BJKC2",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* {analytics} */}
    <TebakGambarPage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
