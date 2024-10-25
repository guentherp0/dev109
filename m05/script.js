var table = prompt('Enter a number');               // Unit of table
var i = 1;                                          // Set counter to 1
var msg = var msg = '<br />';                                       // Message


/*
// Do addition
while (i < 11) {
  msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
  i++;
}
*/

// Do multiplication
while (i < 11) {
  msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
  i++;
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
