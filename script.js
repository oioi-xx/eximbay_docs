<script>
function copyToClipboard(val) {
var t = document.createElement("textarea");
document.body.appendChild(t);
t.value = val;
t.select();
document.execCommand('copy');
document.body.removeChild(t);
}

$('#copybtn1').click(function() {
  copyToClipboard('https://manition.tistory.com/');
  alert('주소를 복사하였습니다');
});

$('#copybtn2').click(function() {
  var textCopy = '청춘이 청춘의 방지하는 보이는 주는 가는 곳이 힘있다. 생생하며, 과실이 열락의 주는 예수는 스며들어 이것을 것이다. 크고 우리 보이는 희망의 아름다우냐? 공자는 가진 풍부하게 철환하였는가? 아니한 얼마나 새 만천하의 심장의 사막이다. 과실이 그들은 봄바람을 있는 많이 무엇이 때까지 풀이 이상 위하여서. 타오르고 그들의 얼마나 것이 보이는 트고, 방황하였으며, 약동하다. 든 위하여, 우리 칼이다. 인생을 얼음 가는 않는 우리의 부패뿐이다. 그러므로 힘차게 때까지 바로 이상, 품에 약동하다. 그와 방황하여도, 것은 더운지라 가치를 천자만홍이 무엇을 열락의 보는 끓는다.'
  copyToClipboard(textCopy);
  alert('글을 복사하였습니다');
});
</script>