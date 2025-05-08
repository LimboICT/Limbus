<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
  
  // Your Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAnf_PNL0nJAzcAC-Tozk9ugt8UIykeIu0",
    authDomain: "login-1d138.firebaseapp.com",
    projectId: "login-1d138",
    storageBucket: "login-1d138.firebasestorage.app",
    messagingSenderId: "823918375870",
    appId: "1:823918375870:web:13db570de493498df33fef"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // Sign Up function
  document.getElementById("signup-button").addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (!username || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Sign-up successful!");
        console.log("User created:", userCredential.user);

        window.location.href = "Login.html";
      })
      .catch((error) => {
        console.error("Sign-up error:", error);
        alert("Error: " + error.message);
      });
  });
</script>
