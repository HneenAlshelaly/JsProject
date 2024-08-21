let hrs = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');


setInterval(() => {
let currnetTime = new Date();
hrs.innerHTML = (currnetTime.getHours() < 10 ? '0' : "") + currnetTime.getHours();
min.innerHTML = (currnetTime.getMinutes() < 10 ? '0' : "") + currnetTime.getMinutes();
sec.innerHTML = (currnetTime.getSeconds() < 10 ? '0' : "") + currnetTime.getSeconds();
}, 1000);