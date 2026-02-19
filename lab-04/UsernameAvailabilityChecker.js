// Get DOM elements
const usernameField = document.querySelector("#username");
const feedbackBox = document.querySelector("#feedback");
const registerForm = document.querySelector("#registerForm");

// State variables
let usernameAvailable = false;
let typingTimer = null;
const newRegisteredUsers = [];

// Listen for user typing (with debounce)
usernameField.addEventListener("input", () => {
    clearTimeout(typingTimer);

    const enteredUsername = usernameField.value.trim();

    // Clear feedback if empty
    if (!enteredUsername) {
        feedbackBox.innerHTML = "";
        return;
    }

    // Wait 500ms after typing stops
    typingTimer = setTimeout(() => {
        validateUsername(enteredUsername);
    }, 500);
});


// Function to check username availability
function validateUsername(username) {

    feedbackBox.innerHTML = "<span class='loading'>Checking availability...</span>";

    fetch("users.json")
        .then(res => res.json())
        .then(usersData => {

            // Convert all usernames to lowercase for case-insensitive comparison
            const existingUsers = usersData.map(user => user.username.toLowerCase());
            const localUsers = newRegisteredUsers.map(user => user.toLowerCase());

            const allUsers = [...existingUsers, ...localUsers];

            if (allUsers.includes(username.toLowerCase())) {
                feedbackBox.innerHTML = 
                    "<span class='error'>❌ Username already exists</span>";
                usernameAvailable = false;
            } else {
                feedbackBox.innerHTML = 
                    "<span class='success'>✅ Username is available</span>";
                usernameAvailable = true;
            }
        })
        .catch(error => {
            console.error("Fetch error:", error);
            feedbackBox.innerHTML =
                "<span class='error'>⚠ Unable to verify username</span>";
        });
}


// Handle form submission
registerForm.addEventListener("submit", (event) => {

    event.preventDefault(); // No backend, so prevent default submit

    if (!usernameAvailable) {
        feedbackBox.innerHTML =
            "<span class='error'>Please select a valid username</span>";
        return;
    }

    const newUsername = usernameField.value.trim();

    // Save new username locally
    newRegisteredUsers.push(newUsername);

    feedbackBox.innerHTML =
        "<span class='success'>🎉 Registration completed successfully!</span>";

    usernameField.value = "";
    usernameAvailable = false;
});
