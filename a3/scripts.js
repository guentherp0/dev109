function createRhombus() {
      var height = parseInt(document.getElementById('height').value);
      var oddColor = document.getElementById('odd-color').value;
      var evenColor = document.getElementById('even-color').value;
      var symbol = document.getElementById('symbol').value;
      var rhombusContainer = document.getElementById('rhombus-output');

      rhombusContainer.innerHTML += height + oddColor + evenColor + symbol
