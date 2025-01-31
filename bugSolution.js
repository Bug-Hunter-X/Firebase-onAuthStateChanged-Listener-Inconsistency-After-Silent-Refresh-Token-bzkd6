function checkAuthState() {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // User is signed in.
      updateUI(user);
    } else {
      // User is signed out.
      updateUI(null);
    }
  });
}

// Call checkAuthState() periodically to ensure the UI stays synchronized:
setInterval(checkAuthState, 5000); //Check every 5 seconds

// Add additional checks to explicitly handle resuming from background state or handling push notifications.
// ...rest of your code...