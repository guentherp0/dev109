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
