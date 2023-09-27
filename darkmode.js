// function setDarkMode(isDarkMode) {
//     if (isDarkMode) {
//       document.body.classList.add('dark-mode');
//       // Set a cookie to remember dark mode preference
//       document.cookie = "darkMode=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
//     } else {
//       document.body.classList.remove('dark-mode');
//       // Remove the dark mode cookie
//       document.cookie = "darkMode=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
//     }
//   }
  
//   function toggleDarkMode() {
//     const isDarkMode = document.body.classList.contains('dark-mode');
//     setDarkMode(!isDarkMode);
//   }
  
//   // Check if a dark mode cookie exists and set dark mode accordingly
//   const darkModeCookie = document.cookie.split('; ').find(row => row.startsWith('darkMode='));
//   if (darkModeCookie) {
//     const isDarkMode = darkModeCookie.split('=')[1] === 'true';
//     setDarkMode(isDarkMode);
//   }
// function setDarkMode(isDarkMode) {
//     if (isDarkMode) {
//       document.body.classList.add('dark-mode');
//       // Set a cookie to remember dark mode preference
//       document.cookie = "darkMode=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
//     } else {
//       document.body.classList.remove('dark-mode');
//       // Remove the dark mode cookie
//       document.cookie = "darkMode=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
//     }
//   }
  
//   function toggleDarkMode() {
//     const isDarkMode = document.body.classList.contains('dark-mode');
//     setDarkMode(!isDarkMode);
//   }
  
//   // Check if a dark mode cookie exists and set dark mode accordingly
//   const darkModeCookie = document.cookie.split('; ').find(row => row.startsWith('darkMode='));
//   if (darkModeCookie) {
//     const isDarkMode = darkModeCookie.split('=')[1] === 'true';
//     setDarkMode(isDarkMode);
//   }

// function setDarkMode(isDarkMode) {
//   const body = document.body;
//   const usernameInput = document.getElementById('username');
//   const passwordInput = document.getElementById('password');

//   if (isDarkMode) {
//     body.classList.add('dark-mode');
//     usernameInput.style.backgroundColor = 'black';
//     passwordInput.style.backgroundColor = 'black';
//     usernameInput.style.color = 'white';
//     passwordInput.style.color = 'white';
//     usernameInput.placeholder = 'Username';
//     passwordInput.placeholder = 'Password';
//   } else {
//     body.classList.remove('dark-mode');
//     usernameInput.style.backgroundColor = 'white';
//     passwordInput.style.backgroundColor = 'white';
//     usernameInput.style.color = 'black';
//     passwordInput.style.color = 'black';
//     usernameInput.placeholder = 'Username';
//     passwordInput.placeholder = 'Password';
//   }

//   // Store dark mode preference in a cookie
//   document.cookie = `darkMode=${isDarkMode}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
// }



// function toggleDarkMode() {
//   const isDarkMode = document.body.classList.contains('dark-mode');
//   setDarkMode(!isDarkMode);
// }

// // Check if a dark mode cookie exists and set dark mode accordingly
// const darkModeCookie = document.cookie.split('; ').find(row => row.startsWith('darkMode='));
// if (darkModeCookie) {
//   const isDarkMode = darkModeCookie.split('=')[1] === 'true';
//   setDarkMode(isDarkMode);
// }

function setDarkMode(isDarkMode) {
  const body = document.body;
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  if (isDarkMode) {
    body.classList.add('dark-mode');
    document.getElementById("login-form").style.backgroundColor = "rgb(50, 50, 50)";
    document.getElementById("index-page").style.backgroundColor = "black";
    document.getElementById("index-page").style.color = "white";
    usernameInput.style.backgroundColor = 'black';
    passwordInput.style.backgroundColor = 'black';
    usernameInput.style.color = 'white';
    passwordInput.style.color = 'white';
    usernameInput.placeholder = 'Username';
    passwordInput.placeholder = 'Password';
    // Store dark mode preference in a cookie
    document.cookie = 'darkMode=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
  } else {
    body.classList.remove('dark-mode');
    document.getElementById("login-form").style.backgroundColor = "rgb(205, 205, 205)";
    document.getElementById("index-page").style.backgroundColor = "white";
    document.getElementById("index-page").style.color = "black";
    usernameInput.style.backgroundColor = 'white';
    passwordInput.style.backgroundColor = 'white';
    usernameInput.style.color = 'black';
    passwordInput.style.color = 'black';
    usernameInput.placeholder = 'Username';
    passwordInput.placeholder = 'Password';
    // Store dark mode preference in a cookie
    document.cookie = 'darkMode=false; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
  }
}

// Function to toggle dark mode
function toggleDarkMode() {
  const isDarkMode = document.body.classList.contains('dark-mode');
  setDarkMode(!isDarkMode);
}

// Function to check for dark mode preference in a cookie
function checkDarkModeCookie() {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [name, value] = cookie.split('=');
    if (name === 'darkMode') {
      const isDarkMode = value === 'true'; 
      setDarkMode(isDarkMode);
      break;
    }
  }
}

// Call checkDarkModeCookie when the page loads
window.addEventListener('DOMContentLoaded', () => {
  checkDarkModeCookie();
});
