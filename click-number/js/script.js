//ボタンを小さい順に押すと消えるプログラム
var next = 1;
document.remove = function (id) {
  if (id === next) {
    document.getElementById("main").removeChild(document.getElementById(/*ここに入るのは消したい番号*/id));
    next = next + 1;
  }
}

//1から10までのボタンをランダムな位置に配置する
for (var num = 9; num > 0; num--) {
  var elm = document.createElement("button");
  elm.innerHTML = num;
  elm.setAttribute("id", num);
  elm.setAttribute("class", "circle");
  elm.setAttribute("onclick", "remove(" + num + ")");
  document.getElementById("main").appendChild(elm);

//ランダムな位置に配置する
  var left_pos = 10;
  var top_pos = 100;
  left_pos = left_pos + Math.floor(Math.random() * 400);
  top_pos = top_pos + Math.floor(Math.random() * 600);
  document.getElementById(num).style.left = "" + left_pos + "px";
  document.getElementById(num).style.top = "" + top_pos + "px"
}