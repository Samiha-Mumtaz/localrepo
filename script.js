const Clock = document.getElementById("Clock");
setInterval(function(){
    let date = new Date();
    Clock.innerHTML = date.toLocaleTimeString();
}, 1000)


// if (dateInfo.getHours() == 0) {
//     hr = 12;
//   } else if (dateInfo.getHours() > 12) {
//     hr = dateInfo.getHours() - 12;
//   } else {
//     hr = dateInfo.getHours();
//   }