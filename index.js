// This function sends a POST request to the server with name and email,
// then updates the DOM with the response ID or an error message.
function submitData(name, email) {
  // Return the fetch so the test can await it
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // We're sending JSON
      "Accept": "application/json"        // Expect JSON back
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
    .then(response => response.json()) // Convert the response to JSON
    .then(data => {
      // If successful, append the returned ID to the DOM
      const idElement = document.createElement("p");
      idElement.textContent = `ID: ${data.id}`;
      document.body.appendChild(idElement);
    })
    .catch(error => {
      // If there's an error (like 401 Unauthorized), display the error message
      const errorElement = document.createElement("p");
      errorElement.textContent = error.message;
      document.body.appendChild(errorElement);
    });
}

