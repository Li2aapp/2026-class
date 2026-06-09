//ボタンを小さい順に押すと消えるプログラム
var next = 1;
document.remove = function (id) {
  if (id === next) {
    var button = document.getElementById(id);
    document.body.style.backgroundColor = button.style.backgroundColor;
    document.getElementById("main").removeChild(button);
    next = next + 1;
  }
}

function getRandomColor() {
  var hue = Math.floor(Math.random() * 360);
  return "hsl(" + hue + ", 80%, 70%)";
}

//1から10までのボタンをランダムな位置に配置する
for (var num = 9; num > 0; num--) {
  var elm = document.createElement("button");
  elm.innerHTML = num;
  elm.setAttribute("id", num);
  elm.setAttribute("class", "circle");
  elm.setAttribute("onclick", "remove(" + num + ")");
  elm.style.backgroundColor = getRandomColor();
  elm.style.color = "#000";
  document.getElementById("main").appendChild(elm);

  //ランダムな位置に配置する
  var left_pos = 10;
  var top_pos = 100;
  left_pos = left_pos + Math.floor(Math.random() * 400);
  top_pos = top_pos + Math.floor(Math.random() * 600);
  document.getElementById(num).style.left = "" + left_pos + "px";
  document.getElementById(num).style.top = "" + top_pos + "px"
}