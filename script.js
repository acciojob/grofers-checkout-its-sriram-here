const priceCells = document.querySelectorAll('.price');
let total = 0;
priceCells.forEach(cell => {
  total += Number(cell.textContent);
});
const totalRow = document.createElement('tr');
const totalCell = document.createElement('td');
totalCell.colSpan = 2;
totalCell.textContent = `Total Price: ${total}`;
totalRow.appendChild(totalCell);
document.querySelector('table').appendChild(totalRow);
