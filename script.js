const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".price");
  let total = 0;
  prices.forEach(priceEl => {
    total += Number(priceEl.innerText);
  });

  const table = document.querySelector("table");
  const existingTotalRow = document.querySelector(".total-row");
  if (existingTotalRow) {
    existingTotalRow.remove();
  }

  const totalRow = document.createElement("tr");
  totalRow.classList.add("total-row");

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.style.fontWeight = "bold";
  totalCell.innerText = `Total Price: Rs ${total}`;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
