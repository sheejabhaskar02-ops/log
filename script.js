let credentials = JSON.parse(localStorage.getItem('credentials')) || [];

document.getElementById('login-btn').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulating GitHub API authentication (DO NOT USE IN PRODUCTION)
    if (username && password) {
        credentials.push({ username, password });
        localStorage.setItem('credentials', JSON.stringify(credentials));
        displayCredentials();
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
});

function displayCredentials() {
    const credentialsDiv = document.getElementById('credentials');
    credentialsDiv.innerHTML = '<h2>Saved Credentials:</h2>';
    credentials.forEach((cred, index) => {
        credentialsDiv.innerHTML += `<p>${index + 1}. ${cred.username} - ${cred.password}</p>`;
    });
}

displayCredentials();