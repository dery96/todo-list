window.onload = ruchStrony;

function ruchStrony() {
  console.log('Ruch');
  document.getElementById('checkboxOneInput').onclick = zaznaczenieKat
}

function zaznaczenieKat() {
  if (document.getElementById('checkboxOneInput').checked) {
    console.log("wszedlem");
    kategoria = document.getElementById('katDom')
    kategoria.style.cssText = ('color: red')
  }
  else {
    kategoria.style.cssText = ('color: black')
  }
