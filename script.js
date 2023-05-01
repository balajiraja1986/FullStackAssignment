const form = document.getElementById('myForm');
const table = document.getElementById('myTable');

// Create form fields
const firstNameLabel = document.createElement('label');
firstNameLabel.setAttribute('for', 'firstName');
firstNameLabel.textContent = 'First Name:';
form.appendChild(firstNameLabel);

const firstNameInput = document.createElement('input');
firstNameInput.setAttribute('type', 'text');
firstNameInput.setAttribute('id', 'firstName');
firstNameInput.setAttribute('name', 'firstName');
firstNameInput.setAttribute('required', '');
form.appendChild(firstNameInput);

const lastNameLabel = document.createElement('label');
lastNameLabel.setAttribute('for', 'lastName');
lastNameLabel.textContent = 'Last Name:';
form.appendChild(lastNameLabel);

const lastNameInput = document.createElement('input');
lastNameInput.setAttribute('type', 'text');
lastNameInput.setAttribute('id', 'lastName');
lastNameInput.setAttribute('name', 'lastName');
lastNameInput.setAttribute('required', '');
form.appendChild(lastNameInput);

const addressLabel = document.createElement('label');
addressLabel.setAttribute('for', 'address');
addressLabel.textContent = 'Address:';
form.appendChild(addressLabel);

const addressInput = document.createElement('input');
addressInput.setAttribute('type', 'text');
addressInput.setAttribute('id', 'address');
addressInput.setAttribute('name', 'address');
addressInput.setAttribute('required', '');
form.appendChild(addressInput);

const pincodeLabel = document.createElement('label');
pincodeLabel.setAttribute('for', 'pincode');
pincodeLabel.textContent = 'Pincode:';
form.appendChild(pincodeLabel);

const pincodeInput = document.createElement('input');
pincodeInput.setAttribute('type', 'text');
pincodeInput.setAttribute('id', 'pincode');
pincodeInput.setAttribute('name', 'pincode');
pincodeInput.setAttribute('required', '');
form.appendChild(pincodeInput);

const genderLabel = document.createElement('label');
genderLabel.textContent = 'Gender:';
form.appendChild(genderLabel);

const maleRadio = document.createElement('input');
maleRadio.setAttribute('type', 'radio');
maleRadio.setAttribute('id', 'Male');
maleRadio.setAttribute('name', 'gender');
maleRadio.setAttribute('value', 'Male');
maleRadio.setAttribute('required', '');
const maleLabel = document.createElement('label');
maleLabel.setAttribute('for', 'Male');
maleLabel.textContent = 'Male';
form.appendChild(maleRadio);
form.appendChild(maleLabel);

const femaleRadio = document.createElement('input');
femaleRadio.setAttribute('type', 'radio');
femaleRadio.setAttribute('id', 'Female');
femaleRadio.setAttribute('name', 'gender');
femaleRadio.setAttribute('value', 'Female');
femaleRadio.setAttribute('required', '');
const femaleLabel = document.createElement('label');
femaleLabel.setAttribute('for', 'Female');
femaleLabel.textContent = 'Female';
form.appendChild(femaleRadio);
form.appendChild(femaleLabel);

const foodLabel = document.createElement('label');
foodLabel.textContent = 'Food:';
form.appendChild(foodLabel);

const foodSelect = document.createElement('select');
foodSelect.setAttribute('id', 'food');
foodSelect.setAttribute('name', 'food');
foodSelect.setAttribute('required', '');

const foodOptions = ['Pizza', 'Burger', 'Tacos', 'Nachos', 'Curry'];

for (let i = 0; i < foodOptions.length; i++) {
    const foodOption = document.createElement('option');
    foodOption.setAttribute('value', foodOptions[i]);
    foodOption.textContent = foodOptions[i];
    foodSelect.appendChild(foodOption);
}

form.appendChild(foodSelect);

const stateLabel = document.createElement('label');
stateLabel.setAttribute('for', 'state');
stateLabel.textContent = 'State:';
form.appendChild(stateLabel);

const stateInput = document.createElement('input');
stateInput.setAttribute('type', 'text');
stateInput.setAttribute('id', 'state');
stateInput.setAttribute('name', 'state');
stateInput.setAttribute('required', '');
form.appendChild(stateInput);

//Create Country***** ///// 
const countryNameLabel = document.createElement('label');
countryNameLabel.setAttribute('for', '');
countryNameLabel.textContent = 'Country:';
form.appendChild(countryNameLabel);

const countryNameInput = document.createElement('input');
countryNameInput.setAttribute('type', 'text');
countryNameInput.setAttribute('id', 'country');
countryNameInput.setAttribute('name', 'country');
countryNameInput.setAttribute('required', '');
form.appendChild(countryNameInput);

// Create submit button
const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';
form.appendChild(submitButton);

// Create table headers
const tableHeaders = ['First Name', 'Last Name', 'Address', 'Pincode', 'Gender', 'Food', 'State','Country'];

const tableHead = document.createElement('thead');
const tableHeadRow = document.createElement('tr');

for (let i = 0; i < tableHeaders.length; i++) {
const tableHeader = document.createElement('th');
tableHeader.textContent = tableHeaders[i];
tableHeadRow.appendChild(tableHeader);
}

tableHead.appendChild(tableHeadRow);
table.appendChild(tableHead);

// Handle form submission
form.addEventListener('submit', (event) => {
event.preventDefault(); // Prevent form from submitting

// Create table row
const tableRow = document.createElement('tr');

// Add first name cell
const firstNameCell = document.createElement('td');
firstNameCell.textContent = firstNameInput.value;
tableRow.appendChild(firstNameCell);

// Add last name cell
const lastNameCell = document.createElement('td');
lastNameCell.textContent = lastNameInput.value;
tableRow.appendChild(lastNameCell);

// Add address cell
const addressCell = document.createElement('td');
addressCell.textContent = addressInput.value;
tableRow.appendChild(addressCell);

// Add pincode cell
const pincodeCell = document.createElement('td');
pincodeCell.textContent = pincodeInput.value;
tableRow.appendChild(pincodeCell);

// Add gender cell
const genderCell = document.createElement('td');
genderCell.textContent = document.querySelector('input[name="gender"]:checked').value;
tableRow.appendChild(genderCell);

// Add food cell
const foodCell = document.createElement('td');
foodCell.textContent = document.getElementById('food').value;
tableRow.appendChild(foodCell);

// Add state cell
const stateCell = document.createElement('td');
stateCell.textContent = stateInput.value;
tableRow.appendChild(stateCell);

// Add country cell
const countryCell = document.createElement('td');
countryCell.textContent = countryNameInput.value;
tableRow.appendChild(countryCell);

// Append row to table
table.appendChild(tableRow);

// Reset form
form.reset();

});

document.body.appendChild(form);
document.body.appendChild(table);