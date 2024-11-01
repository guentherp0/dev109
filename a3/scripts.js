function createRhombus() {
      var height = parseInt(document.getElementById('height').value);
      var oddColor = document.getElementById('odd-color').value;
      var evenColor = document.getElementById('even-color').value;
      var symbol = document.getElementById('symbol').value;
      var rhombusContainer = document.getElementById('rhombus-output');

      var txt = "";
      for (var i = 0; i < height; i++) {
            for (var j = 0; j < -(i - height + 1); j++){
                  txt += symcol(" ", "white");
            }
            for (var j = 0; j <= i; j++){
                  var color = j % 2 ? evenColor : oddColor;
                  txt += symcol(symbol, color);
            }
            txt += " "
            for (var j = 0; j <= i; j++){
                  var color = j % 2 ? evenColor : oddColor;
                  txt += symcol(symbol, color);
            }
            for (var j = 0; j < -(i - height + 1); j++){
                  txt += symcol(" ", "white");
            }
            txt += "<br>"
      } 
      txt += "<br>"
      for (var i = height - 1; i >= 0; i--) {
            for (var j = 0; j < -(i - height + 1); j++){
                  txt += symcol(" ", "white");
            }
            for (var j = 0; j <= i; j++){
                  var color = j % 2 ? evenColor : oddColor;
                  txt += symcol(symbol, color);
            }
            txt += " "
            for (var j = 0; j <= i; j++){
                  var color = j % 2 ? evenColor : oddColor;
                  txt += symcol(symbol, color);
            }
            for (var j = 0; j < -(i - height + 1); j++){
                  txt += symcol(" ", "white");
            }
            txt += "<br>"
      } 

      rhombusContainer.innerHTML = txt;
}

function symcol(sym, col) {
      return "<span style=\"color: " + col + "\">" + sym + "</span>"
}
