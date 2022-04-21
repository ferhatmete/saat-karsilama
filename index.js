let header = document.querySelector("#header");
let welcome = document.querySelector(".welcome");
let article = document.querySelector(".article");
let date = document.querySelector("#txt");

let name = prompt("İsminiz nedir?");
if (!name) {
  header.innerHTML = "Lütfen isminizi giriniz";
} else {
  welcome.innerHTML = `Merhaba ${name}`;
  article.innerHTML = `<b>tarihinde Kodluyoruz Front-End Developer Patikası'nın Javascript bölümü
  1.ödevindesiniz.</b>`;
  function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    date.innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }

  startTime();
  checkTime();

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
  }
}
