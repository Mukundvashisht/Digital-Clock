let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
setInterval(() => {
    

a = new Date();
let hr = ("0" + a.getHours()).slice(-2)
let min = ("0" + a.getMinutes()).slice(-2)
let sec = ("0" + a.getSeconds()).slice(-2)
date = a.toLocaleDateString('ENG', options);
time = hr + ':' + min + ':' + sec;
document.getElementById("time").innerHTML = time + ' on <br>' + date;
}, 1000);
