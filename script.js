const form = document.getElementById('regForm');
    const messageDiv = document.getElementById('message');
    let users = []; // Array to store submitted usernames

    // Function to validate form input
    function validateForm(username, password, confirmPassword) {
      if (username === "") {
        return "Username cannot be empty.";
      }
      if (password.length < 6) {
        return "Password must be at least 6 characters.";
      }
      if (confirmPassword !== password) {
        return "Passwords do not match.";
      }
      return "";  // No errors
    }

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Stop form from submitting normally

      // Variables storing user input values (strings)
      let username = document.getElementById('username').value.trim();
      let password = document.getElementById('password').value;
      let confirmPassword = document.getElementById('confirmPassword').value;

      // Call validation function
      let errorMessage = validateForm(username, password, confirmPassword);

      if (errorMessage) {
        messageDiv.style.color = "red";
        messageDiv.textContent = errorMessage;
      } else {
        // Add username to array (arrays)
        users.push(username);

        messageDiv.style.color = "green";
         messageDiv.textContent = `Registration successful! Welcome, ${username}!`;

        // Reset form
        form.reset();
      }
    });