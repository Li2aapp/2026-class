const resultText = document.getElementById('result');

document.getElementById('draw').addEventListener('click', function () {
  const omikujiResults = ['大吉', '中吉', '小吉', '末吉', '凶', '大凶'];
  const result = omikujiResults[
    Math.floor(Math.random() * omikujiResults.length)];

  resultText.textContent = `あなたの運勢は... ${result}!`;
  resultText.className = `result ${getResultClass(result)}`;
});

function getResultClass(result) {
  switch (result) {
    case '大吉':
      return 'daikichi';
    case '中吉':
      return 'chuukichi';
    case '小吉':
      return 'shoukichi';
    case '末吉':
      return 'suekichi';
    case '凶':
      return 'kyou';
    case '大凶':
      return 'daikyou';
    default:
      return '';
  }
}

