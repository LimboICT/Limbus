import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyAnf_PNL0nJAzcAC-Tozk9ugt8UIykeIu0",
  authDomain: "login-1d138.firebaseapp.com",
  projectId: "login-1d138",
  storageBucket: "login-1d138.firebasestorage.app",
  messagingSenderId: "823918375870",
  appId: "1:823918375870:web:13db570de493498df33fef"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signup = () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirm-password").value.trim();

  if (!email || !password || !confirmPassword) {
    alert("Please fill in all fields.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User created:", user);
      alert("Sign-up successful!");
      window.location.href = "Login.html";
    })
    .catch((error) => {
      console.error("Sign-up error:", error.message);
      alert("Error: " + error.message);
    });
};

document.getElementById("signup-button").addEventListener("click", signup);

// Allow Enter key to submit form
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    signup();
  }
});
