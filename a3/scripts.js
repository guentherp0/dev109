function createRhombus() {
      var height = parseInt(document.getElementById('height').value);
      var oddColor = document.getElementById('odd-color').value;
      var evenColor = document.getElementById('even-color').value;
      var symbol = document.getElementById('symbol').value;
      var rhombusContainer = document.getElementById('rhombus-output');

      var txt = "";
      for (let i = 0; i < height; i++) {
            for (let j = 0; j < -(i - height + 1); j++){
                  txt += symcol(symbol, "white");
            }
            for (let j = 0; j <= i; j++){
                  txt += symcol(symbol, oddColor);
            }
            txt += " "
            for (let j = 0; j <= i; j++){
                  txt += symcol(symbol, oddColor);
            }
            for (let j = 0; j < -(i - height + 1); j++){
                  txt += symcol(symbol, "white");
            }
            txt += "<br>"
      } 
      txt += " "
      for (let i = height - 1; i >= 0; i--) {
            for (let j = 0; j < -(i - height + 1); j++){
                  txt += symcol(symbol, "white");
            }
            for (let j = 0; j <= i; j++){
                  txt += symcol(symbol, oddColor);
            }
            for (let j = 0; j <= i; j++){
                  txt += symcol(symbol, oddColor);
            }
            for (let j = 0; j < -(i - height + 1); j++){
                  txt += symcol(symbol, "white");
            }
            txt += "<br>"
      } 

      rhombusContainer.innerHTML = txt;
}

function symcol(sym, col) {
      return "<span style=\"color: " + col + "\">" + sym + "</span>"
}
