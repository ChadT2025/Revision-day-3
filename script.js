const addInput = document.getElementById("addBtn")
const clearInput = document.getElementById("clearBtn")
const filterInput = document.getElementById("filterHighBtn")
const sortInput = document.getElementById("sortBtn")
const showInput = document.getElementById("showAllBtn")
const itemListInput = document.getElementById("itemList")
const itemStatsInput = document.getElementById("stats")
const itemName = document.getElementById("itemName")
const itemValue = document.getElementById("itemValue")

let items = [];
let displayedItems = [];

// Hook up buttons to their functions
addInput.addEventListener("click", addItem);
clearInput.addEventListener("click", clearAll);
filterInput.addEventListener("click", filterHigh);
sortInput.addEventListener("click", sortByValue);
showInput.addEventListener("click", showAll);

function addItem() {
  // TODO 1: Get name and value from inputs
  let name = itemName.value;
  let value = itemValue.value;

  // TODO 2: Validate both are filled
  if (name === "" || value === "") {
    alert("Please fill in both fields!");
    return;
  }

  // TODO 3: Create object { name, value }
  let newItem = { name: name, value: Number(value) };

  // TODO 4: Push to items array
  items.push(newItem);

  // TODO 5: Clear inputs
  itemName.value = "";
  itemValue.value = "";

  // TODO 6: Call showAll()
  showAll();
}

function showAll() {
  // TODO: Set displayedItems = items (show everything)
  displayedItems = items;

  // Call display()
  display();
}

function filterHigh() {
  // TODO: Use .filter() to keep only items with value > 50
  displayedItems = items.filter(item => item.value > 50);

  // Call display()
  display();
}

function sortByValue() {
  // TODO: Use .sort() to arrange by value (highest first)
  displayedItems = items.sort((a, b) => b.value - a.value);

  // Call display()
  display();
}

function display() {
  // TODO: Show all items in displayedItems
  // Loop through and add to HTML
  // Format: "Item Name - Value"
  if (displayedItems.length === 0) {
    itemListInput.innerHTML = "No items yet. Add one above!";
  } else {
    let html = "";
    displayedItems.forEach(item => {
      html += "<div>" + item.name + " - " + item.value + "</div>";
    });
    itemListInput.innerHTML = html;
  }

  updateStats();
}

function updateStats() {
  // TODO: Calculate stats from ORIGINAL items array
  // Total items: items.length
  let totalItems = items.length;

  // Total value: items.reduce((sum, item) => sum + item.value, 0)
  let totalValue = items.reduce((sum, item) => sum + item.value, 0);

  // Average: totalValue / items.length
  let averageValue = totalItems === 0 ? 0 : totalValue / totalItems;

  // Highest: items.reduce((max, item) => item.value > max ? item.value : max, 0)
  let highestValue = items.reduce((max, item) => item.value > max ? item.value : max, 0);

  // Update the HTML spans with these values
  document.getElementById("total").textContent = totalItems;
  document.getElementById("totalVal").textContent = totalValue;
  document.getElementById("avgVal").textContent = averageValue;
  document.getElementById("maxVal").textContent = highestValue;
}

function clearAll() {
  // TODO: Empty items array
  items = [];

  // Call showAll()
  showAll();
}
