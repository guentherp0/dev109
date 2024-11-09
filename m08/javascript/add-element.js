// Create a new element and store it in a variable.
var newEl = document.createElement('li');

// Create a text node and store it in a variable.
var newText = document.createTextNode('quinoa');

// Attach the new text node to the new element.
newEl.appendChild(newText);

// Find the position where the new element should be added.
var position = document.getElementsByTagName('ul')[0];

// Insert the new element into its position.
position.appendChild(newEl);

// Function to add a new item to the list
function addItem() {
    // Get the text from the input box
    var itemText = document.getElementById('itemInput').value;
    
    // If there's text, add it to the list
    if (itemText.trim() !== "") {
        // Create a new list item (li)
        var newItem = document.createElement('li');
        newItem.textContent = itemText;

        // Add the new item to the list (ul)
        document.getElementById('todo').appendChild(newItem);

        // Clear the text box after adding the item
        document.getElementById('itemInput').value = "";
    }
}
