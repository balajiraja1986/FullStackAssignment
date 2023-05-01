//create a div
const div = document.createElement("container");
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.alignItems = "center";
div.style.alignContent = "center";

// Create the table
const table = document.createElement('table');
const result = document.createElement('input');
result.type = 'text';
result.disabled = true;

// Add event listeners to the buttons
const buttonValues = [
  [7, 8, 9, '+'],
  [4, 5, 6, '-'],
  [1, 2, 3, '*'],
  ['C', 0, '=', '/'],
];

table.addEventListener('click', event => {
  const button = event.target;
  if (button.tagName === 'BUTTON') {
    const value = button.textContent;
    switch (value) {
      case 'C':
        result.value = '';
        break;
      case '=':
        try {
          const expressionResult = eval(result.value);
          result.value = expressionResult;
        } catch (error) {
          result.value = 'Error';
        }
        break;
      default:
        result.value += value;
    }
  }
});

// Create the table rows and buttons
for (const rowValues of buttonValues) {
  const row = document.createElement('tr');
  for (const value of rowValues) {
    const button = document.createElement('button');
    button.textContent = value;
    const cell = document.createElement('td');
    cell.appendChild(button);
    row.appendChild(cell);
  }
  table.appendChild(row);
}

// Add the table to the page

document.body.appendChild(result);
document.body.appendChild(table);
