const firebaseConfig = {
  apiKey: "AIzaSy....",
  authDomain: "project.firebaseapp.com",
  projectId: "project-id",
};

var firebaseConfig = {
  apiKey: "API_KEY_KAMU",
  authDomain: "PROJECT.firebaseapp.com",
  projectId: "PROJECT_ID"
};

firebase.initializeApp(firebaseConfig);

// LOGIN GOOGLE
function loginGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(() => {
    window.location.href = "index.html";
  });
}

// LOGOUT
function logout() {
  firebase.auth().signOut().then(() => {
    window.location.href = "login.html";
  });
}

<script>
firebase.auth().onAuthStateChanged(user => {
  if (!user) {
    window.location.href = "login.html";
  }
});
</script>
