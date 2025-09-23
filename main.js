// HTML Selectors
const mainForm = document.getElementById("main-form");
const outputDiv = document.getElementById("output");

// Get the variables of the inputs
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");

// Event Listener
mainForm.addEventListener('submit', function (event) {
  // Prevent the action from the form to refresh the page
  event.preventDefault();

  // Get the output
  outputDiv.innerHTML = `
    <p>My first name is: ${firstNameInput.value}</p>
    <p>My last name is: ${lastNameInput.value}</p>
  `

  outputDiv.style.display = 'block';

  // Clear the inputs
  firstNameInput.value = '';
  lastNameInput.value = '';
});
