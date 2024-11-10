// function to add a new item to the list
function addItem() {
    // get the text from the input box
    var itemText = document.getElementById('itemInput').value;
    
    // if there's text, add it to the list
    if (itemText.trim() !== "") {
        // Create a new list item (li)
        var newItem = document.createElement('li');
        newItem.textContent = itemText;

        // add the new item to the list (ul)
        document.getElementById('todo').appendChild(newItem);

        // Extra Credit: clear the text box after adding the item
        document.getElementById('itemInput').value = "";
    }
}
