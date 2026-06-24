#  UNIT 54 EXERCISE - Item Collector
Fork and clone : https://github.com/londeka-z/Revision-day-3
## **What You're Building:**

A basic item list where you:
- **Add items** with a value
- **Use array methods** to filter/sort/analyze
- **See stats** calculated from the array
---

## **HTML Starter: Paste relevant code to relevant files**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Item Collector</title>
  <style>
    body {
      font-family: Arial;
      max-width: 500px;
      margin: 50px auto;
      padding: 20px;
      background: #f5f5f5;
    }

    input {
      padding: 10px;
      width: 200px;
      margin-right: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }

    button {
      padding: 10px 20px;
      background: #667eea;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover { background: #764ba2; }

    #itemList {
      background: white;
      padding: 20px;
      margin: 20px 0;
      border-radius: 5px;
      min-height: 100px;
    }

    .item {
      padding: 8px;
      border-bottom: 1px solid #eee;
    }

    #stats {
      background: white;
      padding: 20px;
      border-radius: 5px;
      margin-top: 20px;
    }

    .stat { margin: 10px 0; }
  </style>
</head>
<body>
  <h1>📝 Item Collector</h1>

  <div>
    <input type="text" id="itemName" placeholder="Item name">
    <input type="number" id="itemValue" placeholder="Value">
    <button id="addBtn">Add Item</button>
    <button id="clearBtn">Clear All</button>
  </div>

  <div>
    <button id="filterHighBtn">Show High Value (>50)</button>
    <button id="sortBtn">Sort by Value</button>
    <button id="showAllBtn">Show All</button>
  </div>

  <div id="itemList">
    No items yet. Add one above!
  </div>

  <div id="stats">
    <div class="stat"><strong>Total Items:</strong> <span id="total">0</span></div>
    <div class="stat"><strong>Total Value:</strong> <span id="totalVal">0</span></div>
    <div class="stat"><strong>Average Value:</strong> <span id="avgVal">0</span></div>
    <div class="stat"><strong>Highest Value:</strong> <span id="maxVal">0</span></div>
  </div>

  <script>
    let items = [];
    let displayedItems = [];

    function addItem() {
      // TODO 1: Get name and value from inputs
      // TODO 2: Validate both are filled
      // TODO 3: Create object: { name, value }
      // TODO 4: Push to items array
      // TODO 5: Clear inputs
      // TODO 6: Call showAll()
    }

    function showAll() {
      // TODO: Set displayedItems = items (show everything)
      // Call display()
    }

    function filterHigh() {
      // TODO: Use .filter() to keep only items with value > 50
      // displayedItems = items.filter(item => item.value > 50)
      // Call display()
    }

    function sortByValue() {
      // TODO: Use .sort() to arrange by value (highest first)
      // displayedItems = items.sort((a, b) => b.value - a.value)
      // Call display()
    }

    function display() {
      // TODO: Show all items in displayedItems
      // Loop through and add to HTML
      // Format: "Item Name - Value"
      
      // Hint: Create a string and set it as innerHTML
      // Or loop through and create each item as text

      updateStats();
    }

    function updateStats() {
      // TODO: Calculate stats from ORIGINAL items array
      // Total items: items.length
      // Total value: items.reduce((sum, item) => sum + item.value, 0)
      // Average: totalValue / items.length
      // Highest: items.reduce((max, item) => item.value > max ? item.value : max, 0)
      
      // Update the HTML spans with these values
    }

    function clearAll() {
      // TODO: Empty items array
      // Call showAll()
    }

    // Connect buttons

  </script>
</body>
</html>
```

---

Submit repository link 
