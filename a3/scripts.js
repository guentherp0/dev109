function createRhombus() {
      var height = parseInt(document.getElementById('height').value);
      var oddColor = document.getElementById('odd-color').value;
      var evenColor = document.getElementById('even-color').value;
      var symbol = document.getElementById('symbol').value;
      var rhombusContainer = document.getElementById('rhombus-output');

      var txt = "";
      for (let i = 0; i < height; i++) {
            txt += symbol * i + "<br>";
      } 

      rhombusContainer.innerHTML = txt;

      console.log("ran")
}
